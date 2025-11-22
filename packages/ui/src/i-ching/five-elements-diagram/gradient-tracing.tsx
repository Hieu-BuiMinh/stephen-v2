/**
 * primitives (MIT License)
 * Copyright (c) 21st.dev: https://21st.dev
 * Source:
 *  - https://21st.dev/community/components/hextaui/gradient-tracing/loop-path
 *
 * Modified by: Stephen
 */

'use client'

import { motion } from 'motion/react'
import React from 'react'

interface GradientTracingProps {
	width: number
	height: number
	baseColor?: string
	gradientColors?: [string, string, string]
	animationDuration?: number
	strokeWidth?: number
	path?: string
	from?: 'left-to-right' | 'right-to-left'
}

const GradientTracing: React.FC<GradientTracingProps> = ({
	width,
	height,
	baseColor = 'black',
	gradientColors = ['#a3e635', '#fb7185', '#22d3ee'],
	animationDuration = 2,
	strokeWidth = 2,
	path = `M0,${height / 2} L${width},${height / 2}`,
	from = 'left-to-right',
}) => {
	const gradientId = `pulse-${Math.random().toString(36).substring(2, 9)}`

	return (
		<>
			<path d={path} stroke={baseColor} strokeOpacity="0.2" strokeWidth={strokeWidth} />
			<path d={path} stroke={`url(#${gradientId})`} strokeLinecap="round" strokeWidth={strokeWidth} />
			<defs>
				<motion.linearGradient
					animate={{
						x1: from === 'left-to-right' ? [0, width * 2] : [width * 2, 0],
						x2: from === 'left-to-right' ? [0, width] : [width, 0],
					}}
					transition={{
						duration: animationDuration,
						repeat: Infinity,
						ease: 'linear',
					}}
					id={gradientId}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.15" stopColor={gradientColors[0]} stopOpacity="0" />
					<stop offset="0.5" stopColor={gradientColors[1]} stopOpacity="1" />
					<stop offset="0.85" stopColor={gradientColors[2]} stopOpacity="0" />
				</motion.linearGradient>
			</defs>
		</>
	)

	// return (
	// 	<div className="relative" style={{ width, height }}>
	// 		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
	// 			<path d={path} stroke={baseColor} strokeOpacity="0.2" strokeWidth={strokeWidth} />
	// 			<path d={path} stroke={`url(#${gradientId})`} strokeLinecap="round" strokeWidth={strokeWidth} />
	// 			<defs>
	// 				<motion.linearGradient
	// 					animate={{
	// 						x1: [0, width * 2],
	// 						x2: [0, width],
	// 					}}
	// 					transition={{
	// 						duration: animationDuration,
	// 						repeat: Infinity,
	// 						ease: 'linear',
	// 					}}
	// 					id={gradientId}
	// 					gradientUnits="userSpaceOnUse"
	// 				>
	// 					<stop stopColor={gradientColors[0]} stopOpacity="0" />
	// 					<stop stopColor={gradientColors[1]} />
	// 					<stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
	// 				</motion.linearGradient>
	// 			</defs>
	// 		</svg>
	// 	</div>
	// )
	//      <GradientTracing
	//     width={300}
	//     height={250}
	//     path="M0,75 C100,0 200,150 300,75"
	//   />
}

export { GradientTracing }
