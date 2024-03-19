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
          "linearPrimarySecondary": "linear-gradient(#7cf8d6, #770897)",
          "linearPrimaryAccent": "linear-gradient(#7cf8d6, #f212a0)",
          "linearSecondaryAccent": "linear-gradient(#770897, #f212a0)",
          "radialPrimarySecondary": "radial-gradient(#7cf8d6, #770897)",
          "radialPrimaryAccent": "radial-gradient(#7cf8d6, #f212a0)",
          "radialSecondaryAccent": "radial-gradient(#770897, #f212a0)",
      },
    },
    colors: {
      transparent: 'transparent',
      'text': '#e7e7f9',
      'background': '#03040d',
      'primary': '#8b8ee2',
      'secondary': '#87238a',
      'accent': '#cc35a3',
    },  
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      sans: 'Poppins, sans-serif',
      serif: 'Poppins, serif',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },   
  },
  plugins: [],
};
export default config;
