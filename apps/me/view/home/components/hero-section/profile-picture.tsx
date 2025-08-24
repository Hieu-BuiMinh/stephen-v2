'use client'

import { GlareHover } from '@repo/stephen-v2-ui/motion'
import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

// import FlyArounds from '@/view/home/components/hero-section/fly-arounds'

interface ProfilePictureProps {
	delay?: number
}

export function ProfilePicture({}: ProfilePictureProps) {
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
	const [imageSrc, setImageSrc] = useState(images[8])
	const [isChanging, setIsChanging] = useState(false)

	const changeImage = () => {
		setIsChanging(true)
		const availableImages = images.filter((img) => img !== imageSrc)
		const randomIndex = Math.floor(Math.random() * availableImages.length)
		setImageSrc(availableImages[randomIndex])
	}

	return (
		<div className="relative size-[190px] lg:size-[280px] shrink-0">
			<motion.div
				key={imageSrc}
				className="profile-ring size-full rounded-full bg-foreground shadow-2xl"
				initial={{ scale: 0 }}
				animate={isChanging ? { scale: 0.95 } : { scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 15,
				}}
				onAnimationComplete={() => setIsChanging(false)}
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
					onAnimationComplete={() => setIsChanging(false)}
				>
					<GlareHover className="!rounded-full size-[180px] lg:size-[270px]">
						<BlurImage
							key={imageSrc}
							className="cursor-pointer rounded-full object-cover size-[180px] lg:size-[270px] transition-all"
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
