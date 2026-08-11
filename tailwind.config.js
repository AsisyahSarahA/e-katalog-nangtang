/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FBF1F1',
          100: '#F5DDDD',
          200: '#E9B9B9',
          300: '#D98E8F',
          400: '#B95657',
          500: '#963B3C',
          600: '#7A2021',
          700: '#641A1B',
          800: '#4E1415',
          900: '#3A0F10',
        },
        cream: {
          50: '#FFFDFB',
          100: '#FDF8F5',
          200: '#F7EDE4',
          300: '#EFDFCF',
          400: '#E4CBAF',
          500: '#D3B08A',
        },
        sage: {
          400: '#93A685',
          500: '#7D8F69',
          600: '#66775A',
        },
        gold: {
          400: '#D9A441',
        },
        tan: {
          500: '#D3B08A',
        },
        ink: {
          500: '#7B6A5E',
          900: '#3E2723',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(122,32,33,.06), 0 10px 28px rgba(62,39,35,.10)',
        lift: '0 6px 16px rgba(122,32,33,.12), 0 20px 48px rgba(62,39,35,.16)',
        emboss: 'inset 0 2px 0 rgba(255,255,255,.22), inset 0 -3px 0 rgba(0,0,0,.28), 0 8px 18px rgba(122,32,33,.35)',
        'inset-field': 'inset 0 2px 6px rgba(62,39,35,.12), inset 0 1px 2px rgba(62,39,35,.10)',
        chip: 'inset 0 1px 0 rgba(255,255,255,.6), 0 2px 6px rgba(62,39,35,.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
