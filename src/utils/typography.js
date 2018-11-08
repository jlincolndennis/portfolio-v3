import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Lato","sans-serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
  googleFonts: [
  {
    name: 'Lato',
    styles: [
      '400',
      '700',
      '900'
    ],
  }
],
overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  h1: {
    color: '#BF1363',
  },
  h2: {
    color: '#333533',
  },
  h3: {
    color: '#707070',
    fontWeight: 400,
  },
})
})

export default typography

// Questrial
// Avenir Next
// Hind

// Inconsolata
