import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Building2,
  Factory,
  Home,
} from "lucide-react";

export type ProductInfo = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  specs: string[];
  icon?: LucideIcon;
};

export const bessProducts: ProductInfo[] = [
  {
    slug: "konut-tipi-bess",
    title: "Konut Tipi BESS",
    category: "Ev ve site projeleri",
    image: "/images/residential-solutions.png",
    summary: "Çatı GES, elektrikli araç şarjı ve kritik ev yükleriyle entegre depolama.",
    description:
      "Konut tipi BESS, güneş enerjisinden üretilen elektriği depolayarak kesintilerde yedek güç sağlar ve gündüz üretilen enerjinin akşam saatlerinde kullanılmasına imkan verir.",
    specs: ["Çatı GES ile uyum", "Kesinti yedekleme", "EV şarj entegrasyonu"],
    icon: Home,
  },
  {
    slug: "ticari-kabinet-bess",
    title: "Ticari Kabinet BESS",
    category: "Ticari işletmeler",
    image: "/images/e9551124-2722-4454-bf42-e6d7ff187aec.png",
    summary: "AVM, otel, plaza ve perakende operasyonları için kompakt enerji depolama.",
    description:
      "Ticari kabinet BESS; pik yük azaltma, arbitraj, jeneratör ikamesi ve güç kalitesi ihtiyaçları için modüler bir enerji depolama altyapısı sunar.",
    specs: ["Pik yük yönetimi", "Jeneratör ikamesi", "Modüler kapasite"],
    icon: Building2,
  },
  {
    slug: "konteyner-tipi-bess",
    title: "Konteyner Tipi BESS",
    category: "Sanayi ve enerji santralleri",
    image: "/images/business-scenario.png",
    summary: "Sanayi tesisleri ve şebeke ölçekli projeler için yüksek kapasiteli çözüm.",
    description:
      "Konteyner tipi BESS, yüksek kapasiteli batarya, güç dönüşüm sistemi ve güvenlik altyapısını tek entegre yapıda sunarak sanayi ve santral projelerinde esnek kullanım sağlar.",
    specs: ["Yüksek kapasite", "Sıvı soğutma opsiyonu", "Şebeke ölçekli kullanım"],
    icon: Factory,
  },
  {
    slug: "mobil-bess",
    title: "Mobil BESS",
    category: "Sınırlı şebeke ve geçici güç",
    image: "/images/limited-grid-event.png",
    summary: "Şebekeye uzak veya kısıtlı noktalarda taşınabilir temiz güç.",
    description:
      "Mobil BESS, etkinlik, maden sahası, şarj ağı ve geçici operasyon noktalarında jeneratöre alternatif sessiz ve düşük emisyonlu güç sağlar.",
    specs: ["Taşınabilir yapı", "Hızlı devreye alma", "Geçici güç uygulamaları"],
    icon: BatteryCharging,
  },
];

