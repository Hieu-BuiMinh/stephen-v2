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
				d="M254.813 293.229C245.813 290.229 124.313 234.229 157.813 160.729C191.313 87.2288 429.313 -27.7712 419.813 8.72879C412.213 37.9288 211.647 311.562 112.313 444.729C136.647 400.562 178.513 304.229 151.313 272.229C117.313 232.229 20.8134 237.729 0.8134 237.729C-15.1866 237.729 208.813 237.729 324.313 237.729C328.813 237.729 341.989 238.25 354 238.25C366 238.25 399.813 224.229 401.313 235.229C402.813 246.229 405.813 233.229 425.313 243.229C444.813 253.229 461.313 269.729 459.313 260.229C457.313 250.729 458.313 240.729 467.813 243.229C477.313 245.729 530.813 238.729 530.813 244.729C530.813 250.729 544.313 256.229 552.313 254.729C560.313 253.229 583.313 245.229 586.813 249.229C589.98 251.062 597.013 254.629 599.813 254.229C603.313 253.729 612.313 249.229 618.813 251.229C625.313 253.229 629.319 253.531 637.833 253.531C644.854 253.531 671 253.25 683.333 253.25M355 145.25C348 154.75 223.913 322.429 232.313 321.229C242.813 319.729 319.5 231.75 305 259.75C290.5 287.75 289.5 292.75 291.5 292.75C293.5 292.75 328.5 238.25 317.5 259.75C306.5 281.25 302 292.75 305.5 292.75C309 292.75 343 234.25 331.5 262.75C322.3 285.55 320.5 292.75 321.5 292.75C331 281.271 348.2 248.55 347 255.75C345.5 264.75 328.283 302.392 337.5 290.75C347 278.75 365 237.75 358.5 262.25C352 286.75 348.228 300.303 357.5 288.25C367.5 275.25 387.313 252.229 392.313 257.229C397.313 262.229 405.813 263.229 415.313 265.729C424.813 268.229 482.313 315.229 547.313 343.729C612.313 372.229 648.813 371.229 660.313 359.729C671.066 348.976 668.813 336.729 665.313 334.729M461.813 274.229C512.313 207.729 523.313 174.729 505.813 176.729C488.313 178.729 406.813 229.229 398.813 263.729C390.813 298.229 416.813 331.729 433.313 316.229"
				strokeWidth={theme === 'dark' ? '2.5' : '5'}
				strokeLinecap="round"
				variants={draw}
			/>
		</motion.svg>
	)
}

export default Signature
