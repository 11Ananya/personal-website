"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const DARK_VARS: Record<string, string> = {
  "--site-bg": "#0a0a0a",
  "--site-bg-alt": "#000000",
  "--site-text": "#ffffff",
  "--site-text-2": "#888888",
  "--site-text-3": "#555555",
  "--site-border": "rgba(255,255,255,0.07)",
  "--site-border-hover": "rgba(255,255,255,0.15)",
  "--site-card": "rgba(255,255,255,0.03)",
  "--site-card-hover": "rgba(255,255,255,0.05)",
  "--site-dot": "rgba(255,255,255,0.07)",
  "--site-vignette": "#0a0a0a",
  "--site-accent": "#b83d62",
  "--site-accent-muted": "rgba(143,44,79,0.14)",
};

const LIGHT_VARS: Record<string, string> = {
  "--site-bg": "#faf7f4",
  "--site-bg-alt": "#f0ebe3",
  "--site-text": "#1a1a1a",
  "--site-text-2": "#4a4a4a",
  "--site-text-3": "#6b6868",
  "--site-border": "rgba(0,0,0,0.10)",
  "--site-border-hover": "rgba(0,0,0,0.20)",
  "--site-card": "rgba(0,0,0,0.04)",
  "--site-card-hover": "rgba(0,0,0,0.07)",
  "--site-dot": "rgba(0,0,0,0.08)",
  "--site-vignette": "#faf7f4",
  "--site-accent": "#8f2c4f",
  "--site-accent-muted": "rgba(143,44,79,0.12)",
};

function applyTheme(light: boolean) {
  const root = document.documentElement;
  const vars = light ? LIGHT_VARS : DARK_VARS;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  // Also set the data-theme attribute so CSS class overrides (text-white etc) fire
  if (light) {
    root.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme");
  }
}

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsLight(true);
      applyTheme(true);
    }
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    applyTheme(next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200"
      style={{
        border: "1px solid var(--site-border)",
        background: "var(--site-card)",
        color: "var(--site-text-2)",
      }}
    >
      {isLight ? <Moon size={12} /> : <Sun size={12} />}
    </button>
  );
}
