'use client'

import { TextEffect } from '@repo/stephen-v2-ui/motion'
import { buttonVariants } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { SquareArrowOutUpRight, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

import DownLoadResumeButton from '@/components/buttons/resume-button'
import FlickeringGrid from '@/components/flickering-grid'
import { APP_CONFIG } from '@/configs/app-config'
import { ProfilePicture } from '@/view/home/components/hero-section/profile-picture'

function HeroSection03() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}
			className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-6 z-10"
		>
			<FlickeringGrid
				squareSize={5}
				gridGap={4}
				color="#60A5FA"
				className="absolute pointer-events-none size-full inset-0 z-0 [mask-image:radial-gradient(650px_circle_at_center,white,transparent)] hidden md:block"
			/>
			<div className="relative">
				<ProfilePicture />
				{/* <VectorField /> */}
			</div>
			<p className="text-center text-3xl font-bold tracking-tight sm:text-4xl">{APP_CONFIG.name}</p>

			<TextEffect preset="fade-in-blur" per="char" className="text-center text-lg text-balance sm:text-xl">
				Reflections, stories, and the moments that shape my world.
			</TextEffect>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className="flex h-8 items-center gap-2 rounded-full bg-zinc-50 px-4 text-xs font-medium dark:bg-white/5 mt-6 sm:mt-8 shadow-lg border dark:border-none"
			>
				<div className="relative flex size-[0.5rem]">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full size-[0.5rem] bg-emerald-500"></span>
				</div>
				{/* <span className="text-muted-foreground">Powered by ▲Vercel</span>
				<span>Version 2 🎉</span> */}
				<span className="text-muted-foreground">Available for</span>
				<Zap className="size-2 text-orange-400" />
				<span>new Opportunities 🎉</span>
			</motion.div>

			{/* CTA Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="flex flex-col w-full items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 md:flex-row"
			>
				<DownLoadResumeButton className="w-full md:w-auto" />
				<Link
					href={APP_CONFIG.author.resume}
					target="_blank"
					className={cn(buttonVariants({ variant: 'primary-matter' }), 'w-full md:w-auto')}
				>
					<Zap className="hidden md:block" />
					See for Yourself
					<SquareArrowOutUpRight className="hidden md:block" />
				</Link>
			</motion.div>
		</motion.section>
	)
}

export default HeroSection03
