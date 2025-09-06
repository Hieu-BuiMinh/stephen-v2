'use client'

import { Button } from '@repo/stephen-v2-ui/shadcn'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
	const { setTheme, theme } = useTheme()

	const switchTheme = () => {
		switch (theme) {
			case 'light':
				setTheme('dark')
				break
			case 'dark':
				setTheme('light')
				break
			default:
				setTheme('dark')
				break
		}
	}

	const handleSwichTheme = () => {
		if (!document.startViewTransition) switchTheme()
		document.startViewTransition(switchTheme)
	}

	return (
		<Button onClick={handleSwichTheme} className="size-7" variant="secondary-matter" size="icon">
			<Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	)
}
