import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#ffffff",
        ink: "#1F2A37",
        "ink-soft": "#4B5563",
        accent: "#6B8CA5",
        "accent-soft": "#EDE7E3",
        border: "#e5e7eb",
        muted: "#9ca3af",
        "gray-light": "#F7F7F7",
        "gray-extra-light": "#FAFAFA",
        "accent-pale": "#EEF3F7"
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Noto Sans SC",
          "Source Han Sans SC",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        subtle: "0 14px 30px rgba(15, 23, 42, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: []
};

export default config;

