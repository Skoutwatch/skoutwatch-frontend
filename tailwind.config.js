module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#231546",
        secondary: "#D99A26",
      },
      fontFamily: {
        lato: ["Lato", "sans"],
      },
      spacing: {
        1: "4px",
      },
      screens: {
        tall: { raw: "(min-height: 600px)" },
        // => @media (min-height: 800px) { ... }

        "4xl": "1950px",
      },
    },
  },
};
