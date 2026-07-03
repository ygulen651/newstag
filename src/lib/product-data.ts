import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Box,
  Container,
  Home,
  PackageOpen,
} from "lucide-react";

export type ProductInfo = {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageFit?: "cover" | "contain";
  summary: string;
  description: string;
  specs: string[];
  options?: string[];
  icon?: LucideIcon;
};

export const bessProducts: ProductInfo[] = [
  {
    slug: "ev-tipi-bess",
    title: "Ev Tipi Enerji Depolama",
    category: "Konut çözümleri",
    image: "/images/products/bess-ev-tipi.png",
    imageFit: "contain",
    summary:
      "Güneş panelinden veya ucuz tarifeden depolanan enerjiyle elektrik maliyetini düşüren, kesintilere karşı koruyan modüler ev bataryası.",
    description:
      "Ev tipi Inspur enerji depolama cihazları; çatı GES üretimini veya düşük tarifeli saatlerde şebekeden alınan enerjiyi depolayarak konutların elektrik maliyetini azaltır, kesinti anında kritik yükleri besler. Estetik ve kompakt gövdesi, modüler büyütülebilir tasarımı sayesinde hem iç hem dış mekân kurulumuna uygundur; mobil uygulama üzerinden uzaktan izlenir ve yönetilir.",
    specs: [
      "Estetik ve kompakt tasarım",
      "Modüler büyütülebilir yapı",
      "İç ve dış mekân kurulumuna uygunluk",
      "Wi-Fi ve Bluetooth desteği",
      "Mobil uygulamadan kontrol",
      "Entegre kendini ısıtma fonksiyonu",
      "Şebeke ve PV ile hibrit çalışma",
    ],
    options: ["5 kWh", "10 kWh"],
    icon: Home,
  },
  {
    slug: "tasinabilir-bess",
    title: "Taşınabilir Enerji Depolama",
    category: "Mobil güç çözümleri",
    image: "/images/limited-grid-event.png",
    summary:
      "Dış mekân etkinlikleri ve acil durum senaryoları için kompakt, hafif ve çok işlevli taşınabilir güç kaynağı.",
    description:
      "Taşınabilir Inspur enerji depolama cihazları, elektriğe erişimin olmadığı her noktada temiz ve sessiz güç sağlar. Kompakt ve hafif tasarımı ile kamp, etkinlik, saha çalışması ve acil durum senaryoları için idealdir; güvenli ve stabil çalışma yapısı ile çok işlevli arayüz sunar.",
    specs: [
      "Kompakt ve hafif tasarım",
      "Dış mekân etkinlikleri için ideal",
      "Acil durum yedek gücü",
      "Çevre dostu ve sessiz çalışma",
      "Güvenli ve stabil güç çıkışı",
      "Çok işlevli arayüz",
    ],
    options: ["1 kWh", "2 kWh"],
    icon: PackageOpen,
  },
  {
    slug: "sivi-sogutmali-kabinet-bess",
    title: "Dış Mekân Sıvı Soğutmalı Kabinet BESS",
    category: "Sanayi ve ticari işletmeler",
    image: "/images/products/bess-kabinet.png",
    imageFit: "contain",
    summary:
      "Sanayi ve ticari tesisler için tak-çalıştır, tek kabinde entegre, paralel bağlantıyla sınırsız büyüyen enerji depolama.",
    description:
      "Dış mekân sıvı soğutmalı Inspur kabinet BESS; batarya, BMS, EMS, PCS, yangın koruma, güç dağıtım ve termal yönetim sistemlerini tek kabinde birleştiren tak-çalıştır bir enerji depolama çözümüdür. Güç tüketiminize, fiziksel alanınıza ve kullanım ihtiyaçlarınıza göre ölçeklenir; paralel bağlantı ile kapasite sınırsız artırılabilir. 8.000'in üzerinde çevrim ömrü ve 314 Ah yeni nesil pil teknolojisiyle operasyonel süreklilik ve tasarruf sunar.",
    specs: [
      "Tak-çalıştır entegre tasarım: batarya, BMS, EMS, PCS, yangın koruma, güç dağıtımı ve termal yönetim tek kabinde",
      "Paralel bağlantı ile sınırsız kapasite artırımı",
      "8.000+ çevrim ile uzun yaşam ömrü",
      "314 Ah yeni nesil pil teknolojisi",
      "Akıllı yönetim sistemi ile maksimum verim, minimum kesinti",
      "İnsansız çalışma olanağı",
      "Geniş uygulama alanı",
    ],
    options: ["50 kW / 100 kWh", "100 kW / 233 kWh", "125 kW / 261 kWh"],
    icon: BatteryCharging,
  },
  {
    slug: "flexcube-konteyner-bess",
    title: "FlexCube Konteyner Tipi BESS",
    category: "Sınırlı şebeke ve off-grid",
    image: "/images/products/bess-flexcube.png",
    imageFit: "contain",
    summary:
      "Şebeke olmayan veya ani güç isteyen noktalar için 10 ft entegre, şarj et & taşı yapısına uygun tak-çalıştır çözüm.",
    description:
      "FlexCube, şebekenin olmadığı veya yetersiz kaldığı noktalarda devreye giren 10 ft entegre ve hafif tasarımlı bir konteyner BESS çözümüdür. İnşaat alanları, maden sahaları, petrol/gaz sahaları ve etkinlik alanları için idealdir; modüler tasarımı ile sınırsız genişler, jeneratör yakıt maliyetinden tasarruf sağlar ve zorlu dış koşullara karşı yüksek koruma sunar.",
    specs: [
      "10 ft entegre hafif tasarım",
      "Modüler tasarım ile sınırsız genişleme",
      "Şebeke olmayan noktalarda off-grid çözüm",
      "İnşaat, maden, petrol/gaz sahaları ve etkinlikler için ideal",
      "Jeneratör yakıt maliyetinden tasarruf",
      "Şarj et & taşı yapısına uygunluk",
      "Zorlu dış koşullara karşı yüksek koruma",
      "Entegre tasarım: batarya, BMS, EMS, PCS, yangın koruma, güç dağıtımı ve termal yönetim",
    ],
    options: ["250 kW (286 kWh / 143 kWh)", "500 kW (430 kWh / 234 kWh)"],
    icon: Box,
  },
  {
    slug: "konteyner-tipi-bess",
    title: "20 ft Konteyner Tipi BESS",
    category: "Enerji santralleri ve şebeke ölçeği",
    image: "/images/products/bess-konteyner.png",
    imageFit: "contain",
    summary:
      "Santral, şebeke ve yüksek güç ihtiyacı olan tesisler için MWh sınıfı, sıvı soğutmalı, modüler enerji depolama.",
    description:
      "20 ft (6 metre) konteyner boyutundaki Inspur BESS, yüksek güç ihtiyacı olan üretim tesisleri, santraller ve şebeke ölçekli projeler için enerji güvenliği ve tasarruf sağlar. Ürün ömrünü %15'e kadar artıran sıvı soğutma, 8.000'in üzerinde çevrim ömrü ve 314 Ah yeni nesil pil teknolojisiyle (600+ Ah teknolojisine uygun altyapı) modüler paralel tasarım sayesinde sınırsız genişleyebilir. Batarya, BMS, EMS, PCS, yükseltici trafo, yangın koruma, güç dağıtım ve termal yönetim sistemleri tek yapıda entegre edilmiştir.",
    specs: [
      "20 ft (6 metre) konteyner boyutu",
      "Santral, şebeke ve sanayi için ideal çözüm",
      "Modüler paralel tasarım ile sınırsız genişleme",
      "Ürün ömrünü %15'e kadar artıran sıvı soğutma",
      "8.000+ çevrim ile uzun yaşam ömrü",
      "314 Ah yeni nesil pil teknolojisi (600+ Ah'e uygun)",
      "Zorlu dış koşullara uygun yüksek koruma",
      "Entegre tasarım: batarya, BMS, EMS, PCS, yükseltici trafo, yangın koruma, güç dağıtımı ve termal yönetim",
    ],
    options: ["2,5 MW / 5 MWh (0,5C)", "2,6 MW / 2,6 MWh (1C)"],
    icon: Container,
  },
];

