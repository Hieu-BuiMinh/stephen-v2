/**
 * primitives (MIT License)
 * Copyright (c) github.com/kianbazza: https://bazza.dev/
 * Source:
 *  - https://github.com/kianbazza/web/blob/main/components/signature.tsx
 *
 * Modified by: Stephen
 */

'use client'

import { cn } from '@repo/stephen-v2-utils'
import { motion, type SVGMotionProps, useReducedMotion, type Variants } from 'motion/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const draw: Variants = {
	initial: {
		pathLength: 0,
	},
	animate: {
		pathLength: 1,
		transition: {
			ease: 'easeOut',
			duration: 7,
			staggerChildren: 0.3,
			// delayChildren: 0.5,
		},
	},
}

function Signature({ className, ...props }: SVGMotionProps<SVGSVGElement>) {
	const reduce = useReducedMotion()
	const { theme } = useTheme()

	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded) return null

	return (
		<motion.svg
			viewBox="0 0 685 446"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('resize-x h-auto drop-shadow-md', className)}
			variants={draw}
			initial={reduce ? false : 'initial'}
			whileInView={reduce ? undefined : 'animate'}
			viewport={{ once: true, amount: 0.9 }}
			stroke={theme === 'dark' ? 'currentColor' : '#71717b'}
			{...props}
		>
			<motion.path
				xmlns="http://www.w3.org/2000/svg"
				d="M255.5 293C246.5 290 125 234 158.5 160.5C192 86.9998 430 -28.0002 420.5 8.49979C412.9 37.6998 212.333 311.333 113 444.5C137.333 400.333 179.2 304 152 272C118 232 21.4999 237.5 1.49992 237.5C-14.5001 237.5 209.5 237.5 325 237.5M350.5 164C307.833 216.833 224.6 322.2 233 321C243.5 319.5 323 226.5 308.5 254.5C294 282.5 293 285.5 295 285.5C297 285.5 336 231.5 325 253C314 274.5 308 285.5 311.5 285.5C315 285.5 348 228.5 336.5 257C327.3 279.8 327 285.5 328 285.5C336 271.667 351.7 245.8 350.5 253C349 262 333 292 343.5 281.5C354 271 372 230 365.5 254.5C359 279 360.5 279 371 268C381.5 257 388 252 393 257C398 262 406.5 263 416 265.5C425.5 268 483 315 548 343.5C613 372 649.5 371 661 359.5C671.753 348.747 669.5 336.5 666 334.5M462.5 274C513 207.5 524 174.5 506.5 176.5C489 178.5 407.5 229 399.5 263.5C391.5 298 417.5 331.5 434 316M683 257.5C670.667 257.167 644.3 256.4 637.5 256C629 255.5 626 253 619.5 251C613 249 604 253.5 600.5 254C597.7 254.4 590.667 250.833 587.5 249C584 245 561 253 553 254.5C545 256 531.5 250.5 531.5 244.5C531.5 238.5 478 245.5 468.5 243C459 240.5 458 250.5 460 260C462 269.5 445.5 253 426 243C406.5 233 403.5 246 402 235C400.5 224 402 236.5 354 239.5C340 239.5 340.5 238 338 238.5"
				strokeWidth={theme === 'dark' ? '2.5' : '5'}
				strokeLinecap="round"
				variants={draw}
			/>
		</motion.svg>
	)
}

export default Signature
