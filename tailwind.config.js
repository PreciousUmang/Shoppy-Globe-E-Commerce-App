/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // 'primary': '#FFFFFC',
        // 'secondary' : '#BEB7A4',
        // 'accent': '#CBE896',
        // 'darkAccent' : '#FF1B1C',
        // 'theme': '#FF7F11',
        
        // primary: '#FFFFFF',
        // secondary: '#F7F3E9',
        // accent: '#3FA796',
        // darkAccent: '#FF6347',
        // theme: '#FF9800',

        primary: '#F8F9FA',
        secondary: '#D1D5DB',
        accent: '#6C91BF',
        darkAccent: '#1F2937',
        theme: '#FFD700',      
      },
    },
  },
  plugins: [],
}

