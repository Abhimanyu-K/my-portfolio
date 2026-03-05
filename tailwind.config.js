/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Minimalist neutral palette
        background: '#fafaf9',      // stone-50
        foreground: '#292524',      // stone-800
        accent: '#78716c',          // stone-500
        'accent-hover': '#57534e',  // stone-600
        muted: '#a8a29e',           // stone-400
        border: '#e7e5e4',          // stone-200
        // Dark mode colors
        'dark-background': '#1c1917',     // stone-900
        'dark-foreground': '#fafaf9',     // stone-50
        'dark-accent': '#a8a29e',         // stone-400
        'dark-accent-hover': '#d6d3d1',   // stone-300
        'dark-muted': '#78716c',          // stone-500
        'dark-border': '#44403c',         // stone-700
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero': 'clamp(2rem, 5vw, 3.5rem)',
        'section-title': 'clamp(1.5rem, 3vw, 2rem)',
      },
      spacing: {
        'section': 'clamp(2rem, 5vw, 4rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
