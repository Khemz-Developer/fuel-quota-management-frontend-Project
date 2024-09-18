import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green": "#176B87",
        "red" : "#FF6868",
        "secondary": "#555",
        "primaryBG": "#FCFCFC",
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

