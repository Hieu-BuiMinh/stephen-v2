'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'

import { FilmPortraitDoodles, FlowerPhotoDoodles, GymPhotoDoodles, MainPhotoDoodles } from './doodles'

const POLAROID_PATH = '/assets/images/avt/polaroids'

interface PhotoMotionProps {
	reduceMotion: boolean | null
}

function MainPhoto({ reduceMotion }: PhotoMotionProps) {
	return (
		<motion.div
			className="absolute left-[5%] top-0 z-10 w-[58%]"
			initial={reduceMotion ? false : { opacity: 0, x: -70, y: 28, scale: 0.94 }}
			whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}
		>
			<MainPhotoDoodles />
			<div className="-rotate-2 drop-shadow-2xl">
				<Image
					src={`${POLAROID_PATH}/polaroid-01.png`}
					alt="Stephen taking a mirror selfie"
					width={1581}
					height={1841}
					priority
					sizes="(min-width: 1280px) 380px, 320px"
					className="h-auto w-full"
				/>
			</div>
		</motion.div>
	)
}

function GymPhoto({ reduceMotion }: PhotoMotionProps) {
	return (
		<motion.div
			className="absolute -right-[5%] -top-[12%] z-20 w-[48%]"
			initial={reduceMotion ? false : { opacity: 0, x: 70, y: -24, scale: 0.94 }}
			whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
		>
			<GymPhotoDoodles />
			<div className="rotate-3 drop-shadow-xl">
				<Image
					src={`${POLAROID_PATH}/polaroid-02.png`}
					alt="Stephen's gym progress"
					width={1647}
					height={1319}
					sizes="(min-width: 1280px) 290px, 250px"
					className="h-auto w-full"
				/>
			</div>
		</motion.div>
	)
}

function FilmPortrait({ reduceMotion }: PhotoMotionProps) {
	return (
		<motion.div
			className="absolute -bottom-[10%] right-0 z-[15] w-[35%]"
			initial={reduceMotion ? false : { opacity: 0, x: 54, y: 70, scale: 0.94 }}
			whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
		>
			<FilmPortraitDoodles />
			<div className="rotate-2 drop-shadow-2xl">
				<Image
					src={`${POLAROID_PATH}/polaroid-04.png`}
					alt="Film portrait of Stephen"
					width={941}
					height={1672}
					sizes="(min-width: 1280px) 200px, 170px"
					className="h-auto w-full"
				/>
			</div>
		</motion.div>
	)
}

function FlowerPhoto({ reduceMotion }: PhotoMotionProps) {
	return (
		<motion.div
			className="absolute -bottom-[15%] left-[10%] z-30 w-[35%]"
			initial={reduceMotion ? false : { opacity: 0, x: -48, y: 68, scale: 0.9 }}
			whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
		>
			<FlowerPhotoDoodles />
			<div className="-rotate-6 drop-shadow-2xl">
				<Image
					src={`${POLAROID_PATH}/polaroid-03.png`}
					alt="A colorful flower collage"
					width={1743}
					height={1751}
					sizes="(min-width: 1280px) 265px, 220px"
					className="h-auto w-full"
				/>
			</div>
		</motion.div>
	)
}

function HeroCollage() {
	const reduceMotion = useReducedMotion()

	return (
		<div className="relative hidden aspect-[1.2/1] w-full max-w-[680px] shrink-0 lg:block">
			<MainPhoto reduceMotion={reduceMotion} />
			<GymPhoto reduceMotion={reduceMotion} />
			<FilmPortrait reduceMotion={reduceMotion} />
			<FlowerPhoto reduceMotion={reduceMotion} />
		</div>
	)
}

export default HeroCollage
