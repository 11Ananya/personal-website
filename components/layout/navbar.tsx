"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { NAV_LINKS, HERO } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className="flex items-center gap-5 px-4 py-2.5 rounded-full transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(24px)" : "blur(12px)",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(12px)",
          background: "var(--site-card)",
          border: "1px solid var(--site-border)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.12)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-bold font-serif tracking-wider mr-2 transition-colors duration-200"
          style={{ color: "var(--site-text)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--site-accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--site-text)")}
        >
          AD
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest transition-colors duration-200"
              style={{ color: "var(--site-text-2)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--site-text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--site-text-2)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 ml-1">
          <ThemeToggle />
          <a
            href={HERO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200"
            style={{
              border: "1px solid var(--site-border)",
              background: "var(--site-card)",
              color: "var(--site-text-2)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--site-accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--site-accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--site-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--site-text-2)";
            }}
          >
            <Github size={13} />
          </a>
          <a
            href={`mailto:${HERO.email}`}
            aria-label="Send email"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
            style={{
              background: "var(--site-text)",
              color: "var(--site-bg)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            <Mail size={11} />
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
