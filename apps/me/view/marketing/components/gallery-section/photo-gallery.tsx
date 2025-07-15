'use client'

import type { Direction, TargetAndTransition, TargetResolver } from 'motion/react'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

import { Photo } from '@/view/marketing/components/gallery-section/photo'
const photos = [
	{
		id: 1,
		order: 0,
		x: '-350px',
		y: '15px',
		zIndex: 50, // Highest z-index (on top)
		direction: 'left' as Direction,
		src: '/assets/images/avt/me_09.png',
	},
	{
		id: 2,
		order: 1,
		x: '-190px',
		y: '32px',
		zIndex: 40,
		direction: 'left' as Direction,
		src: '/assets/images/avt/me_02.png',
	},
	{
		id: 3,
		order: 2,
		x: '0px',
		y: '8px',
		zIndex: 30,
		direction: 'right' as Direction,
		src: '/assets/images/avt/me_04.png',
	},
	{
		id: 4,
		order: 3,
		x: '190px',
		y: '22px',
		zIndex: 20,
		direction: 'right' as Direction,
		src: '/assets/images/avt/me_03.png',
	},
	{
		id: 5,
		order: 4,
		x: '350px',
		y: '44px',
		zIndex: 10, // Lowest z-index (at bottom)
		direction: 'left' as Direction,
		src: '/assets/images/avt/me_05.png',
	},
]

type Variant = TargetAndTransition | TargetResolver
interface Variants {
	[key: string]: Variant
}

function PhotoGallery({ animationDelay = 0.5 }: { animationDelay?: number }) {
	const [isVisible, setIsVisible] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	// animation variants for the container
	const containerVariants: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1, // reduced from 0.3 to 0.1 since we already have the fade-in delay
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
			// keep the same z-index throughout animation
		}),
		visible: (custom) => ({
			x: custom.x,
			y: custom.y,
			rotate: 0, // No rotation
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 70,
				damping: 12,
				mass: 1,
				delay: custom.order * 0.15, // explicit delay based on order
			},
		}),
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
		<div className="relative mb-8 h-[350px] w-full items-center justify-center hidden overflow-visible my-30 lg:flex">
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
						{[...photos].reverse().map((photo) => (
							<motion.div
								key={photo.id}
								className="absolute left-0 top-0"
								style={{ zIndex: photo.zIndex }} // apply z-index directly in style
								variants={photoVariants}
								custom={{
									x: photo.x,
									y: photo.y,
									order: photo.order,
								}}
								whileHover={{ zIndex: 999 }}
							>
								<Photo
									width={220}
									height={220}
									src={photo.src}
									alt="Family photo"
									direction={photo.direction}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default PhotoGallery
