import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E527B", // Deep corporate blue from logo
          light: "#166A9C",
        },
        secondary: {
          DEFAULT: "#0579BD", // Bright blue from M ribbon
          light: "#E3F3FC",
        },
        accent: {
          DEFAULT: "#008080", // Soft Teal
        },
        background: "#F8FAFC",
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          900: "#0F172A",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Tajawal", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
