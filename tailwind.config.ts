import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
     /* :: Color Palette: Black/White, Red, and  Blue */
      'primary': {
        100: '#ff0000'
      },
      'surface': {
        100: '#0000ff'
      },
      'border': {
        100: '#00005F'
      },
      'on-background': '#ffffff',
    },
  },
  plugins: [],
};

export default config;
