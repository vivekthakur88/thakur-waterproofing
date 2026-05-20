import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B1325", // Luxury Deep Blue/Charcoal
          slate: "#1E293B",
          blue: "#0EA5E9",  // Clinical Blue
          lightBlue: "#E0F2FE", // Soft contrast blue
          gold: "#D4AF37", // Elegant gold highlight
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        "infinite-scroll": "infiniteScroll 40s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        infiniteScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.08)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        gold: "0 0 15px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
