/** @type {import('tailwindcss').Config} */
module.exports = {
// export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0b3815",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#d9d9d9",
          foreground: "#333333",
        },
        destructive: {
          DEFAULT: "#d11414",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#dcdcdc",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#0b3bfb",
          foreground: "#ffffff",
        },
      },
      borderWidth: {
        3: "3px",
      },
      animation: {
        ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        ping: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "70%, 100%": { transform: "scale(1.7)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}

