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
        accent: "#2569F4",
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
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.3rem", // 18px
        xl: "1.8rem",
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
      },
    },
  },
  plugins: [],
} satisfies Config;
