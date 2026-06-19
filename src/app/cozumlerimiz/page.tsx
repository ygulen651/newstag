"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  BriefcaseBusiness,
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
  Recycle,
  Server,
  ShieldCheck,
  ShoppingBag,
  Store,
  Sun,
  ThermometerSun,
  Waves,
  Wind,
  WifiOff,
  Zap,
} from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const sectors = [
  {
    title: "Demir-Çelik",
    desc: "Yüksek proses ısısı, yoğun elektrik tüketimi ve kesintisiz üretim ihtiyacı.",
  },
  {
    title: "Çimento",
    desc: "Pik yükler, karbon ayak izi ve atık ısı geri kazanımı için güçlü dönüşüm alanı.",
  },
  {
    title: "Otomotiv",
    desc: "Robotik hatlar, boyahane ve iklimlendirme yüklerinde verimlilik odağı.",
  },
  {
    title: "Beyaz Eşya",
    desc: "Süreklilik, kalite kontrol ve enerji maliyeti yönetiminin kritik olduğu üretim.",
  },
];

const commercialSegments = [
  {
    icon: ShoppingBag,
    title: "Alışveriş Merkezleri",
    desc: "Yoğun HVAC, aydınlatma ve ortak alan yüklerinde maliyet kontrolü.",
  },
  {
    icon: Hotel,
    title: "Oteller",
    desc: "7/24 konfor, sıcak su ve iklimlendirme ihtiyacında verimli enerji kullanımı.",
  },
  {
    icon: Building2,
    title: "Plazalar",
    desc: "Kesintisiz işletme, pik yük yönetimi ve yeşil bina hedeflerine uyum.",
  },
  {
    icon: Store,
    title: "Perakende Zincirleri",
    desc: "Çok lokasyonlu yapılarda standart, izlenebilir ve sürdürülebilir enerji altyapısı.",
  },
];

const bessBenefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Arbitraj ile Tasarruf",
    desc: "Elektriği düşük fiyatlı saatlerde depolayıp pahalı saatlerde kullanarak enerji maliyetlerini düşürme.",
  },
  {
    icon: Sun,
    title: "Lisanssız GES İçin Tamamlayıcı",
    desc: "Gündüz üretilen güneş enerjisini daha verimli kullanma, kırpıntı kayıplarını azaltma ve öz tüketimi artırma.",
  },
  {
    icon: Gauge,
    title: "Pik Yük Azaltma",
    desc: "Anlık yüksek güç taleplerini BESS ile karşılama, güç aşımı bedellerini ve kapasite baskısını azaltma.",
  },
  {
    icon: BatteryCharging,
    title: "Kapasite Kısıtını Aşma",
    desc: "Mevcut bağlantı kapasitesi içinde daha fazla üretim, depolama ve tüketim esnekliği sağlama.",
  },
  {
    icon: ShieldCheck,
    title: "Operasyonel Süreklilik",
    desc: "Kesintisiz üretim için kritik yükleri besleme, duruş kaynaklı maliyetleri ve kalite kayıplarını azaltma.",
  },
  {
    icon: PlugZap,
    title: "Reaktif Güç Kompanzasyonu",
    desc: "Gerilim regülasyonu ve reaktif güç yönetimi ile ceza risklerini ve şebeke kalitesi sorunlarını azaltma.",
  },
  {
    icon: Waves,
    title: "Harmonik Kompanzasyonu",
    desc: "Aktif harmonik filtreleme ile ekipman ömrünü uzatma ve enerji iletim kayıplarını azaltma.",
  },
  {
    icon: Power,
    title: "Mikro Şebeke ve Offgrid",
    desc: "Şebeke olmayan veya zayıf şebekeli alanlarda GES ile birlikte bağımsız çalışabilme.",
  },
  {
    icon: Zap,
    title: "Jeneratör İkamesi",
    desc: "Yüksek yakıt maliyetli jeneratör kullanımını azaltma, acil durum beslemesini daha temiz hale getirme.",
  },
  {
    icon: Leaf,
    title: "Karbon Vergisi Baskısı",
    desc: "GES entegrasyonu ile karbon ayak izini azaltma ve sürdürülebilir üretim hedeflerine uyum.",
  },
];

const heatPumpBenefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Yüksek Enerji Fiyatları",
    desc: "Fiyatları artan fosil yakıt ve doğalgaz bağımlılığını azaltma.",
  },
  {
    icon: Gauge,
    title: "Enerji Verimliliği",
    desc: "Verimli enerji kullanımı ile proses, ısıtma ve soğutma giderlerinde tasarruf.",
  },
  {
    icon: Recycle,
    title: "Atık Isı Değerlendirme",
    desc: "Atık ısının yeniden kullanımı ile enerji tüketimini ve kayıpları azaltma.",
  },
  {
    icon: ThermometerSun,
    title: "Tek Sistem",
    desc: "Isıtma ve soğutma ihtiyacını tek sistem üzerinden yönetme.",
  },
  {
    icon: Leaf,
    title: "Çevrecilik",
    desc: "Kurumsal karbon nötr ve sürdürülebilirlik hedeflerine uyum sağlama.",
  },
];

const commercialHeatPumpBenefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Yüksek Enerji Fiyatları",
    desc: "Fiyatları artan fosil yakıt ve doğalgaz bağımlılığını azaltma.",
  },
  {
    icon: Wind,
    title: "Yüksek HVAC Yükü",
    desc: "7/24 steril, çift yönlü havalandırma ve iklimlendirme ihtiyacını verimli şekilde karşılama.",
  },
  {
    icon: Gauge,
    title: "Enerji Verimliliği",
    desc: "Verimli enerji kullanımı ile işletme giderlerinde tasarruf.",
  },
  {
    icon: Recycle,
    title: "Atık Isı Değerlendirme",
    desc: "Atık ısının yeniden kullanımı ile enerji tasarrufu sağlama.",
  },
  {
    icon: ThermometerSun,
    title: "Tek Sistem",
    desc: "Isıtma ve soğutma ihtiyacını tek sistem üzerinden yürütme.",
  },
  {
    icon: Leaf,
    title: "Çevrecilik",
    desc: "Yeşil sertifikasyon ve sürdürülebilirlik hedeflerine uyum.",
  },
];

const residentialBessBenefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Arbitraj ile Tasarruf",
    desc: "Elektriği düşük fiyatlı saatlerde depolayıp pahalı saatlerde kullanarak maliyetleri azaltma.",
  },
  {
    icon: Sun,
    title: "Lisanssız GES İçin Tamamlayıcı",
    desc: "Çatı GES üretimini ev tüketimiyle eşleştirerek güneş enerjisinden daha fazla yararlanma.",
  },
  {
    icon: ShieldCheck,
    title: "Kesinti Önleme",
    desc: "Şebeke kesintilerinde kritik ev yüklerini besleyerek konfor ve güvenliği koruma.",
  },
  {
    icon: Zap,
    title: "Jeneratör İkamesi",
    desc: "Yakıt, bakım ve gürültü oluşturan jeneratör kullanımını azaltan temiz yedek güç.",
  },
  {
    icon: Gauge,
    title: "Pik Yük Azaltma",
    desc: "Aynı anda çalışan cihazların oluşturduğu yüksek güç ihtiyacını dengeleme.",
  },
  {
    icon: BatteryCharging,
    title: "Kapasite Kısıtını Aşma",
    desc: "Mevcut bağlantı kapasitesi içinde daha esnek elektrik kullanımı sağlama.",
  },
];

const residentialHeatPumpBenefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Yüksek Enerji Fiyatları",
    desc: "Fiyatları artan fosil yakıt ve doğalgaz bağımlılığını azaltma.",
  },
  {
    icon: ThermometerSun,
    title: "Tek Sistem",
    desc: "Isıtma, soğutma ve sıcak su ihtiyacını tek sistem ile sağlama.",
  },
  {
    icon: Gauge,
    title: "Enerji Verimliliği",
    desc: "Verimli enerji kullanımı ile konut enerji giderlerinde tasarruf.",
  },
  {
    icon: BatteryCharging,
    title: "Entegre Çözüm",
    desc: "BESS ve güneş paneli ile entegre, verimli ve sürdürülebilir kullanım.",
  },
  {
    icon: Leaf,
    title: "Çevrecilik",
    desc: "Karbon ayak izini azaltan temiz konut enerji altyapısı.",
  },
];

const dataCenterBessBenefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Arbitraj ile Tasarruf",
    desc: "7/24 elektrik tüketiminde düşük fiyatlı saatlerden yararlanarak enerji maliyetini düşürme.",
  },
  {
    icon: ShieldCheck,
    title: "Kesinti Önleme",
    desc: "UPS ile paralel çalışabilen, ms seviyesinde devreye giren batarya sistemiyle süreklilik sağlama.",
  },
  {
    icon: Cpu,
    title: "Güç Kalitesi",
    desc: "Hassas teknolojik cihazları koruyacak stabil, dengeli ve güvenilir enerji aktarımı.",
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
    icon: Gauge,
    title: "Pik Yük Azaltma",
    desc: "Ani yüksek güç taleplerini dengeleyerek kapasite ve talep bedeli baskısını azaltma.",
  },
  {
    icon: BatteryCharging,
    title: "Kapasite Kısıtını Aşma",
    desc: "Mevcut bağlantı kapasitesi içinde büyüme ve yedeklilik esnekliği sağlama.",
  },
];

const limitedGridBenefits: Benefit[] = [
  {
    icon: WifiOff,
    title: "Şebeke Kısıtlarını Aşmak",
    desc: "Talep edilen gücün sağlanamadığı noktalarda batarya ile güç desteği oluşturma.",
  },
  {
    icon: Cable,
    title: "Bağlantı Sürecini Beklememe",
    desc: "Şebeke bağlantı sürecini beklemeden hızlı kurulum ve güç artırma imkanı.",
  },
  {
    icon: LineChart,
    title: "Yatırım Maliyetini Azaltma",
    desc: "Ağır altyapı yatırımı yerine modüler depolama ile kapasite ihtiyacını karşılama.",
  },
  {
    icon: BatteryCharging,
    title: "Arbitraj ile Tasarruf",
    desc: "Sınırlı şebeke gücünü düşük maliyetli saatlerde depolayıp ihtiyaç anında kullanma.",
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
];

const limitedGridScenarios = [
  {
    icon: Zap,
    title: "Şarj Ağı Noktaları",
    image: "/images/limited-grid-ev-charging.png",
    desc: "Şehir içi veya şehir dışı lokasyonlarda yüksek güçlü araç şarjı için yeterli şebeke kapasitesi her zaman bulunmayabilir. Batarya yatırımı ile sınırlı şebeke gücünden veya yenilenebilir kaynaktan yararlanarak minimum altyapı yatırımıyla hızlı şarj hizmeti verilebilir.",
  },
  {
    icon: Factory,
    title: "Maden ve Taş Ocakları",
    image: "/images/limited-grid-quarry.png",
    desc: "Şebekeye erişimin zor olduğu sahalarda jeneratör kullanımı yüksek maliyet yaratır. GES entegre BESS veya taşınabilir BESS çözümleriyle ekonomik ve çevreci güç sağlanabilir.",
  },
  {
    icon: Music,
    title: "Konserler ve Kamp Alanları",
    image: "/images/limited-grid-event.png",
    desc: "Şebekeye uzak veya kısıtlı bağlantıya sahip etkinlik alanlarında taşınabilir depolama çözümleriyle sessiz, kesintisiz ve temiz güç ihtiyacı karşılanabilir.",
  },
];

const powerPlantBenefits: Benefit[] = [
  {
    icon: LineChart,
    title: "Enerji Arbitrajı",
    desc: "YEKDEM dışı senaryolarda EPİAŞ PTF bazlı akıllı şarj ve deşarj optimizasyonu ile gelir artışı.",
  },
  {
    icon: ShieldCheck,
    title: "Dengesizlik Yönetimi",
    desc: "Üretim tahmin sapmalarından kaynaklanan dengesizlik maliyetlerini azaltma.",
  },
  {
    icon: BatteryCharging,
    title: "Kısıtlama Yönetimi",
    desc: "TEİAŞ kısıtlamaları nedeniyle üretilemeyen enerjiyi depolayarak üretim kaybını azaltma.",
  },
  {
    icon: Zap,
    title: "Frekans Regülasyonu",
    desc: "FCR, FFR ve aFRR gibi yan hizmetlerle şebekeye hızlı tepki ve ilave gelir potansiyeli.",
  },
  {
    icon: PlugZap,
    title: "Reaktif Güç",
    desc: "Dinamik reaktif güç kontrolü ile gerilim desteği ve reaktif ceza riskini azaltma.",
  },
  {
    icon: Power,
    title: "Mikro Şebeke",
    desc: "Black-start desteği ve offgrid/microgrid operasyonlarında süreklilik sağlama.",
  },
];

const products = [
  {
    eyebrow: "Enerji Depolama",
    title: "Inspur Konteyner Tipi BESS",
    desc: "Sanayi tesisleri için yüksek kapasiteli, güvenli ve ölçeklenebilir batarya enerji depolama çözümü.",
    href: "/markalar/inspur",
    image: "/images/e9551124-2722-4454-bf42-e6d7ff187aec.png",
    alt: "Inspur BESS ürünü",
  },
  {
    eyebrow: "Endüstriyel Isı Pompası",
    title: "Thermaplus Isı Pompası",
    desc: "Proses ısısı, iklimlendirme ve sıcak su ihtiyaçlarında fosil yakıt bağımlılığını azaltan verimli çözüm.",
    href: "/markalar/thermaplus",
    image: "/images/heat-pump.png",
    alt: "Thermaplus ısı pompası",
  },
];

function BenefitGrid({
  title,
  benefits,
}: {
  title: string;
  benefits: Benefit[];
}) {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-6">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 hover:shadow-2xl hover:bg-white transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#ea580c] mb-7 group-hover:scale-110 group-hover:bg-[#ea580c] group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function IndustrialFacilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] min-h-screen pt-32">
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  Çözümlerimiz
                </span>
                <h1 className="text-5xl md:text-7xl font-medium text-[#1e3a8a] tracking-tight mb-8 leading-tight">
                  Enerji <br />
                  <span className="text-[#ea580c]">Çözümlerimiz</span>
                </h1>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    Enerji santralleri, sanayi tesisleri, ticari işletmeler ve
                    konutlar için daha verimli, güvenli ve düşük karbonlu enerji
                    altyapıları tasarlıyoruz.
                  </p>
                  <p>
                    BESS, GES ve ısı pompası teknolojilerini doğru senaryoda
                    birleştirerek enerji maliyetlerini azaltan, arz güvenliğini
                    artıran ve sürdürülebilirlik hedeflerine hizmet eden çözümler
                    sunuyoruz.
                  </p>
                  <p className="font-medium text-[#1e3a8a]">
                    Aşağıda enerji santralleri, sanayi tesisleri, ticari
                    işletmeler ve konutlar için öncelikli uygulama alanlarını
                    birlikte inceleyebilirsiniz.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#enerji-santralleri"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                  >
                    Enerji Santralleri
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#sanayi-tesisleri"
                    className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-6 py-3 rounded-full font-medium border border-blue-100 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
                  >
                    Sanayi Tesisleri
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#ticari-isletmeler"
                    className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-6 py-3 rounded-full font-medium border border-blue-100 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
                  >
                    Ticari İşletmeler
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#konutlar"
                    className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-6 py-3 rounded-full font-medium border border-blue-100 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
                  >
                    Konutlar
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#veri-merkezleri"
                    className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-6 py-3 rounded-full font-medium border border-blue-100 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
                  >
                    Veri Merkezleri
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#sinirli-sebeke"
                    className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-6 py-3 rounded-full font-medium border border-blue-100 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
                  >
                    Sınırlı Şebeke
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="lg:w-1/2 w-full aspect-[4/3] relative rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/utility-scenario.png"
                  alt="Enerji çözümleri"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/55 to-transparent mix-blend-multiply" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="enerji-santralleri" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  Çözüm Alanı
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] tracking-tight mb-8">
                  Enerji Santralleri
                </h2>
                <div className="space-y-5 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    Yenilenebilir enerji santrallerinin üretimdeki payı artarken,
                    kesintili üretim yapısı şebeke güvenliği ve gelir yönetimi
                    açısından daha akıllı çözümler gerektirir.
                  </p>
                  <p>
                    BESS ile entegre çalışan santraller, üretilemeyen enerjiyi
                    depolayabilir, dengesizlik maliyetlerini azaltabilir ve yan
                    hizmet piyasalarıyla gelir modellerini çeşitlendirebilir.
                  </p>
                  <p className="font-medium text-[#1e3a8a]">
                    GES ve RES projelerinde batarya depolama, arz güvenliği,
                    frekans desteği, reaktif güç yönetimi ve mikro şebeke
                    kabiliyeti için kilit teknolojidir.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/utility-scenario.png"
                  alt="Enerji santrali BESS çözümü"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/45 to-transparent" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {powerPlantBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="bg-gray-50 border border-gray-100 rounded-[28px] p-7 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#ea580c] mb-6 group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-[#f8fafc] rounded-[36px] p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row items-center gap-10"
            >
              <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-3xl overflow-hidden bg-white">
                <Image
                  src="/images/e9551124-2722-4454-bf42-e6d7ff187aec.png"
                  alt="Inspur BESS enerji santrali ürünü"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                  İlgili Ürün
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                  Inspur Konteyner Tipi BESS
                </h3>
                <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                  Şebeke ölçekli enerji depolama ihtiyaçları için yüksek güvenlikli,
                  sıvı soğutmalı ve entegre batarya çözümü.
                </p>
                <Link
                  href="/markalar/inspur"
                  className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                >
                  Ürünü İncele <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="sanayi-tesisleri" className="relative py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  Çözüm Alanı
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] tracking-tight mb-8">
                  Sanayi Tesisleri
                </h2>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    Sanayi tesisleri için enerji dönüşümü artık ertelenebilir
                    bir yatırım değil; rekabet gücü, arz güvenliği ve verimlilik
                    için kaçınılmaz bir gerekliliktir.
                  </p>
                  <p>
                    Artan elektrik ve doğalgaz maliyetleri, üretim sürekliliği
                    beklentisi ve karbon ayak izini azaltma baskısı; işletmeleri
                    daha akıllı, daha esnek ve daha temiz enerji altyapılarına
                    yönlendiriyor.
                  </p>
                  <p className="font-medium text-[#1e3a8a]">
                    Güneş enerjisi panellerinin BESS ve ısı pompası ile
                    birleştirilmesi, sanayi tesislerinde hem ekonomik hem de
                    çevreci kullanımın temelini oluşturur.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2 w-full aspect-[4/3] relative rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/business-scenario.png"
                  alt="Sanayi tesisi enerji dönüşümü"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/55 to-transparent mix-blend-multiply" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#eef4fb]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
              <div>
                <span className="text-[#ea580c] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                  Sektörel Uygulamalar
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-6">
                  Yoğun enerji kullanan her üretim hattı için dönüşüm alanı
                </h2>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  Demir-çelikten çimentoya, otomotivden beyaz eşyaya kadar
                  farklı sektörlerde ortak hedef aynıdır: enerji maliyetlerini
                  azaltmak, kesintisiz üretimi korumak ve karbon yoğunluğunu
                  düşürmek.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={sector.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="bg-white border border-blue-100 rounded-[28px] p-6 shadow-sm"
                  >
                    <Factory className="w-8 h-8 text-[#ea580c] mb-5" />
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                      {sector.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {sector.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a8a]">
                Öncelikli Ürünler
              </h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
                >
                  <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                      {product.eyebrow}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                      {product.desc}
                    </p>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                    >
                      Ürünü İncele <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BenefitGrid
          title="BESS Ürününe Neden İhtiyaç Var?"
          benefits={bessBenefits}
        />

        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/utility-scenario.png"
                  alt="GES, BESS ve sanayi enerji altyapısı"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/45 to-transparent" />
              </div>
              <div>
                <Building2 className="w-12 h-12 text-[#ea580c] mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-6">
                  GES, BESS ve ısı pompası birlikte çalıştığında değer artar
                </h2>
                <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                  Sanayi tesislerinde kurulan güneş enerjisi sistemleri, depolama
                  ve verimli ısı teknolojileriyle birlikte ele alındığında sadece
                  elektrik üretmez; pik yükleri yönetir, operasyonel sürekliliği
                  destekler ve karbon azaltımını ölçülebilir hale getirir.
                </p>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  Bu yaklaşım, elektrik tarafındaki maliyet baskısını BESS ile
                  dengelerken, ısıtma ve soğutma tarafında ısı pompası ile daha
                  düşük işletme gideri sağlar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <BenefitGrid
          title="Neden Isı Pompasına İhtiyaç Var?"
          benefits={heatPumpBenefits}
        />

        <section id="ticari-isletmeler" className="relative py-24 md:py-32 bg-[#eef4fb] overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  Çözüm Alanı
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] tracking-tight mb-8">
                  Ticari İşletmeler
                </h2>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    Ticari işletmeler için enerji maliyetleri gün geçtikçe
                    ağırlığını artırmaktadır. Alışveriş merkezleri, oteller,
                    plazalar ve büyük perakende zincirleri gibi işletmeler için
                    tasarruf sağlayan, karbon ayak izini küçülten, enerji
                    verimliliği ve arz güvenliği sağlayan çözümler büyük önem
                    taşımaktadır.
                  </p>
                  <p className="font-medium text-[#1e3a8a]">
                    BESS ve ısı pompası kullanımı, ticari işletmelere sağlıklı
                    ve sürdürülebilir büyümenin kapısını açar.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl bg-white"
              >
                <Image
                  src="/images/e9551124-2722-4454-bf42-e6d7ff187aec.png"
                  alt="Ticari işletmeler için enerji depolama"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/50 to-transparent" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
              {commercialSegments.map((segment, index) => (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-white border border-blue-100 rounded-[28px] p-6 shadow-sm"
                >
                  <segment.icon className="w-8 h-8 text-[#ea580c] mb-5" />
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {segment.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {segment.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <BriefcaseBusiness className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-5">
                  Ticari İşletmelerde BESS Ürününe Neden İhtiyaç Var?
                </h3>
                <p className="text-gray-500 font-light text-lg leading-relaxed">
                  Ticari yapılarda depolama; elektrik maliyetini düşürür, pik
                  yükleri dengeler, GES yatırımını tamamlar ve operasyonel
                  sürekliliği destekler.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bessBenefits.map((benefit, index) => (
                  <motion.div
                    key={`commercial-${benefit.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.45 }}
                    className="bg-gray-50 border border-gray-100 rounded-[26px] p-6"
                  >
                    <benefit.icon className="w-7 h-7 text-[#ea580c] mb-4" />
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
              >
                <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src="/images/e9551124-2722-4454-bf42-e6d7ff187aec.png"
                    alt="Ticari işletmeler için Inspur BESS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                    İlgili Ürün
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                    Inspur Konteyner Tipi BESS
                  </h3>
                  <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                    AVM, otel, plaza ve perakende operasyonlarında pik yük,
                    jeneratör ikamesi, GES entegrasyonu ve arz güvenliği için
                    ölçeklenebilir enerji depolama çözümü.
                  </p>
                  <Link
                    href="/markalar/inspur"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                  >
                    Ürünü İncele <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="group bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
              >
                <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src="/images/heat-pump.png"
                    alt="Ticari işletmeler için Thermaplus ısı pompası"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                    Endüstriyel Seri Isı Pompası
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                    Thermaplus Isı Pompası
                  </h3>
                  <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                    Yüksek HVAC yükü olan ticari yapılarda ısıtma, soğutma ve
                    sıcak su ihtiyaçlarını tek verimli sistem yaklaşımıyla
                    yönetir.
                  </p>
                  <Link
                    href="/markalar/thermaplus"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                  >
                    Endüstriyel Seriyi İncele
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <ThermometerSun className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-5">
                  Ticari İşletmelerde Neden Isı Pompasına İhtiyaç Var?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commercialHeatPumpBenefits.map((benefit, index) => (
                  <motion.div
                    key={`commercial-heat-${benefit.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    className="bg-gray-50 border border-gray-100 rounded-[26px] p-6"
                  >
                    <benefit.icon className="w-7 h-7 text-[#ea580c] mb-4" />
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="veri-merkezleri" className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  Çözüm Alanı
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] tracking-tight mb-8">
                  Veri Merkezleri
                </h2>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    Teknolojinin hayatımıza gittikçe daha fazla girmesiyle veri
                    merkezlerine olan ihtiyaç da artmaktadır. 7/24 elektrik
                    tüketimi ihtiyacı olan, kesintiye tahammülün olmadığı bu
                    noktalar için yüksek güç, yüksek güvenlik ve ms seviyesinde
                    devreye giren batarya sistemleri tercih edilmelidir.
                  </p>
                  <p className="font-medium text-[#1e3a8a]">
                    Aynı zamanda 7/24 hassas, verimli ve çevreci şekilde
                    iklimlendirme yapan ısı pompası çözümleri veri merkezlerinin
                    operasyonel sürekliliğini destekler.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl bg-white"
              >
                <Image
                  src="/images/e9551124-2722-4454-bf42-e6d7ff187aec.png"
                  alt="Veri merkezleri için BESS ve güç sürekliliği"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/55 to-transparent" />
              </motion.div>
            </div>

            <div className="bg-[#f8fafc] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <Server className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-5">
                  Veri Merkezlerinde BESS Ürününe Neden İhtiyaç Var?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataCenterBessBenefits.map((benefit, index) => (
                  <motion.div
                    key={`data-center-bess-${benefit.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    className="bg-white border border-gray-100 rounded-[26px] p-6"
                  >
                    <benefit.icon className="w-7 h-7 text-[#ea580c] mb-4" />
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {products.map((product, index) => (
                <motion.div
                  key={`data-center-product-${product.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-[#f8fafc] rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
                >
                  <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-white border border-gray-100">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                      {product.eyebrow}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                      {index === 0
                        ? "Veri merkezlerinde UPS ile paralel çalışabilen, güç kalitesini destekleyen ve kesintiye karşı hızlı yedekleme sağlayan BESS çözümü."
                        : "7/24 hassas iklimlendirme ihtiyacı olan veri merkezleri için verimli ve çevreci ısı pompası çözümü."}
                    </p>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                    >
                      Ürünü İncele <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#f8fafc] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <ThermometerSun className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-5">
                  Veri Merkezlerinde Neden Isı Pompasına İhtiyaç Var?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commercialHeatPumpBenefits.map((benefit, index) => (
                  <motion.div
                    key={`data-center-heat-${benefit.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    className="bg-white border border-gray-100 rounded-[26px] p-6"
                  >
                    <benefit.icon className="w-7 h-7 text-[#ea580c] mb-4" />
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sinirli-sebeke" className="relative py-24 md:py-32 bg-[#eef4fb] overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mb-16">
              <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                Çözüm Alanı
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] tracking-tight mb-8">
                Sınırlı Şebeke Noktaları
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Enerji ihtiyacının arttığı günümüzde her noktada talep edilen
                şebeke gücü karşılanamayabilmektedir. Bu durum, ilgili
                noktalarda enerji ihtiyacını tamamlayabilecek batarya çözümlerini
                daha da değerli kılmaktadır.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {limitedGridScenarios.map((scenario, index) => (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-white rounded-[36px] overflow-hidden border border-gray-100 shadow-sm"
                >
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={scenario.image}
                      alt={scenario.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <scenario.icon className="w-8 h-8 text-[#ea580c] mb-5" />
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {scenario.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <WifiOff className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-5">
                  Sınırlı Şebeke Noktalarında Neden BESS’e İhtiyaç Var?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {limitedGridBenefits.map((benefit, index) => (
                  <motion.div
                    key={`limited-grid-${benefit.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    className="bg-gray-50 border border-gray-100 rounded-[26px] p-6"
                  >
                    <benefit.icon className="w-7 h-7 text-[#ea580c] mb-4" />
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
              >
                <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src="/images/limited-grid-ev-charging.png"
                    alt="Şarj ağı için BESS ürünü"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                    Taşınabilir ve Modüler BESS
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                    Şebeke Kısıtı Aşan Depolama
                  </h3>
                  <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                    Şarj ağı, saha operasyonu ve geçici etkinliklerde hızlı
                    kurulumla güç ihtiyacını karşılayan modüler depolama çözümü.
                  </p>
                  <Link
                    href="/markalar/inspur"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                  >
                    BESS Çözümlerini İncele
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="group bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
              >
                <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src="/images/e9551124-2722-4454-bf42-e6d7ff187aec.png"
                    alt="Konteyner tipi BESS ürünü"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                    Konteyner Tipi BESS
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                    Inspur BESS
                  </h3>
                  <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                    Yüksek güç ihtiyacı olan kısıtlı bağlantı noktalarında
                    enerji depolama, pik yönetimi ve jeneratör ikamesi için
                    ölçeklenebilir çözüm.
                  </p>
                  <Link
                    href="/markalar/inspur"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                  >
                    Ürünü İncele
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="konutlar" className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  Çözüm Alanı
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] tracking-tight mb-8">
                  Konutlar
                </h2>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    Yenilenebilir enerji çözümlerinin erişilebilir hale
                    gelmesiyle birlikte artık yeni konut projelerinin tamamen
                    kendi enerjisini kendisinin karşıladığı bir yapıya bürünmesi
                    mümkün hale gelmiştir.
                  </p>
                  <p>
                    İster müstakil bir villa, isterse bir site olsun; BESS ve
                    ısı pompasının kurulduğu noktalarda elektrik enerjisinin çok
                    ekonomik olarak elde edilerek depolanması ve konutların
                    elektrik, ısıtma, soğutma, sıcak su gibi tüm ihtiyaçlarının
                    karşılanması sağlanabilmektedir.
                  </p>
                  <p className="font-medium text-[#1e3a8a]">
                    Villa tipi havuzlu lokasyonlarda havuz ısıtması da
                    sağlanarak uzun dönem sıcak havuz kullanımı mümkün olur.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl bg-white"
              >
                <Image
                  src="/images/residential-solutions.png"
                  alt="Konutlar için güneş paneli, BESS, ısı pompası ve havuz çözümü"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/40 to-transparent" />
              </motion.div>
            </div>

            <div className="bg-[#f8fafc] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <Home className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-5">
                  Konutlarda BESS Ürününe Neden İhtiyaç Var?
                </h3>
                <p className="text-gray-500 font-light text-lg leading-relaxed">
                  Konut tipi depolama; çatı GES üretimini değerlendirir, kesinti
                  anında güvenlik sağlar ve elektrik kullanımını daha ekonomik
                  hale getirir.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {residentialBessBenefits.map((benefit, index) => (
                  <motion.div
                    key={`residential-bess-${benefit.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    className="bg-white border border-gray-100 rounded-[26px] p-6"
                  >
                    <benefit.icon className="w-7 h-7 text-[#ea580c] mb-4" />
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-[#f8fafc] rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
              >
                <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/residential-solutions.png"
                    alt="Konut tipi BESS ve güneş enerjisi çözümü"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                    Konut Tipi Enerji Depolama
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                    Ev ve Site Tipi BESS
                  </h3>
                  <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                    Güneş paneli, elektrikli araç şarjı ve ev içi kritik yüklerle
                    entegre çalışan, kesinti anında güven sağlayan konut tipi
                    batarya çözümü.
                  </p>
                  <Link
                    href="/markalar/inspur"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                  >
                    BESS Çözümlerini İncele
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="group bg-[#f8fafc] rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8"
              >
                <div className="w-full aspect-[16/10] relative rounded-3xl overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/heat-pump.png"
                    alt="Konut ve havuz serisi Thermaplus ısı pompası"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-2 block">
                    Konut ve Havuz Serisi
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                    Thermaplus Isı Pompası
                  </h3>
                  <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                    Isıtma, soğutma, sıcak su ve havuz ısıtmasını tek verimli
                    sistem yaklaşımıyla çözen konut odaklı ısı pompası ailesi.
                  </p>
                  <Link
                    href="/markalar/thermaplus"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152e73] transition-colors"
                  >
                    Konut ve Havuz Serisini İncele
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="bg-[#f8fafc] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <ThermometerSun className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight mb-5">
                  Konutlarda Neden Isı Pompasına İhtiyaç Var?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {residentialHeatPumpBenefits.map((benefit, index) => (
                  <motion.div
                    key={`residential-heat-${benefit.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    className="bg-white border border-gray-100 rounded-[26px] p-6"
                  >
                    <benefit.icon className="w-7 h-7 text-[#ea580c] mb-4" />
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#1e3a8a]">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto text-white">
              <ThermometerSun className="w-14 h-14 text-[#f97316] mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Endüstriyel ısı pompası çözümleri
              </h2>
              <p className="text-white/75 font-light text-lg md:text-xl leading-relaxed mb-10">
                Üretim tesislerinin sıcak su, proses ısısı, ısıtma ve soğutma
                ihtiyaçlarını tek bir yüksek verimli sistem yaklaşımıyla ele
                almak için Thermaplus ürün ailesini inceleyebilirsiniz.
              </p>
              <Link
                href="/markalar/thermaplus"
                className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
              >
                Endüstriyel Ürünleri İncele
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
