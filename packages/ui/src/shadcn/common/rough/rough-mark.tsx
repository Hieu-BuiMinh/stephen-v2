'use client'

import { cn } from '@repo/stephen-v2-utils'
import React, { useEffect } from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

export type RoughMarkType = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket'

export type RoughMarkProps = {
	children: React.ReactNode

	type?: RoughMarkType

	show?: boolean

	color?: string
	strokeWidth?: number
	padding?: number | [number, number]
	iterations?: number
	multiline?: boolean

	brackets?: 'left' | 'right' | 'top' | 'bottom' | ('left' | 'right' | 'top' | 'bottom')[]

	animationDelay?: number
	animationDuration?: number

	order?: number

	triggerOnView?: boolean

	triggerOnce?: boolean

	/**
	 * rootMargin for IntersectionObserver, e.g. '0px 0px -20% 0px'
	 */
	viewportMargin?: string

	/**
	 * threshold for IntersectionObserver, default 0.1
	 */
	viewportThreshold?: number

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	as?: keyof React.JSX.IntrinsicElements | React.ComponentType<any>
	className?: string
}

const RoughMark: React.FC<RoughMarkProps> = ({
	children,
	type = 'underline',
	show = true,
	color = 'var(--color-sky-600)',
	strokeWidth,
	padding,
	iterations,
	multiline,
	brackets,
	animationDelay = 300,
	animationDuration,
	order,
	triggerOnView = true,
	triggerOnce = true,
	viewportMargin = '0px 0px -10% 0px',
	viewportThreshold = 0.1,
	as: Comp = 'span',
	className,
}) => {
	const wrapperRef = React.useRef<HTMLSpanElement | null>(null)
	const [inView, setInView] = React.useState(false)
	const [hasBeenInView, setHasBeenInView] = React.useState(false)

	useEffect(() => {
		if (!triggerOnView) return
		if (typeof window === 'undefined') return
		if (!('IntersectionObserver' in window)) return

		const el = wrapperRef.current
		if (!el) return

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries
				if (!entry) return

				if (entry.isIntersecting) {
					setInView(true)
					setHasBeenInView(true)
					if (triggerOnce) {
						observer.unobserve(entry.target)
					}
				} else if (!triggerOnce) {
					setInView(false)
				}
			},
			{
				root: null,
				rootMargin: viewportMargin,
				threshold: viewportThreshold,
			}
		)

		observer.observe(el)

		return () => {
			observer.disconnect()
		}
	}, [triggerOnView, triggerOnce, viewportMargin, viewportThreshold])

	const effectiveShow = triggerOnView ? (triggerOnce ? hasBeenInView : inView) : show

	return (
		<RoughNotation
			type={type}
			show={effectiveShow}
			color={color}
			strokeWidth={strokeWidth}
			padding={padding}
			iterations={iterations}
			multiline={multiline}
			brackets={brackets}
			animationDelay={animationDelay}
			animationDuration={animationDuration}
			order={order}
		>
			<span ref={wrapperRef}>
				<Comp className={cn(className)}>{children}</Comp>
			</span>
		</RoughNotation>
	)
}

export type RoughMarkGroupProps = {
	children: React.ReactNode
	show?: boolean
}

const RoughMarkGroup: React.FC<RoughMarkGroupProps> = ({ children, show = true }) => {
	return <RoughNotationGroup show={show}>{children}</RoughNotationGroup>
}

export { RoughMark, RoughMarkGroup }
