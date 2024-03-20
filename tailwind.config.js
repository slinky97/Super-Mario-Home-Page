module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      custom: [
        "indivisible-Thin",
        "indivisible-Light",
        "indivisible-Regular",
        "indivisible-Bold",
      ],
    },
    extend: {
      colors: {
        "dark-gray": "#1e281e",
        "sky-blue": "#37d1fb",
        "pink-rose": "#ee4bb4",
        "red-nintendo": "#e60012",
      },
      boxShadow: {
        "solid-black": "0 0 0 4px rgba(0, 0, 0, 0.65)",
      },
      backgroundImage: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
