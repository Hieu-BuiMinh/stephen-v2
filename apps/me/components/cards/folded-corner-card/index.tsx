'use client'

import { cn } from '@repo/stephen-v2-utils'
import type { ReactNode } from 'react'
import React, { useState } from 'react'

export default function FoldedCornerCard({ children, className }: { children: ReactNode; className?: string }) {
	const [cornerSize, setCornerSize] = useState(0)

	const clipPath = `polygon(0 0, 100% 0, 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%, 0 100%)`

	return (
		<div
			className={cn(
				'group/folded-card border relative bg-background rounded-lg transition-all duration-[400ms] ease-[ease] hover:rotate-[3deg]',
				className
			)}
			style={
				{
					clipPath,
					'--fold-corner-size': `${cornerSize}px`,
					'--fold-corner-radius': '15px',
				} as React.CSSProperties
			}
			onMouseEnter={() => setCornerSize(40)}
			onMouseLeave={() => setCornerSize(0)}
		>
			{children}

			<span
				className="absolute bottom-0 right-0 block bg-neutral-600 transition-all duration-[400ms] ease-in-out rounded-tl-[var(--fold-corner-radius)] group-hover/folded-card:shadow-[0_0_10px_rgba(0,0,0,0.3)]"
				style={{
					width: `${cornerSize}px`,
					height: `${cornerSize}px`,
				}}
			/>
		</div>
	)
}
