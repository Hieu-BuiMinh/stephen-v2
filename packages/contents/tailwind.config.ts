import type { Config } from 'tailwindcss'

/* For Tailwind CSS intellisense */
export default {
	content: ['../../**/*.{ts,tsx,mdx}'],
	theme: { extend: {} },
	//   plugins: [require('@tailwindcss/typography')]
} satisfies Config
