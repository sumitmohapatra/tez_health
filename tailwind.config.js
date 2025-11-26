/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}", // important so Tailwind scans all templates
    ],
    theme: {
      extend: {
        colors: {
          tezblue: "#0072ce", 
        },
      },
    },
    plugins: [],
  };
  