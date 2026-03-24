// ──────────────────────────────────────────────────────────────
//  FarmDirect – db.js  (Supabase async data layer)
//  Replaces the static data.js + localStorage approach.
//  Depends on: js/supabase-config.js  (loaded first)
// ──────────────────────────────────────────────────────────────

// ── Supabase client ───────────────────────────────────────────
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

// ──────────────────────────────────────────────────────────────
//  FARMERS
// ──────────────────────────────────────────────────────────────
async function getAllFarmers() {
  const { data, error } = await db.from('farmers').select('*').order('rating', { ascending: false });
  if (error) { console.error('getAllFarmers:', error); return []; }
  return data;
}

async function getFarmer(id) {
  const { data, error } = await db.from('farmers').select('*').eq('id', id);
  if (error) { console.error('getFarmer:', error); return null; }
  return data && data.length > 0 ? data[0] : null;
}

// ──────────────────────────────────────────────────────────────
//  PRODUCTS
// ──────────────────────────────────────────────────────────────
async function getProducts(filters = {}) {
  let query = db.from('products').select('*, farmers(*)');

  if (filters.category && filters.category !== 'All') {
    query = query.eq('category', filters.category);
  }
  if (filters.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }
  if (filters.maxPrice) {
    query = query.lte('price', filters.maxPrice);
  }

  // Sorting
  if (filters.sort === 'price-asc')  query = query.order('price', { ascending: true });
  else if (filters.sort === 'price-desc') query = query.order('price', { ascending: false });
  else query = query.order('rating', { ascending: false }); // default: top rated

  const { data, error } = await query;
  if (error) { console.error('getProducts:', error); return []; }
  return data;
}

async function getProduct(id) {
  const { data, error } = await db.from('products').select('*, farmers(*)').eq('id', id).single();
  if (error) { console.error('getProduct:', error); return null; }
  return data;
}

async function getFarmerProducts(farmerId) {
  const { data, error } = await db.from('products').select('*').eq('farmer_id', farmerId).order('rating', { ascending: false });
  if (error) { console.error('getFarmerProducts:', error); return []; }
  return data;
}

async function addProduct(product) {
  const { data, error } = await db.from('products').insert([product]).select();
  if (error) { console.error('addProduct:', error); return null; }
  return data && data.length ? data[0] : null;
}

async function deleteProduct(id) {
  const { error } = await db.from('products').delete().eq('id', id);
  if (error) { console.error('deleteProduct:', error); return false; }
  return true;
}

async function ensureFarmerRecord(user) {
  if (!user || user.user_metadata?.role !== 'farmer') return null;
  const farmerId = user.id;
  // Check if farmer exists
  const existing = await getFarmer(farmerId);
  if (existing) return existing;
  
  // Create farmer record
  const newFarmer = {
    id: farmerId,
    name: user.user_metadata?.name || 'New Farmer',
    location: user.user_metadata?.location || 'India',
    since: new Date().getFullYear(),
    rating: 0,
    reviews: 0,
    bio: 'Newly registered farmer on FarmDirect.'
  };
  const { data, error } = await db.from('farmers').insert([newFarmer]).select();
  if (error) { console.error('ensureFarmerRecord:', error); return null; }
  return data && data.length ? data[0] : null;
}

// ──────────────────────────────────────────────────────────────
//  REVIEWS
// ──────────────────────────────────────────────────────────────
async function getReviews(productId) {
  const { data, error } = await db
    .from('reviews')
    .select('*')
    .eq('product_id', productId)
    .order('created_at', { ascending: false });
  if (error) { console.error('getReviews:', error); return []; }
  return data;
}

async function submitReview({ productId, userName, rating, text }) {
  const { data, error } = await db.from('reviews').insert([{
    product_id: productId,
    user_name:  userName,
    rating,
    text,
  }]).select().single();
  if (error) { console.error('submitReview:', error); return null; }

  // Update product's avg rating in DB
  const allReviews = await getReviews(productId);
  const avg = allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length;
  await db.from('products').update({
    rating:       +avg.toFixed(2),
    rating_count: allReviews.length,
  }).eq('id', productId);

  return data;
}

// ──────────────────────────────────────────────────────────────
//  ORDERS
// ──────────────────────────────────────────────────────────────
async function placeOrder({ name, phone, address, slot, payment, items, total }) {
  const orderId = 'FD' + Date.now().toString().slice(-8);

  // Insert order
  const { error: orderError } = await db.from('orders').insert([{
    id: orderId, name, phone, address, slot, payment, total,
    current_step: 0,
    user_email: Auth.getUser()?.email || null,
  }]);
  if (orderError) { console.error('placeOrder:', orderError); return null; }

  // Insert order items
  const orderItems = items.map(i => ({
    order_id:   orderId,
    product_id: i.productId,
    qty:        i.qty,
    price:      i.price,
  }));
  const { error: itemsError } = await db.from('order_items').insert(orderItems);
  if (itemsError) { console.error('placeOrder items:', itemsError); }

  return orderId;
}

