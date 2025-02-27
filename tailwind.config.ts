import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "rgb(37, 105, 244)",
        accent_light: "#4683FF",
        primary_dark: "#CCDDFF",
        primary: "#E0EAFF",
        grey_primary: "#6E6E6E",
        grey_light: "#FAFAFA",
        hover_bg: "#E5E5E5",
        dark: "#3e3e3e",
        white_opacity: "rgba(255,255,255,0.8)",
        black_opacity: "rgba(0,0,0,0.4)",
        td_red: "rgb(226, 0, 34, 0.1)",
        danger: "#ff0101",
        bacground: "rgb(244, 244, 245)",
        textColor: "#71717a",
      },
      fontSize: {
        xs: "0.3rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.3rem",
        xl: "1.8rem",
        pdfSize: "0.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
