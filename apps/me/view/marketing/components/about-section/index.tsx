'use client'

import { AboutMeBento } from '@/view/marketing/components/about-section/about-me-bento'
import ConnectionsBento from '@/view/marketing/components/about-section/connections-bento'
import CurrentlyExploringBento from '@/view/marketing/components/about-section/currently-exploring-bento'
import TechsTackBento from '@/view/marketing/components/about-section/techs-tack-bento'

function AboutSection() {
	return (
		<>
			<div className="size-full my-24 grid grid-cols-12 lg:grid-rows-12 gap-2 h-[80vh] col-start-1 row-start-1">
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
				<div className="col-span-12 md:col-span-6 lg:col-span-9 lg:row-span-4 border"></div>
				<div className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-span-4 border"></div>
			</div>
		</>
	)
}

export default AboutSection
