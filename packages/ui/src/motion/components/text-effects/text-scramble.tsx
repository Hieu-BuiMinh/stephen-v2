// https://motion-primitives.com/docs/text-scramble
/**
 * primitives (MIT License)
 * Copyright (c) motion-primitives: https://21st.dev/motion-primitives
 * Source:
 *  - https://motion-primitives.com/docs/text-scramble
 *
 * Modified by: Stephen
 */

'use client'
import type { MotionProps } from 'motion/react'
import { motion } from 'motion/react'
import { type JSX, useEffect, useState } from 'react'

export type TextScrambleProps = {
	children: string
	duration?: number
	speed?: number
	characterSet?: string
	as?: React.ElementType
	className?: string
	trigger?: boolean
	onScrambleComplete?: () => void
} & MotionProps

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function TextScramble({
	children,
	duration = 0.8,
	speed = 0.04,
	characterSet = defaultChars,
	className,
	as: Component = 'p',
	trigger = true,
	onScrambleComplete,
	...props
}: TextScrambleProps) {
	const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements)
	const [displayText, setDisplayText] = useState(children)
	const [isAnimating, setIsAnimating] = useState(false)
	const text = children

	const scramble = async () => {
		if (isAnimating) return
		setIsAnimating(true)

		const steps = duration / speed
		let step = 0

		const interval = setInterval(() => {
			let scrambled = ''
			const progress = step / steps

			for (let i = 0; i < text.length; i++) {
				if (text[i] === ' ') {
					scrambled += ' '
					continue
				}

				if (progress * text.length > i) {
					scrambled += text[i]
				} else {
					scrambled += characterSet[Math.floor(Math.random() * characterSet.length)]
				}
			}

			setDisplayText(scrambled)
			step++

			if (step > steps) {
				clearInterval(interval)
				setDisplayText(text)
				setIsAnimating(false)
				onScrambleComplete?.()
			}
		}, speed * 1000)
	}

	useEffect(() => {
		if (!trigger) return

		scramble()
	}, [trigger])

	return (
		<MotionComponent className={className} {...props}>
			{displayText}
		</MotionComponent>
	)
}
