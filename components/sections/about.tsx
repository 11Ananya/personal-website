"use client";

import { motion } from "framer-motion";
import { StatPill } from "@/components/ui/stat-pill";
import { PixelCanvas } from "@/components/ui/pixel-canvas";
import { ABOUT } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function AboutSection() {
  return (
    <section id="about" className="site-bg py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="md:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-bold text-neutral-500 uppercase tracking-[0.2em] font-mono">
                About
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-serif text-5xl md:text-[72px] font-bold text-white leading-[0.95] mb-8 tracking-tight"
            >
              Building things
              <br />
              <span className="gradient-text">that matter.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mb-12"
            >
              {ABOUT.bio}
            </motion.p>

            {/* Stat pills */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {ABOUT.stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <StatPill value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Glass visual panel */}
          <motion.div
            className="hidden md:flex md:col-span-2 items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* AD card — hover triggers pixel animation */}
            <div
              className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden"
              style={{ background: "var(--site-bg)", border: "1px solid var(--site-border)" }}
            >
              {/* Pixel canvas — animates on hover of this card */}
              <PixelCanvas
                gap={10}
                speed={20}
                colors={["#e5e5e5", "#a3a3a3", "#6b6b6b"]}
                variant="icon"
              />

              {/* Initials — above canvas */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <span className="font-serif text-7xl font-bold leading-none tracking-tight" style={{ color: "var(--site-text)" }}>
                  AD
                </span>
                <span className="text-xs font-mono mt-3 uppercase tracking-[0.2em]" style={{ color: "var(--site-text-3)" }}>
                  Ananya Dabas
                </span>
                <span className="text-[10px] font-mono mt-1 uppercase tracking-widest" style={{ color: "var(--site-text-3)", opacity: 0.6 }}>
                  CS · UWaterloo
                </span>
              </div>

              {/* Corner ticks */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l z-10" style={{ borderColor: "var(--site-accent)", opacity: 0.5 }} />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r z-10" style={{ borderColor: "var(--site-accent)", opacity: 0.5 }} />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l z-10" style={{ borderColor: "var(--site-accent)", opacity: 0.5 }} />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r z-10" style={{ borderColor: "var(--site-accent)", opacity: 0.5 }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
