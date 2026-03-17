"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Briefcase, Code2 } from "lucide-react";
import { TechPill } from "@/components/ui/tech-pill";
import { EXPERIENCE, PROJECTS } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const expCardStyle = {
  background: "var(--site-card)",
  border: "1px solid var(--site-border)",
  boxShadow: "inset 3px 0 0 var(--site-accent)",
};

const projCardStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid var(--site-border)",
};

function ExpLabel() {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest w-fit"
      style={{ background: "var(--site-accent-muted)", color: "var(--site-accent)" }}
    >
      <Briefcase size={8} />
      Experience
    </span>
  );
}

function ProjLabel() {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest w-fit border"
      style={{ borderColor: "var(--site-border-hover)", color: "var(--site-text-3)" }}
    >
      <Code2 size={8} />
      Project
    </span>
  );
}

function LinkBtn({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name}`}
      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-70 transition-opacity"
      style={{ background: "var(--site-border)", color: "var(--site-text-2)" }}
    >
      <ArrowUpRight size={11} />
    </a>
  );
}

export function WorkSection() {
  const [eon, t4a] = EXPERIENCE;
  const [infralens, portfolio, intellilog, lawfirm] = PROJECTS;

  return (
    <section id="work" className="site-bg py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

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
            className="font-serif text-5xl md:text-[72px] font-bold text-white leading-[0.95] tracking-tight"
          >
            Where I&apos;ve worked
            <br />
            <span className="gradient-text">and what I&apos;ve built.</span>
          </motion.h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-4 gap-3"
        >

          {/* ── ROW 1 ── */}

          {/* Eon Media — wide experience */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 card-hover-glow rounded-2xl p-6 flex flex-col gap-4"
            style={expCardStyle}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {eon.logo && (
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
                    style={{ background: "var(--site-bg)", border: "1px solid var(--site-border)" }}>
                    <Image src={eon.logo} alt={eon.company} width={32} height={32} className="object-contain w-8 h-8" />
                  </div>
                )}
                <div>
                  <ExpLabel />
                  <h3 className="font-serif text-lg font-bold text-white mt-1 leading-tight">{eon.company}</h3>
                  <p className="font-serif italic text-sm text-neutral-400">{eon.role}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-600 flex-shrink-0 whitespace-nowrap">{eon.period}</span>
            </div>
            <ul className="space-y-1.5 flex-1">
              {eon.bullets.slice(0, 3).map((b, i) => (
                <li key={i} className="flex gap-2 text-xs text-neutral-400 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--site-accent)", opacity: 0.5 }} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {eon.stack.slice(0, 4).map((t) => <TechPill key={t} tech={t} />)}
            </div>
          </motion.div>

          {/* InfraLens — project square */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-1 card-hover-glow rounded-2xl p-6 flex flex-col gap-3"
            style={projCardStyle}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                {infralens.logo && (
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
                    style={{ background: "var(--site-bg)", border: "1px solid var(--site-border)" }}>
                    <Image src={infralens.logo} alt={infralens.name} width={24} height={24} className="object-contain w-6 h-6" />
                  </div>
                )}
                <div>
                  <ProjLabel />
                  <h3 className="font-serif text-base font-bold text-white mt-1 leading-tight">{infralens.name}</h3>
                </div>
              </div>
              {infralens.href && <LinkBtn href={infralens.href} name={infralens.name} />}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed flex-1 line-clamp-4">{infralens.description}</p>
            <div className="flex flex-wrap gap-1">
              {infralens.stack.slice(0, 3).map((t) => <TechPill key={t} tech={t} />)}
            </div>
          </motion.div>

          {/* 3D Portfolio — project square */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-1 card-hover-glow rounded-2xl p-6 flex flex-col gap-3"
            style={projCardStyle}
          >
            <div className="flex items-start justify-between">
              <div>
                <ProjLabel />
                <h3 className="font-serif text-base font-bold text-white mt-1 leading-tight">{portfolio.name}</h3>
              </div>
              {portfolio.href && <LinkBtn href={portfolio.href} name={portfolio.name} />}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed flex-1 line-clamp-4">{portfolio.description}</p>
            <div className="flex flex-wrap gap-1">
              {portfolio.stack.slice(0, 3).map((t) => <TechPill key={t} tech={t} />)}
            </div>
          </motion.div>

          {/* ── ROW 2 ── */}

          {/* IntelliLog — project square */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-1 card-hover-glow rounded-2xl p-6 flex flex-col gap-3"
            style={projCardStyle}
          >
            <div className="flex items-start justify-between">
              <div>
                <ProjLabel />
                <h3 className="font-serif text-base font-bold text-white mt-1 leading-tight">{intellilog.name}</h3>
              </div>
              {intellilog.href && <LinkBtn href={intellilog.href} name={intellilog.name} />}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed flex-1 line-clamp-4">{intellilog.description}</p>
            <div className="flex flex-wrap gap-1">
              {intellilog.stack.slice(0, 3).map((t) => <TechPill key={t} tech={t} />)}
            </div>
          </motion.div>

          {/* Talent4Assure — wide experience */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 card-hover-glow rounded-2xl p-6 flex flex-col gap-4"
            style={expCardStyle}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {t4a.logo && (
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
                    style={{ background: "var(--site-bg)", border: "1px solid var(--site-border)" }}>
                    <Image src={t4a.logo} alt={t4a.company} width={32} height={32} className="object-contain w-8 h-8" />
                  </div>
                )}
                <div>
                  <ExpLabel />
                  <h3 className="font-serif text-lg font-bold text-white mt-1 leading-tight">{t4a.company}</h3>
                  <p className="font-serif italic text-sm text-neutral-400">{t4a.role}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-600 flex-shrink-0 whitespace-nowrap">{t4a.period}</span>
            </div>
            <ul className="space-y-1.5 flex-1">
              {t4a.bullets.slice(0, 3).map((b, i) => (
                <li key={i} className="flex gap-2 text-xs text-neutral-400 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--site-accent)", opacity: 0.5 }} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {t4a.stack.slice(0, 4).map((t) => <TechPill key={t} tech={t} />)}
            </div>
          </motion.div>

          {/* Law Firm — project square */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-1 card-hover-glow rounded-2xl p-6 flex flex-col gap-3"
            style={projCardStyle}
          >
            <div className="flex items-start justify-between">
              <div>
                <ProjLabel />
                <h3 className="font-serif text-base font-bold text-white mt-1 leading-tight">{lawfirm.name}</h3>
              </div>
              {lawfirm.href && <LinkBtn href={lawfirm.href} name={lawfirm.name} />}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed flex-1 line-clamp-4">{lawfirm.description}</p>
            <div className="flex flex-wrap gap-1">
              {lawfirm.stack.slice(0, 3).map((t) => <TechPill key={t} tech={t} />)}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
