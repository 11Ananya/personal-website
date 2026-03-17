"use client";

import { motion } from "framer-motion";
import { TechPill } from "@/components/ui/tech-pill";
import { Marquee } from "@/components/ui/marquee";
import { SKILLS, ALL_SKILLS_MARQUEE } from "@/lib/data";
import { fadeInUp, staggerContainer, pillFadeIn, viewportConfig } from "@/lib/motion";

export function SkillsSection() {
  return (
    <section id="skills" className="site-bg py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-bold text-neutral-500 uppercase tracking-[0.2em] font-mono">
              Stack
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-5xl md:text-[72px] font-bold text-white leading-[0.95] tracking-tight"
          >
            What I Work
            <br />
            <span className="gradient-text">With.</span>
          </motion.h2>
        </motion.div>

        {/* Skill groups grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {SKILLS.map((group) => (
            <motion.div key={group.label} variants={fadeInUp}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-4 font-mono">
                {group.label}
              </p>
              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <motion.div key={item.name} variants={pillFadeIn}>
                    <TechPill tech={item.name} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8 }}
        >
          <Marquee items={ALL_SKILLS_MARQUEE} speed={30} />
        </motion.div>
      </div>
    </section>
  );
}
