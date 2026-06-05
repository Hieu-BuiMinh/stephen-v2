'use client'

import { Button } from '@repo/stephen-v2-ui/shadcn'
import { Quote } from 'lucide-react'

interface DailyQuoteButtonProps {
	onClick: () => void
}

export default function DailyQuoteButton({ onClick }: DailyQuoteButtonProps) {
	return (
		<div className="fixed bottom-8 right-8 z-40 hidden md:block">
			<Button onClick={onClick} className="size-7" variant="secondary-matter" size="icon">
				<Quote className="size-4 text-zinc-500 dark:text-zinc-400" />
			</Button>
		</div>
	)
}
