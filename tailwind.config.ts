import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darkGrayText" : "#2D2E31",
        "dark-navy-blue" : "#192E59",
        "offwhite" : "#F9F9F9",
        "light-gray" : "#E8EAEE",
        "light-blue" : "#E8EEFD",
        "dark-red" : "#A51017",
        "pale-orange" : "#F98B60",
        "pale-yellow" : "#FFA800",
        "pale-green-100": "#E7FDE8",
        "pale-green-400": "#55A98A",
        "pale-green-600": "#2F513D",
        "green-500": "#07620C",
        "green-100": "#E7FDE8",
        "blue-400" : "#103AA5",
        "yellow-100": "#FCF9E8",
        "yellow-400": "#9F880F",
        "bright-blue" : "#1651E9",
      }
    },
  },
  plugins: [],
};
export default config;
