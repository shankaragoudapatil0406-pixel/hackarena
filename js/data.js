// ──────────────────────────────────────────────
//  FarmDirect – Seed Data
// ──────────────────────────────────────────────

const FARMERS = [
  { id:'f1', name:'Rajesh Kumar',    location:'Nashik, Maharashtra',    rating:4.9, reviews:312, since:2015, avatar:'https://i.pravatar.cc/150?img=11', bio:'Third-generation farmer specialising in organic vegetables. My family has farmed this land for over 60 years.',  certified:['Organic','PGS-India'] },
  { id:'f2', name:'Priya Devi',      location:'Coimbatore, Tamil Nadu', rating:4.8, reviews:278, since:2017, avatar:'https://i.pravatar.cc/150?img=20', bio:'Passionate about bringing the freshest tropical fruits from my orchard directly to your table.',             certified:['Organic'] },
  { id:'f3', name:'Suresh Patel',    location:'Anand, Gujarat',         rating:4.7, reviews:195, since:2016, avatar:'https://i.pravatar.cc/150?img=33', bio:'Dairy farmer with a herd of 40 cows. All milk products are 100% natural with no additives.',                 certified:['FSSAI','Organic'] },
  { id:'f4', name:'Anita Sharma',    location:'Ludhiana, Punjab',       rating:4.8, reviews:241, since:2014, avatar:'https://i.pravatar.cc/150?img=47', bio:'Specialising in premium quality wheat, rice, and pulses. Proud to practice zero-chemical farming.',          certified:['PGS-India'] },
  { id:'f5', name:'Mohammed Rafiq',  location:'Raichur, Karnataka',     rating:4.6, reviews:163, since:2018, avatar:'https://i.pravatar.cc/150?img=57', bio:'Speciality herb and spice grower. Every plant is hand-tended and harvested at peak flavour.',                certified:['Organic'] },
  { id:'f6', name:'Lakshmi Nair',    location:'Thrissur, Kerala',       rating:4.9, reviews:299, since:2013, avatar:'https://i.pravatar.cc/150?img=44', bio:'Kerala spices and coconut products. Our plantation has been certified organic for over 10 years.',           certified:['Organic','Fair Trade'] },
  { id:'f7', name:'Vijay Reddy',     location:'Kurnool, Andhra Pradesh',rating:4.7, reviews:188, since:2016, avatar:'https://i.pravatar.cc/150?img=60', bio:'Expert in dry-land farming. Produces the finest black pepper and chilli varieties.',                         certified:['PGS-India'] },
  { id:'f8', name:'Sunita Yadav',    location:'Patna, Bihar',           rating:4.5, reviews:142, since:2019, avatar:'https://i.pravatar.cc/150?img=45', bio:'Young farmer using modern techniques alongside traditional wisdom to grow leafy greens and root vegetables.', certified:['Organic'] },
  { id:'f9', name:'Harpreet Singh',  location:'Amritsar, Punjab',       rating:4.8, reviews:267, since:2015, avatar:'https://i.pravatar.cc/150?img=13', bio:'Producing high-quality basmati rice and wheat on 50 acres of ancestral farmland.',                         certified:['APEDA','PGS-India'] },
  { id:'f10',name:'Deepa Krishnan', location:'Mysore, Karnataka',       rating:4.6, reviews:175, since:2017, avatar:'https://i.pravatar.cc/150?img=32', bio:'Flower and vegetable farmer. Brings colour and nutrition directly from our fields to your home.',             certified:['Organic'] },
];

