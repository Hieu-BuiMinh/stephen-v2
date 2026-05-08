import dayjs from 'dayjs'
import React from 'react'

import { PhotoItem } from '@/constants/photo-journal'

import MonthSection from '../components/month-section'

interface IPhotoJournalDetailPageViewProps {
	data: PhotoItem[]
	year: number
}

function PhotoJournalDetailPageView({ data, year }: IPhotoJournalDetailPageViewProps) {
	const months = Array.from({ length: 12 }, (_, i) => i)

	return (
		<div className="flex flex-col mt-10 px-3 pb-32">
			{months.map((month) => {
				// Filter data for this specific month to pass to MonthSection
				const monthData = data.filter((d) => dayjs(d.date).year() === year && dayjs(d.date).month() === month)

				if (monthData.length === 0) return null

				return (
					<div key={month} id={dayjs().month(month).format('MMM').toLowerCase()}>
						<MonthSection year={year} month={month} data={monthData} />
					</div>
				)
			})}
		</div>
	)
}

export default PhotoJournalDetailPageView
