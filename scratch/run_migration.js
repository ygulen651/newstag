const { Client } = require('pg');
const fs = require('fs');

async function runSql() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('Veritabanına bağlanıldı.');
    
    const sql = fs.readFileSync('scratch/create_brands_table.sql', 'utf8');
    await client.query(sql);
    
    console.log('✅ Tablo ve örnek veriler başarıyla oluşturuldu.');
  } catch (err) {
    console.error('❌ Hata:', err.message);
  } finally {
    await client.end();
  }
}

runSql();
