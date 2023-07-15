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
          'trend-banner': "url('https://res.cloudinary.com/dfepnhz2s/image/upload/v1689405952/myfolder/j0oagbokzyjdtett8fvl.jpg')",
          'fash-samp': "url('https://res.cloudinary.com/dfepnhz2s/image/upload/v1689405958/myfolder/aszoshdnlitzulxvbhmb.jpg')",
          'fash-samp-two': "url('https://res.cloudinary.com/dfepnhz2s/image/upload/v1689405954/myfolder/dwjcpz6qmebr69taln29.jpg')"
        }
    },
  },
  plugins: [],
}




