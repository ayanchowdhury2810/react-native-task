/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    ,
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        tabBarColor: '#2f3133',
        backgroundColor: '#1f2125',
        tabSelectedColor: '#8bb6fa',
        tabSelectedBg: '#394357',
        hintColor: '#707478',
        modalBg: '#2e3034'
      },
    },
  },
  plugins: [],
};
