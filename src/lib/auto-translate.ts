"use client";

import type { Language } from "@/lib/i18n";

const exactTranslations: Record<string, string> = {
  "Ana Sayfa": "Home",
  Hakkımızda: "About Us",
  Markalarımız: "Our Brands",
  Çözümlerimiz: "Solutions",
  "Isı Pompası": "Heat Pump",
  "Servis Ağı": "Service Network",
  İletişim: "Contact",
  Ürünler: "Products",
  Çözümler: "Solutions",
  Kurumsal: "Corporate",
  Menü: "Menu",
  "Menüyü kapat": "Close menu",

  "Ürünleri İncele": "Explore Products",
  "Çözümleri İncele": "Explore Solutions",
  "Detayları İncele": "View Details",
  İncele: "View",
  "Teklif Al": "Get a Quote",
  "Bize Ulaşın": "Contact Us",
  "İletişime Geçin": "Get in Touch",
  "Bizimle İletişime Geçin": "Get in Touch With Us",
  "Markayı Tanıyın": "Discover the Brand",
  "Uzmana Danışın": "Talk to an Expert",
  Gönder: "Send",
  "Mesaj Gönderin": "Send a Message",
  "Ad Soyad": "Full Name",
  "Mesajınız": "Your Message",
  "Adınız ve soyadınız": "Your full name",
  "Size nasıl yardımcı olabiliriz?": "How can we help you?",

  "Bir Saray Holding Markası": "A Saray Holding Brand",
  "Bir Saray Holding kuruluşudur.": "A Saray Holding company.",
  "Saray Holding Güvencesi": "Backed by Saray Holding",
  Güvencesi: "Assurance",
  "Newstag Enerji": "Newstag Energy",
  "NEWSTAG ENERJİ": "NEWSTAG ENERGY",
  "İstanbul, Türkiye": "Istanbul, Turkiye",
  Türkiye: "Turkiye",
  Lokasyon: "Location",
  Telefon: "Phone",
  "E-posta": "Email",
  "Genel Merkez": "Head Office",

  "Enerjiyi Bugünden": "Carry Energy From Today",
  "Geleceğe Taşıyın": "Into the Future",
  "Enerji Dönüşümünün Çözüm Ortağı": "The Solution Partner for Energy Transformation",
  "Enerji Dönüşümünüzün Çözüm Ortağı": "The Solution Partner for Your Energy Transformation",
  "Enerji Dönüşümünün": "Energy Transformation",
  "Enerji Dönüşümünüzün": "Your Energy Transformation",
  "Çözüm Ortağı": "Solution Partner",
  "Keşfetmek İçin Kaydırın": "Scroll to Explore",
  "Kim Olduğumuzu Keşfedin": "Discover Who We Are",
  "65 Yıllık Miras, Yeni Nesil Enerji": "65 Years of Heritage, Next-Generation Energy",
  "65 Yıllık Miras,": "65 Years of Heritage,",
  "Yeni Nesil Enerji": "Next-Generation Energy",
  "65 Yıl": "65 Years",
  "15 Yıl": "15 Years",
  "2 Marka": "2 Brands",

  "Sektöre Yön Veren": "Leading the Industry",
  "Markalarımız ile Hizmetinizdeyiz": "At Your Service with Our Brands",
  "Çin’in IT devi ve dünyanın en büyük üç sunucu üreticisinden biri olan Inspur; IT ve bulut altyapısındaki mühendislik gücünü enerji depolama sistemlerine taşıyor. 1 GWh'a yaklaşan kurulum deneyimiyle enerji güvenliğinin de ana bir oyuncusu konumunda.":
    "China’s IT giant and one of the world’s three largest server manufacturers, Inspur brings its engineering expertise in IT and cloud infrastructure to energy storage systems. With nearly 1 GWh of installation experience, it is also a major player in energy security.",
  "Ürün Markalarımız": "Our Product Brands",
  "Her İhtiyaca": "For Every Need",
  "Özel Çözümler": "Tailored Solutions",
  "Servis ve Satış Ağı": "Service and Sales Network",
  "Enerjiniz İçin Her Zaman Sahadayız": "Always in the Field for Your Energy",
  "Enerjiniz İçin": "For Your Energy",
  "Her Zaman Sahadayız": "Always in the Field",
  "Hizmet Kapsamı": "Service Scope",
  "Servis Süreci": "Service Process",
  "Servis Talebi Oluştur": "Create a Service Request",
  "Kurulum sonrası sürdürülebilir operasyon desteği": "Sustainable operational support after installation",

  "BESS Nasıl Çalışır?": "How Does BESS Work?",
  "Enerji Akış Haritası": "Energy Flow Map",
  "GES / Şebeke": "Solar / Grid",
  PCS: "PCS",
  Batarya: "Battery",
  "EMS / BMS": "EMS / BMS",
  "Yük / Şebeke": "Load / Grid",
  Şarj: "Charge",
  Depolama: "Storage",
  Deşarj: "Discharge",
  "BESS ile Elde Edilen Faydalar": "Benefits Delivered by BESS",
  "Neden Inspur?": "Why Inspur?",
  "Global Teknoloji Ortağımız": "Our Global Technology Partner",
  "Inspur Markasını Tanıyın": "Discover the Inspur Brand",
  "Maliyet Değil; Sürekli Kazanç ve Enerji Güvenliği":
    "Not a Cost; Continuous Value and Energy Security",
  "Inspur BESS Ürün Portföyü": "Inspur BESS Product Portfolio",
  "Projeniz İçin BESS Konfigürasyonu": "BESS Configuration for Your Project",
  "BESS Ürünlerine Dön": "Back to BESS Products",
  "Ürün Seçenekleri": "Product Options",
  "Uygulama Notları": "Application Notes",
  "Diğer BESS Ürünleri": "Other BESS Products",
  "Teknik Görüşme Talep Et": "Request a Technical Meeting",

  "Isı Pompası Nasıl Çalışır?": "How Does a Heat Pump Work?",
  "Isı Enerjisi Akışı": "Heat Energy Flow",
  "Dış Hava": "Outdoor Air",
  Evaporatör: "Evaporator",
  Kompresör: "Compressor",
  Kondenser: "Condenser",
  "Isıtma / Soğutma / Sıcak Su": "Heating / Cooling / Hot Water",
  "Isı Pompası ile Elde Edilen Faydalar": "Benefits Delivered by Heat Pumps",
  "Hava Kaynaklı": "Air Source",
  "Toprak Kaynaklı": "Ground Source",
  "Su Kaynaklı": "Water Source",
  "Thermaplus Ürün Gamı": "Thermaplus Product Range",
  "Konut Serileri": "Residential Series",
  "Havuz Serileri": "Pool Series",
  "Endüstriyel Seriler": "Industrial Series",
  "Tasarruf Hesaplama": "Savings Calculator",
  "Isı Pompası Ürünlerine Dön": "Back to Heat Pump Products",
  "Thermaplus Ürünlerine Dön": "Back to Thermaplus Products",
  "Doğru Model Seçimi": "Selecting the Right Model",
  "Ücretsiz Keşif Talep Et": "Request a Free Survey",
  "Aynı Serideki Diğer Ürünler": "Other Products in the Same Series",
  "Temiz Isı Teknolojisi": "Clean Heat Technology",
  "Newstag'ın Tescilli Markası": "Newstag's Registered Brand",

  "Enerji Santralleri": "Power Plants",
  "Sanayi Tesisleri": "Industrial Facilities",
  "Ticari İşletmeler": "Commercial Businesses",
  Konutlar: "Homes",
  "Veri Merkezleri": "Data Centers",
  "Sınırlı Şebeke Noktaları": "Limited Grid Locations",
  "Sınırlı Şebeke": "Limited Grid",

  "Arbitraj ile Tasarruf": "Savings with Arbitrage",
  "Lisanssız GES İçin Tamamlayıcı": "Complement for Unlicensed Solar",
  "Lisanssız GES Tamamlayıcısı": "Complement for Unlicensed Solar",
  "Pik Güç Tıraşlama": "Peak Shaving",
  "Kapasite Kısıtını Aşma": "Overcoming Capacity Limits",
  "Operasyonel Süreklilik": "Operational Continuity",
  "Reaktif Güç Kompanzasyonu": "Reactive Power Compensation",
  "Harmonik Kompanzasyonu": "Harmonic Compensation",
  "Jeneratör İkamesi": "Generator Replacement",
  "Karbon Vergisi Baskısını Azaltma": "Reducing Carbon Tax Pressure",
  "Yüksek Enerji Fiyatları": "High Energy Prices",
  "Enerji Verimliliği": "Energy Efficiency",
  "Tek Sistem": "Single System",
  Çevrecilik: "Environmental Responsibility",
  "Yüksek Enerji Tasarrufu": "High Energy Savings",
  "3'ü 1 Arada Tek Sistem": "Three-in-One System",
  "Fosil Yakıttan Bağımsızlık": "Independence from Fossil Fuels",
  "Atık Isı Değerlendirme": "Waste Heat Recovery",
  "Havuz Konforu": "Pool Comfort",
  "Akıllı Kontrol": "Smart Control",

  "Yerli Üretim Gücü": "Power of Local Production",
  "Güçlü Servis": "Strong Service",
  "Çevreci Teknoloji": "Green Technology",
  "Kanıtlanmış Güvenilirlik": "Proven Reliability",
  "Kanıtlanmış Saha Deneyimi": "Proven Field Experience",
  "Güvenlik ve Uzun Ömür": "Safety and Long Life",
  "Ar-Ge ve Mühendislik Gücü": "R&D and Engineering Strength",
  "Global Sunucu Üreticisi": "Global Server Manufacturer",
  "Ülkede Aktif Operasyon": "Countries with Active Operations",
  "Global Patent Portföyü": "Global Patent Portfolio",
  "IT Dünyasının Devi": "IT Industry Giant",
  "IT Dünyasının": "The Giant of IT",
  Devi: "World",
  "Yapay zeka sunucularında dünyanın 1 numarası olmayı başarmış, tüm sunucu üreticileri arasında dünyanın ilk 3 firması arasında olan lider şirket.":
    "The industry leader ranked number one worldwide in AI servers and among the world's top three server manufacturers.",

  "Demir-Çelik": "Iron and Steel",
  Çimento: "Cement",
  Otomotiv: "Automotive",
  "Beyaz Eşya": "White Goods",
  "Alışveriş Merkezleri": "Shopping Malls",
  Oteller: "Hotels",
  Plazalar: "Office Towers",
  "Perakende Zincirleri": "Retail Chains",
  "Havuz Isıtması": "Pool Heating",
  "Entegre Çözüm": "Integrated Solution",
  "Kesinti Önleme": "Outage Prevention",
  "Güç Kalitesi": "Power Quality",
  "Hassas İklimlendirme": "Precision Climate Control",
  "Şarj Ağı Noktaları": "Charging Network Sites",
  "Maden ve Taş Ocakları": "Mines and Quarries",
  "Konserler ve Kamp Alanları": "Concerts and Campsites",
  "Şebeke Kısıtlarını Aşma": "Overcoming Grid Constraints",
  "Bağlantı Sürecini Beklememe": "No Waiting for Grid Connection",
  "Yatırım Maliyetini Azaltma": "Reducing Investment Cost",
  "Pik Talep Yönetimi": "Peak Demand Management",
  "Jeneratör Maliyetinden Tasarruf": "Savings from Generator Costs",
  "Güç Olmayan Noktada Faaliyet": "Operations Where There Is No Power",

  Güven: "Trust",
  İnovasyon: "Innovation",
  Sürdürülebilirlik: "Sustainability",
  Mükemmellik: "Excellence",
  Vizyonumuz: "Our Vision",
  Misyonumuz: "Our Mission",
  "Fark Yaratan Değerlerimiz": "Our Differentiating Values",
  Fark: "Values",
  Yaratan: "That Create",
  Değerlerimiz: "Difference",
  "Saray Holding'i Keşfedin": "Discover Saray Holding",
  "Geleceği Birlikte İnşa Edelim": "Let's Build the Future Together",
  "Geleceği Birlikte": "Let's Build the Future",
  "İnşa Edelim": "Together",

  "Haber Merkezi": "News Center",
  "Dünyamızı dönüştüren enerji haberleri için aşağı kaydırmaya devam edin.":
    "Keep scrolling for energy news that transforms our world.",
  "Tamamını Oku": "Read More",
  "Sayfa Bulunamadı": "Page Not Found",
  "Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.":
    "The page you are looking for may have been removed, renamed, or temporarily unavailable.",
  "Ana Sayfaya Dön": "Back to Home",
};

