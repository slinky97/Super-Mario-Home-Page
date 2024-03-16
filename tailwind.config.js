module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1e281e",
        "sky-blue": "#37d1fb",
        "pink-rose": "#ee4bb4",
      },
      boxShadow: {
        "solid-black": "0 0 0 4px rgba(0, 0, 0, 0.65)",
      },
      backgroundImage: {
        "header-texture": "url('/public/img/hero-header-layer-1-large-up.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
