'use client'
import { TextEffect } from '@repo/stephen-v2-ui/motion'
import { buttonVariants } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { SquareArrowOutUpRight, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

import DownLoadResumeButton from '@/components/buttons/resume-button'
import { APP_CONFIG } from '@/configs/app-config'
import { ProfilePicture } from '@/view/home/components/hero-section/profile-picture'

function NewHeroSection() {
	return (
		<>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-24 items-center justify-center relative z-10"
			>
				<ProfilePicture />
				<div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className="space-y-8"
					>
						{/* Main Heading - show name and description from config */}
						<div className="space-y-4 sm:space-y-6">
							<h1 className="relative text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-extrabold tracking-tight leading-none">
								<TextEffect
									preset="fade-in-blur"
									per="char"
									// segmentWrapperClassName="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 to-90% bg-clip-text text-transparent"
								>
									{APP_CONFIG.name}
								</TextEffect>
							</h1>
							<TextEffect
								preset="fade-in-blur"
								per="char"
								className="mx-auto max-w-2xl sm:max-w-3xl text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0"
							>
								Notes, stories, and little things that matter to me.
							</TextEffect>
						</div>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 md:flex-row"
						>
							<DownLoadResumeButton className="w-full md:w-auto" />
							<Link
								href={APP_CONFIG.author.resume}
								target="_blank"
								className={cn(buttonVariants({ variant: 'default' }), 'w-full md:w-auto')}
							>
								<Zap className="hidden md:block" />
								See for Yourself
								<SquareArrowOutUpRight className="hidden md:block" />
							</Link>
						</motion.div>
					</motion.div>
				</div>

				{/* Floating Elements */}
				<div className="absolute left-1/4 top-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none select-none" />
				<div className="absolute right-1/4 bottom-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none select-none" />
			</motion.section>
		</>
	)
}

export default NewHeroSection
