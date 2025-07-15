/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1e1e2f", // Example dark background color
        "dark-gray": "#2e2e3f", // Example dark gray
        "dark-blue": "#4f46e5", // Example dark blue
        "teal-cyan-gradient": "linear-gradient(90deg, #008080, #00FFFF)",
      },
    },
  },
  plugins: [],
};
