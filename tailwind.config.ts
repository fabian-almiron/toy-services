import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        'primary-dark': '#0a0a0a',
        'primary-light': '#2a2a2a',
        accent: '#3b82f6',
        'accent-dark': '#2563eb',
        'accent-light': '#60a5fa',
        dark: '#0f0f0f',
        'dark-lighter': '#1a1a1a',
        'dark-card': '#1f1f1f',
        text: '#e5e5e5',
        'text-dark': '#ffffff',
        'text-light': '#a3a3a3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
export default config