const phraseTranslations: Record<string, string> = {
  "Güneş santrallerinden veri merkezlerine, sanayiden konutlara: Inspur BESS ve Thermaplus Isı Pompası ile temiz enerji dönüşümü.":
    "From solar plants to data centers, from industry to homes: clean energy transformation with Inspur BESS and Thermaplus Heat Pumps.",
  "Newstag'ın kendi markası Thermaplus; Türkiye'de üretilen ısı pompası teknolojisini yerli parça, yerli mühendislik ve güçlü servis ağıyla birleştirerek konutlardan endüstriyel tesislere kadar her ölçekte verimli ısıtma, soğutma ve sıcak su konforu sunuyor.":
    "Thermaplus, Newstag's own brand, combines heat pump technology produced in Turkiye with local components, local engineering, and a strong service network to deliver efficient heating, cooling, and domestic hot water comfort from homes to industrial facilities.",
  "Enerji önce kaynaktan alınır, güç elektroniğiyle dönüştürülür, bataryada saklanır ve akıllı kontrol katmanı tarafından doğru anda sahaya geri verilir.":
    "Energy is first received from the source, converted by power electronics, stored in the battery, and sent back to the site at the right moment by the intelligent control layer.",
  "Üretim veya ucuz tarife enerjisi sisteme alınır.":
    "Generation or low-tariff energy is received into the system.",
  "AC/DC dönüşümü milisaniyeler içinde yönetilir.":
    "AC/DC conversion is managed within milliseconds.",
  "LFP hücrelerde güvenli ve ölçeklenebilir depolama yapılır.":
    "Safe and scalable storage is performed in LFP cells.",
  "Yazılım, batarya sağlığını ve enerji akışını optimize eder.":
    "Software optimizes battery health and energy flow.",
  "Enerji ihtiyaç anında tesise veya şebekeye aktarılır.":
    "Energy is transferred to the facility or grid when needed.",
  "Düşük sıcaklıklı çevre enerjisi kablo hattı boyunca taşınır; evaporatör, kompresör ve kondenser çevrimiyle kullanılabilir ısıya dönüştürülür.":
    "Low-temperature ambient energy moves along the line and is converted into usable heat through the evaporator, compressor, and condenser cycle.",
  "Havadaki, topraktaki veya sudaki düşük sıcaklıklı enerji alınır.":
    "Low-temperature energy from air, ground, or water is captured.",
  "Soğutucu akışkan ısıyı emer ve buharlaşır.":
    "The refrigerant absorbs heat and evaporates.",
  "Basınç yükselir, enerji kullanılabilir ısıya dönüşür.":
    "Pressure rises and energy turns into usable heat.",
  "Isı, suya veya iç ortama kontrollü şekilde aktarılır.":
    "Heat is transferred to water or the indoor space in a controlled way.",
  "Tek cihazla konfor ve kullanım sıcak suyu sağlanır.":
    "Comfort and domestic hot water are provided with one device.",
  "En yaygın çözüm; kurulumu basit, yatırım maliyeti düşük.":
    "The most common solution; simple to install with a low investment cost.",
  "Yüksek verim; büyük ölçekli projeler için ideal.":
    "High efficiency; ideal for large-scale projects.",
  "Göl ve nehir kenarı tesisler için optimum performans.":
    "Optimum performance for facilities near lakes and rivers.",
  "Saray Holding'in 65 yıllık kurumsal mirasını ve gücünü, enerji sektöründeki 15 yıllık üretim deneyimini ve global ortaklıklarını bir araya getiren Newstag, enerji dönüşümünüzün çözüm ortağı olmak için sizleri bekliyor.":
    "Newstag brings together Saray Holding's 65-year corporate heritage and strength, 15 years of production experience in the energy sector, and global partnerships to become your solution partner in energy transformation.",
  "Batarya enerji depolama sistemlerinde dünya devi Inspur'un Türkiye iş ortağı olarak ve kendi tescilli markamız Thermaplus ısı pompalarıyla; enerji santrallerinden sanayi tesislerine, ticari işletmelerden konutlara kadar her ölçekte verimli, güvenli ve düşük karbonlu enerji altyapıları kuruyoruz.":
    "As Inspur's partner in Turkiye for battery energy storage systems and with our registered Thermaplus heat pump brand, we build efficient, safe, and low-carbon energy infrastructure at every scale, from power plants and industrial facilities to commercial businesses and homes.",
  "Keşiften projelendirmeye, kurulumdan devreye almaya ve Türkiye genelindeki servis ağımızla kurulum sonrası desteğe kadar tüm süreci tek çatı altında yönetiyoruz.":
    "From site survey and project design to installation, commissioning, and after-sales support through our nationwide service network, we manage the entire process under one roof.",
  "Gelin, sürdürülebilir bir gelecek için enerji dönüşümünüzü bugünden başlatalım.":
    "Let’s start your energy transformation today for a sustainable future.",
  "BESS ve Isı Pompası teknolojilerini yenilenebilir enerji kaynaklarıyla entegre ederek; enerji maliyetlerini düşüren, arz güvenliğini artıran ve karbon ayak izini ölçülebilir şekilde azaltan altyapılar tasarlıyoruz. Enerji santrallerinden konutlara, her sektöre özel mühendislik yaklaşımıyla hizmet veriyoruz.":
    "By integrating BESS and heat pump technologies with renewable energy sources, we design infrastructure that lowers energy costs, improves supply security, and measurably reduces carbon footprints. From power plants to homes, we serve every sector with a tailored engineering approach.",
  "1961 yılından bu yana gıda, tarım, endüstri, ambalaj, mobilya, lojistik gibi birçok sektördeki gücünü uzun yıllar önce enerji sektörüne de taşıyan Saray Holding, sürdürülebilir gelecek vizyonuyla büyümeye devam ediyor.":
    "Since 1961, Saray Holding has built strength across many sectors—including food, agriculture, industry, packaging, furniture, and logistics—and expanded into the energy sector many years ago. Today, it continues to grow with a vision for a sustainable future.",
  "Jeotermal ve yenilenebilir enerji alanında atılan güçlü adımlarla bugün Türkiye'nin en büyük yenilenebilir enerji üreticileri arasında olan Saray, Newstag markası altında batarya enerji depolama sistemleri (BESS) ve ısı pompası çözümleriyle enerji sektöründeki hizmet gamını genişleterek sürdürülebilir geleceğe olan katkılarını taçlandırıyor.":
    "Now among Turkiye's largest renewable energy producers following major investments in geothermal and renewable energy, Saray is expanding its energy services under the Newstag brand with battery energy storage systems (BESS) and heat pump solutions, further strengthening its contribution to a sustainable future.",
};

