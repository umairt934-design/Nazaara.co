/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0908',
        'jet-black': '#22333B',
        'soft-linen': '#EAE0D5',
        tan: '#C6AC8F',
        'stone-brown': '#5E503F',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
