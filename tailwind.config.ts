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
          navy: "#0A192F",       // Premium Deep Navy Blue
          navyLight: "#172A45",  // Lighter Navy Blue for cards
          navyDark: "#020C1B",   // Ultra Dark Navy for sections
          orange: "#7619b4ff",     // Bright Waterproofing Orange CTA
          orangeHover: "#3511d3ff",// Deep Orange CTA Hover
          slate: "#64748B",      // Cool Slate Gray for text
          lightSlate: "#CCD6F6", // Light Slate for text highlights
          lightBg: "#F8FAFC",    // Clean Off-White background
          accentBlue: "#00B4D8", // Water-blue secondary accents
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        "infinite-scroll": "infiniteScroll 40s linear infinite",
        "wave-flow": "waveFlow 8s linear infinite",
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
        waveFlow: {
          "0%": { transform: "translateX(0) translateZ(0) scaleY(1)" },
          "50%": { transform: "translateX(-25%) translateZ(0) scaleY(0.8)" },
          "100%": { transform: "translateX(-50%) translateZ(0) scaleY(1)" },
        }
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(10, 25, 47, 0.08)",
        "glass-dark": "0 8px 32px 0 rgba(2, 12, 27, 0.5)",
        orange: "0 4px 20px rgba(255, 107, 0, 0.35)",
        "orange-lg": "0 10px 25px rgba(255, 107, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
