/** @type {import('tailwindcss').Config} */

const { tailwindConfig } = require('@storefront-ui/vue/tailwind-config');

export default {
  presets: [tailwindConfig],
  content: ['./index.html', './**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

