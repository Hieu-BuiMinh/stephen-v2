'use client'

import { cn } from '@repo/stephen-v2-utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export type RecapGridItemProps = {
	year: number | string
	title?: string
	backgroundImage?: string
	url?: string

	highlights?: {
		primary?: string
		secondary?: string[]
	}
}

function RecapGridItem({ year, title, backgroundImage, url, highlights }: RecapGridItemProps) {
	const pathname = usePathname()
	const href = url ?? pathname

	return (
		<Link href={href} className="block size-full focus:outline-none">
			<div
				className={cn(
					'size-full flex flex-col justify-between relative p-3 transition-all',
					'hover:brightness-110',
					!backgroundImage && 'hover:bg-muted/40'
				)}
			>
				{backgroundImage && (
					<Image
						src={backgroundImage}
						width={1300}
						height={630}
						alt={`recap ${year}`}
						className="absolute inset-0 object-cover size-full -z-10 brightness-80"
					/>
				)}

				{/* Top */}
				<div className="flex justify-between">
					<span className={cn('flex flex-col gap-4', backgroundImage ? 'text-white' : 'text-foreground')}>
						<span className="text-5xl lg:text-6xl">{year}</span>

						{title && (
							<span className={cn('text-lg text-right', !backgroundImage && 'text-muted-foreground')}>
								{title}
							</span>
						)}
					</span>
				</div>

				{/* Bottom */}
				{highlights && (
					<div className="flex justify-end">
						<div
							className={cn(
								'flex flex-col gap-1 text-xs text-right',
								backgroundImage ? 'text-[#ddd]' : 'text-muted-foreground'
							)}
						>
							{highlights.primary && (
								<p
									className={cn(
										'text-sm',
										backgroundImage ? 'font-semibold' : 'font-medium text-foreground'
									)}
								>
									{highlights.primary}
								</p>
							)}

							{highlights.secondary?.map((item, index) => (
								<p key={index}>{item}</p>
							))}
						</div>
					</div>
				)}
			</div>
		</Link>
	)
}

export default RecapGridItem
