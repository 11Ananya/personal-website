"use client";

import { motion } from "framer-motion";
import { TechPill } from "@/components/ui/tech-pill";
import { EXPERIENCE } from "@/lib/data";
import { fadeInUp, staggerContainer, cardReveal, viewportConfig } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="site-bg py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
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
              Experience
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-5xl md:text-[72px] font-bold text-white leading-[0.95] tracking-tight"
          >
            Where I&apos;ve
            <br />
            <span className="gradient-text">Worked.</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "var(--site-border)" }} />

          <div className="space-y-12">
            {EXPERIENCE.map((item, idx) => (
              <motion.div
                key={item.company}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2"
                  style={{ background: "var(--site-accent)", borderColor: "var(--site-bg)" }}
                />

                <div
                  className="group p-6 md:p-8 rounded-xl transition-all duration-300"
                  style={{ background: "var(--site-card)", border: "1px solid var(--site-border)" }}
                >
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">
                        {item.company}
                      </h3>
                      <p className="font-serif italic text-base text-neutral-400 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="text-xs font-mono text-neutral-500 whitespace-nowrap">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-neutral-600">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--site-accent)", opacity: 0.5 }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <TechPill key={tech} tech={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
