/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    colors: {
      primary: "#111111",

    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}

