import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F4EFE6",
          50: "#FBF8F2",
          100: "#F4EFE6",
          200: "#ECE5D6",
          300: "#E0D6C2"
        },
        ink: {
          DEFAULT: "#0E0D0B",
          900: "#0E0D0B",
          800: "#1A1814",
          700: "#2A2620",
          600: "#3E3830"
        },
        bordeaux: {
          DEFAULT: "#6B1A20",
          600: "#7A1F25",
          700: "#5C151B",
          800: "#451015"
        },
        champagne: {
          DEFAULT: "#C9B79A",
          light: "#DCCBAE",
          dark: "#A89878"
        },
        stone: {
          warm: "#8C8478",
          mist: "#B8AFA1"
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Nohemi", "Inter", "system-ui", "sans-serif"],
        display: ["Nohemi", "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"]
      },
      letterSpacing: {
        "extra-wide": "0.32em",
        "ultra-wide": "0.42em"
      },
      animation: {
        "marquee": "marquee 60s linear infinite",
        "subtle-pan": "subtlePan 28s ease-in-out infinite alternate"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        subtlePan: {
          "0%": { transform: "scale(1.05) translate(0%, 0%)" },
          "100%": { transform: "scale(1.12) translate(-1.5%, -1.5%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
