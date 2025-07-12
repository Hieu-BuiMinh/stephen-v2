'use client'

import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { cn } from '@repo/stephen-v2-utils'
import type { LucideIcon } from 'lucide-react'
import { Lightbulb, Sprout, Star, Zap } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface ProfilePictureProps {
	delay?: number
}

export function ProfilePicture({}: ProfilePictureProps) {
	const images = ['/assets/images/avt/me_01.png', '/assets/images/avt/me_02.png', '/assets/images/avt/me_03.png']
	const [imageSrc, setImageSrc] = useState(images[0])
	const [isChanging, setIsChanging] = useState(false)

	const changeImage = () => {
		setIsChanging(true)
		const availableImages = images.filter((img) => img !== imageSrc)
		const randomIndex = Math.floor(Math.random() * availableImages.length)
		setImageSrc(availableImages[randomIndex])
	}

	return (
		<div className="relative size-[190px] lg:size-[380px]">
			<motion.div
				key={imageSrc}
				className="size-full rounded-full border shadow-[0_35px_35px_rgba(var(--foreground))]"
				initial={{ scale: 0 }}
				animate={isChanging ? { scale: 0.95 } : { scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 15,
				}}
				onAnimationComplete={() => setIsChanging(false)}
			/>
			<motion.div
				className="absolute mx-auto rounded-full border top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 size-[180px] lg:size-[320px]"
				initial={{ scale: 0 }}
				animate={isChanging ? { scale: 0.95 } : { scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 25,
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
					<Image
						key={imageSrc}
						className="cursor-pointer rounded-full object-cover size-[180px] lg:size-[270px]"
						src={imageSrc}
						alt=""
						width={350}
						height={350}
					/>
				</motion.div>
			</AnimatePresence>

			{!isChanging && (
				<>
					<FlyAround
						icon={Star}
						text="Learning"
						className="top-10 right-[-15%] rotate-[-25deg] hidden xl:flex"
						subItem={
							<>
								<img
									className="absolute top-12 -left-1/2 hidden dark:block"
									src="/assets/images/snippets/spring-arrow-dark.svg"
									alt="spring-arrow-dark"
								/>
								<img
									className="absolute top-12 -left-1/2 block dark:hidden"
									src="/assets/images/snippets/spring-arrow-light.svg"
									alt="spring-arrow-light"
								/>
							</>
						}
					/>
					<FlyAround
						icon={Lightbulb}
						text="Exploring"
						className="top-72 right-[-15%] rotate-[25deg] hidden xl:flex"
						subItem={
							<>
								<img
									className="absolute top-12 -left-1/2 hidden dark:block"
									src="/assets/images/snippets/spring-arrow-dark.svg"
									alt="spring-arrow-dark"
								/>
								<img
									className="absolute top-12 -left-1/2 block dark:hidden"
									src="/assets/images/snippets/spring-arrow-light.svg"
									alt="spring-arrow-light"
								/>
							</>
						}
					/>

					<FlyAround
						icon={Zap}
						text="Innovating"
						className="top-10 left-[-15%] rotate-[25deg] flex-row-reverse hidden xl:flex"
						subItem={
							<>
								<img
									className="absolute top-12 left-1/2 hidden dark:block scale-x-[-1]"
									src="/assets/images/snippets/spring-arrow-dark.svg"
									alt="spring-arrow-dark"
								/>
								<img
									className="absolute top-12 left-1/2 block dark:hidden scale-x-[-1]"
									src="/assets/images/snippets/spring-arrow-light.svg"
									alt="spring-arrow-light"
								/>
							</>
						}
					/>
					<FlyAround
						icon={Sprout}
						text="Growing"
						className="top-72 left-[-15%] rotate-[-25deg] flex-row-reverse hidden xl:flex"
						subItem={
							<>
								<img
									className="absolute top-12 left-1/2 hidden dark:block scale-x-[-1]"
									src="/assets/images/snippets/spring-arrow-dark.svg"
									alt="spring-arrow-dark"
								/>
								<img
									className="absolute top-12 left-1/2 block dark:hidden scale-x-[-1]"
									src="/assets/images/snippets/spring-arrow-light.svg"
									alt="spring-arrow-light"
								/>
							</>
						}
					/>
				</>
			)}
		</div>
	)
}

const FlyAround = ({
	icon,
	text,
	className,
	subItem,
}: {
	text: string
	icon: LucideIcon
	className?: string
	subItem?: ReactNode
}) => {
	const [randomColor, setRandomColor] = useState<string>('')

	const iconColors = [
		'text-green-500',
		'text-yellow-500',
		'text-rose-400',
		'text-blue-500',
		'text-orange-500',
		'text-green-400',
		'text-yellow-400',
		'text-red-400',
		'text-blue-400',
		'text-pink-400',
		'text-purple-400',
		'text-orange-400',
		'text-indigo-400',
		'text-red-500',
		'text-purple-500',
		'text-indigo-500',
		'text-pink-500',
	]

	useEffect(() => {
		// runs only once when the component mounts
		setRandomColor(iconColors[Math.floor(Math.random() * iconColors.length)])
	}, [])

	const Icon = icon

	return (
		<AnimatedBlock
			className={cn(
				'group absolute flex items-center gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-foreground underline-offset-3',
				className
			)}
			type="BOUNCE_IN"
		>
			{text}
			<Icon size={13} className={randomColor} />
			{subItem}
		</AnimatedBlock>
	)
}