export const heatPumpCategories = [
  "Konut Serileri",
  "Havuz Serileri",
  "Endüstriyel Seriler",
] as const;

export const heatPumpProducts: ProductInfo[] = [
  {
    slug: "thermaplus-up-serisi",
    title: "Thermaplus Up Serisi",
    category: "Konut Serileri",
    image: "/images/SARAY ENERJİ 1.png",
    imageFit: "contain",
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
    category: "Konut Serileri",
    image: "/images/SARAY ENERJİ 2.png",
    imageFit: "contain",
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
    slug: "thermaplus-bcp",
    title: "Thermaplus BCP Isı Pompası",
    category: "Konut Serileri",
    image: "/images/SARAY  ENERJİ 7.png",
    imageFit: "contain",
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
    category: "Konut Serileri",
    image: "/images/SARAY  ENERJİ 8.png",
    imageFit: "contain",
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
    slug: "thermaplus-silent-pool-serisi",
    title: "Thermaplus Silent Pool Serisi",
    category: "Havuz Serileri",
    image: "/images/SARAY ENERJİ  4.png",
    imageFit: "contain",
    summary: "15 m³ ile 100 m³ arası havuzlar için korozyona dayanıklı sessiz havuz ısı pompası.",
    description:
      "Thermaplus Silent Pool Serisi, özellikle kıyı ülkeleri veya bölgelerindeki müşteriler için tasarlanmış havuz ısı pompası serisidir. Yeni görünüm seçenekleriyle zorlu çalışma koşullarında korozyona karşı dayanıklıdır ve 15 m³ ile 100 m³ arasındaki yüzme havuzları için uygundur.",
    specs: [
      "15 m³ ile 100 m³ arası havuzlar",
      "Korozyona dayanıklı yapı",
      "Kıyı bölgeleri için uygun tasarım",
      "Sessiz havuz ısıtma",
      "Villa ve konut havuzu uygulamaları",
    ],
  },
  {
    slug: "thermaplus-commercial-pool",
    title: "Thermaplus Commercial Pool Serisi",
    category: "Havuz Serileri",
    image: "/images/SARAY ENERJİ 9.png",
    imageFit: "contain",
    summary: "500 m³'e kadar ticari havuzlar için yüksek verimli, dijital kontrollü ısı pompası çözümü.",
    description:
      "Thermaplus Commercial Pool Serisi, ticari havuz uygulamalarında verimli sıcak su ve havuz ısıtma ihtiyacını karşılamak üzere konumlandırılır. -25 °C'ye kadar ortam sıcaklıklarında çalışabilir, 500 m³'e kadar havuzlarda kullanılabilir; yüksek verimli kompresör, elektronik genleşme valfi kontrolü ve yeni nesil dijital ekran ile pratik kullanım sunar.",
    specs: [
      "500 m³'e kadar ticari havuz uygulamaları",
      "-25 °C ortam sıcaklığında çalışma",
      "Ortam havasından yararlanarak su ısıtma",
      "Korozyon önleyici magnezyum çubuk",
      "Yüksek kalınlıkta PU ısı yalıtımı",
      "Yüksek verimli kompresör",
      "Elektronik genleşme valfi kontrolü",
      "Yeni nesil dijital ekran",
    ],
  },
  {
    slug: "thermaplus-plus-serisi",
    title: "Thermaplus Plus Serisi",
    category: "Endüstriyel Seriler",
    image: "/images/SARAY ENERJİ 3.png",
    imageFit: "contain",
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
    slug: "thermaplus-commercial-sicak-su",
    title: "Thermaplus Commercial Sıcak Su Serisi",
    category: "Endüstriyel Seriler",
    image: "/images/SARAY  ENERJİ 5.png",
    imageFit: "contain",
    summary: "R410A soğutucu akışkanlı, otel ve tesisler için ticari sıcak su ısı pompası serisi.",
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
    category: "Endüstriyel Seriler",
    image: "/images/SARAY ENERJİ 6 .png",
    imageFit: "contain",
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
];
