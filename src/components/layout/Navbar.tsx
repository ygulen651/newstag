"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";



export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Markalarımız", href: "/markalar" },
    { name: "Çözümlerimiz", href: "/cozumlerimiz" },
    { name: "BESS", href: "/markalar/inspur" },
    { name: "Isı Pompası", href: "/markalar/thermaplus" },
    { name: "Servis ve Satış Ağı", href: "/servis" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6">
        {/* Mobile Header (Hidden on lg) */}
        <div className="flex lg:hidden justify-between items-center py-4">
          <Link href="/" className="z-10">
            <div className="relative w-[120px] h-10 md:w-[150px] md:h-12">
              <Image
                src="/images/image5.png"
                alt="NEWSTAG Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Desktop Header (Hidden on mobile) */}
        <nav className="hidden lg:flex w-full items-center justify-center py-4 relative z-20">
          <div className="flex items-center gap-6 xl:gap-8">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap text-gray-700 hover:text-[#ea580c]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/" className="mx-12 xl:mx-24 z-10 shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-[180px] h-14 xl:w-[220px] xl:h-16"
            >
              <Image
                src="/images/image5.png"
                alt="NEWSTAG Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          <div className="flex items-center gap-6 xl:gap-8">
            {navLinks.slice(4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap text-gray-700 hover:text-[#ea580c]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 bg-white z-[100] p-8 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-xl font-bold text-[#ea580c]">NEWSTAG ENERJİ</div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-black" />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
