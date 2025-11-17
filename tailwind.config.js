export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#1B1C5F',
        'navy-ink': '#12133F',
        'gold': '#BD9E39',
        'soft-gold': '#D8C27A',
        'muted-gray': '#F5F6FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '8px',
        'hero': '20px',
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(16, 24, 40, 0.08)',
      }
    },
  },
  plugins: [],
}