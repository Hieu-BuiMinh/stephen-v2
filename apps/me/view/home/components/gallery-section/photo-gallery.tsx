'use client'

import { formatDate } from '@repo/stephen-v2-utils'
import type { Direction, TargetAndTransition, TargetResolver } from 'motion/react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

import { Photo } from '@/view/home/components/gallery-section/photo'
const photos = [
	{
		id: 1,
		order: 1,
		x: '-400px',
		y: '4px',
		zIndex: 60,
		direction: 'left' as Direction,
		src: '/assets/images/avt/me_10.png',
		name: 'Da Lat City',
		date: '10/15/2025',
		width: 220,
		height: 260,
	},
	{
		id: 2,
		order: 2,
		x: '-250px',
		y: '15px',
		zIndex: 50,
		direction: 'left' as Direction,
		src: '/assets/images/avt/me_09.png',
		name: 'Binh Hung Island',
		date: '05/18/2025',
	},
	{
		id: 3,
		order: 3,
		x: '-100px',
		y: '32px',
		zIndex: 40,
		direction: 'left' as Direction,
		src: '/assets/images/avt/me_02.png',
		name: 'Vung Tau',
		date: '07/30/2024',
	},
	{
		id: 4,
		order: 4,
		x: '70px',
		y: '8px',
		zIndex: 30,
		direction: 'right' as Direction,
		src: '/assets/images/avt/me_04.png',
		name: 'Home Land',
		date: '09/02/2025',
	},
	{
		id: 5,
		order: 5,
		x: '250px',
		y: '22px',
		zIndex: 20,
		direction: 'right' as Direction,
		src: '/assets/images/avt/me_03.png',
		name: 'Ben Tre',
		date: '04/28/2024',
	},
	{
		id: 6,
		order: 6,
		x: '400px',
		y: '44px',
		zIndex: 10,
		direction: 'left' as Direction,
		src: '/assets/images/avt/me_05.png',
		name: 'Binh Hung Island',
		date: '05/18/2025',
	},
]

type Variant = TargetAndTransition | TargetResolver
interface Variants {
	[key: string]: Variant
}

function PhotoGallery({ animationDelay = 0.5 }: { animationDelay?: number }) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const springConfig = { stiffness: 100, damping: 15 }
	const x = useMotionValue(0)
	const animationFrameRef = useRef<number | null>(null)
	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
	const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)

	const [isVisible, setIsVisible] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	// animation variants for the container
	const containerVariants: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
		},
	}

	// animation variants for each photo
	const photoVariants: Variants = {
		hidden: () => ({
			x: 0,
			y: 0,
			rotate: 0,
			scale: 1,
		}),
		inview: (custom) => ({
			x: custom.x,
			y: custom.y,
			rotate: 0, // No rotation
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 70,
				damping: 12,
				mass: 1,
				delay: custom.order * 0.15,
			},
		}),
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleMouseMove = (event: any) => {
		if (animationFrameRef.current) {
			cancelAnimationFrame(animationFrameRef.current)
		}
		animationFrameRef.current = requestAnimationFrame(() => {
			const halfWidth = event.target.offsetWidth / 2
			x.set(event.nativeEvent.offsetX - halfWidth)
		})
	}

	useEffect(() => {
		// first make the container visible with a fade-in
		const visibilityTimer = setTimeout(() => {
			setIsVisible(true)
		}, animationDelay * 1000)

		// then start the photo animations after a short delay
		const animationTimer = setTimeout(
			() => {
				setIsLoaded(true)
			},
			(animationDelay + 0.4) * 1000
		) // add 0.4s for the opacity transition

		return () => {
			clearTimeout(visibilityTimer)
			clearTimeout(animationTimer)
		}
	}, [animationDelay])

	return (
		<div className="relative min-h-[50vh] w-full items-center justify-center hidden overflow-visible lg:flex">
			<div className="bg-dots-md absolute inset-0 pointer-events-none opacity-50" />
			<motion.div
				className="relative mx-auto flex w-full max-w-7xl justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: isVisible ? 1 : 0 }}
				transition={{ duration: 0.4, ease: 'easeOut' }}
			>
				<motion.div
					className="relative flex w-full justify-center"
					variants={containerVariants}
					initial="hidden"
					animate={isLoaded ? 'visible' : 'hidden'}
				>
					<div className="relative h-[220px] w-[220px]">
						{/* render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
						{[...photos].reverse().map((photo, index) => (
							<motion.div
								key={photo.id}
								className="absolute left-0 top-0"
								style={{ zIndex: photo.zIndex }}
								variants={photoVariants}
								initial="hidden"
								whileInView="inview"
								viewport={{ once: true, amount: 0.2 }}
								custom={{
									x: photo.x,
									y: photo.y,
									order: photo.order,
								}}
								whileHover={{ zIndex: 90 }}
							>
								<div
									className="group relative"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<AnimatePresence>
										{hoveredIndex === index && (
											<motion.div
												initial={{ opacity: 0, y: 20, scale: 0.6 }}
												animate={{
													opacity: 1,
													y: 0,
													scale: 1,
													transition: {
														type: 'spring',
														stiffness: 260,
														damping: 10,
													},
												}}
												exit={{ opacity: 0, y: 20, scale: 0.6 }}
												style={{
													translateX: translateX,
													rotate: rotate,
													whiteSpace: 'nowrap',
												}}
												className="absolute -top-16 left-1/2 z-[99] flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs shadow-2xl"
											>
												<div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
												<div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
												<div className="relative z-30 text-base font-bold text-background">
													{photo.name}
												</div>
												<div className="text-xs text-background">
													{formatDate(photo.date, 'MMMM D, YYYY')}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
									<Photo
										width={photo?.width || 220}
										height={photo?.height || 220}
										src={photo.src}
										alt="Family photo"
										direction={photo.direction}
										onMouseMove={handleMouseMove}
									/>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default PhotoGallery
