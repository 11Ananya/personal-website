import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "var(--bg-base)",
        "bg-deep": "var(--bg-deep)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "accent-purple": "var(--accent-purple)",
        "accent-teal": "var(--accent-teal)",
        "accent-blue": "var(--accent-blue)",
        "glass-bg": "var(--glass-bg)",
        "glass-border": "var(--glass-border)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      spacing: {
        "space-1": "4px",
        "space-2": "8px",
        "space-4": "16px",
        "space-8": "32px",
        "space-12": "48px",
        "space-20": "80px",
        "space-32": "128px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        glass: "0 0 0 1px rgba(255,255,255,0.08)",
        hover: "0 0 30px rgba(139,92,246,0.15)",
        nav: "0 0 40px rgba(0,0,0,0.4)",
        cta: "0 0 60px rgba(139,92,246,0.2)",
      },
      keyframes: {
        "chromatic-drift-1": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(30px, -20px) scale(1.05)" },
        },
        "chromatic-drift-2": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(-20px, 30px) scale(1.08)" },
        },
        "chromatic-drift-3": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(15px, 15px) scale(1.03)" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
      animation: {
        "chromatic-slow-1":
          "chromatic-drift-1 25s ease-in-out infinite alternate",
        "chromatic-slow-2":
          "chromatic-drift-2 30s ease-in-out infinite alternate",
        "chromatic-slow-3":
          "chromatic-drift-3 20s ease-in-out infinite alternate",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        marquee: "marquee 30s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
