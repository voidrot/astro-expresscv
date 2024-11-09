import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
      fontFamily: {
        sans: ['"Source Code Pro Variable"', 'Inter', ...defaultTheme.fontFamily.sans],
      //   sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"Source Code Pro Variable"', ...defaultTheme.fontFamily.mono],
      }
    },
	},
	plugins: [
    typography,
    containerQueries
  ],
}