export const heatPumpProducts: ProductInfo[] = [
  {
    slug: "thermaplus-up-serisi",
    title: "Thermaplus Up Serisi",
    category: "Konut serisi",
    image: "/images/SARAY ENERJİ 1.png",
    summary: "EVI DC inverter yapı, R32 soğutucu akışkan, A+++ ERP, LCD kontrol paneli ve Wi-Fi.",
    description:
      "Thermaplus Up Serisi EVI DC Inverter ısı pompaları çok amaçlı bir ısıtma, soğutma ve kullanım sıcak suyu cihazıdır. Çevre dostu R32 soğutucu akışkanı, uygun maliyetli EVI tam frekans dönüştürme teknolojisiyle birleştirir ve özellikle -30 °C'ye kadar soğuk bölgelerde kararlı şekilde çalışabilir. A+++ ERP enerji etiketi, renkli LCD kontrol paneli, ücretsiz Wi-Fi ve 0.1 °C hassas sıcaklık kontrolüyle akıllı ev deneyimini destekler.",
    specs: [
      "EVI DC inverter teknoloji",
      "Isıtma, soğutma ve kullanım sıcak suyu",
      "Çevre dostu R32 soğutucu akışkan",
      "-30 °C'ye kadar kararlı çalışma",
      "A+++ ERP enerji etiketi",
      "Renkli LCD kontrol paneli",
      "Ücretsiz Wi-Fi",
      "0.1 °C hassas sıcaklık kontrolü",
    ],
  },
  {
    slug: "thermaplus-fuzzy-serisi",
    title: "Thermaplus Fuzzy Serisi",
    category: "Konut serisi",
    image: "/images/SARAY ENERJİ 2.png",
    summary: "Monoblok gövde, dış mekanda kurulum, inverter teknoloji ve otomatik konfor kontrolü.",
    description:
      "Thermaplus Fuzzy Serisi, tüm ekipmanların tek bir gövdede toplandığı monoblok yapısıyla dış mekana monte edilir ve iç mekanda kullanıcıya yer kazandırır. İhtiyaçlara ve montaj şekline göre geniş erişim yelpazesiyle özel bağlantı seçenekleri sunar. Inverter teknolojisi enerji tüketimini kontrol etmeye yardımcı olurken, verimli kontrol sistemi maksimum konfor için iç ortam iklimini otomatik olarak ayarlar ve elektrik tüketimini minimuma indirir.",
    specs: [
      "Monoblok dış mekan kurulumu",
      "İç mekanda yer kazandıran yapı",
      "Geniş bağlantı seçenekleri",
      "Inverter teknoloji",
      "Otomatik iç ortam iklim kontrolü",
      "Minimum elektrik tüketimi odaklı verimli kontrol",
    ],
  },
  {
    slug: "thermaplus-plus-serisi",
    title: "Thermaplus Plus Serisi",
    category: "Endüstriyel seri",
    image: "/images/SARAY ENERJİ 3.png",
    summary: "Yüksek sıcaklık ve EVI teknolojisiyle 80 °C'ye kadar endüstriyel sıcak su.",
    description:
      "Thermaplus Plus Serisi, yüksek sıcaklık teknolojisi ve EVI teknolojisini kullanan sıcak su ısı pompası serisidir. -5 °C ile 43 °C ortam sıcaklığı aralığında, 80 °C'ye kadar çıkış suyu sıcaklıklarında istikrarlı şekilde çalışabilir. Düşük işletme maliyetiyle mezbahalar, elektrokaplama tesisleri, baskı ve boyama tesisleri, kimya, ilaç ve su ürünleri endüstrilerinin yüksek sıcaklıktaki su ihtiyaçlarını karşılamak üzere konumlandırılır.",
    specs: [
      "Yüksek sıcaklık teknolojisi",
      "EVI teknoloji",
      "-5 °C ile 43 °C ortam sıcaklığında çalışma",
      "80 °C'ye kadar çıkış suyu sıcaklığı",
      "Düşük işletme maliyeti",
      "Mezbaha, elektrokaplama, baskı-boyama, kimya, ilaç ve su ürünleri uygulamaları",
    ],
  },
  {
    slug: "thermaplus-silent-pool-serisi",
    title: "Thermaplus Silent Pool Serisi",
    category: "Havuz serisi",
    image: "/images/SARAY ENERJİ  4.png",
    summary: "15 m3 ile 100 m3 arası havuzlar için korozyona dayanıklı sessiz havuz ısı pompası.",
    description:
      "Thermaplus Silent Pool Serisi, özellikle kıyı ülkeleri veya bölgelerindeki müşteriler için tasarlanmış havuz ısı pompası serisidir. Yeni görünüm seçenekleriyle zorlu çalışma koşullarında korozyona karşı dayanıklıdır ve 15 m3 ile 100 m3 arasındaki yüzme havuzları için uygundur.",
    specs: [
      "15 m3 ile 100 m3 arası havuzlar",
      "Korozyona dayanıklı yapı",
      "Kıyı bölgeleri için uygun tasarım",
      "Sessiz havuz ısıtma",
      "Villa ve konut havuzu uygulamaları",
    ],
  },
  {
    slug: "thermaplus-commercial-sicak-su",
    title: "Thermaplus Commercial Sıcak Su Serisi",
    category: "Endüstriyel seri",
    image: "/images/SARAY  ENERJİ 5.png",
    summary: "R410A soğutucu akışkanlı ticari sıcak su ısı pompası serisi.",
    description:
      "Thermaplus Commercial Sıcak Su Serisi, ticari ve endüstriyel yapılarda sürekli sıcak su ihtiyacını verimli şekilde karşılamak üzere konumlandırılır. Bu seride çevre dostu bir soğutucu akışkan olan R410A kullanılmaktadır.",
    specs: [
      "Ticari sıcak su uygulamaları",
      "R410A soğutucu akışkan",
      "Sürekli sıcak su ihtiyacı",
      "Otel, işletme ve tesis kullanımı",
      "Verimli sıcak su üretimi",
    ],
  },
  {
    slug: "thermaplus-commercial-duo",
    title: "Thermaplus Commercial Duo Serisi",
    category: "Endüstriyel seri",
    image: "/images/SARAY ENERJİ 6 .png",
    summary: "R410A soğutucu akışkan, 24 saat 55 °C sıcak su ve EVI teknolojisi.",
    description:
      "Thermaplus Commercial Duo Serisi, ev ve iş ortamlarında hijyenik sıcak su ihtiyacı için tercih edilen ticari ısı pompası serisidir. Çevre dostu R410A soğutucu akışkan kullanır, günün 24 saati sürekli olarak 55 °C sıcak su sağlayabilir ve EVI teknolojisi sayesinde -25 °C'nin üzerindeki ortam sıcaklıklarında etkili şekilde çalışır.",
    specs: [
      "R410A soğutucu akışkan",
      "Hijyenik sıcak su ihtiyacı",
      "Ev ve iş ortamları için kullanım",
      "24 saat sürekli 55 °C sıcak su",
      "EVI teknolojisi",
      "-25 °C üzerindeki ortam sıcaklıklarında etkili çalışma",
    ],
  },
  {
    slug: "thermaplus-bcp",
    title: "Thermaplus BCP Isı Pompası",
    category: "Sıcak su serisi",
    image: "/images/SARAY  ENERJİ 7.png",
    summary: "Boyler uyumlu, yüksek COP değerli, 55 °C'ye kadar sıcak su sağlayan BCP çözümü.",
    description:
      "Thermaplus BCP Isı Pompası, kullanım sıcak suyu üretimi için yüksek verimli bir cihazdır. Cihaz tasarımı sayesinde yeni veya mevcut herhangi bir boylere bağlanabilir. Su ısıtma sırasında çıkan soğuk hava, uygun projelerde bir ortamın soğutulmasında kullanılabilir. İç kısmında hazır bulunan sirkülasyon pompası sayesinde su hattının kolay ve hızlı montajlanmasına yardımcı olur.",
    specs: [
      "Kullanım sıcak suyu üretimi",
      "Yeni veya mevcut boylerlere bağlantı",
      "Su ısıtma sırasında çıkan soğuk havayı soğutmada kullanabilme",
      "Dahili sirkülasyon pompası",
      "Kolay ve hızlı su hattı montajı",
      "Yüksek COP değerleri",
      "55 °C'ye kadar sıcak su",
      "Bütün boylerler ile uyum",
    ],
  },
  {
    slug: "thermaplus-all",
    title: "Thermaplus All Serisi",
    category: "Sıcak su serisi",
    image: "/images/SARAY  ENERJİ 8.png",
    summary: "Ortam havasıyla kullanım sıcak suyu sağlayan, 75 °C'ye kadar sıcak su üreten kompakt çözüm.",
    description:
      "Thermaplus All Serisi, ortam havasını kullanarak kullanım sıcak suyu sağlayan kompakt ve yüksek verimli bir ısı pompası çözümüdür. Tank dayanıklılığını destekleyen korozyon önleyici magnezyum çubuk, yüksek kalınlıkta poliüretan köpük ısı yalıtımı, ABS kasa, akustik izolasyonlu üst plastik kapak ve yeni nesil dijital ekran ile konforlu kullanım sunar.",
    specs: [
      "Ortam havasıyla kullanım sıcak suyu",
      "Korozyon önleyici magnezyum çubuk",
      "Yüksek kalınlıkta PU ısı yalıtımı",
      "ABS kasa",
      "Akustik izolasyonlu üst plastik kapak",
      "R134A soğutucu akışkan",
      "Yüksek verimli kompresör",
      "75 °C'ye kadar sıcak su",
      "Harici elektrikli ısıtıcı",
      "Elektronik genleşme valfi kontrolü",
      "Yeni nesil dijital ekran",
    ],
  },
  {
    slug: "thermaplus-commercial-pool",
    title: "Thermaplus Commercial Pool Serisi",
    category: "Havuz serisi",
    image: "/images/SARAY ENERJİ 9.png",
    summary: "Ticari havuz uygulamaları için yüksek verimli, dijital kontrollü ısı pompası çözümü.",
    description:
      "Thermaplus Commercial Pool Serisi, ticari havuz uygulamalarında verimli sıcak su ve havuz ısıtma ihtiyacını karşılamak üzere konumlandırılır. Ortam havasından yararlanarak su ısıtma sağlar; yüksek verimli kompresör, elektronik genleşme valfi kontrolü ve yeni nesil dijital ekran ile pratik kullanım sunar.",
    specs: [
      "Ticari havuz uygulamaları",
      "Ortam havasından yararlanarak su ısıtma",
      "Korozyon önleyici magnezyum çubuk",
      "Yüksek kalınlıkta PU ısı yalıtımı",
      "ABS kasa",
      "Akustik izolasyonlu üst plastik kapak",
      "R134A soğutucu akışkan",
      "Yüksek verimli kompresör",
      "75 °C'ye kadar sıcak su",
      "Harici elektrikli ısıtıcı",
      "Elektronik genleşme valfi kontrolü",
      "Yeni nesil dijital ekran",
    ],
  },
];
