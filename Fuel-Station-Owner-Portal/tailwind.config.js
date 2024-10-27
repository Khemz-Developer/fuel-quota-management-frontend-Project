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
  daisyui: {
    themes: [
      {
        light: {
          primary: "#176B87", // Your custom color for light theme
          secondary: "#555",
          accent: "#FF6868",
          neutral: "#FCFCFC",
          "base-100": "#FFFFFF", // Light theme base background
        },
      },
    ], // Define only the light theme to avoid dark mode
  },
  
}