const wordTranslations: Record<string, string> = {
  Ağ: "Network",
  Ağı: "Network",
  Akış: "Flow",
  Akışı: "Flow",
  Akıllı: "Smart",
  Alınır: "Captured",
  Ana: "Main",
  Arıza: "Fault",
  Atık: "Waste",
  Bağımsızlık: "Independence",
  Bağlantı: "Connection",
  Bakım: "Maintenance",
  Basınç: "Pressure",
  Batarya: "Battery",
  Bilişim: "IT",
  Birlikte: "Together",
  Bugün: "Today",
  Çalışır: "Works",
  Çalışma: "Operation",
  Çalışması: "Work",
  Çatı: "Rooftop",
  Çevre: "Environment",
  Çevreci: "Green",
  Çevrim: "Cycle",
  Çıkış: "Outlet",
  Çözüm: "Solution",
  Çözümleri: "Solutions",
  Çözümü: "Solution",
  Değer: "Value",
  Değerlerimiz: "Values",
  Değil: "Not",
  Depolama: "Storage",
  Devreye: "Commissioning",
  Dış: "Outdoor",
  Doğalgaz: "Natural Gas",
  Doğru: "Right",
  Dön: "Back",
  Dönüş: "Return",
  Dönüşüm: "Transformation",
  Dönüşümü: "Transformation",
  Dönüşümünün: "Transformation",
  Dönüşümünüzün: "Your Transformation",
  Düşük: "Low",
  Dünya: "World",
  Dünyasının: "World",
  Elde: "Delivered",
  Ekonomik: "Economical",
  Elektrik: "Electricity",
  Enerji: "Energy",
  Enerjisi: "Energy",
  Enerjiyi: "Energy",
  Enerjiniz: "Your Energy",
  Esnekliği: "Flexibility",
  Faydalar: "Benefits",
  Faydaları: "Benefits",
  Fiyatları: "Prices",
  Fiyatlı: "Priced",
  Gelecek: "Future",
  Geleceği: "Future",
  Genel: "Head",
  Geniş: "Wide",
  Gıda: "Food",
  Gönder: "Send",
  Güç: "Power",
  Gücü: "Power",
  Güçlü: "Strong",
  Güven: "Trust",
  Güvencesi: "Assurance",
  Güvenliği: "Security",
  Güvenli: "Safe",
  Hakkımızda: "About Us",
  Haritası: "Map",
  Hava: "Air",
  Havuz: "Pool",
  Her: "Every",
  Hizmet: "Service",
  Hücrelerde: "Cells",
  İç: "Indoor",
  İçin: "For",
  İhtiyaç: "Need",
  İhtiyaca: "Need",
  İletişim: "Contact",
  İletişime: "Contact",
  İncele: "View",
  İnşa: "Build",
  İş: "Business",
  İşletmeler: "Businesses",
  Isı: "Heat",
  Isıtma: "Heating",
  Kalitesi: "Quality",
  Kanıtlanmış: "Proven",
  Kapasite: "Capacity",
  Kapsamı: "Scope",
  Karbon: "Carbon",
  Kaydırın: "Scroll",
  Kaynaklı: "Source",
  Keşfedin: "Discover",
  Keşfetmek: "Explore",
  Kesinti: "Outage",
  Kısıtını: "Limit",
  Kısıtlı: "Limited",
  Kompanzasyonu: "Compensation",
  Konfor: "Comfort",
  Konforu: "Comfort",
  Konut: "Residential",
  Konutlar: "Homes",
  Kontrol: "Control",
  Kullanan: "Using",
  Kullanılabilir: "Usable",
  Kullanım: "Usage",
  Kurulum: "Installation",
  Kurumsal: "Corporate",
  Lider: "Leader",
  Markalarımız: "Our Brands",
  Markası: "Brand",
  Merkezi: "Center",
  Merkezleri: "Centers",
  Miras: "Heritage",
  Mirası: "Heritage",
  Mirasını: "Heritage",
  Mükemmellik: "Excellence",
  Nasıl: "How",
  Nesil: "Generation",
  Noktaları: "Locations",
  Olan: "With",
  Ortağı: "Partner",
  Ortaklık: "Partnership",
  Özel: "Tailored",
  Pompası: "Pump",
  Proje: "Project",
  Projeniz: "Your Project",
  Reaktif: "Reactive",
  Sağlanır: "Provided",
  Sağlar: "Provides",
  Sahadayız: "In the Field",
  Sanayi: "Industry",
  Satış: "Sales",
  Seçenekleri: "Options",
  Seçimi: "Selection",
  Serileri: "Series",
  Servis: "Service",
  Sıcak: "Hot",
  Sıcaklıklı: "Temperature",
  Sınıfı: "Class",
  Sınırlı: "Limited",
  Sistemi: "System",
  Sistem: "System",
  Soğutma: "Cooling",
  Soğutmalı: "Cooled",
  Süreci: "Process",
  Süreklilik: "Continuity",
  Sürdürülebilir: "Sustainable",
  Sürdürülebilirlik: "Sustainability",
  Şarj: "Charging",
  Şebeke: "Grid",
  Şebekeye: "Grid",
  Şebekenin: "Grid",
  Taşıyın: "Carry",
  Taşınabilir: "Portable",
  Tasarruf: "Savings",
  Teknoloji: "Technology",
  Teknolojisi: "Technology",
  Temiz: "Clean",
  Tescilli: "Registered",
  Ticari: "Commercial",
  Toprak: "Ground",
  Türkiye: "Turkiye",
  Ulaşın: "Us",
  Uygulama: "Application",
  Üreticisi: "Manufacturer",
  Üretim: "Production",
  Ürün: "Product",
  Ürünleri: "Products",
  Ürünler: "Products",
  Verimli: "Efficient",
  Verimlilik: "Efficiency",
  Verimliliği: "Efficiency",
  Veri: "Data",
  Vizyonumuz: "Our Vision",
  Yaklaşım: "Approach",
  Yan: "Additional",
  Yap: "Log Out",
  Yaratan: "Creating",
  Yedek: "Backup",
  Yeni: "Next",
  Yerli: "Local",
  Yıllık: "Years of",
  Yıl: "Years",
  Yönetimi: "Management",
  Yük: "Load",
  Yüksek: "High",
};

