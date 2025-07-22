'use client'

import type { ReactNode } from 'react'
import React, { useState } from 'react'

export default function FoldedCornerCard({ children }: { children: ReactNode }) {
	const [cornerSize, setCornerSize] = useState(0)

	const clipPath = `polygon(0 0, 100% 0, 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%, 0 100%)`

	return (
		<div
			className="group/folded-card border relative p-5 bg-neutral-900 rounded-lg transition-all duration-[600ms] ease-[ease] hover:rotate-2 hover:shadow-2xl"
			style={
				{
					clipPath,
					'--fold-corner-size': `${cornerSize}px`,
					'--fold-corner-radius': '20px',
				} as React.CSSProperties
			}
			onMouseEnter={() => setCornerSize(40)}
			onMouseLeave={() => setCornerSize(0)}
		>
			{children}

			<span
				className="absolute bottom-0 right-0 block bg-neutral-600 transition-all duration-500 ease-in-out rounded-tl-[var(--fold-corner-radius)] group-hover/folded-card:shadow-[0_0_10px_rgba(0,0,0,0.3)]"
				style={{
					width: `${cornerSize}px`,
					height: `${cornerSize}px`,
				}}
			/>
		</div>
	)
}
