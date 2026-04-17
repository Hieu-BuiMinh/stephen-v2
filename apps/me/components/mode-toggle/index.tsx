'use client'

import { Button } from '@repo/stephen-v2-ui/shadcn'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme()

	const toggleTheme = () => {
		const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

		if (typeof document === 'undefined' || !document.startViewTransition) {
			setTheme(newTheme)
			return
		}

		document.startViewTransition(() => {
			// Manually toggle class so startViewTransition captures the change
			document.documentElement.classList.toggle('dark', newTheme === 'dark')
			setTheme(newTheme)
		})
	}

	return (
		<Button onClick={toggleTheme} className="size-7" variant="secondary-matter" size="icon">
			<Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	)
}
