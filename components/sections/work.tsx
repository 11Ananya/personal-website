"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TechPill } from "@/components/ui/tech-pill";
import { EXPERIENCE, PROJECTS } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const tabs = ["Experience", "Projects"] as const;
type Tab = (typeof tabs)[number];

export function WorkSection() {
  const [active, setActive] = useState<Tab>("Experience");

  return (
    <section id="work" className="site-bg py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-bold text-neutral-500 uppercase tracking-[0.2em] font-mono">
              Work
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-5xl md:text-[72px] font-bold text-white leading-[0.95] tracking-tight mb-8"
          >
            Where I&apos;ve worked
            <br />
            <span className="gradient-text">and what I&apos;ve built.</span>
          </motion.h2>

          {/* Tab switcher */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-1 p-1 rounded-full w-fit"
            style={{ background: "var(--site-card)", border: "1px solid var(--site-border)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className="relative px-5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-200"
                style={{ color: active === tab ? "var(--site-bg)" : "var(--site-text-3)" }}
              >
                {active === tab && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--site-text)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience tab */}
        <div style={{ display: active === "Experience" ? "block" : "none" }}>
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "var(--site-accent)", opacity: 0.3 }} />
            <div className="space-y-6">
              {EXPERIENCE.map((item) => (
                <div key={item.company} className="relative pl-10">
                  <div
                    className="absolute left-[-5px] top-3 w-2.5 h-2.5 rounded-full border-2"
                    style={{ background: "var(--site-accent)", borderColor: "var(--site-bg)" }}
                  />
                  <div
                    className="card-hover-glow p-5 md:p-6 rounded-xl"
                    style={{ background: "var(--site-card)", border: "1px solid var(--site-border)" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        {item.logo && (
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center"
                            style={{ background: "var(--site-bg)", border: "1px solid var(--site-border)" }}
                          >
                            <Image src={item.logo} alt={item.company} width={32} height={32} className="object-contain w-8 h-8" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-serif text-lg font-bold text-white leading-tight">{item.company}</h3>
                          <p className="font-serif italic text-sm text-neutral-400">{item.role}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs font-mono text-neutral-500 block">{item.period}</span>
                        <span className="text-xs font-mono text-neutral-600 block">{item.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-neutral-400 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--site-accent)", opacity: 0.5 }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((tech) => (
                        <TechPill key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects tab */}
        <div style={{ display: active === "Projects" ? "block" : "none" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.name}
                className="card-hover-glow p-5 rounded-xl flex flex-col gap-3"
                style={{ background: "var(--site-card)", border: "1px solid var(--site-border)" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {project.logo ? (
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center"
                        style={{ background: "var(--site-bg)", border: "1px solid var(--site-border)" }}
                      >
                        <Image src={project.logo} alt={project.name} width={32} height={32} className="object-contain w-8 h-8" />
                      </div>
                    ) : (
                      <span
                        className="font-serif font-bold text-2xl leading-none select-none flex-shrink-0"
                        style={{ color: "var(--site-text)", opacity: 0.12 }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    )}
                    <h3 className="font-serif text-lg font-bold text-white leading-tight">{project.name}</h3>
                  </div>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-70"
                      style={{ background: "var(--site-border)", color: "var(--site-text-2)" }}
                      aria-label={`View ${project.name}`}
                    >
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.stack.map((tech) => (
                    <TechPill key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
