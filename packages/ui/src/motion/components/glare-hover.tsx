'use client'

import { cn } from '@repo/stephen-v2-utils'
import React, { useRef } from 'react'

interface GlareHoverProps {
	background?: string
	borderColor?: string
	children?: React.ReactNode
	glareColor?: string // supports hex and rgba
	glareOpacity?: number
	glareAngle?: number
	glareSize?: number
	transitionDuration?: number
	playOnce?: boolean
	className?: string
}

/* default srC: https://reactbits.dev/animations/glare-hover */
const hexToRgba = (hex: string | undefined, opacity: number): string => {
	if (!hex) return `rgba(255, 255, 255, ${opacity})` // fallback to white

	const cleanedHex = hex.replace('#', '')

	if (/^[\dA-Fa-f]{6}$/.test(cleanedHex)) {
		const r = parseInt(cleanedHex.slice(0, 2), 16)
		const g = parseInt(cleanedHex.slice(2, 4), 16)
		const b = parseInt(cleanedHex.slice(4, 6), 16)
		return `rgba(${r}, ${g}, ${b}, ${opacity})`
	}

	if (/^[\dA-Fa-f]{3}$/.test(cleanedHex) && cleanedHex.length === 3) {
		const r = parseInt(cleanedHex[0]! + cleanedHex[0], 16)
		const g = parseInt(cleanedHex[1]! + cleanedHex[1], 16)
		const b = parseInt(cleanedHex[2]! + cleanedHex[2], 16)
		return `rgba(${r}, ${g}, ${b}, ${opacity})`
	}

	// fallback if invalid hex
	return hex
}

const GlareHover: React.FC<GlareHoverProps> = ({
	children,
	glareColor = '#ffffff',
	glareOpacity = 0.5,
	glareAngle = -45,
	glareSize = 250,
	transitionDuration = 650,
	playOnce = false,
	className = '',
}) => {
	const overlayRef = useRef<HTMLDivElement>(null)
	const rgba = hexToRgba(glareColor, glareOpacity)

	const animateIn = () => {
		const el = overlayRef.current
		if (!el) return

		el.style.transition = 'none'
		el.style.backgroundPosition = '-100% -100%, 0 0'
		// Trigger reflow
		void el.offsetHeight
		el.style.transition = `${transitionDuration}ms ease`
		el.style.backgroundPosition = '100% 100%, 0 0'
	}

	const animateOut = () => {
		const el = overlayRef.current
		if (!el) return

		if (playOnce) {
			el.style.transition = 'none'
			el.style.backgroundPosition = '-100% -100%, 0 0'
		} else {
			el.style.transition = `${transitionDuration}ms ease`
			el.style.backgroundPosition = '-100% -100%, 0 0'
		}
	}

	const overlayStyle: React.CSSProperties = {
		position: 'absolute',
		inset: 0,
		background: `linear-gradient(${glareAngle}deg,
			hsla(0,0%,0%,0) 60%,
			${rgba} 70%,
			hsla(0,0%,0%,0) 100%)`,
		backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '-100% -100%, 0 0',
		pointerEvents: 'none',
		zIndex: 9,
	}

	return (
		<div
			className={cn(
				'relative size-full grid place-items-center overflow-hidden border cursor-pointer',
				className
			)}
			onMouseEnter={animateIn}
			onMouseLeave={animateOut}
		>
			<div ref={overlayRef} style={overlayStyle} />
			{children}
		</div>
	)
}

export { GlareHover }
