module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '5px 5px 15px #f5f5f5, -5px -5px 10px #fffafa',
      }
    },
  },
  plugins: [],
};
