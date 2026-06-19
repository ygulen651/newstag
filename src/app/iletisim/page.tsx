"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="bg-white overflow-hidden">
        {/* Immersive Parallax Hero */}
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#1e3a8a]">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
            className="absolute inset-0 z-0 opacity-40"
          >
            {/* Using an existing image as background */}
            <Image src="/images/home-hero.png" alt="Contact Hero" fill className="object-cover" priority />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/80 via-[#1e3a8a]/50 to-[#1e3a8a] z-0" />
          
          <div className="relative z-10 text-center space-y-8 max-w-5xl px-6 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.5em] mb-6 block">İletişim</span>
              <h1 className="text-6xl md:text-9xl font-medium text-white tracking-tighter leading-none">
                Bize <br />
                <span className="text-gray-400">Ulaşın</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section with Floating Elements */}
        <section className="py-32 relative z-20 -mt-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              
              {/* Contact Information (Floating Editorial Layout) */}
              <div className="space-y-24">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-7xl font-medium text-[#020817] tracking-tighter mb-8 leading-tight">
                    Bizimle <br /> <span className="text-[#ea580c]">İletişime Geçin</span>
                  </h2>
                  <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">
                    Projeleriniz, teknik destek talepleriniz veya iş ortaklığı için uzman ekibimizle anında iletişime geçin.
                  </p>
                </motion.div>

                <div className="space-y-16">
                  {[
                    { icon: MapPin, title: "Genel Merkez", desc: "Saray Holding Genel Merkezi\nİstanbul, Türkiye" },
                    { icon: Phone, title: "Telefon", desc: "+90 (212) 000 00 00" },
                    { icon: Mail, title: "E-posta", desc: "info@newstag.com.tr" },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-8 group"
                    >
                      <div className="mt-2 text-[#ea580c] group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8 stroke-[1.5]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#020817] mb-2">{item.title}</h3>
                        <p className="text-lg text-gray-500 whitespace-pre-line font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Parallax Form Area */}
              <div className="relative">
                <motion.div 
                  style={{ y: useTransform(smoothProgress, [0, 1], ["0%", "-10%"]) }}
                  className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl shadow-[#ea580c]/10 border border-gray-100 relative z-10"
                >
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-[#020817] mb-4">Mesaj Gönderin</h3>
                    <div className="w-12 h-1 bg-[#ea580c]" />
                  </div>

                  <form className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">Ad Soyad</label>
                      <input
                        type="text"
                        className="w-full bg-gray-50 border-none px-6 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-gray-800"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">E-posta</label>
                      <input
                        type="email"
                        className="w-full bg-gray-50 border-none px-6 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-gray-800"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">Mesajınız</label>
                      <textarea
                        className="w-full bg-gray-50 border-none px-6 py-5 rounded-3xl h-40 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-gray-800 resize-none"
                        placeholder="Size nasıl yardımcı olabiliriz?"
                      ></textarea>
                    </div>

                    <button className="w-full group bg-[#ea580c] text-white py-6 rounded-3xl font-bold text-lg hover:bg-[#c2410c] transition-all flex items-center justify-center gap-4">
                      Gönder 
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                </motion.div>

                {/* Decorative Parallax Blob behind form */}
                <motion.div 
                  style={{ rotate }}
                  className="absolute -top-12 -right-12 w-64 h-64 bg-[#f97316] rounded-full blur-[100px] opacity-20 -z-10"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Large Decorative Section */}
        <section className="py-32 bg-[#1e3a8a] overflow-hidden relative">
          <div className="absolute inset-0 flex items-center opacity-5 pointer-events-none">
            <motion.span 
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="text-[20rem] font-black text-white tracking-tighter uppercase whitespace-nowrap"
            >
              NEWSTAG ENERJI • ILETISIM • 
            </motion.span>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
              Geleceği Birlikte <span className="text-[#f97316]">İnşa Edelim</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Enerji sektöründeki yenilikçi çözümlerimizi keşfetmek ve projelerinizde bizimle çalışmak için iletişime geçin.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
