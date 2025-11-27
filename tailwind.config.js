/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}", // important so Tailwind scans all templates
      "node_modules/preline/dist/*.js"
    ],
    theme: {
      extend: {
        colors: {
          tezblue: "#0072ce", 
        },
      },
    },
    plugins: [require('preline/plugin')],
    safelist: [
      {
        pattern: /bg-\[url\('.*'\)\]/,
      }
    ]
  };
  