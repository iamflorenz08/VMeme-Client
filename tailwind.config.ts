import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#3F92A1',
        'primary-100': '#F2FAF9',
        'primary-200': '#2C6570',
        'secondary': '#FBAA31',
        'secondary-100': '#F99704',
        'gray': '#e8e8e8'
      }
    },
  },
  plugins: [],
}
export default config
