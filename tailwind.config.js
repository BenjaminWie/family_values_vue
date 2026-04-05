/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          light: '#2a2a2a',
          DEFAULT: '#121212',
          dark: '#0a0a0a',
          glass: 'rgba(18, 18, 18, 0.75)'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      }
    }
  },
  plugins: []
}
