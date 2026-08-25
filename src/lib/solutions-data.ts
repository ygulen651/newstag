import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Building2,
  Cable,
  Cpu,
  Factory,
  Gauge,
  Home,
  Hotel,
  Leaf,
  LineChart,
  MapPin,
  Music,
  PlugZap,
  Power,
  Server,
  ShieldCheck,
  ShoppingBag,
  Store,
  Sun,
  ThermometerSun,
  Waves,
  WifiOff,
  Wind,
  Zap,
} from "lucide-react";

export type SolutionBenefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type SolutionSegment = {
  icon: LucideIcon;
  title: string;
  desc: string;
  image?: string;
  thumbnail?: string;
};

export type SolutionProduct = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  image: string;
};

export type Solution = {
  slug: string;
  title: string;
  navTitle: string;
  icon: LucideIcon;
  image: string;
  shortDesc: string;
  intro: string[];
  highlight: string;
  segmentsTitle?: string;
  segments?: SolutionSegment[];
  whyBess?: SolutionBenefit[];
  whyHeatPump?: SolutionBenefit[];
  products: SolutionProduct[];
};

const bessContainerProduct: SolutionProduct = {
  eyebrow: "Enerji Depolama",
  title: "Inspur 20 ft Konteyner Tipi BESS",
  desc: "Santral, şebeke ve sanayi ölçeği için sıvı soğutmalı, MWh sınıfı, modüler enerji depolama çözümü.",
  href: "/bess/konteyner-tipi-bess",
  image: "/images/products/bess-konteyner.png",
};

const bessCabinetProduct: SolutionProduct = {
  eyebrow: "Enerji Depolama",
  title: "Inspur Sıvı Soğutmalı Kabinet BESS",
  desc: "Sanayi ve ticari işletmeler için tak-çalıştır, tek kabinde entegre, paralel bağlantıyla büyüyen çözüm.",
  href: "/bess/sivi-sogutmali-kabinet-bess",
  image: "/images/products/bess-kabinet.png",
};

const bessFlexCubeProduct: SolutionProduct = {
  eyebrow: "Enerji Depolama",
  title: "Inspur FlexCube Konteyner BESS",
  desc: "Şebeke olmayan veya kısıtlı noktalar için 10 ft, şarj et & taşı yapısına uygun off-grid çözüm.",
  href: "/bess/flexcube-konteyner-bess",
  image: "/images/products/bess-flexcube.png",
};

const limitedGridFlexCubeProduct: SolutionProduct = {
  eyebrow: "Sınırlı Şebeke ve Off-Grid",
  title: "FlexCube Konteyner Tipi BESS",
  desc: "Şebeke olmayan veya ani güç isteyen noktalar için 10 ft entegre, şarj et & taşı yapısına uygun tak-çalıştır çözüm.",
  href: "/bess/flexcube-konteyner-bess",
  image: "/images/limited-grid-quarry.png",
};

const portableBessProduct: SolutionProduct = {
  eyebrow: "Mobil Güç Çözümleri",
  title: "Taşınabilir Enerji Depolama",
  desc: "Dış mekân etkinlikleri ve acil durum senaryoları için kompakt, hafif ve çok işlevli taşınabilir güç kaynağı.",
  href: "/bess/tasinabilir-bess",
  image: "/images/limited-grid-event.png",
};

const bessHomeProduct: SolutionProduct = {
  eyebrow: "Enerji Depolama",
  title: "Inspur Ev Tipi Enerji Depolama",
  desc: "Çatı GES, elektrikli araç şarjı ve kritik ev yükleriyle entegre çalışan 5-10 kWh modüler ev bataryası.",
  href: "/bess/ev-tipi-bess",
  image: "/images/products/bess-ev-tipi.png",
};

const heatPumpIndustrialProduct: SolutionProduct = {
  eyebrow: "Isı Pompası",
  title: "Thermaplus Endüstriyel Seriler",
  desc: "80 °C'ye kadar proses suyu, kaskad sistemler ve ticari sıcak su için yüksek verimli ısı pompaları.",
  href: "/isi-pompasi#urunler",
  image: "/images/SARAY ENERJİ 3.png",
};

