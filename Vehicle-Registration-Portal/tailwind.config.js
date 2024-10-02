import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        zoomIn: 'zoomIn 1.5s ease-in-out',
      },
      colors: {
        "green": "#176B87",
        "red": "#FF6868",
        "secondary": "#555",
        "primaryBG": "#FCFCFC",
        "borderColor": "#EAEAEA",
        "placeholder": "#C4DAD2",
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
      },
      borderColor: {
        "custom": "#EAEAEA",
      },
      placeholderColor: {
        "custom": "#C4DAD2",
      },
      placeholder: { // This is the correct utility for placeholder colors
        "custom": "#C4DAD2",
      },
    },
  },
  variants: {
    borderColor: ['focus'], // Enable borderColor for the focus variant
    placeholderColor: ['focus'], // Enable placeholderColor for the focus variant
  },
  plugins: [
    daisyui,
  ],
}