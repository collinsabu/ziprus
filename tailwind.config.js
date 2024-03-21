/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors: {
        base_color: '#032C26',
        base_two: '#035145',
        base_text: '#0CC76D'
       },


    },
  },
  plugins: [],
}
