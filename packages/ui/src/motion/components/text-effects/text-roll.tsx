/**
 * primitives (MIT License)
 * Copyright (c) motion-primitives: https://21st.dev/motion-primitives
 * Source:
 *  - https://motion-primitives.com/docs/text-roll
 *
 * Modified by: Stephen
 */

'use client'
import type { Target, TargetAndTransition, Transition, VariantLabels } from 'motion/react'
import { motion } from 'motion/react'
import { memo, useState } from 'react'

export type TextRollProps = {
	children: string
	duration?: number
	getEnterDelay?: (index: number) => number
	getExitDelay?: (index: number) => number
	className?: string
	transition?: Transition
	variants?: {
		enter: {
			initial: Target | VariantLabels | boolean
			animate: TargetAndTransition | VariantLabels
		}
		exit: {
			initial: Target | VariantLabels | boolean
			animate: TargetAndTransition | VariantLabels
		}
	}
	onAnimationComplete?: () => void
	withHover?: boolean
}

function TextRoll({
	children,
	duration = 0.5,
	getEnterDelay = (i) => i * 0.1,
	getExitDelay = (i) => i * 0.1 + 0.2,
	className,
	transition = { ease: 'easeIn' },
	variants,
	onAnimationComplete,
	withHover = false,
}: TextRollProps) {
	const defaultVariants = {
		enter: {
			initial: { rotateX: 0 },
			animate: { rotateX: 90 },
		},
		exit: {
			initial: { rotateX: 90 },
			animate: { rotateX: 0 },
		},
	} as const

	const enterAnim = variants?.enter?.animate ?? defaultVariants.enter.animate
	const exitAnim = variants?.exit?.animate ?? defaultVariants.exit.animate

	const letters = children.split('')

	const [playTick, setPlayTick] = useState(0)

	return (
		<span
			className={className}
			onMouseEnter={() => {
				if (withHover) setPlayTick((t) => t + 1)
			}}
		>
			{letters.map((letter, i) => {
				const visibleChar = letter === ' ' ? '\u00A0' : letter
				const remountKey = `${i}-${withHover ? playTick : 'inview'}`

				return (
					<span
						key={remountKey}
						className="relative inline-block [perspective:10000px] [transform-style:preserve-3d] [width:auto]"
						aria-hidden="true"
					>
						<motion.span
							className="absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%] [will-change:transform]"
							initial={variants?.enter?.initial ?? defaultVariants.enter.initial}
							animate={withHover ? (playTick > 0 ? enterAnim : undefined) : undefined}
							whileInView={!withHover ? enterAnim : undefined}
							viewport={{ once: true }}
							transition={{
								...transition,
								duration,
								delay: getEnterDelay(i),
							}}
						>
							{visibleChar}
						</motion.span>

						<motion.span
							className="absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%] [will-change:transform]"
							initial={variants?.exit?.initial ?? defaultVariants.exit.initial}
							animate={withHover ? (playTick > 0 ? exitAnim : undefined) : undefined}
							whileInView={!withHover ? exitAnim : undefined}
							viewport={{ once: true }}
							transition={{
								...transition,
								duration,
								delay: getExitDelay(i),
							}}
							onAnimationComplete={letters.length === i + 1 ? onAnimationComplete : undefined}
						>
							{visibleChar}
						</motion.span>

						<span className="invisible">{visibleChar}</span>
					</span>
				)
			})}
			<span className="sr-only">{children}</span>
		</span>
	)
}

export default memo<TextRollProps>(TextRoll)
