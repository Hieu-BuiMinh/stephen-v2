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
				d="M254.813 293.479C245.813 290.479 124.313 234.479 157.813 160.979C191.313 87.4788 429.313 -27.5212 419.813 8.97879C412.213 38.1788 211.647 311.812 112.313 444.979C136.647 400.812 178.513 304.479 151.313 272.479C117.313 232.479 20.8134 237.979 0.8134 237.979C-15.1866 237.979 208.813 237.979 324.313 237.979C328.813 237.979 341.989 238.5 354 238.5C366 238.5 399.813 224.479 401.313 235.479C402.813 246.479 405.813 233.479 425.313 243.479C444.813 253.479 461.313 269.979 459.313 260.479C457.313 250.979 458.313 240.979 467.813 243.479C477.313 245.979 530.813 238.979 530.813 244.979C530.813 250.979 544.313 256.479 552.313 254.979C560.313 253.479 583.313 245.479 586.813 249.479C589.98 251.312 597.013 254.879 599.813 254.479C603.313 253.979 612.313 249.479 618.813 251.479C625.313 253.479 628.313 255.979 636.813 256.479C643.613 256.879 669.98 257.646 682.313 257.979M355 145.5C348 155 223.913 322.679 232.313 321.479C242.813 319.979 319.5 232 305 260C290.5 288 289.5 293 291.5 293C293.5 293 328.5 238.5 317.5 260C306.5 281.5 302 293 305.5 293C309 293 343 234.5 331.5 263C322.3 285.8 320.5 293 321.5 293C331 281.521 348.2 248.8 347 256C345.5 265 328.283 302.642 337.5 291C347 279 365 238 358.5 262.5C352 287 348.228 300.553 357.5 288.5C367.5 275.5 387.313 252.479 392.313 257.479C397.313 262.479 405.813 263.479 415.313 265.979C424.813 268.479 482.313 315.479 547.313 343.979C612.313 372.479 648.813 371.479 660.313 359.979C671.066 349.226 668.813 336.979 665.313 334.979M461.813 274.479C512.313 207.979 523.313 174.979 505.813 176.979C488.313 178.979 406.813 229.479 398.813 263.979C390.813 298.479 416.813 331.979 433.313 316.479"
				strokeWidth={theme === 'dark' ? '2.5' : '5'}
				strokeLinecap="round"
				variants={draw}
			/>
		</motion.svg>
	)
}

export default Signature
