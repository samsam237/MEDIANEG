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
        // Orange MEDIANEG (couleur principale)
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Vert MEDIANEG (couleur secondaire)
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Bleu MEDIANEG (couleur d'accent)
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Gris pour les textes et fonds
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // Couleurs cacao et café pour l'identité MEDIANEG
        cocoa: {
          50: '#faf8f6', 100: '#f5f1ed', 200: '#e8ddd3', 300: '#d9c7b5', 400: '#c9a98b',
          500: '#b8936b', 600: '#a67c4a', 700: '#8b6638', 800: '#6b4f31', 900: '#4b3621',
          950: '#2d1f13',
        },
        coffee: {
          50: '#faf8f6', 100: '#f3efea', 200: '#e6ddd1', 300: '#d4c4b0', 400: '#bea489',
          500: '#a68c6b', 600: '#8f754f', 700: '#756040', 800: '#5c4a32', 900: '#4b3621',
          950: '#2a1e14',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
