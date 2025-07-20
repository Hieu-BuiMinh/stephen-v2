/**
 * primitives (MIT License)
 * Copyright (c) motion-primitives: https://21st.dev/motion-primitives
 * Source:
 *  - https://motion-primitives.com/docs/text-loop
 *
 * Modified by: Stephen
 */

'use client'
import { cn } from '@repo/stephen-v2-utils'
import type { AnimatePresenceProps, Transition, Variants } from 'motion/react'
import { AnimatePresence, motion } from 'motion/react'
import { Children, useEffect, useState } from 'react'

export type TextLoopProps = {
	children: React.ReactNode[]
	className?: string
	interval?: number
	transition?: Transition
	variants?: Variants
	onIndexChange?: (index: number) => void
	trigger?: boolean
	mode?: AnimatePresenceProps['mode']
}

export function TextLoop({
	children,
	className,
	interval = 2,
	transition = { duration: 0.3 },
	variants,
	onIndexChange,
	trigger = true,
	mode = 'popLayout',
}: TextLoopProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const items = Children.toArray(children)

	useEffect(() => {
		if (!trigger) return

		const intervalMs = interval * 1000
		const timer = setInterval(() => {
			setCurrentIndex((current) => {
				const next = (current + 1) % items.length
				onIndexChange?.(next)
				return next
			})
		}, intervalMs)
		return () => clearInterval(timer)
	}, [items.length, interval, onIndexChange, trigger])

	const motionVariants: Variants = {
		initial: { y: 20, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: -20, opacity: 0 },
	}

	return (
		<div className={cn('relative inline-block whitespace-nowrap', className)}>
			<AnimatePresence mode={mode} initial={false}>
				<motion.div
					key={currentIndex}
					initial="initial"
					// animate="animate"
					whileInView="animate"
					viewport={{ once: true }}
					exit="exit"
					transition={transition}
					variants={variants || motionVariants}
				>
					{items[currentIndex]}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
