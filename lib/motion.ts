import type { Variants } from "framer-motion";

// Custom expo-out easing: fast start, graceful deceleration
const expoOut = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: expoOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: expoOut },
  },
};

export const pillFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: expoOut },
  },
};

// Clip-path reveal — text slides up from behind a mask
export const lineReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.65, ease: expoOut },
  },
};

export const glowPulse: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export const viewportConfig = {
  once: true,
  amount: 0.2,
} as const;
