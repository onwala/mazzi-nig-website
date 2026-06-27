/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D1C',
          900: '#0B1930',
          800: '#0F2347',
          700: '#163054',
        },
        amber: {
          500: '#C8960A',
          400: '#E8B020',
        },
      },
      fontFamily: {
        display: ['Barlow', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      letterSpacing: {
        eyebrow: '0.12em',
        pill: '0.1em',
        cta: '0.02em',
        nav: '0.01em',
      },
    },
  },
  plugins: [],
};
