/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
        fontFamily:{
          "pop" :["Poppins","sans-serif"]
        },
    
        backgroundImage: {
          'hero-image': "url('./src/pictures/banner.jpg')",
          
        }
    },
  },
  plugins: [],
}




