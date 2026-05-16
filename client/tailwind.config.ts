import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        gold: "var(--accent-gold)",
        rose: "var(--accent-rose)",
        charcoal: "var(--accent-charcoal)",
        blush: "var(--accent-blush)",
        text: "var(--text-primary)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)"],
        body: ["var(--font-jost)"],
      },
      boxShadow: {
        glow: "0 18px 45px rgba(184, 147, 58, 0.16)",
        card: "0 18px 40px rgba(42, 40, 37, 0.08)",
      },
      backgroundImage: {
        "gift-gradient":
          "radial-gradient(circle at top left, rgba(201, 135, 138, 0.20), transparent 35%), radial-gradient(circle at bottom right, rgba(184, 147, 58, 0.18), transparent 30%)",
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        float: "float 10s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
        blob: "blob 14s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(18px, -24px, 0) scale(1.06)" },
          "66%": { transform: "translate3d(-14px, 12px, 0) scale(0.94)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.6" },
          "50%": { transform: "translateY(-12px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
