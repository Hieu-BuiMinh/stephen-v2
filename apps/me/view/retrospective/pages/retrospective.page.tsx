import { TextEffect } from '@repo/stephen-v2-ui/motion'
import { formatDate } from '@repo/stephen-v2-utils'
import React, { useId } from 'react'

import TextGradient from '@/components/texts/text-gradient'
import RetroRightSection from '@/view/retrospective/components/retro-right-section'

function RetrospectivePageView() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 px-3">
			<div className="inset-0 col-span-1 py-4 px-0 border-b h-auto flex lg:items-center lg:justify-center lg:sticky lg:h-screen lg:my-auto lg:pr-20 lg:border-none">
				<Glow />
				<div className="z-20 flex flex-col mt-4 lg:mt-40 gap-3.5 lg:justify-center max-w-xl lg:mx-auto lg:sticky lg:top-1/2 lg:-translate-y-1/2">
					<div className="text-muted-foreground flex items-center gap-x-1">
						<p className="text-xs">{formatDate(new Date(), 'MMMM D, YYYY')}</p>
					</div>
					<div>
						<TextGradient as="h1" className="font-sans font-bold !leading-[4rem] text-5xl">
							Looking Back
						</TextGradient>
						<TextGradient as="h2" className="font-sans font-bold !leading-[4rem] text-4xl">
							Every step tells a story.
						</TextGradient>
					</div>
					<TextEffect preset="fade-in-blur" per="char" className="text-sm text-muted-foreground">
						A collection of events, memories, and reflections from different stages of my life.
					</TextEffect>
				</div>
			</div>

			<div className="relative min-h-screen col-span-1 py-8 lg:py-32">
				<div className="absolute hidden -top-3 left-0 mb-2 w-2 h-[calc(100%+1rem)] -translate-x-full bg-gradient-to-b from-black/10 dark:from-white/20 from-50% to-50% to-transparent bg-[length:100%_5px] bg-repeat-y lg:block" />
				<RetroRightSection />
			</div>
		</div>
	)
}

export default RetrospectivePageView

function Glow() {
	const id = useId()

	return (
		<div className="overflow-hidden absolute inset-0 bg-gradient-to-tr from-transparent -z-10 dark:via-stone-950/5 via-stone-100/30 to-stone-200/20 dark:to-transparent/10">
			<svg
				className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
				aria-hidden="true"
			>
				<defs>
					<radialGradient id={`${id}-desktop`} cx="100%">
						<stop offset="0%" stopColor="rgba(41, 37, 36, 0.4)" />
						<stop offset="53.95%" stopColor="rgba(28, 25, 23, 0.09)" />
						<stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
					</radialGradient>
					<radialGradient id={`${id}-mobile`} cy="100%">
						<stop offset="0%" stopColor="rgba(41, 37, 36, 0.3)" />
						<stop offset="53.95%" stopColor="rgba(28, 25, 23, 0.09)" />
						<stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
					</radialGradient>
				</defs>
				<rect width="100%" height="100%" fill={`url(#${id}-desktop)`} className="hidden lg:block" />
				<rect width="100%" height="100%" fill={`url(#${id}-mobile)`} className="lg:hidden" />
			</svg>
			<div className="absolute inset-x-0 right-0 bottom-0 h-px mix-blend-overlay dark:bg-white/5 lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
		</div>
	)
}
