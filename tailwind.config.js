// Tailwind CSS configuration file

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // enable dark mode via a 'dark' class on <html> or <body>
  theme: {
    extend: {
      // Brand colors (tweak to your taste)
      colors: {
        brand: {
          DEFAULT: "#2563eb", // blue-600 base
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      // Rounded and shadow defaults for a soft look
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 6px 20px rgba(0,0,0,.08)",
      },
      // Typography scale if you want slightly larger base
      fontSize: {
        base: ["16px", "1.6"], // size, line-height
      },
      // Container helper for readable max-width
      maxWidth: {
        "content": "1120px",
      },
    },
  },
  plugins: [],
};
