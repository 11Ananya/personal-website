"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TechPill } from "@/components/ui/tech-pill";
import { PixelCanvas } from "@/components/ui/pixel-canvas";
import { PROJECTS } from "@/lib/data";
import { fadeInUp, staggerContainer, cardReveal, viewportConfig } from "@/lib/motion";

// Subtle neutral palettes per card — works on dark and light backgrounds
const PIXEL_PALETTES = [
  ["#e5e5e5", "#a3a3a3", "#525252"],
  ["#d4d4d4", "#737373", "#404040"],
  ["#e5e5e5", "#a3a3a3", "#525252"],
  ["#d4d4d4", "#737373", "#404040"],
];

export function ProjectsSection() {
  return (
    <section id="projects" className="site-bg py-24 md:py-32 overflow-hidden">
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
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] font-mono"
              style={{ border: "1px solid var(--site-border)", background: "var(--site-card)", color: "var(--site-text-3)" }}
            >
              Projects
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-5xl md:text-[72px] font-bold leading-[0.95] tracking-tight"
            style={{ color: "var(--site-text)" }}
          >
            Things I&apos;ve
            <br />
            <span className="gradient-text">Built.</span>
          </motion.h2>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.name}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div
                className={`group card-hover-glow flex flex-col ${
                  project.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } rounded-2xl overflow-hidden`}
                style={{ border: "1px solid var(--site-border)" }}
              >
                {/* Content panel */}
                <div
                  className="flex-1 flex flex-col justify-center p-8 md:p-10 transition-colors duration-300"
                  style={{ background: "var(--site-card)" }}
                >
                  <div className="mb-4">
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] font-mono"
                      style={{ border: "1px solid var(--site-border)", background: "var(--site-card)", color: "var(--site-text-3)" }}
                    >
                      Project 0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className="font-serif text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: "var(--site-text)" }}
                  >
                    {project.name}
                    <span style={{ color: "var(--site-text-3)" }}>.</span>
                  </h3>

                  <p
                    className="text-sm md:text-base leading-relaxed mb-6 max-w-lg"
                    style={{ color: "var(--site-text-2)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <TechPill key={tech} tech={tech} />
                    ))}
                  </div>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium group/link transition-opacity duration-200 w-fit"
                      style={{ color: "var(--site-text-2)" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    >
                      View Project
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform duration-200"
                      />
                    </a>
                  )}
                </div>

                {/* Visual panel — PixelCanvas + index number */}
                <div
                  className="w-full md:w-64 lg:w-80 min-h-[200px] md:min-h-0 relative overflow-hidden flex-shrink-0"
                  style={{ background: "var(--site-bg)" }}
                >
                  {/* Pixel animation — triggers on hover of this panel */}
                  <PixelCanvas
                    gap={9}
                    speed={22}
                    colors={PIXEL_PALETTES[idx % PIXEL_PALETTES.length]}
                    variant="default"
                  />

                  {/* Corner brackets */}
                  <div className="absolute top-4 left-4 w-5 h-5 border-t border-l z-10" style={{ borderColor: "var(--site-accent)", opacity: 0.5 }} />
                  <div className="absolute top-4 right-4 w-5 h-5 border-t border-r z-10" style={{ borderColor: "var(--site-accent)", opacity: 0.5 }} />
                  <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l z-10" style={{ borderColor: "var(--site-accent)", opacity: 0.5 }} />
                  <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r z-10" style={{ borderColor: "var(--site-accent)", opacity: 0.5 }} />

                  {/* Large index number */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span
                      className="font-serif font-bold select-none"
                      style={{
                        fontSize: "120px",
                        lineHeight: 1,
                        color: "var(--site-text)",
                        opacity: 0.10,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
