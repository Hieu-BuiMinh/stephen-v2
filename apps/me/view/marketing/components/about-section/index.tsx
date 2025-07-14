'use client'

import React from 'react'

import { AboutMeBento } from '@/view/marketing/components/about-section/about-me-bento'
import ConnectionsBento from '@/view/marketing/components/about-section/connections-bento'

function AboutSection() {
	return (
		<div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14] py-24">
			<div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
				<AboutMeBento linkTo="/about" />
			</div>

			<div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
				<ConnectionsBento linkTo="/connections" />
			</div>
			{/* 

			<div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
				<ToolboxBento linkTo="/toolbox" />
			</div>

			<div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
				<CalendarBento />
			</div> */}
		</div>
	)
}

export default AboutSection
