-- ============================================================
--  FarmDirect – Supabase Schema
--  Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── Farmers ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS farmers (
  id          TEXT PRIMARY KEY,
  name        TEXT    NOT NULL,
  location    TEXT    NOT NULL,
  rating      NUMERIC(3,2) DEFAULT 0,
  reviews     INT     DEFAULT 0,
  since       INT     NOT NULL,
  avatar      TEXT,
  bio         TEXT,
  certified   TEXT[]  DEFAULT '{}',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── Products ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id            TEXT PRIMARY KEY,
  farmer_id     TEXT REFERENCES farmers(id) ON DELETE CASCADE,
  name          TEXT    NOT NULL,
  category      TEXT    NOT NULL,
  price         INT     NOT NULL,
  unit          TEXT    NOT NULL DEFAULT 'kg',
  stock         INT     DEFAULT 100,
  rating        NUMERIC(3,2) DEFAULT 0,
  rating_count  INT     DEFAULT 0,
  image         TEXT,
  description   TEXT,
  nutrition     TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ── Reviews ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS reviews (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id  TEXT REFERENCES products(id) ON DELETE CASCADE,
  user_name   TEXT NOT NULL,
  rating      INT  NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text        TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── Orders ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
  id            TEXT PRIMARY KEY,
  user_email    TEXT,
  name          TEXT NOT NULL,
  phone         TEXT NOT NULL,
  address       TEXT NOT NULL,
  slot          TEXT,
  payment       TEXT DEFAULT 'Cash on Delivery',
  total         INT,
  current_step  INT  DEFAULT 0,     -- 0=placed,1=confirmed,2=packed,3=out,4=delivered
  placed_at     TIMESTAMPTZ DEFAULT NOW()
);

-- ── Order Items ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS order_items (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id    TEXT REFERENCES orders(id) ON DELETE CASCADE,
  product_id  TEXT REFERENCES products(id),
  qty         INT NOT NULL,
  price       INT NOT NULL
);

-- ── Row Level Security (public read, authenticated write) ────
ALTER TABLE farmers      ENABLE ROW LEVEL SECURITY;
ALTER TABLE products     ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews      ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders       ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items  ENABLE ROW LEVEL SECURITY;

-- Public read on farmers and products
DROP POLICY IF EXISTS "Public read farmers" ON farmers;
CREATE POLICY "Public read farmers"      ON farmers     FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read products" ON products;
CREATE POLICY "Public read products"     ON products    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read reviews" ON reviews;
CREATE POLICY "Public read reviews"      ON reviews     FOR SELECT USING (true);

-- Anyone can insert reviews and orders (no auth required for demo)
DROP POLICY IF EXISTS "Anyone insert reviews" ON reviews;
CREATE POLICY "Anyone insert reviews"    ON reviews     FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone insert orders" ON orders;
CREATE POLICY "Anyone insert orders"     ON orders      FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone insert order_items" ON order_items;
CREATE POLICY "Anyone insert order_items"ON order_items FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone read order_items" ON order_items;
CREATE POLICY "Anyone read order_items"  ON order_items FOR SELECT USING (true);

-- Allow authenticated/anon insertions for demo purposes (so farmers can add products/profiles)
DROP POLICY IF EXISTS "Anyone insert farmers" ON farmers;
CREATE POLICY "Anyone insert farmers"    ON farmers     FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone update farmers" ON farmers;
CREATE POLICY "Anyone update farmers"    ON farmers     FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Anyone insert products" ON products;
CREATE POLICY "Anyone insert products"   ON products    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone update products" ON products;
CREATE POLICY "Anyone update products"   ON products    FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Anyone delete products" ON products;
CREATE POLICY "Anyone delete products"   ON products    FOR DELETE USING (true);