const heatPumpResidentialProduct: SolutionProduct = {
  eyebrow: "Isı Pompası",
  title: "Thermaplus Konut ve Havuz Serileri",
  desc: "Isıtma, soğutma, sıcak su ve havuz ısıtmasını tek verimli sistemle çözen ısı pompası ailesi.",
  href: "/isi-pompasi#urunler",
  image: "/images/SARAY ENERJİ 1.png",
};

const commonBessBenefits: SolutionBenefit[] = [
  {
    icon: LineChart,
    title: "Arbitraj ile Tasarruf",
    desc: "Elektriği düşük fiyatlı saatlerde depolayıp pahalı saatlerde kullanarak enerji maliyetlerini düşürme.",
  },
  {
    icon: Sun,
    title: "Lisanssız GES İçin Tamamlayıcı",
    desc: "Saatlik mahsuplaşma döneminde gündüz üretimini depolayarak kazanca çevirme, şebeke kısıtlama kayıplarını önleme.",
  },
  {
    icon: Gauge,
    title: "Pik Güç Tıraşlama",
    desc: "Anlık yüksek güç taleplerini BESS ile karşılama, güç aşım bedellerini ve kapasite baskısını azaltma.",
  },
  {
    icon: BatteryCharging,
    title: "Kapasite Kısıtını Aşma",
    desc: "Kapasite kısıtı olan saatlerde BESS üzerinden enerji sağlama, trafo yatırımını ve bekleme süresini erteleme.",
  },
  {
    icon: ShieldCheck,
    title: "Operasyonel Süreklilik",
    desc: "Milisaniyeler içinde devreye girerek kesintisiz üretim sağlama, duruş kaynaklı maliyetleri engelleme.",
  },
  {
    icon: PlugZap,
    title: "Reaktif Güç Kompanzasyonu",
    desc: "Dinamik reaktif güç dengeleme, gerilim regülasyonu ve reaktif güç cezalarını engelleme.",
  },
  {
    icon: Waves,
    title: "Harmonik Kompanzasyonu",
    desc: "Aktif harmonik filtreleme ile ekipman ömrünü uzatma ve enerji iletim kayıplarını azaltma.",
  },
  {
    icon: Zap,
    title: "Jeneratör İkamesi",
    desc: "Yüksek yakıt maliyetli jeneratör yerine ekonomik, sessiz ve temiz yedek enerji çözümü.",
  },
  {
    icon: Leaf,
    title: "Karbon Vergisi Baskısını Azaltma",
    desc: "GES entegrasyonuyla karbon ayak izini küçültme, CBAM ve sürdürülebilirlik hedeflerine uyum.",
  },
];

const commonHeatPumpBenefits: SolutionBenefit[] = [
  {
    icon: LineChart,
    title: "Yüksek Enerji Fiyatları",
    desc: "Fiyatı öngörülemez hale gelen fosil yakıt ve doğalgaz bağımlılığını azaltma.",
  },
  {
    icon: Gauge,
    title: "Enerji Verimliliği",
    desc: "3-5 arası COP değerleriyle 1 birim elektrikten 3-5 birim ısı üretme, %75'e varan tasarruf.",
  },
  {
    icon: ThermometerSun,
    title: "Tek Sistem",
    desc: "Isıtma, soğutma ve sıcak su ihtiyacını tek sistem üzerinden yönetme.",
  },
  {
    icon: Leaf,
    title: "Çevrecilik",
    desc: "Karbon ayak izini azaltma, yeşil bina sertifikaları ve ESG hedeflerine uyum sağlama.",
  },
];

