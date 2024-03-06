/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        1368: "1368px",
        1280: "1280px",
      },
      colors: {
        dark_font: "#2D3748",
        light_dark_font: "#42526B",
        gray_font: "#A0A8B5",
        accent_font: "#00A3C4",
        light_accent_font: "#0BC5EA",
        accent_border: "#0BC5EA",
        gray_border: "RGBA(19, 103, 150, 0.4)",
        dark_background: "#42526B",
        gray_background: "#EDF2F7",
        main_background: "#F9FBFC",
        accent_background: "#0BC5EA",
      },
      fontFamily: {
        sans: ["PT Root UI", "sans"],
      },
      fontSize: {
        // "2xl": [
        //   "24px",
        //   {
        //     letterSpacing: "-0.01em",
        //   },
        // ],
        // // Or with a default line-height as well
        // "3xl": [
        //   "32px",
        //   {
        //     letterSpacing: "-0.02em",
        //     lineHeight: "40px",
        //   },
        // ],
      },
    },
  },
  plugins: [],
};
