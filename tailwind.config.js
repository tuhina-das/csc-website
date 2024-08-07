/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'missionBg': "url('/src/assets/About/mission-bg.webp')"
      }
    },
  },
  plugins: [],
}

