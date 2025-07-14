import { cn } from '@repo/stephen-v2-utils'
import type { ReactNode } from 'react'

interface IBentoCard {
	children?: ReactNode
	className?: string
	linkTo?: string
}

function BentoCard({ children, className }: IBentoCard) {
	return (
		<div className={cn('relative flex flex-col rounded-2xl border bg-background p-6', className)}>
			{children}
			<div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 dark:from-gray-800/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
		</div>
	)
}

export default BentoCard
