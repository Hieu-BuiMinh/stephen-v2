'use client'

import { CardSpotlight } from '@repo/stephen-v2-ui/shadcn'

import { AboutMeBento } from '@/view/marketing/components/about-section/about-me-bento'
import ConnectionsBento from '@/view/marketing/components/about-section/connections-bento'
import CurrentlyExploringBento from '@/view/marketing/components/about-section/currently-exploring-bento'
import CurrentlyWorkingOnBento from '@/view/marketing/components/about-section/currently-working-on-bento'
import TechsTackBento from '@/view/marketing/components/about-section/techs-tack-bento'

function AboutSection() {
	return (
		<div className="flex flex-col gap-10 items-center justify-center my-24">
			<div className="text-center font-semibold text-3xl md:text-4xl max-w-md">
				Here's what sets me apart and makes me unique
			</div>
			<div className="size-full grid grid-cols-12 lg:grid-rows-12 gap-2 h-[840px] col-start-1 row-start-1">
				{/* row 1 */}
				<div className="col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-3">
					<AboutMeBento linkTo="/about" />
				</div>
				<div className="col-span-12 md:col-span-6 lg:col-span-7 lg:row-span-5">
					<ConnectionsBento linkTo="/connections" />
				</div>
				{/* row 2 */}
				<div className="col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-5">
					<CurrentlyExploringBento />
				</div>
				<div className="col-span-12 md:col-span-6 lg:col-span-7 lg:row-span-3">
					<TechsTackBento />
				</div>
				{/* row 3 */}
				<div className="col-span-12 md:col-span-6 lg:col-span-8 lg:row-span-4">
					<CardSpotlight className="size-full">hello</CardSpotlight>
				</div>
				<div className="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-4">
					<CurrentlyWorkingOnBento />
				</div>
			</div>
		</div>
	)
}

export default AboutSection
