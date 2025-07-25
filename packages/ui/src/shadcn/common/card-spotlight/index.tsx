'use client'
import { cn } from '@repo/stephen-v2-utils'
import type { ReactNode } from 'react'
import React, { useRef, useState } from 'react'

interface ICardSpotlight {
	children?: ReactNode
	className?: string
}

const CardSpotlight = ({ children, className }: ICardSpotlight) => {
	const divRef = useRef<HTMLDivElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [opacity, setOpacity] = useState(0)

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!divRef.current || isFocused) return

		const div = divRef.current
		const rect = div.getBoundingClientRect()

		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
	}

	const handleFocus = () => {
		setIsFocused(true)
		setOpacity(1)
	}

	const handleBlur = () => {
		setIsFocused(false)
		setOpacity(0)
	}

	const handleMouseEnter = () => {
		setOpacity(1)
	}

	const handleMouseLeave = () => {
		setOpacity(0)
	}

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={cn(
				'relative flex p-5 items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-background to-gray-950 shadow-2xl size-auto',
				className
			)}
		>
			<div
				className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(61, 61, 61, 0.1), transparent 60%)`,
				}}
			/>
			{children}
		</div>
	)
}

export { CardSpotlight }
