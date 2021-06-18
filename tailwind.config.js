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
      padding:{
        0.75: ".1875rem",
      },
      colors:{
        magenta:{
          lighter:"#12346",
          noraml:"#ff85fa",
          darker:"#abc566"
        },
        background1: "#f3f1e7", 
        maroon: "#FF1122" 
      }
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
  plugins: [],
}
