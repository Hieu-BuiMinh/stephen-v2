'use client'

import './style.css'

import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { buttonVariants } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'

import DownLoadResumeButton from '@/components/buttons/resume-button'
import { APP_CONFIG } from '@/configs/app-config'
import { ProfilePicture } from '@/view/marketing/components/hero-section/profile-picture'

function HeroSection() {
	return (
		<div className="flex flex-col-reverse items-center justify-between rounded-md p-5 sm:pt-16 md:pt-20 sm:flex-row bg-[#e8e8e8] dark:bg-transparent">
			<div className="bg-hero-section absolute inset-0 top-0 -z-10 mx-auto max-h-[600px] w-full opacity-20 dark:opacity-[0.05] bg-[url('/assets/images/bg/bg-hero-section-light.svg')] dark:bg-[url('/assets/images/bg/bg-hero-section-dark.svg')] bg-repeat" />

			<div className="flex flex-col gap-5 w-full">
				<div className="max-w-7xl flex flex-col gap-5 mt-7 text-center text-4xl font-semibold md:text-6xl sm:text-left sm:mt-0">
					<h1 className="font-black">
						Hey, I'm{' '}
						<AnimatedBlock
							as="span"
							type="BLUR_IN"
							className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent"
							restartOnClick
						>
							Stephen
						</AnimatedBlock>
					</h1>
					<h1 className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 to-90% bg-clip-text text-2xl font-black text-transparent sm:text-4xl md:text-5xl">
						A Frontend Developer
					</h1>
					<h2 className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 to-90% bg-clip-text text-2xl font-black text-transparent sm:text-4xl md:text-5xl leading-[1.1]">
						Creating websites using
					</h2>
					<div className="flex flex-col gap-2">
						<span className="hero-stack-name">React</span>
						<div className="text-xs text-muted-foreground">Ho Chi Minh City • UTC/GMT +7</div>
					</div>
				</div>

				<div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
					<DownLoadResumeButton className="w-full md:w-auto" />
					<Link
						href={APP_CONFIG.author.resume}
						target="_blank"
						className={cn(buttonVariants({ variant: 'default' }), 'w-full md:w-auto')}
					>
						See for Yourself
						<SquareArrowOutUpRight className="hidden md:block" />
					</Link>
				</div>
			</div>

			<ProfilePicture />
			<span className="hidden md:block" />
		</div>
	)
}

export default HeroSection