const lowercaseWordTranslations: Record<string, string> = {
  acil: "emergency",
  ağ: "network",
  ağı: "network",
  akış: "flow",
  akışı: "flow",
  akıllı: "smart",
  alan: "area",
  alanı: "area",
  alanında: "in the field",
  alınır: "is captured",
  altında: "under",
  ana: "main",
  anında: "when needed",
  arıza: "fault",
  asla: "never",
  atık: "waste",
  bağımlılığını: "dependence",
  bağımsızlık: "independence",
  bağlantı: "connection",
  bakım: "maintenance",
  basınç: "pressure",
  batarya: "battery",
  bekleme: "waiting",
  beraber: "together",
  beri: "since",
  bile: "even",
  bilişim: "IT",
  binadan: "from the building",
  bir: "a",
  birimi: "unit",
  birim: "unit",
  birlikte: "together",
  bizimle: "with us",
  bugün: "today",
  büyük: "large",
  çalışır: "works",
  çalışma: "operation",
  çalışması: "work",
  çalışan: "working",
  çatısı: "roof",
  çevre: "environment",
  çevredeki: "ambient",
  çevreci: "green",
  çevrim: "cycle",
  çıkış: "outlet",
  çok: "very",
  çünkü: "because",
  çözüm: "solution",
  çözümleri: "solutions",
  çözümü: "solution",
  da: "also",
  daha: "more",
  de: "also",
  değer: "value",
  değeri: "value",
  değerlerimiz: "values",
  değil: "not",
  demir: "iron",
  depolama: "storage",
  depolanır: "is stored",
  destek: "support",
  desteği: "support",
  detayları: "details",
  devreye: "commissioning",
  dış: "outdoor",
  dijital: "digital",
  doğru: "right",
  doğalgaz: "natural gas",
  dön: "back",
  dönüş: "return",
  dönüşüm: "transformation",
  dönüşümü: "transformation",
  dönüşümünde: "in transformation",
  dönüşümünün: "transformation",
  dönüşümünüzde: "in your transformation",
  dönüşümünüzün: "your transformation",
  dönüştürülür: "is converted",
  düşük: "low",
  dünya: "world",
  dünyanın: "world's",
  dünyasının: "world",
  eden: "that",
  eder: "does",
  edelim: "let's",
  elde: "delivered",
  elektrik: "electricity",
  elektrikli: "electric",
  ekonomik: "economical",
  emer: "absorbs",
  enerji: "energy",
  enerjisi: "energy",
  enerjisini: "energy",
  enerjiyi: "energy",
  enerjiniz: "your energy",
  enerjinizin: "your energy",
  entegre: "integrated",
  erişilebilir: "accessible",
  esnekliği: "flexibility",
  et: "request",
  edilen: "delivered",
  faydalar: "benefits",
  faydaları: "benefits",
  fiyatları: "prices",
  fiyatlı: "priced",
  fosil: "fossil",
  geçin: "get",
  geleceğe: "future",
  geleceği: "future",
  gelecek: "future",
  genel: "head",
  geniş: "wide",
  geri: "back",
  gibi: "like",
  giderinde: "expense",
  göl: "lake",
  gönder: "send",
  göre: "according to",
  görüşme: "meeting",
  güç: "power",
  gücü: "power",
  güçlü: "strong",
  güven: "trust",
  güvencesi: "assurance",
  güvenli: "safe",
  güvenliği: "security",
  haber: "news",
  hakkımızda: "about us",
  haritası: "map",
  hassas: "precision",
  hata: "error",
  hava: "air",
  havuz: "pool",
  hem: "both",
  her: "every",
  hizmet: "service",
  hızlı: "fast",
  hücrelerde: "in cells",
  iç: "indoor",
  için: "for",
  ihtiyaca: "need",
  ihtiyacını: "need",
  ihtiyaç: "need",
  iki: "two",
  ile: "with",
  iletişim: "contact",
  iletişime: "contact",
  inşa: "build",
  incele: "view",
  iş: "business",
  işletmeler: "businesses",
  işleyiş: "operation",
  işte: "here",
  ısı: "heat",
  ısıtma: "heating",
  kalitesi: "quality",
  kanıtlanmış: "proven",
  kapasite: "capacity",
  kapsamı: "scope",
  karbon: "carbon",
  katmanı: "layer",
  katmanından: "layer",
  kaynaklı: "source",
  kaydırın: "scroll",
  keşfetmek: "explore",
  keşfedin: "discover",
  keşif: "survey",
  kesinti: "outage",
  kilit: "key",
  kondenser: "condenser",
  konfor: "comfort",
  konforu: "comfort",
  konut: "residential",
  konutlar: "homes",
  kontrol: "control",
  kurulum: "installation",
  kurumsal: "corporate",
  kullanılabilir: "usable",
  kullanım: "usage",
  kullanımı: "usage",
  lider: "leader",
  markalarımız: "our brands",
  markası: "brand",
  mekan: "outdoor",
  mekân: "outdoor",
  merkezi: "center",
  merkezleri: "centers",
  miras: "heritage",
  mirası: "heritage",
  mirasını: "heritage",
  mükemmellik: "excellence",
  nasıl: "how",
  ne: "what",
  neden: "why",
  nehir: "river",
  nesil: "generation",
  noktaları: "locations",
  olan: "with",
  olarak: "as",
  olmayan: "without",
  operasyon: "operation",
  oranda: "rate",
  ortam: "environment",
  ortama: "space",
  ortağı: "partner",
  ortaklığı: "partnership",
  ortaklık: "partnership",
  ölçekte: "scale",
  ölççeklenebilir: "scalable",
  özel: "tailored",
  pompası: "pump",
  portföyü: "portfolio",
  proje: "project",
  projeniz: "your project",
  reaktif: "reactive",
  saha: "field",
  sahada: "in the field",
  sahadayız: "in the field",
  sağlanır: "is provided",
  sağlar: "provides",
  sanayi: "industry",
  saray: "Saray",
  satış: "sales",
  seçenekleri: "options",
  seçimi: "selection",
  serileri: "series",
  servis: "service",
  sıcak: "hot",
  sıcaklığı: "temperature",
  sıcaklıklı: "temperature",
  sınıfı: "class",
  sınırlı: "limited",
  sistemi: "system",
  sistem: "system",
  soğutma: "cooling",
  soğutmalı: "cooled",
  solüsyon: "solution",
  sonrasında: "after",
  su: "water",
  süre: "time",
  süreci: "process",
  sürekli: "continuous",
  süreklilik: "continuity",
  sürdürülebilir: "sustainable",
  sürdürülebilirlik: "sustainability",
  şarj: "charging",
  şebeke: "grid",
  şebekeye: "grid",
  şebekenin: "grid",
  taçlanıyor: "is strengthened",
  talep: "request",
  taşıyın: "carry",
  taşınır: "moves",
  taşınabilir: "portable",
  tasarruf: "savings",
  teknoloji: "technology",
  teknolojisi: "technology",
  teknik: "technical",
  temiz: "clean",
  tescilli: "registered",
  ticari: "commercial",
  toprak: "ground",
  tüm: "all",
  türkiye: "Turkiye",
  ucuz: "low-cost",
  ulaşın: "us",
  uygun: "suitable",
  uygulama: "application",
  üreticisi: "manufacturer",
  üretim: "production",
  ürün: "product",
  ürünleri: "products",
  ürünler: "products",
  varan: "up to",
  ve: "and",
  veren: "providing",
  veri: "data",
  verimli: "efficient",
  verimlilik: "efficiency",
  verimliliği: "efficiency",
  vizyonumuz: "our vision",
  yakıt: "fuel",
  yaklaşım: "approach",
  yan: "additional",
  yaratan: "creating",
  yeni: "next",
  yerli: "local",
  yıl: "years",
  yılda: "per year",
  yıllık: "years of",
  yönetilir: "managed",
  yönetimi: "management",
  yük: "load",
  yüksek: "high",
  yüzde: "percent",
};

