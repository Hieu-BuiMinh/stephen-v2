'use client'

import './style.css'

import { GlareHover } from '@repo/stephen-v2-ui/motion'
import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

// import FlyArounds from '@/view/home/components/hero-section/fly-arounds'

interface ProfilePictureProps {
	delay?: number
	className?: string
}

export function ProfilePicture({ className }: ProfilePictureProps) {
	const images = [
		'/assets/images/avt/me_01.png',
		'/assets/images/avt/me_02.png',
		'/assets/images/avt/me_03.png',
		'/assets/images/avt/me_04.png',
		'/assets/images/avt/me_05.png',
		'/assets/images/avt/me_06.png',
		'/assets/images/avt/me_07.png',
		'/assets/images/avt/me_08.png',
		'/assets/images/avt/me_09.png',
	]
	const [imageSrc, setImageSrc] = useState(images[3])
	// const [isChanging, setIsChanging] = useState(false)

	const changeImage = () => {
		// setIsChanging(true)
		const availableImages = images.filter((img) => img !== imageSrc)
		const randomIndex = Math.floor(Math.random() * availableImages.length)
		setImageSrc(availableImages[randomIndex])
	}

	return (
		<div className={cn('relative size-[150px] lg:size-[250px] shrink-0', className)}>
			<motion.div
				key={imageSrc}
				className="profile-ring size-full rounded-full bg-background"
				initial={{ scale: 0 }}
				// animate={isChanging ? { scale: 0.95 } : { scale: 1 }}
				animate={{ scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 400,
					damping: 20,
				}}
				// onAnimationComplete={() => setIsChanging(false)}
			/>
			<AnimatePresence mode="wait">
				<motion.div
					key={imageSrc}
					className="absolute size-full flex items-center justify-center cursor-pointer rounded-full transition-opacity overflow-hidden top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
					onClick={changeImage}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						type: 'spring',
						stiffness: 300,
						damping: 20,
					}}
					whileTap={{ scale: 0.9 }}
					// onAnimationComplete={() => setIsChanging(false)}
				>
					<GlareHover className="!rounded-full size-[130px] lg:size-[230px]">
						<BlurImage
							key={imageSrc}
							className="cursor-pointer rounded-full object-cover size-[130px] lg:size-[230px] transition-all"
							src={imageSrc}
							alt=""
							width={350}
							height={350}
							unoptimized={false}
						/>
					</GlareHover>
				</motion.div>
			</AnimatePresence>

			{/* {!isChanging && <FlyArounds />} */}
		</div>
	)
}
