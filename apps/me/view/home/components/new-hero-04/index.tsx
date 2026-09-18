'use client'

import { buttonVariants } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { SquareArrowOutUpRight, Zap } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'

import DownLoadResumeButton from '@/components/buttons/resume-button'
import { APP_CONFIG } from '@/configs/app-config'

import HeroCollage from './hero-collage'

function HeroSection04() {
	const reduceMotion = useReducedMotion()

	return (
		<section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(540px,1.2fr)] lg:px-8">
			<div className="flex min-w-0 flex-col gap-5">
				<div className="flex flex-col gap-3">
					<div className="overflow-hidden">
						<motion.h1
							initial={reduceMotion ? false : { opacity: 0, y: 48, filter: 'blur(8px)' }}
							animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
							transition={{ duration: 0.7, ease: 'easeOut' }}
							className="font-caveat text-8xl font-black text-foreground"
						>
							STEPHEN&apos;S
						</motion.h1>
					</div>
					<div className="overflow-hidden">
						<motion.h2
							initial={reduceMotion ? false : { opacity: 0, y: 48, filter: 'blur(8px)' }}
							animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
							transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.12, ease: 'easeOut' }}
							className="font-caveat text-8xl font-bold text-muted-foreground"
						>
							CORNER
						</motion.h2>
					</div>
				</div>

				<p className="max-w-xl text-muted-foreground/70">
					Front-end engineer from Vietnam, crafting thoughtful digital experiences and sharing the projects,
					stories, and moments shaping my journey.
				</p>
				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="flex flex-col w-full gap-3 sm:gap-4 md:flex-row"
				>
					<DownLoadResumeButton
						className="w-full md:w-auto"
						innerText="Download Resume"
						buttonProps={{ size: 'sm' }}
					/>
					<Link
						href={APP_CONFIG.author.resume}
						target="_blank"
						className={cn(buttonVariants({ variant: 'primary-matter', size: 'sm' }), 'w-full md:w-auto')}
					>
						{/* <Zap className="hidden md:block" /> */}
						See for Yourself
						<SquareArrowOutUpRight className="hidden md:block" />
					</Link>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="flex h-8 items-center gap-2 rounded-full bg-zinc-50 px-4 text-xs font-medium dark:bg-white/5 shadow-lg border dark:border-border/50 w-fit"
				>
					<div className="relative flex size-[0.5rem]">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full size-[0.5rem] bg-emerald-500"></span>
					</div>
					<span className="text-muted-foreground">Available for</span>
					<Zap className="size-2 text-orange-400" />
					<span>New Opportunities 🎉</span>
				</motion.div>
			</div>
			<HeroCollage />
		</section>
	)
}

export default HeroSection04
