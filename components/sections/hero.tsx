"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { HERO } from "@/lib/data";

const expoOut = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section className="relative site-bg min-h-screen w-full overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="dot-grid" />
        <div className="dot-grid-vignette" />
        <div className="noise-overlay" />
      </div>

      {/* Main card */}
      <div className="relative z-10 min-h-screen flex items-center px-4 md:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <Card
            className="hero-card relative w-full overflow-hidden rounded-2xl min-h-[85vh]"
            style={{ background: "var(--site-bg)", border: "1px solid var(--site-border)" }}
          >
            {/* Spotlight effect */}
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="relative z-10 flex flex-col md:flex-row h-full min-h-[85vh]">
              {/* Left: Content */}
              <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-16 md:py-0">

                {/* Velocity signal — replaces the neon availability badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                  className="mb-8"
                >
                  <span className="font-mono text-[11px] text-neutral-600 uppercase tracking-[0.18em]">
                    2 internships · 10+ projects shipped · 0→prod, not just 0→demo
                  </span>
                </motion.div>

                {/* Name — clip-path reveal */}
                <div className="overflow-hidden mb-4">
                  <motion.h1
                    initial={{ clipPath: "inset(0 0 100% 0)" }}
                    animate={{ clipPath: "inset(0 0 0% 0)" }}
                    transition={{ duration: 0.7, delay: 0.1, ease: expoOut }}
                    className="font-serif text-[72px] md:text-[96px] font-bold text-white leading-[0.95] tracking-tight"
                  >
                    {HERO.name}
                  </motion.h1>
                </div>

                {/* Role */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: expoOut }}
                  className="font-serif text-3xl md:text-[36px] font-normal italic text-neutral-400 mb-6 leading-tight"
                >
                  {HERO.role}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: expoOut }}
                  className="text-[17px] text-neutral-400 font-sans leading-relaxed max-w-lg mb-10"
                >
                  {HERO.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.5, ease: expoOut }}
                  className="flex flex-wrap items-center gap-3 mb-10"
                >
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-100 hover:scale-[1.03] transition-all duration-200"
                  >
                    {HERO.primaryCTA} →
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    {HERO.secondaryCTA}
                  </a>
                </motion.div>

                {/* Contact strip */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6, ease: expoOut }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] w-fit"
                >
                  <span className="font-mono text-xs text-neutral-500">
                    {HERO.email}
                  </span>
                  <a
                    href={HERO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.15] transition-colors"
                  >
                    <Github size={11} className="text-neutral-400" />
                  </a>
                  <a
                    href={HERO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.15] transition-colors"
                  >
                    <Linkedin size={11} className="text-neutral-400" />
                  </a>
                </motion.div>
              </div>

              {/* Right: Spline 3D */}
              <div className="hidden md:flex flex-1 items-center justify-center relative">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full min-h-[500px]"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-20"
        style={{ animation: "bounce-scroll 2s ease-in-out infinite" }}
      >
        <ChevronDown size={20} className="text-neutral-700" />
      </div>
    </section>
  );
}
