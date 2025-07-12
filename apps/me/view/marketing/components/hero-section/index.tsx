import './style.css'

import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { cn } from '@repo/stephen-v2-utils'
import { Lightbulb, type LucideIcon, Sprout, Star, Zap } from 'lucide-react'

function HeroSection() {
	return (
		<div className="flex items-center justify-between rounded-md pb-5 pt-16 md:pt-20">
			<div className="bg-hero-section absolute inset-0 top-0 -z-10 mx-auto max-h-[600px] w-full opacity-20 dark:opacity-[0.02] bg-[url('/assets/images/bg/bg-hero-section-light.svg')] dark:bg-[url('/assets/images/bg/bg-hero-section-dark.svg')] bg-repeat" />

			<div className="max-w-7xl flex flex-col gap-5 text-left text-4xl font-semibold md:text-6xl">
				<h1 className="hero-auth-name font-black">
					Hey, I'm{' '}
					<AnimatedBlock as="span" type="BLUR_IN">
						Stephen
					</AnimatedBlock>
				</h1>
				<h1 className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 to-90% bg-clip-text text-2xl font-black text-transparent sm:text-5xl">
					A Frontend Developer
				</h1>
				<h2 className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 to-90% bg-clip-text text-2xl font-black text-transparent sm:text-5xl leading-[1.1]">
					Creating websites using
				</h2>
				<div className="flex flex-col gap-2">
					<span className="hero-stack-name">React</span>
					<div className="text-sm text-muted-foreground">Ho Chi Minh City • UTC/GMT +7</div>
				</div>
			</div>

			<FlyAround icon={Star} text="Learning" className="top-10 left-[40%] rotate-[-25deg]" />
			<FlyAround icon={Lightbulb} text="Exploring" className="top-44 left-[40%] rotate-[25deg]" />

			<FlyAround icon={Zap} text="Innovating" className="top-10 left-[-7%] rotate-[25deg] flex-row-reverse" />
			<FlyAround icon={Sprout} text="Growing" className="top-52 left-[-7%] rotate-[-25deg] flex-row-reverse" />
		</div>
	)
}

export default HeroSection

const FlyAround = ({ icon, text, className }: { text: string; icon: LucideIcon; className?: string }) => {
	const Icon = icon

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

	const randomColor = iconColors[Math.floor(Math.random() * iconColors.length)]
	return (
		<AnimatedBlock
			className={cn(
				'group absolute w-fit flex items-center gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-foreground underline-offset-3',
				className
			)}
			type="BOUNCE_IN"
		>
			{text}
			<Icon size={13} className={`${randomColor}`} />
		</AnimatedBlock>
	)
}
