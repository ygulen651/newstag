const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Hata: URL veya Key eksik!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  const { data, error } = await supabase.from('news').select('*').limit(1);
  
  if (error) {
    // news tablosu yoksa bile 401/403 almamak bağlantının varlığını kanıtlar
    if (error.code === 'PGRST116' || error.message.includes('relation "news" does not exist')) {
       console.log('✅ Bağlantı Başarılı! (Supabase ile iletişim kuruldu, news tablosu henüz yok)');
    } else {
       console.error('❌ Bağlantı Hatası:', error.message);
    }
  } else {
    console.log('✅ Bağlantı Başarılı! Veri çekildi.');
  }
}

testConnection();
