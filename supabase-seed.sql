-- ============================================================
--  FarmDirect – Seed Data
--  Run AFTER supabase-schema.sql
-- ============================================================

-- ── Farmers ─────────────────────────────────────────────────
INSERT INTO farmers (id, name, location, rating, reviews, since, avatar, bio, certified) VALUES
('f1',  'Rajesh Kumar',    'Nashik, Maharashtra',        4.9, 312, 2015, 'https://i.pravatar.cc/150?img=11', 'Third-generation farmer specialising in organic vegetables. My family has farmed this land for over 60 years.',         ARRAY['Organic','PGS-India']),
('f2',  'Priya Devi',      'Coimbatore, Tamil Nadu',     4.8, 278, 2017, 'https://i.pravatar.cc/150?img=20', 'Passionate about bringing the freshest tropical fruits from my orchard directly to your table.',                     ARRAY['Organic']),
('f3',  'Suresh Patel',    'Anand, Gujarat',             4.7, 195, 2016, 'https://i.pravatar.cc/150?img=33', 'Dairy farmer with a herd of 40 cows. All milk products are 100% natural with no additives.',                       ARRAY['FSSAI','Organic']),
('f4',  'Anita Sharma',    'Ludhiana, Punjab',           4.8, 241, 2014, 'https://i.pravatar.cc/150?img=47', 'Specialising in premium quality wheat, rice, and pulses. Proud to practice zero-chemical farming.',                ARRAY['PGS-India']),
('f5',  'Mohammed Rafiq',  'Raichur, Karnataka',         4.6, 163, 2018, 'https://i.pravatar.cc/150?img=57', 'Speciality herb and spice grower. Every plant is hand-tended and harvested at peak flavour.',                      ARRAY['Organic']),
('f6',  'Lakshmi Nair',    'Thrissur, Kerala',           4.9, 299, 2013, 'https://i.pravatar.cc/150?img=44', 'Kerala spices and coconut products. Our plantation has been certified organic for over 10 years.',                 ARRAY['Organic','Fair Trade']),
('f7',  'Vijay Reddy',     'Kurnool, Andhra Pradesh',   4.7, 188, 2016, 'https://i.pravatar.cc/150?img=60', 'Expert in dry-land farming. Produces the finest black pepper and chilli varieties.',                               ARRAY['PGS-India']),
('f8',  'Sunita Yadav',    'Patna, Bihar',               4.5, 142, 2019, 'https://i.pravatar.cc/150?img=45', 'Young farmer using modern techniques alongside traditional wisdom to grow leafy greens and root vegetables.',      ARRAY['Organic']),
('f9',  'Harpreet Singh',  'Amritsar, Punjab',           4.8, 267, 2015, 'https://i.pravatar.cc/150?img=13', 'Producing high-quality basmati rice and wheat on 50 acres of ancestral farmland.',                               ARRAY['APEDA','PGS-India']),
('f10', 'Deepa Krishnan',  'Mysore, Karnataka',          4.6, 175, 2017, 'https://i.pravatar.cc/150?img=32', 'Flower and vegetable farmer. Brings colour and nutrition directly from our fields to your home.',                  ARRAY['Organic'])
ON CONFLICT (id) DO NOTHING;

