"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  image: string;
  color: string;
}

export default function NewsContent({ news }: { news: NewsItem[] }) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate X transform based on number of items
  const scrollRange = news.length > 1 ? `-${(news.length - 1) * 100}%` : "0%";
  const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollRange]);

  return (
    <main className="bg-white">
      {/* Intro Section */}
      <section className="h-screen flex flex-col justify-end pb-32 px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#ea580c] text-sm font-bold uppercase tracking-[0.4em] mb-6 block">Haber Merkezi</span>
          <h1 className="text-5xl sm:text-6xl md:text-9xl font-medium text-[#020817] tracking-tighter leading-none mb-8">
            Newstag <br />
            <span className="text-gray-300">Journal</span>
          </h1>
          <p className="text-2xl text-gray-500 font-light max-w-2xl">
            Dünyamızı dönüştüren enerji haberleri için aşağı kaydırmaya devam edin.
          </p>
        </motion.div>
      </section>

      {/* Horizontal Scroll Section (Desktop Only) */}
      {news.length > 0 && (
        <section ref={targetRef} className="hidden lg:block relative bg-[#020817]" style={{ height: `${news.length * 100}vh` }}>
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div className="flex" style={{ x, width: `${news.length * 100}vw` }}>
              {news.map((item, i) => (
                <div key={item.id} className="w-[100vw] h-screen flex items-center justify-center p-6 md:p-24 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/5 pointer-events-none select-none">
                    0{i + 1}
                  </div>

                  <div className={`relative w-full max-w-7xl h-[70vh] rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl ${item.color || 'bg-[#1e3a8a]'}`}>
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                      <Image 
                        src={item.image || "/images/placeholder.png"} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                      />
                    </div>
                    
                    <div className="w-full md:w-1/2 h-1/2 md:h-full p-10 md:p-16 flex flex-col justify-between text-white relative z-10">
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            {item.category}
                          </span>
                          <span className="text-white/60 text-sm font-medium flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {item.date}
                          </span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tighter leading-tight">
                          {item.title}
                        </h2>
                        
                        <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      </div>

                      <button className="self-start mt-8 bg-white text-[#020817] px-8 py-4 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-all flex items-center gap-3 group">
                        Tamamını Oku <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Vertical Stack Section (Mobile/Tablet Only) */}
      <section className="block lg:hidden bg-[#020817] py-24 px-6">
        <div className="flex flex-col gap-12">
          {news.map((item, i) => (
            <div key={`mobile-${item.id}`} className={`relative w-full rounded-3xl overflow-hidden shadow-xl ${item.color || 'bg-[#1e3a8a]'} flex flex-col`}>
              <div className="w-full h-64 relative overflow-hidden">
                <Image 
                  src={item.image || "/images/placeholder.png"} 
                  alt={item.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="p-8 flex flex-col gap-6 text-white relative z-10">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                    {item.category}
                  </span>
                  <span className="text-white/60 text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </span>
                </div>
                
                <h2 className="text-3xl font-medium tracking-tighter leading-tight">
                  {item.title}
                </h2>
                
                <p className="text-white/70 font-light leading-relaxed">
                  {item.description}
                </p>

                <button className="mt-4 bg-white text-[#020817] px-6 py-3 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-all flex items-center gap-3 w-max">
                  Oku <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
