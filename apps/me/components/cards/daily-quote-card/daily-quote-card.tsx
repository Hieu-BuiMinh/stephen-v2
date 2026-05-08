'use client'

import { cn } from '@repo/stephen-v2-utils'
import DecryptedText from '@ui/motion/components/text-effects/decrypted-text'
import ShinyText from '@ui/motion/components/text-effects/shiny-text'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'

import StephenLogo from '@/components/logo/stephen-logo'

import type { Quote } from './quotes.data'

interface DailyQuoteCardProps {
	quote: Quote
	isLoading?: boolean
	onReload?: () => void
	onClose: () => void
}

export default function DailyQuoteCard({ quote, isLoading, onClose }: DailyQuoteCardProps) {
	const [isHovered, setIsHovered] = React.useState(false)
	const [tiltValues, setTiltValues] = React.useState({ x: 0, y: 0 })
	const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
	const cardRef = React.useRef<HTMLDivElement>(null)

	const tiltFactor = 15
	const transitionDuration = 0.2
	const glareIntensity = 0.2

	const handleMouseMove = React.useCallback(
		(e: React.MouseEvent) => {
			if (!cardRef.current || !isHovered) return
			const rect = cardRef.current.getBoundingClientRect()
			const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100
			const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100
			setMousePosition({ x, y })
			const tiltX = -(y / 50) * tiltFactor
			const tiltY = (x / 50) * tiltFactor
			setTiltValues({ x: tiltX, y: tiltY })
		},
		[isHovered, tiltFactor]
	)

	const handleMouseEnter = React.useCallback(() => setIsHovered(true), [])
	const handleMouseLeave = React.useCallback(() => {
		setIsHovered(false)
		setTiltValues({ x: 0, y: 0 })
	}, [])

	const glareX = -mousePosition.x + 50
	const glareY = -mousePosition.y + 50

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
			{/* Static Background Overlay */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute inset-0 backdrop-blur-sm bg-black/60"
				onClick={onClose}
			/>

			{/* Animated Card Container */}
			<motion.div
				ref={cardRef}
				initial={{ opacity: 0, scale: 0.5, rotateY: -720 }}
				animate={{
					opacity: 1,
					scale: isHovered ? 1.05 : 1,
					rotateY: isHovered ? tiltValues.y : 0,
					rotateX: isHovered ? tiltValues.x : 0,
				}}
				exit={{ opacity: 0, scale: 0.5, rotateY: 720 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={{
					transformStyle: 'preserve-3d',
					perspective: '1000px',
				}}
				className="relative w-full max-w-2xl pointer-events-auto"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Thickness/Side Layer */}
				<motion.div
					animate={{
						rotateX: tiltValues.x,
						rotateY: tiltValues.y,
					}}
					transition={{ duration: transitionDuration, ease: 'easeOut' }}
					style={{
						transformStyle: 'preserve-3d',
						transform: `rotateX(${tiltValues.x}deg) rotateY(${tiltValues.y}deg) translateZ(-2px)`,
					}}
					className="absolute inset-0 rounded-[20px] bg-zinc-300 dark:bg-zinc-800 shadow-xl pointer-events-none"
				/>

				<motion.div
					animate={{
						rotateX: tiltValues.x,
						rotateY: tiltValues.y,
					}}
					transition={{ duration: transitionDuration, ease: 'easeOut' }}
					style={{
						transformStyle: 'preserve-3d',
					}}
					className={cn(
						'relative aspect-[1.6/1] w-full overflow-hidden rounded-[20px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-2xl transition-colors duration-500'
					)}
				>
					{/* Effect Layers */}
					<div className="absolute inset-0 pointer-events-none z-0">
						{/* Glare Beam Effect */}
						<motion.div
							className="absolute inset-0 z-50 pointer-events-none"
							style={{
								background: `linear-gradient(115deg, transparent 0%, transparent ${glareX - 35}%, rgba(255,255,255,${glareIntensity}) ${glareX}%, transparent ${glareX + 35}%, transparent 100%)`,
							}}
							animate={{ opacity: isHovered ? 1 : 0 }}
							transition={{ duration: transitionDuration }}
						/>

						{/* Foil Mask Layer 2 (foil_2.png) - Luminous Reflection */}
						<motion.div
							className="absolute inset-0 z-40 pointer-events-none opacity-0 dark:opacity-100"
							style={{
								backgroundImage: 'url(/assets/images/bg/foil_2.png)',
								backgroundSize: 'cover',
								maskImage: `linear-gradient(115deg, transparent 0%, transparent ${glareX - 25}%, black ${glareX}%, transparent ${glareX + 25}%, transparent 100%)`,
								WebkitMaskImage: `linear-gradient(115deg, transparent 0%, transparent ${glareX - 25}%, black ${glareX}%, transparent ${glareX + 25}%, transparent 100%)`,
								mixBlendMode: 'color-dodge',
							}}
							animate={{ opacity: isHovered ? 0.4 : 0 }}
							transition={{ duration: transitionDuration }}
						/>

						{/* Foil Mask Layer 1 (foil.png) - Metallic Base */}
						<motion.div
							className="absolute inset-0 z-30 pointer-events-none"
							style={{
								backgroundImage: 'url(/assets/images/bg/foil.png)',
								backgroundSize: 'cover',
								maskImage: `linear-gradient(115deg, transparent 0%, transparent ${glareX - 30}%, black ${glareX}%, transparent ${glareX + 30}%, transparent 100%)`,
								WebkitMaskImage: `linear-gradient(115deg, transparent 0%, transparent ${glareX - 30}%, black ${glareX}%, transparent ${glareX + 30}%, transparent 100%)`,
								mixBlendMode: 'color-dodge',
							}}
							animate={{ opacity: isHovered ? 0.3 : 0 }}
							transition={{ duration: transitionDuration }}
						/>

						{/* Spotlight */}
						<motion.div
							className="absolute inset-0 z-10 pointer-events-none"
							style={{
								background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 80%)`,
								mixBlendMode: 'overlay',
							}}
							animate={{ opacity: isHovered ? 1 : 0 }}
							transition={{ duration: transitionDuration }}
						/>

						{/* Grid Background */}
						<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 dark:opacity-60 pointer-events-none" />
					</div>

					{/* INTERACTIVE CONTENT LAYER */}
					<div className="absolute inset-0 z-[60] p-8 md:p-12 flex flex-col items-center justify-center pointer-events-none">
						<div className="flex flex-col items-center justify-center w-full h-full space-y-4 md:space-y-6">
							{/* 8-Ball Icon */}
							<div className="w-12 h-12 md:w-16 md:h-16 pointer-events-none">
								<svg viewBox="0 0 64 64" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
									<circle cx="32" cy="32" r="30" fill="#333" />
									<ellipse
										transform="rotate(-39.592 36.265 24.268)"
										cx="36.3"
										cy="24.3"
										rx="13.1"
										ry="13.9"
										fill="#f5f5f5"
									/>
									<path
										d="M45.3 23.2c1.8 2.9.8 6.3-2.9 8.6s-7.2 1.7-9-1.2c-1.1-1.8-1.1-3.8 0-5.6c-1.7 0-3.1-.7-4.1-2.2c-1.7-2.7-.7-6 2.5-7.9c3.1-1.9 6.5-1.4 8.2 1.3c1 1.6 1 3.2.2 4.6c2.1-.3 3.9.6 5.1 2.4m-3.1 1.6c-.9-1.5-2.9-1.9-4.6-.8c-1.8 1.1-2.3 3-1.4 4.5c1 1.6 2.9 2 4.7.9c1.7-1.1 2.2-3.1 1.3-4.6M32 21.3c.9 1.4 2.7 1.9 4.3.8c1.6-1 2-2.8 1.1-4.2c-.9-1.4-2.7-1.8-4.3-.8c-1.5 1-1.9 2.7-1.1 4.2"
										fill="#3e4347"
									/>
								</svg>
							</div>

							{/* Animated Quote Text Area */}
							<div className="flex-1 flex flex-col items-center justify-center w-full min-h-0">
								<AnimatePresence mode="wait">
									<motion.div
										key={quote.text}
										initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
										animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
										exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
										transition={{ duration: 0.4, ease: 'easeOut' }}
										className="flex flex-col items-center space-y-4 md:space-y-6"
									>
										<div className="text-lg md:text-2xl font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed italic px-4 text-center max-w-lg">
											{isLoading ? (
												<div className="flex flex-col items-center space-y-2">
													<div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-mono animate-pulse">
														[ The Universe is responding... ]
													</div>
													<ShinyText
														text={quote.text}
														speed={2}
														color="rgba(113, 113, 122, 0.4)"
														shineColor="rgba(255, 255, 255, 0.8)"
													/>
												</div>
											) : (
												<DecryptedText
													text={quote.text}
													speed={40}
													sequential={true}
													revealDirection="start"
													animateOn="view"
													className="text-zinc-900 dark:text-zinc-100"
													encryptedClassName="text-zinc-400 dark:text-zinc-600"
												/>
											)}
										</div>
										<div className="flex flex-col items-center">
											<div className="h-px w-12 bg-zinc-200 dark:bg-zinc-800 mb-3" />
											<span className="text-zinc-500 dark:text-zinc-500 font-medium uppercase tracking-[0.2em] text-xs md:text-sm">
												{quote.author}
											</span>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>

					{/* Brand Decoration */}
					<div className="absolute bottom-6 left-8 flex flex-col items-start space-y-2 pointer-events-none z-[60]">
						<div className="text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-mono">
							Stephen Daily Quote
						</div>
						<div className="relative w-8 h-8 text-zinc-400/40 dark:text-white/20">
							<StephenLogo className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
						</div>
					</div>

					{/* Subtle Attribution */}
					<div className="absolute bottom-6 right-8 pointer-events-auto z-[60]">
						<a
							href="https://zenquotes.io/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[7px] uppercase tracking-[0.2em] text-zinc-400/40 hover:text-zinc-900 dark:hover:text-white transition-colors font-mono"
						>
							Quotes by ZenQuotes.io
						</a>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}
