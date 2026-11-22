import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fg: v("fg"),
        ink: { 700: v("ink-700"), 800: v("ink-800"), 900: v("ink-900"), 950: v("ink-950") },
        brand: { 300: v("brand-300"), 400: v("brand-400"), 500: v("brand-500"), 600: "#2380d0" },
        slate: { 200: v("slate-200"), 300: v("slate-300"), 400: v("slate-400"), 500: v("slate-500") },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
