"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const visuals = [
  {
    title: "BUGÜNÜ GÜÇLENDIRMEKTEN DAHA FAZLASI",
    subtitle: "PowerTitan 3.0",
    image: "/images/e9551124-2722-4454-bf42-e6d7ff187aec.png",
    align: "left",
  },
  {
    title: "Daha iyi bir dünya için iyi niyet toplamak",
    subtitle: "",
    image: "/images/forest-layered.png",
    align: "center",
  },
];

export default function StackedVisuals() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {visuals.map((visual, i) => {
          // Calculate start and end points for each card's animation
          const start = i / visuals.length;
          const end = (i + 1) / visuals.length;
          
          // Current card scales down as the NEXT card starts to come in
          const nextStart = (i + 1) / visuals.length;
          
          // Scale logic: stays 1 until its turn, then stays 1 while active, then shrinks if it's the previous card
          const scale = useTransform(
            scrollYProgress,
            [start, nextStart],
            [1, 0.9]
          );

          const opacity = useTransform(
            scrollYProgress,
            [start, nextStart],
            [1, 0.8]
          );

          const borderRadius = useTransform(
            scrollYProgress,
            [start, nextStart],
            [0, 80]
          );

          // Position logic: Card starts from below and moves to top
          const y = useTransform(
            scrollYProgress,
            [start - 0.2, start],
            ["100%", "0%"]
          );

          return (
            <motion.div
              key={i}
              style={{ 
                scale: i === visuals.length - 1 ? 1 : scale, 
                borderRadius: i === visuals.length - 1 ? 0 : borderRadius,
                opacity,
                y: i === 0 ? 0 : y,
                zIndex: i,
              }}
              className="absolute inset-0 h-full w-full overflow-hidden origin-top shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={visual.image}
                  alt={visual.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-black/15" />
              </div>

              {/* Text Overlay */}
              <div className={`absolute inset-0 z-10 p-6 md:p-24 flex flex-col justify-end pb-16 md:pb-32 ${
                visual.align === "left" ? "items-start text-left" : "items-center text-center"
              }`}>
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-8xl font-medium text-white max-w-5xl leading-tight drop-shadow-2xl uppercase tracking-tighter"
                >
                  {visual.title}
                </motion.h2>
                {visual.subtitle && (
                  <motion.p 
                    className="mt-6 text-xl md:text-3xl font-light text-white/90 drop-shadow-xl"
                  >
                    {visual.subtitle}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
