/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
       backgroundImage: {
        'bg1': "url('/images/bg1.png')",
        'bg2': "url('/images/bg2.png')",
        'bg3': "url('/images/bg3.png')",
        'bg4': "url('/images/bg4.png')",
        'rectangle': "url('/images/rectangle.png')",

      },
       fontFamily: {
        'fredoka': ['Fredoka One', 'sans-serif'],
      },
      colors: {
        'orange': '#ffa645',
        'brown': '#893446',
      },
    },
  },
  plugins: [],
}
 