const turkishStemTranslations: Array<[string, string]> = [
  ["ağır", "heavy"],
  ["akıll", "smart"],
  ["akış", "flow"],
  ["alışveriş", "shopping"],
  ["ambalaj", "packaging"],
  ["arıza", "fault"],
  ["artır", "increase"],
  ["azalt", "reduce"],
  ["bağlant", "connection"],
  ["bağıml", "dependent"],
  ["bakım", "maintenance"],
  ["başar", "success"],
  ["batarya", "battery"],
  ["bilgisayar", "computer"],
  ["bilişim", "IT"],
  ["bina", "building"],
  ["birikim", "expertise"],
  ["birleştir", "combine"],
  ["borsa", "stock exchange"],
  ["boyler", "boiler"],
  ["bölge", "region"],
  ["buhar", "steam"],
  ["büyü", "grow"],
  ["cihaz", "device"],
  ["çalış", "operation"],
  ["çatı", "rooftop"],
  ["çevir", "convert"],
  ["çevre", "environment"],
  ["çıkış", "outlet"],
  ["çöz", "solution"],
  ["dahil", "included"],
  ["dayan", "durable"],
  ["değer", "value"],
  ["deneyim", "experience"],
  ["denge", "balance"],
  ["depol", "storage"],
  ["destek", "support"],
  ["devre", "commission"],
  ["değirmen", "mill"],
  ["değiş", "change"],
  ["dön", "return"],
  ["dönüş", "transformation"],
  ["düş", "low"],
  ["dünya", "world"],
  ["ekip", "team"],
  ["ekonom", "economical"],
  ["elektr", "electric"],
  ["emisyon", "emission"],
  ["enerji", "energy"],
  ["eriş", "access"],
  ["esnek", "flexible"],
  ["etkinlik", "event"],
  ["fark", "difference"],
  ["fatura", "bill"],
  ["fiyat", "price"],
  ["geçmiş", "past"],
  ["gelece", "future"],
  ["geniş", "wide"],
  ["gerilim", "voltage"],
  ["gerekl", "required"],
  ["gıda", "food"],
  ["göl", "lake"],
  ["gönder", "send"],
  ["gör", "view"],
  ["gürült", "noise"],
  ["güç", "power"],
  ["gün", "day"],
  ["güneş", "solar"],
  ["güven", "security"],
  ["hacim", "volume"],
  ["haber", "news"],
  ["hafif", "lightweight"],
  ["harca", "consume"],
  ["hassas", "precision"],
  ["hava", "air"],
  ["havuz", "pool"],
  ["hedef", "target"],
  ["hesap", "calculation"],
  ["hizmet", "service"],
  ["hız", "speed"],
  ["hücre", "cell"],
  ["ihtiyaç", "need"],
  ["iklim", "climate"],
  ["iklimlendirme", "climate control"],
  ["ileti", "contact"],
  ["imkân", "opportunity"],
  ["inovasyon", "innovation"],
  ["inşa", "build"],
  ["istasyon", "station"],
  ["işlet", "business"],
  ["işlem", "transaction"],
  ["ısı", "heat"],
  ["ısıt", "heating"],
  ["kalite", "quality"],
  ["kapasite", "capacity"],
  ["karbon", "carbon"],
  ["karşı", "meet"],
  ["katkı", "contribution"],
  ["kazan", "gain"],
  ["keş", "survey"],
  ["kesinti", "outage"],
  ["kısıt", "constraint"],
  ["kıyas", "comparison"],
  ["konfor", "comfort"],
  ["konut", "residential"],
  ["koru", "protect"],
  ["kullan", "use"],
  ["kur", "install"],
  ["kurulum", "installation"],
  ["kurumsal", "corporate"],
  ["küçült", "reduce"],
  ["küresel", "global"],
  ["lisans", "license"],
  ["lokasyon", "location"],
  ["maden", "mine"],
  ["maliyet", "cost"],
  ["marka", "brand"],
  ["merkez", "center"],
  ["mimar", "architecture"],
  ["miras", "heritage"],
  ["mühendis", "engineering"],
  ["müşteri", "customer"],
  ["nehr", "river"],
  ["nesil", "generation"],
  ["nokta", "location"],
  ["odak", "focus"],
  ["ölçek", "scale"],
  ["ömür", "life"],
  ["önle", "prevent"],
  ["operasyon", "operation"],
  ["ortak", "partner"],
  ["özel", "tailored"],
  ["parça", "component"],
  ["paz", "market"],
  ["perakende", "retail"],
  ["performans", "performance"],
  ["proje", "project"],
  ["proses", "process"],
  ["regülasyon", "regulation"],
  ["sağ", "provide"],
  ["saha", "field"],
  ["sanayi", "industry"],
  ["satış", "sales"],
  ["seç", "select"],
  ["senaryo", "scenario"],
  ["seri", "series"],
  ["servis", "service"],
  ["sertifika", "certificate"],
  ["sessiz", "silent"],
  ["sıcak", "hot"],
  ["sıfır", "zero"],
  ["sınıf", "class"],
  ["sınır", "limited"],
  ["sistem", "system"],
  ["soğut", "cooling"],
  ["süre", "time"],
  ["sürdür", "sustainable"],
  ["şarj", "charging"],
  ["şebeke", "grid"],
  ["taşı", "carry"],
  ["tasarruf", "savings"],
  ["teknik", "technical"],
  ["teknoloji", "technology"],
  ["temiz", "clean"],
  ["tescil", "registered"],
  ["tesis", "facility"],
  ["ticari", "commercial"],
  ["toprak", "ground"],
  ["tüket", "consumption"],
  ["türk", "Turkish"],
  ["uçtan", "end-to-end"],
  ["ulaş", "reach"],
  ["uygul", "application"],
  ["uyum", "compliance"],
  ["uzak", "remote"],
  ["uzman", "expert"],
  ["üret", "production"],
  ["ürün", "product"],
  ["veri", "data"],
  ["verim", "efficiency"],
  ["villa", "villa"],
  ["vizyon", "vision"],
  ["yakıt", "fuel"],
  ["yaklaş", "approach"],
  ["yaşam", "life"],
  ["yatırım", "investment"],
  ["yedek", "backup"],
  ["yenilenebilir", "renewable"],
  ["yerli", "local"],
  ["yeşil", "green"],
  ["yıl", "year"],
  ["yön", "direction"],
  ["yük", "load"],
  ["yüksek", "high"],
];