export const solutions: Solution[] = [
  {
    slug: "enerji-santralleri",
    title: "Enerji Santralleri",
    navTitle: "Enerji Santralleri",
    icon: Zap,
    image: "/images/utility-scenario.png",
    shortDesc:
      "GES ve RES projelerinde dengesizlik maliyetlerini azaltan, yan hizmet gelirleri yaratan şebeke ölçekli depolama.",
    intro: [
      "Yenilenebilir enerji santrallerinin üretimdeki payı artarken, kesintili üretim yapısı şebeke güvenliği ve gelir yönetimi açısından daha akıllı çözümler gerektiriyor.",
      "BESS ile entegre çalışan santraller, üretilemeyen enerjiyi depolayabilir, dengesizlik maliyetlerini azaltabilir ve yan hizmet piyasalarıyla gelir modellerini çeşitlendirebilir.",
    ],
    highlight:
      "GES ve RES projelerinde batarya depolama; arz güvenliği, frekans desteği, reaktif güç yönetimi ve mikro şebeke kabiliyeti için kilit teknolojidir.",
    whyBess: [
      {
        icon: LineChart,
        title: "Enerji Arbitrajı",
        desc: "YEKDEM dışı senaryolarda EPİAŞ PTF bazlı akıllı şarj-deşarj optimizasyonu ile gelir artışı.",
      },
      {
        icon: ShieldCheck,
        title: "Dengesizlik Yönetimi",
        desc: "Üretim tahmin sapmalarından kaynaklanan dengesizlik maliyetlerini azaltma.",
      },
      {
        icon: BatteryCharging,
        title: "Kısıtlama Yönetimi",
        desc: "TEİAŞ kısıtlamaları nedeniyle üretilemeyen enerjiyi depolayarak üretim kaybını önleme.",
      },
      {
        icon: Zap,
        title: "Frekans Regülasyonu",
        desc: "FCR, FFR ve aFRR gibi yan hizmetlerle şebekeye milisaniyeler içinde tepki ve ilave gelir.",
      },
      {
        icon: PlugZap,
        title: "Reaktif Güç Desteği",
        desc: "Dinamik reaktif güç kontrolü ile gerilim desteği ve ceza riskinin azaltılması.",
      },
      {
        icon: Power,
        title: "Mikro Şebeke",
        desc: "Black-start desteği ve off-grid / mikro şebeke operasyonlarında süreklilik.",
      },
    ],
    products: [bessContainerProduct, bessFlexCubeProduct],
  },
  {
    slug: "sanayi-tesisleri",
    title: "Sanayi Tesisleri",
    navTitle: "Sanayi Tesisleri",
    icon: Factory,
    image: "/images/industry-automotive.jpg",
    shortDesc:
      "Üretim sürekliliği, pik yük yönetimi ve proses ısısı için BESS ve endüstriyel ısı pompası entegrasyonu.",
    intro: [
      "Sanayi tesisleri için enerji dönüşümü artık ertelenebilir bir yatırım değil; rekabet gücü, arz güvenliği ve verimlilik için kaçınılmaz bir gerekliliktir.",
      "Artan elektrik ve doğalgaz maliyetleri, üretim sürekliliği beklentisi ve karbon ayak izini azaltma baskısı; işletmeleri daha akıllı, daha esnek ve daha temiz enerji altyapılarına yönlendiriyor.",
    ],
    highlight:
      "Güneş enerjisinin BESS ve ısı pompası ile birleştirilmesi, sanayi tesislerinde hem ekonomik hem de çevreci kullanımın temelini oluşturur.",
    segmentsTitle: "Yoğun enerji kullanan her üretim hattı için dönüşüm alanı",
    segments: [
      {
        icon: Factory,
        title: "Demir-Çelik",
        desc: "Yüksek proses ısısı, yoğun elektrik tüketimi ve kesintisiz üretim ihtiyacı.",
        thumbnail: "/images/industry-steel-v2.png",
      },
      {
        icon: Factory,
        title: "Çimento",
        desc: "Pik yükler, karbon ayak izi ve atık ısı geri kazanımı için güçlü dönüşüm alanı.",
        thumbnail: "/images/industry-cement-v3.png",
      },
      {
        icon: Factory,
        title: "Otomotiv",
        desc: "Robotik hatlar, boyahane ve iklimlendirme yüklerinde verimlilik odağı.",
        thumbnail: "/images/industry-automotive-v2.png",
      },
      {
        icon: Factory,
        title: "Beyaz Eşya",
        desc: "Süreklilik, kalite kontrol ve enerji maliyeti yönetiminin kritik olduğu üretim.",
        thumbnail: "/images/industry-white-goods-v2.png",
      },
    ],
    whyBess: commonBessBenefits,
    whyHeatPump: [
      ...commonHeatPumpBenefits,
      {
        icon: Factory,
        title: "Atık Isı Değerlendirme",
        desc: "Tesisteki atık ısının yeniden kullanımıyla enerji tüketimini ve kayıpları azaltma.",
      },
      {
        icon: ThermometerSun,
        title: "Proses Isısı",
        desc: "80 °C'ye kadar çıkış suyu sıcaklığıyla endüstriyel proses ihtiyaçlarını karşılama.",
      },
    ],
    products: [bessCabinetProduct, bessContainerProduct, heatPumpIndustrialProduct],
  },
  {
    slug: "ticari-isletmeler",
    title: "Ticari İşletmeler",
    navTitle: "Ticari İşletmeler",
    icon: Building2,
    image: "/images/commercial-hotel-hero-hd.png",
    shortDesc:
      "AVM, otel, plaza ve perakende zincirleri için enerji maliyetini düşüren, arz güvenliği sağlayan çözümler.",
    intro: [
      "Ticari işletmeler için enerji maliyetleri gün geçtikçe ağırlığını artırıyor. Alışveriş merkezleri, oteller, plazalar ve büyük perakende zincirleri için tasarruf sağlayan, karbon ayak izini küçülten, enerji verimliliği ve arz güvenliği sunan çözümler büyük önem taşıyor.",
    ],
    highlight:
      "BESS ve ısı pompası kullanımı, ticari işletmelere sağlıklı ve sürdürülebilir büyümenin kapısını açar.",
    segmentsTitle: "Her ticari yapı tipi için özelleştirilmiş yaklaşım",
    segments: [
      {
        icon: ShoppingBag,
        title: "Alışveriş Merkezleri",
        desc: "Yoğun HVAC, aydınlatma ve ortak alan yüklerinde maliyet kontrolü.",
        thumbnail: "/images/commercial-mall.jpg",
      },
      {
        icon: Hotel,
        title: "Oteller",
        desc: "7/24 konfor, sıcak su, havuz ısıtması ve iklimlendirmede verimli enerji kullanımı.",
        thumbnail: "/images/commercial-hotel.jpg",
      },
      {
        icon: Building2,
        title: "Plazalar",
        desc: "Kesintisiz işletme, pik yük yönetimi ve yeşil bina hedeflerine uyum.",
        thumbnail: "/images/commercial-office.jpg",
      },
      {
        icon: Store,
        title: "Perakende Zincirleri",
        desc: "Çok lokasyonlu yapılarda standart, izlenebilir ve sürdürülebilir enerji altyapısı.",
        thumbnail: "/images/commercial-retail.jpg",
      },
    ],
    whyBess: commonBessBenefits,
    whyHeatPump: [
      ...commonHeatPumpBenefits,
      {
        icon: Wind,
        title: "Yüksek HVAC Yükü",
        desc: "7/24 havalandırma ve iklimlendirme ihtiyacını tek verimli sistemle karşılama.",
      },
    ],
    products: [bessCabinetProduct, heatPumpIndustrialProduct],
  },
  {
    slug: "konutlar",
    title: "Konutlar",
    navTitle: "Konutlar",
    icon: Home,
    image: "/images/residential-solutions.png",
    shortDesc:
      "Villa ve siteler için elektrik, ısıtma, soğutma, sıcak su ve havuz ihtiyacını karşılayan entegre enerji çözümü.",
    intro: [
      "Yenilenebilir enerji çözümlerinin erişilebilir hale gelmesiyle, yeni konut projelerinin kendi enerjisini kendisinin karşıladığı bir yapıya kavuşması mümkün hale geldi.",
      "İster müstakil bir villa ister bir site olsun; BESS ve ısı pompasının kurulduğu noktalarda elektrik enerjisi ekonomik şekilde depolanabilir, konutların elektrik, ısıtma, soğutma ve sıcak su gibi tüm ihtiyaçları karşılanabilir.",
    ],
    highlight:
      "Havuzlu konutlarda havuz ısıtması da sağlanarak yılın büyük bölümünde sıcak havuz konforu sunulur.",
    whyBess: [
      {
        icon: LineChart,
        title: "Arbitraj ile Tasarruf",
        desc: "Elektriği düşük fiyatlı saatlerde depolayıp pahalı saatlerde kullanarak fatura yükünü azaltma.",
      },
      {
        icon: Sun,
        title: "Çatı GES Tamamlayıcısı",
        desc: "Gündüz üretilen güneş enerjisini akşam tüketimiyle eşleştirerek öz tüketimi artırma.",
      },
      {
        icon: ShieldCheck,
        title: "Kesinti Önleme",
        desc: "Şebeke kesintilerinde kritik ev yüklerini besleyerek konfor ve güvenliği koruma.",
      },
      {
        icon: Zap,
        title: "Jeneratör İkamesi",
        desc: "Yakıt, bakım ve gürültü kaynağı jeneratör yerine sessiz, temiz yedek güç.",
      },
      {
        icon: Gauge,
        title: "Pik Yük Dengeleme",
        desc: "Aynı anda çalışan cihazların oluşturduğu yüksek güç ihtiyacını dengeleme.",
      },
      {
        icon: BatteryCharging,
        title: "Kapasite Esnekliği",
        desc: "Mevcut bağlantı kapasitesi içinde elektrikli araç şarjı dahil daha esnek kullanım.",
      },
    ],
    whyHeatPump: [
      ...commonHeatPumpBenefits,
      {
        icon: Waves,
        title: "Havuz Isıtması",
        desc: "Havuz sezonunu uzatan, villa ve site havuzlarına özel sessiz ısı pompası serileri.",
      },
      {
        icon: BatteryCharging,
        title: "Entegre Çözüm",
        desc: "GES ve BESS ile entegre, düşük karbonlu ve verimli konut enerji altyapısı.",
      },
    ],
    products: [bessHomeProduct, heatPumpResidentialProduct],
  },
  {
    slug: "veri-merkezleri",
    title: "Veri Merkezleri",
    navTitle: "Veri Merkezleri",
    icon: Server,
    image: "/images/data-center-real.png",
    shortDesc:
      "Milisaniyeler içinde devreye giren depolama ve hassas iklimlendirme ile 7/24 kesintisiz operasyon.",
    intro: [
      "Teknolojinin hayatımıza her geçen gün daha fazla girmesiyle veri merkezlerine olan ihtiyaç da artıyor. 7/24 elektrik tüketen ve kesintiye tahammülü olmayan bu tesisler için yüksek güç, yüksek güvenlik ve milisaniyeler içinde devreye giren batarya sistemleri gereklidir.",
    ],
    highlight:
      "7/24 hassas, verimli ve çevreci iklimlendirme yapan ısı pompası çözümleri, veri merkezlerinin operasyonel sürekliliğini destekler.",
    whyBess: [
      {
        icon: ShieldCheck,
        title: "Kesinti Önleme",
        desc: "UPS ile paralel çalışabilen, milisaniyeler içinde devreye giren batarya sistemiyle süreklilik.",
      },
      {
        icon: Cpu,
        title: "Güç Kalitesi",
        desc: "Hassas teknolojik cihazları koruyan stabil, dengeli ve güvenilir enerji aktarımı.",
      },
      {
        icon: LineChart,
        title: "Arbitraj ile Tasarruf",
        desc: "7/24 tüketimde düşük fiyatlı saatlerden yararlanarak enerji maliyetini düşürme.",
      },
      {
        icon: Waves,
        title: "Harmonik Kompanzasyonu",
        desc: "Aktif harmonik filtreleme ile ekipman ömrünü ve enerji kalitesini koruma.",
      },
      {
        icon: Zap,
        title: "Jeneratör İkamesi",
        desc: "Yakıt, bakım ve emisyon yükü oluşturan jeneratör kullanımını azaltma.",
      },
      {
        icon: BatteryCharging,
        title: "Kapasite Kısıtını Aşma",
        desc: "Mevcut bağlantı kapasitesi içinde büyüme ve yedeklilik esnekliği sağlama.",
      },
    ],
    whyHeatPump: [
      {
        icon: Wind,
        title: "Hassas İklimlendirme",
        desc: "7/24 steril ve çift yönlü havalandırma ihtiyacını verimli şekilde karşılama.",
      },
      {
        icon: Factory,
        title: "Atık Isı Değerlendirme",
        desc: "Sunucu ekipmanından açığa çıkan atık ısıyı uygun projelerde yeniden kullanarak toplam enerji verimliliğini artırma.",
      },
      ...commonHeatPumpBenefits,
    ],
    products: [bessContainerProduct, bessCabinetProduct, heatPumpIndustrialProduct],
  },
  {
    slug: "arac-sarj-noktalari",
    title: "Araç Şarj Noktaları",
    navTitle: "Araç Şarj Noktaları",
    icon: PlugZap,
    image: "/images/limited-grid-ev-charging.png",
    shortDesc:
      "Şebeke kapasitesinin yetersiz kaldığı lokasyonlarda hızlı şarj altyapısını BESS ile gecikmeden ve daha düşük yatırımla devreye alın.",
    intro: [
      "Ultra hızlı araç şarjı artık sürücülerin her lokasyonda beklediği temel bir hizmet. Ancak mevcut şebeke kapasitesi çoğu noktada yüksek güçlü şarj ünitelerinin ani enerji talebini karşılamıyor; bu durum hem elektrik altyapısını zorluyor hem de yatırımcıyı ilave trafo yatırımı, bağlantı izinleri ve uzun bekleme süreleriyle karşı karşıya bırakıyor.",
      "BESS destekli şarj altyapısı, şebekeden gelen sınırlı gücü depolayıp ihtiyaç anında şarj ünitelerine yüksek güç olarak aktarır. Böylece ağır ve geri alınamaz bir trafo yatırımına kıyasla daha düşük başlangıç maliyetiyle çözüm hızla devreye alınır; modüler sistem ihtiyaçla birlikte büyür ve lokasyon değiştiğinde başka bir noktaya taşınarak yatırım değerini korur.",
    ],
    highlight:
      "Şarj ağınızı bağlantı kapasitesini beklemeden yaygınlaştırın; ilk yatırım anından itibaren altyapı maliyetinden, zamandan ve işletme giderlerinden tasarruf edin.",
    whyBess: [
      {
        icon: PlugZap,
        title: "Ultra Hızlı Şarj Gücü",
        desc: "Şebekenin tek başına karşılayamadığı ani yüksek güç talebini bataryadan sağlayarak ultra hızlı şarj hizmeti sunma.",
      },
      {
        icon: Cable,
        title: "Şebeke Kısıtını Aşma",
        desc: "Mevcut bağlantı kapasitesini yükseltmeyi beklemeden şarj noktasını hızla devreye alma.",
      },
      {
        icon: LineChart,
        title: "Daha Düşük İlk Yatırım",
        desc: "İlave trafo ve ağır şebeke altyapısı yerine modüler BESS ile yatırım maliyetini azaltma.",
      },
      {
        icon: MapPin,
        title: "Taşınabilir Yatırım",
        desc: "Lokasyon ihtiyacı değiştiğinde sistemi başka bir şarj noktasına taşıyarak yatırım değerini koruma.",
      },
      {
        icon: Gauge,
        title: "Pik Güç Yönetimi",
        desc: "Eş zamanlı şarj taleplerini dengeleyerek şebeke üzerindeki baskıyı ve güç aşım maliyetlerini düşürme.",
      },
      {
        icon: Sun,
        title: "GES Entegrasyonu",
        desc: "Güneş enerjisini depolayıp araç şarjında kullanarak enerji maliyetini ve karbon ayak izini azaltma.",
      },
    ],
    products: [bessCabinetProduct, bessFlexCubeProduct],
  },
  {
    slug: "sinirli-sebeke",
    title: "Sınırlı Şebeke Noktaları",
    navTitle: "Sınırlı Şebeke",
    icon: WifiOff,
    image: "/images/limited-grid-quarry.png",
    shortDesc:
      "Şebekenin olmadığı veya yetersiz kaldığı noktalarda hızlı kurulan, taşınabilir ve modüler güç çözümleri.",
    intro: [
      "Enerji ihtiyacının arttığı günümüzde her noktada talep edilen şebeke gücü karşılanamayabiliyor. Bu durum, ilgili noktalarda enerji ihtiyacını tamamlayabilecek batarya çözümlerini daha da değerli kılıyor.",
    ],
    highlight:
      "Şebeke bağlantısını beklemeden, ağır altyapı yatırımı yapmadan; modüler ve taşınabilir depolama ile operasyonunuzu bugün başlatın.",
    segmentsTitle: "Sahada kanıtlanmış kullanım senaryoları",
    segments: [
      {
        icon: Factory,
        title: "Maden ve Taş Ocakları",
        desc: "Şebekeye erişimin zor olduğu sahalarda GES entegre veya taşınabilir BESS ile jeneratöre kıyasla ekonomik ve çevreci güç.",
        image: "/images/limited-grid-quarry.png",
      },
      {
        icon: Music,
        title: "Konserler ve Kamp Alanları",
        desc: "Şebekeye uzak etkinlik alanlarında taşınabilir depolama ile sessiz, kesintisiz ve temiz güç.",
        image: "/images/limited-grid-event.png",
      },
      {
        icon: Server,
        title: "Telekom Sistemleri",
        desc: "Şebekenin bulunmadığı veya kesintili olduğu baz istasyonu ve telekom sahalarında haberleşme altyapısını kesintisiz besleyen güvenilir enerji depolama.",
        image: "/images/telecom-tower-v2.png",
      },
    ],
    whyBess: [
      {
        icon: WifiOff,
        title: "Şebeke Kısıtlarını Aşma",
        desc: "Talep edilen gücün sağlanamadığı noktalarda batarya ile güç desteği oluşturma.",
      },
      {
        icon: Cable,
        title: "Bağlantı Sürecini Beklememe",
        desc: "Şebeke bağlantısını beklemeden hızlı kurulum ve güç artırma imkânı.",
      },
      {
        icon: LineChart,
        title: "Yatırım Maliyetini Azaltma",
        desc: "Ağır altyapı yatırımı yerine modüler depolama ile kapasite ihtiyacını karşılama.",
      },
      {
        icon: Gauge,
        title: "Pik Talep Yönetimi",
        desc: "Hızlı şarj, saha ekipmanı veya etkinlik yüklerinde ani güç ihtiyacını dengeleme.",
      },
      {
        icon: Zap,
        title: "Jeneratör Maliyetinden Tasarruf",
        desc: "Yakıt, bakım ve lojistik maliyetlerini azaltan sessiz ve temiz güç alternatifi.",
      },
      {
        icon: MapPin,
        title: "Güç Olmayan Noktada Faaliyet",
        desc: "Şebekeye uzak sahalarda taşınabilir depolama ile operasyonu mümkün kılma.",
      },
    ],
    products: [limitedGridFlexCubeProduct, portableBessProduct],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
