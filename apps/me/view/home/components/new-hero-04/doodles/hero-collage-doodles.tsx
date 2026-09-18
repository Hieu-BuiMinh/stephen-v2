'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

import {
	DoodleNote,
	FilmSmiley,
	FlowerSmiley,
	Heart,
	Sparkle,
	StrongDoodle,
	TinyJoyArrow,
	UnderlineScribble,
} from './hero-doodles'

function seededValue(seed: number, offset: number) {
	const value = Math.sin(seed * 12.9898 + offset * 78.233) * 43758.5453

	return value - Math.floor(value)
}

function FloatingDoodle({
	children,
	className,
	seed,
	white = false,
}: {
	children: ReactNode
	className: string
	seed: number
	white?: boolean
}) {
	const reduceMotion = useReducedMotion()
	const x = 2 + seededValue(seed, 1) * 4
	const y = 3 + seededValue(seed, 2) * 5
	const rotate = 0.4 + seededValue(seed, 3) * 1.2
	const duration = 4.8 + seededValue(seed, 4) * 3
	const delay = seededValue(seed, 5) * 1.8

	return (
		<motion.div
			aria-hidden="true"
			className={`pointer-events-none absolute z-[100] ${white ? 'text-white' : 'text-foreground/90'} ${className}`}
			animate={
				reduceMotion
					? undefined
					: {
							x: [0, x, -x * 0.45, 0],
							y: [0, -y, y * 0.35, 0],
							rotate: [0, rotate, -rotate * 0.4, 0],
						}
			}
			transition={{ duration, delay, ease: 'easeInOut', repeat: Infinity }}
		>
			{children}
		</motion.div>
	)
}

function MainPhotoDoodles() {
	return (
		<FloatingDoodle seed={1} className="left-[-9%] top-[54%] size-[8%] -rotate-12">
			<Sparkle className="size-full" />
		</FloatingDoodle>
	)
}

function GymPhotoDoodles() {
	return (
		<>
			<FloatingDoodle seed={2} className="right-[-10%] top-[16%] size-[8%] rotate-6">
				<Heart className="size-full" />
			</FloatingDoodle>
			<FloatingDoodle seed={3} className="right-[-18%] top-[55%] -rotate-6 text-center">
				<DoodleNote>
					strong
					<br />
					today
				</DoodleNote>
			</FloatingDoodle>
			<FloatingDoodle seed={4} className="right-[-35%] top-[85%] w-[28%] -rotate-6">
				<StrongDoodle className="h-auto w-10" />
			</FloatingDoodle>
		</>
	)
}

function FilmPortraitDoodles() {
	return (
		<>
			<FloatingDoodle white seed={5} className="bottom-[37%] left-[8%] size-[9%] rotate-6">
				<Sparkle className="size-full" />
			</FloatingDoodle>
			<FloatingDoodle white seed={6} className="bottom-[17%] left-[7%] -rotate-6 text-left">
				<DoodleNote size="sm">
					same person
					<br />
					brighter
					<br />
					days.
				</DoodleNote>
			</FloatingDoodle>
			<FloatingDoodle white seed={7} className="bottom-[11%] left-[6%] w-[30%] -rotate-6">
				<UnderlineScribble className="h-auto w-full" />
			</FloatingDoodle>
			<FloatingDoodle white seed={8} className="bottom-[2%] left-[8%] size-[14%] -rotate-6">
				<FilmSmiley className="size-full" />
			</FloatingDoodle>
		</>
	)
}

function FlowerPhotoDoodles() {
	return (
		<>
			<FloatingDoodle seed={9} className="left-[-14%] top-[55%] size-[10%] -rotate-12">
				<Sparkle className="size-full" />
			</FloatingDoodle>
			<FloatingDoodle seed={10} className="bottom-[1%] left-[-6%] size-[8%] rotate-6">
				<Sparkle className="size-full" />
			</FloatingDoodle>
			<FloatingDoodle seed={11} className="bottom-[-9%] left-[6%] size-[17%] -rotate-6">
				<FlowerSmiley className="size-full" />
			</FloatingDoodle>
			<FloatingDoodle seed={12} className="right-[-30%] top-[43%] -rotate-6 text-center">
				<DoodleNote>tiny joy</DoodleNote>
			</FloatingDoodle>
			<FloatingDoodle seed={13} className="right-[-17%] top-[32%] size-[7%] -rotate-6">
				<Heart className="size-full" />
			</FloatingDoodle>
			<FloatingDoodle seed={14} className="right-[-20%] top-[66%] w-[24%] rotate-6">
				<TinyJoyArrow className="h-auto w-full" />
			</FloatingDoodle>
		</>
	)
}

export { FilmPortraitDoodles, FlowerPhotoDoodles, GymPhotoDoodles, MainPhotoDoodles }