-- ── Products ─────────────────────────────────────────────────
INSERT INTO products (id, farmer_id, name, category, price, unit, stock, rating, rating_count, image, description, nutrition) VALUES
('p1',  'f1',  'Organic Tomatoes',          'Vegetables', 45,  'kg',   150, 4.9, 87,  'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80',  'Sun-ripened, juicy organic tomatoes grown without pesticides in the rich volcanic soil of Nashik.',       'Calories: 18kcal | Vitamin C: 23mg | Potassium: 237mg per 100g'),
('p2',  'f8',  'Baby Spinach',              'Vegetables', 35,  'bunch',80,  4.7, 54,  'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80',  'Tender baby spinach leaves, harvested fresh every morning. Rich in iron and folate.',                   'Calories: 23kcal | Iron: 2.7mg | Vitamin K: 483µg per 100g'),
('p3',  'f10', 'Fresh Carrots',             'Vegetables', 40,  'kg',   200, 4.6, 63,  'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&q=80',  'Crunchy, sweet carrots freshly dug from Karnataka soil. Perfect for juicing or cooking.',              'Calories: 41kcal | Vitamin A: 835µg | Fiber: 2.8g per 100g'),
('p4',  'f1',  'Green Capsicum',            'Vegetables', 60,  'kg',   90,  4.8, 72,  'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80',  'Plump, vibrant green capsicum. Organically grown and harvested at peak crispness.',                    'Calories: 20kcal | Vitamin C: 80mg | Vitamin B6: 0.2mg per 100g'),
('p5',  'f8',  'Purple Brinjal',            'Vegetables', 30,  'kg',   120, 4.5, 41,  'https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=400&q=80',  'Glossy, tender purple brinjals. Ideal for curries, stir-fries, and grilling.',                        'Calories: 25kcal | Fiber: 3g | Folate: 22µg per 100g'),
('p6',  'f2',  'Alphonso Mangoes',          'Fruits',     280, 'dozen',60,  4.9, 134, 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80',     'The king of mangoes! Golden, fibre-free Alphonso mangoes from the Konkan coast.',                    'Calories: 70kcal | Vitamin C: 36mg | Sugar: 14g per 100g'),
('p7',  'f2',  'Fresh Bananas',             'Fruits',     50,  'dozen',200, 4.7, 98,  'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=80',  'Naturally ripened hill bananas. Sweet, creamy, and packed with potassium.',                          'Calories: 89kcal | Potassium: 358mg | Vitamin B6: 0.4mg per 100g'),
('p8',  'f6',  'Coconuts (Tender)',         'Fruits',     35,  'piece',300, 4.8, 77,  'https://images.unsplash.com/photo-1551819776-b8af67f7b36e?w=400&q=80',     'Fresh tender coconuts from Kerala. Full of natural electrolytes and sweet coconut water.',           'Calories: 19kcal | Electrolytes: High | Natural hydration'),
('p9',  'f2',  'Pomegranate',               'Fruits',     120, 'kg',   75,  4.7, 56,  'https://images.unsplash.com/photo-1606914707090-a84f80f6d8f2?w=400&q=80',  'Juicy pomegranates bursting with antioxidant-rich arils. Shipped within 24h of harvest.',           'Calories: 83kcal | Fiber: 4g | Vitamin C: 10mg per 100g'),
('p10', 'f2',  'Papaya',                    'Fruits',     45,  'piece',100, 4.6, 48,  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400&q=80',  'Ripe, golden papayas. Perfect for breakfast or smoothies. Naturally sweet and soft.',               'Calories: 43kcal | Vitamin C: 62mg | Folate: 38µg per 100g'),
('p11', 'f9',  'Basmati Rice (Premium)',    'Grains',     180, 'kg',   500, 4.9, 211, 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80',  'Long-grain, aged Basmati rice from Amritsar. Aromatic, fluffy, and pesticide-free.',               'Calories: 130kcal | Carbs: 28g | Protein: 2.7g per 100g cooked'),
('p12', 'f4',  'Whole Wheat Flour (Atta)',  'Grains',     55,  'kg',   800, 4.8, 176, 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80',  'Stone-ground whole wheat atta from pesticide-free Punjab farms. Rich and nutritious.',             'Calories: 340kcal | Protein: 13g | Fiber: 11g per 100g'),
('p13', 'f4',  'Red Lentils (Masoor Dal)', 'Grains',     95,  'kg',   300, 4.7, 93,  'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&q=80',  'Split red lentils grown organically. Cooks quickly, rich in plant-based protein.',                 'Calories: 116kcal | Protein: 9g | Iron: 3.3mg per 100g cooked'),
('p14', 'f9',  'Chickpeas (Kabuli Chana)', 'Grains',     130, 'kg',   250, 4.6, 67,  'https://images.unsplash.com/photo-1634483849600-378ee62c7edf?w=400&q=80',  'Large, creamy Kabuli chickpeas. Perfect for curries, hummus, and salads.',                         'Calories: 164kcal | Protein: 9g | Fiber: 7g per 100g cooked'),
('p15', 'f3',  'Fresh Cow Milk (A2)',       'Dairy',      80,  'ltr',  100, 4.9, 189, 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',     'Pure A2 milk from Gir cows. Pasteurised, unhomogenised, delivered within 6 hours of milking.',    'Calories: 61kcal | Protein: 3.2g | Calcium: 113mg per 100ml'),
('p16', 'f3',  'Homemade Ghee',             'Dairy',      650, '500g', 50,  4.9, 204, 'https://images.unsplash.com/photo-1648896573588-dfc24a8fc0f6?w=400&q=80',  'Bilona method A2 ghee made from hand-churned butter. Golden, aromatic, and pure.',                'Calories: 900kcal | Vitamin A: 270µg | Saturated fat: 62g per 100g'),
('p17', 'f3',  'Natural Yogurt (Curd)',     'Dairy',      55,  '500g', 120, 4.8, 147, 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',  'Thick, creamy naturally set curd. Made from fresh A2 milk with live probiotic cultures.',          'Calories: 98kcal | Protein: 11g | Calcium: 121mg per 100g'),
('p18', 'f5',  'Fresh Coriander',          'Herbs',      15,  'bunch',200, 4.7, 78,  'https://images.unsplash.com/photo-1592457711695-92399f5a5b21?w=400&q=80',  'Fragrant, fresh coriander harvested daily. Aromatic and vibrant green.',                           'Calories: 23kcal | Vitamin K: 310µg | Vitamin C: 27mg per 100g'),
('p19', 'f6',  'Turmeric Powder (Haldi)',  'Herbs',      120, '250g', 300, 4.9, 232, 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80',  'Wild-harvested and stone-ground turmeric root. High curcumin content, intense colour.',           'Calories: 312kcal | Curcumin: High | Anti-inflammatory compounds'),
('p20', 'f5',  'Curry Leaf (Kadi Patta)',  'Herbs',      10,  'bunch',150, 4.6, 55,  'https://images.unsplash.com/photo-1596040033229-a9821ebd058a?w=400&q=80',  'Aromatic fresh curry leaves. Essential in South Indian cooking. Harvested to order.',             'Calories: 108kcal | Calcium: 830mg | Iron: 0.9mg per 100g')
ON CONFLICT (id) DO NOTHING;

-- ── Sample Reviews ────────────────────────────────────────────
INSERT INTO reviews (product_id, user_name, rating, text) VALUES
('p1',  'Meera S.',   5, 'Best tomatoes I''ve had! Sending from farm within a day makes a huge difference.'),
('p1',  'Rajiv P.',   5, 'No middlemen = way lower price than supermarket. Will buy regularly!'),
('p1',  'Ananya K.',  4, 'Good quality, slight delay in delivery but farmer was responsive.'),
('p6',  'Deepak M.',  5, 'Genuine GI-tagged Alphonso. Worth every rupee!'),
('p6',  'Sonia J.',   5, 'Ordered 2 dozen, arrived perfectly ripe. Absolutely divine.'),
('p11', 'Arjun N.',   5, 'Aromatic and long-grained. Best basmati I''ve cooked.'),
('p11', 'Pooja V.',   5, 'Freshly packed, no middlemen price hike. Very happy!'),
('p16', 'Divya R.',   5, 'Pure golden ghee. The aroma is incredible and it lasts so well.'),
('p16', 'Ravi K.',    5, 'Switched from branded ghee to this. Never going back!')
ON CONFLICT DO NOTHING;