const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
let isApplyingTranslation = false;

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function withOriginalSpacing(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceWholePhrase(value: string, source: string, target: string) {
  const letter = "A-Za-z0-9ÇĞİÖŞÜçğıöşü";
  const pattern = new RegExp(`(^|[^${letter}])(${escapeRegExp(source)})(?=$|[^${letter}])`, "g");
  return value.replace(pattern, (_match, prefix: string) => `${prefix}${target}`);
}

function replaceKnownPhrases(value: string) {
  let translated = value;
  const sources = { ...phraseTranslations, ...exactTranslations };
  for (const [source, target] of Object.entries(sources).sort(([a], [b]) => b.length - a.length)) {
    translated = replaceWholePhrase(translated, source, target);
  }
  return translated;
}

function replaceKnownWords(value: string) {
  return value.replace(/[A-Za-zÇĞİÖŞÜçğıöşü'’]+/g, (word) => {
    const clean = word.replace(/^['’]+|['’]+$/g, "");
    const lowered = clean.toLocaleLowerCase("tr-TR");
    const stem = turkishStemTranslations.find(([source]) => lowered.startsWith(source));
    return wordTranslations[clean] ?? lowercaseWordTranslations[lowered] ?? stem?.[1] ?? word;
  });
}

function cleanupEnglish(value: string) {
  return value
    .replace(/\bYearslık\b/g, "Years of")
    .replace(/\bYıllık\b/g, "Years of")
    .replace(/\bTürkiye\b/g, "Turkiye")
    .replace(/\bIsı\b/g, "Heat")
    .replace(/\bPompası\b/g, "Pump")
    .replace(/\bÇözüm\b/g, "Solution")
    .replace(/\bOrtağı\b/g, "Partner")
    .replace(/\bEnerji\b/g, "Energy")
    .replace(/\s+/g, " ")
    .trim();
}

function shouldSkipValue(value: string) {
  const normalized = normalizeText(value);
  return (
    !normalized ||
    normalized.includes("@") ||
    /^https?:\/\//i.test(normalized) ||
    /^[\d\s.,:+/%-]+$/.test(normalized)
  );
}

function translateValue(value: string) {
  const normalized = normalizeText(value);
  if (shouldSkipValue(normalized)) return value;

  const exact = exactTranslations[normalized] ?? phraseTranslations[normalized];
  if (exact) return withOriginalSpacing(value, exact);

  let translated = replaceKnownPhrases(normalized);
  translated = replaceKnownWords(translated);
  translated = cleanupEnglish(translated);

  return translated === normalized ? value : withOriginalSpacing(value, translated);
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;
  if (!parent) return true;
  return ["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"].includes(parent.tagName);
}

function applyNodeValue(node: Text, value: string) {
  if (node.nodeValue === value) return;
  isApplyingTranslation = true;
  node.nodeValue = value;
  window.queueMicrotask(() => {
    isApplyingTranslation = false;
  });
}

function translateTextNode(node: Text, refreshSource = false) {
  if (shouldSkipNode(node)) return;
  if (!originalText.has(node) || refreshSource) originalText.set(node, node.nodeValue ?? "");
  const source = originalText.get(node) ?? "";
  applyNodeValue(node, translateValue(source));
}

function restoreTextNode(node: Text) {
  const source = originalText.get(node);
  if (source !== undefined) node.nodeValue = source;
}

function translateAttributes(element: Element) {
  const attrs = ["placeholder", "aria-label", "title", "alt"];
  for (const attr of attrs) {
    const value = element.getAttribute(attr);
    if (!value) continue;
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = new Map();
      originalAttributes.set(element, originals);
    }
    if (!originals.has(attr)) originals.set(attr, value);
    const translated = translateValue(originals.get(attr) ?? value);
    if (element.getAttribute(attr) !== translated) {
      isApplyingTranslation = true;
      element.setAttribute(attr, translated);
      window.queueMicrotask(() => {
        isApplyingTranslation = false;
      });
    }
  }
}

