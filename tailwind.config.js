module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '5px 10px 30px #c0c0c0, -5px -5px 20px #ffffff',
      }
    },
  },
  plugins: [],
};
