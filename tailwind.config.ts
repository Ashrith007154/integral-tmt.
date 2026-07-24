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
        primary: {
          DEFAULT: '#0A2E5C',
          light: '#1E6091',
        },
        accent: '#34A0A4',
        silver: {
          light: '#F4F6F9',
          border: '#D1D7E0',
        },
        slate: {
          dark: '#121824',
        }
      },
    },
  },
  plugins: [],
}
export default config
