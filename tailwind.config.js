/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F1F0EC',            // Background → #F1F0EC
          primary: '#E85D04',       // Orange → #E85D04
          primaryHover: '#D24E00',
          text: '#202020',          // Text → #202020
          card: '#FFFFFF',          // Cards → #FFFFFF
          dark: '#292929',          // Dark sections → #292929
          darkHover: '#1F1F1F',
          secondary: '#6B7280',
          highlight: '#FFB000',
          border: '#E1DFD9',
        },
        craft: {
          accent: '#E85D04',        // Orange → #E85D04
          dark: '#292929',          // Dark sections → #292929
          card: '#FFFFFF',          // Cards → #FFFFFF
          highlight: '#FFB000',
          muted: '#6B7280',
          border: '#E1DFD9',
        },
        neutral: {
          50: '#F1F0EC',   // Background → #F1F0EC
          100: '#E8E7E2',
          200: '#E1DFD9',  // Subtle harmonious card borders
          300: '#D5D3CD',
          400: '#9CA3AF',
          500: '#6B7280',  // Muted secondary text
          600: '#4B5563',
          700: '#374151',
          800: '#333333',
          900: '#202020',  // Text → #202020
          950: '#292929',  // Dark sections → #292929
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(41, 41, 41, 0.05), 0 1px 2px -1px rgba(41, 41, 41, 0.05)',
        'elevate': '0 20px 25px -5px rgba(41, 41, 41, 0.08), 0 8px 10px -6px rgba(41, 41, 41, 0.04)',
      }
    },
  },
  plugins: [],
}
