/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#111827",
        primary: {
          DEFAULT: "#1D4ED8",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#9333EA",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#F59E0B",
          foreground: "#111827",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Inria Serif", "serif"],
      },
      fontSize: {
        h1: ["clamp(2.25rem, 1.8rem + 1vw, 3rem)", { lineHeight: "1.2" }],
        h2: ["clamp(1.875rem, 1.5rem + 0.5vw, 2.25rem)", { lineHeight: "1.3" }],
        h3: ["clamp(1.5rem, 1.2rem + 0.5vw, 1.875rem)", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.5" }],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1400px" },
    },
  },
  plugins: [],
  darkMode: "class",
};