async function getOrder(orderId) {
  const { data, error } = await db
    .from('orders')
    .select('*, order_items(*, products(name, image))')
    .eq('id', orderId)
    .single();
  if (error) { console.error('getOrder:', error); return null; }
  return data;
}

async function getUserOrders(email) {
  const { data, error } = await db
    .from('orders')
    .select('id, placed_at, total, current_step')
    .eq('user_email', email)
    .order('placed_at', { ascending: false })
    .limit(5);
  if (error) { console.error('getUserOrders:', error); return []; }
  return data;
}

// ──────────────────────────────────────────────────────────────
//  AUTH (Supabase Auth)
// ──────────────────────────────────────────────────────────────
const Auth = {
  async signUp(email, password, meta = {}) {
    const { data, error } = await db.auth.signUp({ email, password, options: { data: meta } });
    return { data, error };
  },
  async signIn(email, password) {
    const { data, error } = await db.auth.signInWithPassword({ email, password });
    return { data, error };
  },
  async signInWithGoogle() {
    const { data, error } = await db.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/index.html' }
    });
    if (error) console.error('Google login error:', error);
    return { data, error };
  },
  async signOut() {
    await db.auth.signOut();
    window.location.href = 'auth.html';
  },
  getUser() {
    // Sync helper – works because Supabase caches session in localStorage
    const session = db.auth.session?.() || null;
    if (session) return session.user;
    // Fallback for pages that load before session resolves
    const raw = localStorage.getItem('sb-' + SUPABASE_URL.split('//')[1].split('.')[0] + '-auth-token');
    if (!raw) return null;
    try { return JSON.parse(raw)?.user || null; } catch { return null; }
  },
  async getSession() {
    const { data } = await db.auth.getSession();
    return data?.session || null;
  },
  isLoggedIn() { return !!this.getUser(); },
};

// ──────────────────────────────────────────────────────────────
//  CART  (still localStorage – fast, no auth required)
// ──────────────────────────────────────────────────────────────
const Cart = {
  get()      { return JSON.parse(localStorage.getItem('fd_cart') || '[]'); },
  save(items){ localStorage.setItem('fd_cart', JSON.stringify(items)); dispatchEvent(new Event('cartUpdated')); },
  add(pid, qty = 1) {
    const items = this.get();
    const idx   = items.findIndex(i => i.productId === pid);
    if (idx > -1) items[idx].qty += qty;
    else          items.push({ productId: pid, qty });
    this.save(items);
  },
  remove(pid) { this.save(this.get().filter(i => i.productId !== pid)); },
  update(pid, qty) {
    const items = this.get();
    const idx   = items.findIndex(i => i.productId === pid);
    if (idx > -1) { if (qty < 1) items.splice(idx, 1); else items[idx].qty = qty; this.save(items); }
  },
  clear()  { this.save([]); },
  count()  { return this.get().reduce((s, i) => s + i.qty, 0); },
};

// ──────────────────────────────────────────────────────────────
//  Helpers
// ──────────────────────────────────────────────────────────────
function renderStars(rating) {
  return [1, 2, 3, 4, 5].map(i =>
    `<span class="star ${i <= Math.floor(rating) ? 'filled' : i - 0.5 <= rating ? 'half' : ''}">★</span>`
  ).join('');
}

function showToast(msg, type = '') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<i class="fa ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${msg}`;
  const container = document.getElementById('toast-container');
  if (container) container.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'slideOutRight 0.3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

function updateCartBadge() {
  const count = Cart.count();
  document.querySelectorAll('#navCartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ──────────────────────────────────────────────────────────────
//  Update Navigation Auth UI
// ──────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', async () => {
  // Check if session exists
  const { data } = await db.auth.getSession();
  const user = data?.session?.user;
  
  if (user) {
    // If user is already logged in and on auth.html, redirect to home
    if (window.location.pathname.includes('auth.html')) {
      window.location.replace('index.html');
      return;
    }

    // Change "Sign In" links to User Profile / Logout
    const authLinks = document.querySelectorAll('a[href="auth.html"]');
    const firstName = user.user_metadata?.name?.split(' ')[0] || 'Profile';
    
    authLinks.forEach(link => {
      if (user.user_metadata?.role === 'farmer') {
        link.innerHTML = `<i class="fa fa-user-circle"></i> ${firstName} <span style="font-size:0.75rem;margin-left:4px;opacity:0.8;">(Dashboard)</span>`;
        link.href = 'farmer-dashboard.html';
        link.onclick = null; // Let it navigate to dashboard
      } else {
        link.innerHTML = `<i class="fa fa-user-circle"></i> ${firstName} <span style="font-size:0.75rem;margin-left:4px;opacity:0.8;">(Logout)</span>`;
        link.href = '#';
        link.onclick = async (e) => {
          e.preventDefault();
          await Auth.signOut();
          window.location.reload();
        };
      }
    });
  }
});