const PRODUCTS = [
  // Vegetables
  { id:'p1',  farmerId:'f1',  name:'Organic Tomatoes',        category:'Vegetables', price:45,  unit:'kg',  stock:150, rating:4.9, ratingCount:87,  image:'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80', desc:'Sun-ripened, juicy organic tomatoes. Grown without pesticides in the rich volcanic soil of Nashik.', nutrition:'Calories: 18kcal | Vitamin C: 23mg | Potassium: 237mg per 100g' },
  { id:'p2',  farmerId:'f8',  name:'Baby Spinach',            category:'Vegetables', price:35,  unit:'bunch',stock:80,  rating:4.7, ratingCount:54,  image:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80', desc:'Tender baby spinach leaves, harvested fresh every morning. Rich in iron and folate.', nutrition:'Calories: 23kcal | Iron: 2.7mg | Vitamin K: 483µg per 100g' },
  { id:'p3',  farmerId:'f10', name:'Fresh Carrots',           category:'Vegetables', price:40,  unit:'kg',  stock:200, rating:4.6, ratingCount:63,  image:'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&q=80', desc:'Crunchy, sweet carrots freshly dug from Karnataka soil. Perfect for juicing or cooking.', nutrition:'Calories: 41kcal | Vitamin A: 835µg | Fiber: 2.8g per 100g' },
  { id:'p4',  farmerId:'f1',  name:'Green Capsicum',          category:'Vegetables', price:60,  unit:'kg',  stock:90,  rating:4.8, ratingCount:72,  image:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80', desc:'Plump, vibrant green capsicum. Organically grown and harvested at peak crispness.', nutrition:'Calories: 20kcal | Vitamin C: 80mg | Vitamin B6: 0.2mg per 100g' },
  { id:'p5',  farmerId:'f8',  name:'Purple Brinjal',          category:'Vegetables', price:30,  unit:'kg',  stock:120, rating:4.5, ratingCount:41,  image:'https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=400&q=80', desc:'Glossy, tender purple brinjals. Ideal for curries, stir-fries, and grilling.', nutrition:'Calories: 25kcal | Fiber: 3g | Folate: 22µg per 100g' },
  // Fruits
  { id:'p6',  farmerId:'f2',  name:'Alphonso Mangoes',        category:'Fruits',     price:280, unit:'dozen',stock:60,  rating:4.9, ratingCount:134, image:'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80', desc:'The king of mangoes! Golden, fibre-free Alphonso mangoes from the Konkan coast.', nutrition:'Calories: 70kcal | Vitamin C: 36mg | Sugar: 14g per 100g' },
  { id:'p7',  farmerId:'f2',  name:'Fresh Bananas',           category:'Fruits',     price:50,  unit:'dozen',stock:200, rating:4.7, ratingCount:98,  image:'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=80', desc:'Naturally ripened hill bananas. Sweet, creamy, and packed with potassium.', nutrition:'Calories: 89kcal | Potassium: 358mg | Vitamin B6: 0.4mg per 100g' },
  { id:'p8',  farmerId:'f6',  name:'Coconuts (Tender)',       category:'Fruits',     price:35,  unit:'piece',stock:300, rating:4.8, ratingCount:77,  image:'https://images.unsplash.com/photo-1551819776-b8af67f7b36e?w=400&q=80', desc:'Fresh tender coconuts from Kerala. Full of natural electrolytes and sweet coconut water.', nutrition:'Calories: 19kcal | Electrolytes: High | Natural hydration' },
  { id:'p9',  farmerId:'f2',  name:'Pomegranate',             category:'Fruits',     price:120, unit:'kg',  stock:75,  rating:4.7, ratingCount:56,  image:'https://images.unsplash.com/photo-1606914707090-a84f80f6d8f2?w=400&q=80', desc:'Juicy pomegranates bursting with antioxidant-rich arils. Shipped within 24h of harvest.', nutrition:'Calories: 83kcal | Fiber: 4g | Vitamin C: 10mg per 100g' },
  { id:'p10', farmerId:'f2',  name:'Papaya',                  category:'Fruits',     price:45,  unit:'piece',stock:100, rating:4.6, ratingCount:48,  image:'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400&q=80', desc:'Ripe, golden papayas. Perfect for breakfast or smoothies. Naturally sweet and soft.', nutrition:'Calories: 43kcal | Vitamin C: 62mg | Folate: 38µg per 100g' },
  // Grains & Pulses
  { id:'p11', farmerId:'f9',  name:'Basmati Rice (Premium)',  category:'Grains',     price:180, unit:'kg',  stock:500, rating:4.9, ratingCount:211, image:'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80', desc:'Long-grain, aged Basmati rice from Amritsar. Aromatic, fluffy, and pesticide-free.', nutrition:'Calories: 130kcal | Carbs: 28g | Protein: 2.7g per 100g cooked' },
  { id:'p12', farmerId:'f4',  name:'Whole Wheat Flour (Atta)',category:'Grains',     price:55,  unit:'kg',  stock:800, rating:4.8, ratingCount:176, image:'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80', desc:'Stone-ground whole wheat atta from pesticide-free Punjab farms. Rich and nutritious.', nutrition:'Calories: 340kcal | Protein: 13g | Fiber: 11g per 100g' },
  { id:'p13', farmerId:'f4',  name:'Red Lentils (Masoor Dal)',category:'Grains',     price:95,  unit:'kg',  stock:300, rating:4.7, ratingCount:93,  image:'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&q=80', desc:'Split red lentils grown organically. Cooks quickly, rich in plant-based protein.', nutrition:'Calories: 116kcal | Protein: 9g | Iron: 3.3mg per 100g cooked' },
  { id:'p14', farmerId:'f9',  name:'Chickpeas (Kabuli Chana)',category:'Grains',     price:130, unit:'kg',  stock:250, rating:4.6, ratingCount:67,  image:'https://images.unsplash.com/photo-1634483849600-378ee62c7edf?w=400&q=80', desc:'Large, creamy Kabuli chickpeas. Perfect for curries, hummus, and salads.', nutrition:'Calories: 164kcal | Protein: 9g | Fiber: 7g per 100g cooked' },
  // Dairy
  { id:'p15', farmerId:'f3',  name:'Fresh Cow Milk (A2)',     category:'Dairy',      price:80,  unit:'ltr', stock:100, rating:4.9, ratingCount:189, image:'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80', desc:'Pure A2 milk from Gir cows. Pasteurised, unhomogenised, delivered within 6 hours of milking.', nutrition:'Calories: 61kcal | Protein: 3.2g | Calcium: 113mg per 100ml' },
  { id:'p16', farmerId:'f3',  name:'Homemade Ghee',           category:'Dairy',      price:650, unit:'500g',stock:50,  rating:4.9, ratingCount:204, image:'https://images.unsplash.com/photo-1648896573588-dfc24a8fc0f6?w=400&q=80', desc:'Bilona method A2 ghee made from hand-churned butter. Golden, aromatic, and pure.', nutrition:'Calories: 900kcal | Vitamin A: 270µg | Saturated fat: 62g per 100g' },
  { id:'p17', farmerId:'f3',  name:'Natural Yogurt (Curd)',   category:'Dairy',      price:55,  unit:'500g',stock:120, rating:4.8, ratingCount:147, image:'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80', desc:'Thick, creamy naturally set curd. Made from fresh A2 milk with live probiotic cultures.', nutrition:'Calories: 98kcal | Protein: 11g | Calcium: 121mg per 100g' },
  // Herbs & Spices
  { id:'p18', farmerId:'f5',  name:'Fresh Coriander (Dhaniya)',category:'Herbs',     price:15,  unit:'bunch',stock:200, rating:4.7, ratingCount:78,  image:'https://images.unsplash.com/photo-1592457711695-92399f5a5b21?w=400&q=80', desc:'Fragrant, fresh coriander harvested daily. Aromatic and vibrant green.', nutrition:'Calories: 23kcal | Vitamin K: 310µg | Vitamin C: 27mg per 100g' },
  { id:'p19', farmerId:'f6',  name:'Turmeric Powder (Haldi)', category:'Herbs',      price:120, unit:'250g',stock:300, rating:4.9, ratingCount:232, image:'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80', desc:'Wild-harvested and stone-ground turmeric root. High curcumin content, intense colour.', nutrition:'Calories: 312kcal | Curcumin: High | Anti-inflammatory compounds' },
  { id:'p20', farmerId:'f5',  name:'Curry Leaf (Kadi Patta)', category:'Herbs',      price:10,  unit:'bunch',stock:150, rating:4.6, ratingCount:55,  image:'https://images.unsplash.com/photo-1596040033229-a9821ebd058a?w=400&q=80', desc:'Aromatic fresh curry leaves. Essential in South Indian cooking. Harvested to order.', nutrition:'Calories: 108kcal | Calcium: 830mg | Iron: 0.9mg per 100g' },
];

const REVIEWS = {
  p1: [ { user:'Meera S.',  rating:5, text:'Best tomatoes I\'ve had! Sending from farm within a day makes a huge difference.', date:'2024-03-10' }, { user:'Rajiv P.', rating:5, text:'No middlemen = way lower price than supermarket. Will buy regularly!', date:'2024-03-08' }, { user:'Ananya K.', rating:4, text:'Good quality, slight delay in delivery but farmer was responsive.', date:'2024-03-05' } ],
  p6: [ { user:'Deepak M.', rating:5, text:'Genuine GI-tagged Alphonso. Worth every rupee!', date:'2024-03-12' }, { user:'Sonia J.',  rating:5, text:'Ordered 2 dozen, arrived perfectly ripe. Absolutely divine.',  date:'2024-03-09' }, { user:'Kiran T.',  rating:4, text:'Good mangoes. One or two were bruised but overall excellent.',  date:'2024-03-06' } ],
  p11:[ { user:'Arjun N.', rating:5, text:'Aromatic and long-grained. Best basmati I\'ve cooked.', date:'2024-03-11' }, { user:'Pooja V.', rating:5, text:'Freshly packed, no middlemen price hike. Very happy!', date:'2024-03-07' } ],
  p16:[ { user:'Divya R.', rating:5, text:'Pure golden ghee. The aroma is incredible and it lasts so well.', date:'2024-03-13' }, { user:'Ravi K.', rating:5, text:'Switched from branded ghee to this. Never going back!', date:'2024-03-10' } ],
};

// ── Helpers ──────────────────────────────────────────────────────────────────
function getProducts(filters={}) {
  let results = [...PRODUCTS];
  if (filters.category && filters.category !== 'All') {
    results = results.filter(p => p.category === filters.category);
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    results = results.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  if (filters.maxPrice) {
    results = results.filter(p => p.price <= filters.maxPrice);
  }
  if (filters.sort === 'price-asc')  results.sort((a,b) => a.price - b.price);
  if (filters.sort === 'price-desc') results.sort((a,b) => b.price - a.price);
  if (filters.sort === 'rating')     results.sort((a,b) => b.rating - a.rating);
  return results;
}
function getProduct(id)   { return PRODUCTS.find(p => p.id === id); }
function getFarmer(id)    { return FARMERS.find(f => f.id === id); }
function getFarmerProducts(farmerId) { return PRODUCTS.filter(p => p.farmerId === farmerId); }
function getReviews(productId) { return REVIEWS[productId] || []; }

// ── Cart (localStorage) ───────────────────────────────────────────────────────
const Cart = {
  get()               { return JSON.parse(localStorage.getItem('fd_cart') || '[]'); },
  save(items)         { localStorage.setItem('fd_cart', JSON.stringify(items)); dispatchEvent(new Event('cartUpdated')); },
  add(productId, qty=1){
    const items = this.get();
    const idx   = items.findIndex(i => i.productId === productId);
    if (idx > -1) items[idx].qty += qty;
    else          items.push({ productId, qty });
    this.save(items);
  },
  remove(productId)   { this.save(this.get().filter(i => i.productId !== productId)); },
  update(productId, qty){ const items = this.get(); const idx = items.findIndex(i=>i.productId===productId); if(idx>-1){ if(qty<1) items.splice(idx,1); else items[idx].qty=qty; this.save(items); } },
  clear()             { this.save([]); },
  count()             { return this.get().reduce((s,i)=>s+i.qty,0); },
  total()             { return this.get().reduce((s,i)=>{ const p=getProduct(i.productId); return s+(p?p.price*i.qty:0); },0); },
};

// ── Orders (localStorage) ─────────────────────────────────────────────────────
const Orders = {
  getAll()     { return JSON.parse(localStorage.getItem('fd_orders') || '[]'); },
  get(id)      { return this.getAll().find(o=>o.id===id); },
  place(order) {
    const all   = this.getAll();
    const oid   = 'FD' + Date.now().toString().slice(-8);
    const ts    = Date.now();
    const statuses = ['placed','confirmed','packed','outForDelivery','delivered'];
    const steps  = statuses.map((s,i)=>({ status:s, time: ts + i*3600000 }));
    const newOrder = { ...order, id:oid, placedAt:ts, steps, currentStep:0 };
    all.push(newOrder);
    localStorage.setItem('fd_orders', JSON.stringify(all));
    return oid;
  },
};

// ── Auth (localStorage) ───────────────────────────────────────────────────────
const Auth = {
  getUser()          { return JSON.parse(localStorage.getItem('fd_user') || 'null'); },
  login(user)        { localStorage.setItem('fd_user', JSON.stringify(user)); },
  logout()           { localStorage.removeItem('fd_user'); window.location.href='auth.html'; },
  isLoggedIn()       { return !!this.getUser(); },
};
