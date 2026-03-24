const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://bnfekumcohwlclxowxae.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuZmVrdW1jb2h3bGNseG93eGFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzIzMzQsImV4cCI6MjA4OTkwODMzNH0.t9iKLQ5IZpgg7LoyLoS2a5rvy7UgssLBq9E3eIjVEsA';
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

async function test() {
  const newFarmer = {
    id: 'test-uuid-1234',
    name: 'Test Farmer',
    location: 'India',
    since: 2026,
    rating: 0,
    reviews: 0,
    bio: 'Test bio',
    certified: []
  };
  console.log('Inserting...');
  const res = await db.from('farmers').insert([newFarmer]).select();
  console.log(JSON.stringify(res, null, 2));
}
test();