function restoreAttributes(element: Element) {
  const originals = originalAttributes.get(element);
  if (!originals) return;
  for (const [attr, value] of originals) {
    element.setAttribute(attr, value);
  }
}

function walk(root: ParentNode, visitor: (node: Text) => void, attrVisitor: (element: Element) => void) {
  if (root instanceof Element) attrVisitor(root);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let node = walker.nextNode();
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      visitor(node as Text);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      attrVisitor(node as Element);
    }
    node = walker.nextNode();
  }
}

export function applyAutoTranslation(lang: Language) {
  if (typeof document === "undefined" || !document.body) return;

  if (lang === "en") {
    walk(document.body, translateTextNode, translateAttributes);
    return;
  }

  walk(document.body, restoreTextNode, restoreAttributes);
}

export function observeAutoTranslation(lang: Language) {
  if (typeof document === "undefined" || !document.body || lang !== "en") return () => {};

  const observer = new MutationObserver((mutations) => {
    if (isApplyingTranslation) return;

    for (const mutation of mutations) {
      if (mutation.type === "characterData" && mutation.target.nodeType === Node.TEXT_NODE) {
        translateTextNode(mutation.target as Text, true);
        continue;
      }

      if (mutation.type === "attributes" && mutation.target.nodeType === Node.ELEMENT_NODE) {
        const element = mutation.target as Element;
        const attr = mutation.attributeName;
        if (attr && ["placeholder", "aria-label", "title", "alt"].includes(attr)) {
          const originals = originalAttributes.get(element);
          const current = element.getAttribute(attr);
          if (current && originals) originals.set(attr, current);
          translateAttributes(element);
        }
        continue;
      }

      for (const node of Array.from(mutation.addedNodes)) {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text);
        if (node.nodeType === Node.ELEMENT_NODE) {
          walk(node as Element, translateTextNode, translateAttributes);
        }
      }
    }

    window.requestAnimationFrame(() => applyAutoTranslation("en"));
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["placeholder", "aria-label", "title", "alt"],
    childList: true,
    characterData: true,
    subtree: true,
  });

  return () => observer.disconnect();
}
