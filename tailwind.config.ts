import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          'wisteria': {
          '50': '#f8f6fc',
          '100': '#f2eff8',
          '200': '#e7e1f3',
          '300': '#d4c9e9',
          '400': '#bea9dc',
          '500': '#a686cc',
          '600': '#966bbc',
          '700': '#8d64af',
          '800': '#6f4a8d',
          '900': '#5b3e74',
          '950': '#3b274e',
      },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
