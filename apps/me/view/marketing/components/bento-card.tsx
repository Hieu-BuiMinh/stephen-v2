import { cn } from '@repo/stephen-v2-utils'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface IBentoCard {
	children?: ReactNode
	className?: string
	linkTo?: string
}

function BentoCard({ children, className, linkTo }: IBentoCard) {
	const isInternalLink = linkTo?.startsWith('/')

	return (
		<div className={cn('relative rounded-2xl border bg-background p-6', className)}>
			{linkTo ? (
				<Link
					href={linkTo}
					target={isInternalLink ? undefined : '_blank'}
					rel={isInternalLink ? undefined : 'noopener noreferrer'}
					className="size-full border border-red-400"
				>
					{children}
				</Link>
			) : (
				<>{children}</>
			)}
			<div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 dark:from-gray-800/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
		</div>
	)
}

export default BentoCard
