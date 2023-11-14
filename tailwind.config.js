/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': "'Lora', serif",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#C33130',
        'primary_hover': '#AF2C2B',
        'secondary': '#00833E',
        'secondary_hover': '#007537',
        'text': '#464646',
        'text_light': '#B7B7B7',
        'accent': '#212121',
        'light': '#DDDBD4',
        'border': '#EAEAEA',
        'background': '#F4F1EA',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 768px) { ... }
  
        'sm': {'max': '575px'},
        // => @media (max-width: 575px) { ... }
      }
    },
  },
  plugins: [],
}

