import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Kurumsal",
    links: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "Saray Holding", href: "https://www.sarayholding.com.tr" },
    ],
  },
  {
    title: "Ürünler",
    links: [
      { name: "Inspur (BESS)", href: "/markalar/inspur" },
      { name: "Isı Pompası", href: "/markalar/thermaplus" },
    ],
  },
  {
    title: "Çözümler",
    links: [
      { name: "Fabrikalar", href: "/cozumlerimiz/fabrikalar" },
      { name: "Veri Merkezleri", href: "/cozumlerimiz/veri-merkezleri" },
      { name: "Konut Çözümleri", href: "/cozumlerimiz/evler" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-12">
              <div className="relative h-16 lg:h-24 w-[200px] sm:w-[250px] lg:w-[350px]">
                <Image
                  src="/images/image5.png"
                  alt="NEWSTAG Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-500 mb-10 max-w-sm leading-relaxed font-light">
              Saray Holding güvencesiyle, geleceğin enerji altyapısını bugün inşa ediyoruz. Sürdürülebilir ve verimli enerji çözümleri.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#ea580c] hover:border-[#ea580c] transition-all">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#ea580c] hover:border-[#ea580c] transition-all">
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[#1e3a8a] font-bold mb-8 uppercase text-xs tracking-widest">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[#ea580c] transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> İstanbul, Türkiye</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +90 (212) 000 00 00</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@newstag.com.tr</span>
          </div>
          <p className="text-xs text-gray-400 font-light">
            © {new Date().getFullYear()} Newstag Enerji. Bir <span className="font-medium text-gray-600">Saray Holding</span> kuruluşudur.
          </p>
        </div>
      </div>
    </footer>
  );
}
