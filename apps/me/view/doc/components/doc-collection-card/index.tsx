import { cn } from '@repo/stephen-v2-utils'
import Link from 'next/link'
import type { ReactNode } from 'react'

function DocCollectionCard({
	description,
	title,
	icon,
	url,
	className,
}: {
	icon?: ReactNode
	title: string
	description: string
	url?: string
	className?: string
}) {
	return (
		<Link
			href={url || '#'}
			className={cn(
				'group flex flex-col items-start justify-between gap-5 rounded-xl border p-3 relative overflow-hidden',
				className
			)}
		>
			{icon && <div className="absolute top-0 right-0">{icon}</div>}

			<div className="flex flex-col gap-2 pt-10">
				<p className="text-sm font-semibold md:text-base">{title}</p>
				<p className="text-xs text-muted-foreground md:text-sm line-clamp-2">{description}</p>
			</div>
		</Link>
	)
}

export default DocCollectionCard
