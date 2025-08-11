import type { Config } from 'tailwindcss'

export default {
	content: ['./**/*.{js,ts,jsx,tsx,mdx}', './packages/**/*.{js,ts,jsx,tsx,mdx}', './apps/**/*.{js,ts,jsx,tsx,mdx}'],
} satisfies Config
