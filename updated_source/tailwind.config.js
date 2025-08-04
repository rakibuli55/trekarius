/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: "true",
        padding: "24px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primaryOrange: "#FF7701",
        primaryBlue: "#1687C7",
        headingColor: "#000012",
        paragraphColor: "#494949",
        bodyColor: "#f8fdff",
        footerBg: "#282828",
        footerMenuColor: "#F6F6F6",
        authBoxbg: "#EBECEF",
        pricingSectionBg: "#282828",
        blogCardBg: "#f5f5f5",
        rewardBg: "#ECECEC",
        borderColor: "#DFE0E4",
      },
      screens: {
        "custom-xs": { min: "360px", max: "479px" },
        "custom-sm": { min: "480px", max: "575px" },
        "custom-md": { min: "576px", max: "768px" },
        "max-md": { max: "991px" },
        "custom-2xl": { min: "1366px", max: "1500px" },
        "max-xl": { max: "1200px" },
        "custom-xl": { min: "1200px", max: "1365px" },
        "custom-lg": { min: "992px", max: "1199px" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
