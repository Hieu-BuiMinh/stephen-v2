'use client'

import { AboutMeBento } from '@/view/marketing/components/about-section/about-me-bento'
import ConnectionsBento from '@/view/marketing/components/about-section/connections-bento'

function AboutSection() {
	return (
		<div className="size-full grid grid-cols-12 lg:grid-rows-12 gap-2 border h-[80vh]">
			{/* row 1 */}
			<div className="col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-3 border">
				<AboutMeBento linkTo="/about" />
			</div>
			<div className="col-span-12 md:col-span-6 lg:col-span-7 lg:row-span-5 border"></div>
			{/* row 2 */}
			<div className="col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-5 border"></div>
			<div className="col-span-12 md:col-span-6 lg:col-span-7 lg:row-span-3 border"></div>
			{/* row 3 */}
			<div className="col-span-12 md:col-span-6 lg:col-span-9 lg:row-span-4 border"></div>
			<div className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-span-4 border"></div>
			{/* row 1 */}
			{/* <div className="flex col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-3">
					<AboutMeBento />
				</div> */}
			{/* <div className="flex col-span-12 md:col-span-6 lg:col-span-7 lg:row-span-5 border">
				<ConnectionsBento linkTo="/connections" />
			</div> */}
			{/* row 2 */}
			{/* <div className="flex col-span-12 md:col-span-6 md:row-start-1 lg:col-span-5 lg:row-span-7">
				<TechStackBento />
			</div> */}
			{/* <div className="col-span-12 md:col-span-6 lg:col-span-7 border">
				<CurrentlyExploringBento />
			</div> */}
		</div>
	)
}

export default AboutSection
