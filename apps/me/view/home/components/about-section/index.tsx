'use client'

import { TextEffect } from '@repo/stephen-v2-ui/motion'

import TextGradient from '@/components/texts/text-gradient'
import { AboutMeBento } from '@/view/home/components/about-section/about-me-bento'
import ConnectionsBento from '@/view/home/components/about-section/connections-bento'
import CurrentlyExploringBento from '@/view/home/components/about-section/currently-exploring-bento'
import CurrentlyReadingBento from '@/view/home/components/about-section/currently-reading-bento'
import CurrentlyWorkingOnBento from '@/view/home/components/about-section/currently-working-on-bento'
import TechsTackBento from '@/view/home/components/about-section/techs-tack-bento'

function AboutSection() {
	return (
		<div className="flex flex-col gap-10 items-center justify-center my-32 min-h-screen">
			<TextGradient as="div" className="text-center font-semibold text-3xl md:text-4xl max-w-xl">
				<TextEffect preset="slide" per="char">
					Here's what sets me apart and makes me unique
				</TextEffect>
			</TextGradient>
			<div className="size-full grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4 md:h-[840px] md:col-start-1 md:row-start-1">
				{/* row 1 */}
				<div className="col-span-1 md:col-span-6 lg:col-span-5 md:row-span-4 lg:row-span-3">
					<AboutMeBento linkTo="/about" />
				</div>
				<div className="col-span-1 md:col-span-6 lg:col-span-7 md:row-span-4 lg:row-span-5">
					<ConnectionsBento linkTo="/connections" />
				</div>
				{/* row 2 */}
				<div className="col-span-1 md:col-span-6 lg:col-span-5 md:row-span-4 lg:row-span-5">
					<CurrentlyExploringBento />
				</div>
				<div className="col-span-1 md:col-span-6 lg:col-span-7 md:row-span-4 lg:row-span-3">
					<TechsTackBento />
				</div>
				{/* row 3 */}
				<div className="col-span-1 md:col-span-6 lg:col-span-8 md:row-span-4 lg:row-span-4">
					<CurrentlyReadingBento />
				</div>
				<div className="col-span-1 md:col-span-6 lg:col-span-4 md:row-span-4 lg:row-span-4">
					<CurrentlyWorkingOnBento />
				</div>
			</div>
		</div>
	)
}

export default AboutSection
