"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { HERO } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative site-bg py-32 md:py-40 overflow-hidden"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Ambient blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(74,124,184,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-bold text-neutral-500 uppercase tracking-[0.2em] font-mono">
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-5xl md:text-[72px] font-bold text-white leading-[0.95] tracking-tight mb-6"
          >
            Let&apos;s build
            <br />
            <span className="gradient-text">something great.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-neutral-400 leading-relaxed mb-12 max-w-lg mx-auto"
          >
            Open to Summer 2026 engineering internships and interesting
            projects. Let&apos;s connect.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href={`mailto:${HERO.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-100 hover:scale-[1.03] transition-all duration-200"
            >
              <Mail size={14} />
              Email Me →
            </a>
            <a
              href={HERO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/[0.06] transition-all duration-200"
            >
              <Github size={14} />
              View GitHub
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={HERO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
            >
              <Github size={16} className="text-neutral-400" />
            </a>
            <a
              href={HERO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
            >
              <Linkedin size={16} className="text-neutral-400" />
            </a>
            <a
              href={`mailto:${HERO.email}`}
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
            >
              <Mail size={16} className="text-neutral-400" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
