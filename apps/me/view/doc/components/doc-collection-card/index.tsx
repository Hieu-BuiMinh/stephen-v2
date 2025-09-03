'use client'

import { cn } from '@repo/stephen-v2-utils'
import { useRouter } from 'next/navigation'
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
	const router = useRouter()
	const onClick = () => {
		if (url) {
			router.push(url)
		}
	}
	return (
		<div
			onClick={onClick}
			className={cn('flex flex-col items-start justify-between gap-5', url && 'cursor-pointer', className)}
		>
			{icon && icon}
			<div className="flex flex-col gap-2">
				<p className="text-sm font-semibold md:text-base">{title}</p>
				<p className="text-xs text-muted-foreground md:text-sm line-clamp-2">{description}</p>
			</div>
		</div>
	)
}

export default DocCollectionCard
