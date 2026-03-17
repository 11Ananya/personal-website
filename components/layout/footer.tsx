import { Github, Linkedin, Mail } from "lucide-react";
import { FOOTER_COLS, HERO } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-bg border-t" style={{ borderColor: "var(--site-border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="text-3xl font-bold font-serif text-white mb-3">AD</div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              CS @ Waterloo. Builds fast, ships faster.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={HERO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
              >
                <Github size={14} className="text-neutral-400" />
              </a>
              <a
                href={HERO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
              >
                <Linkedin size={14} className="text-neutral-400" />
              </a>
              <a
                href={`mailto:${HERO.email}`}
                aria-label="Email"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
              >
                <Mail size={14} className="text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Content cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-4 font-mono">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--site-border)" }}>
          <p className="text-xs text-neutral-600 font-mono">
            © 2026 Ananya Dabas. Built with Next.js & deployed on Vercel.
          </p>
          <p className="text-xs text-neutral-700 font-mono">
            adabas@uwaterloo.ca
          </p>
        </div>
      </div>
    </footer>
  );
}
