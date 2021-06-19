const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors:{
    //   primary: "#FF6464",
    //   secondary:{
    //     50:"#ffab45",
    //     100:"#ffab55",
    //     150:"#ffab75",
    //     250:"#ffabf5",
    //   },
    //   accent: colors.cyan,
    //   //Here we are including grey default colours from tailwind into our project
    //   gray: colors.gray,
    //   blue: colors.indigo  
    // },
    // Whatever we write inside extend then their new classes are getting added and default classes are also not ignored/removed
    extend: {
      backgroundImage: theme => ({
        'landing-page': "url('./images/xl-hero-desktop_2021.webp')",
       }),
       backgroundPosition: {
        '1/2': '50%',
        '2/2.5': '40% 100%',
       },

       backgroundSize: {
         'auto-100%': 'auto 100%',
         'auto-50%': 'auto 50%',
       },
      padding:{
        0.75: ".1875rem",
      },
      colors:{
        magenta:{
          lighter:"#12346",
          noraml:"#ff85fa",
          darker:"#abc566"
        },
        gren:"#023803",
        background1: "#f3f1e7", 
        maroon: "#FF1122",
        golden: "#FFD700" 
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
  plugins: [],
}
