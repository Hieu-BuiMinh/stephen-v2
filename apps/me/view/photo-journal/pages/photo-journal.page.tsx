import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'

import { getMonthCover, groupByMonth } from '@/utils/photo-journal'
import { PhotoItem } from '@/constants/photo-journal'

interface IPhotoJournalPageViewProps {
	data: PhotoItem[]
	year: number
}

function PhotoJournalPageView({ data, year }: IPhotoJournalPageViewProps) {
	const monthMap = groupByMonth(data)
	const months = Array.from({ length: 12 }, (_, i) => i)

	return (
		<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[1px] bg-border border border-border">
			{months.map((m) => {
				const key = dayjs().year(year).month(m).format('YYYY-MM')
				const items = monthMap.get(key)

				if (!items || items.length === 0) return null

				const cover = getMonthCover(items)

				return (
					<Link href={`/photo-journal/${year}#${dayjs().month(m).format('MMM').toLowerCase()}`} key={m}>
						<div className="relative aspect-square bg-card overflow-hidden group">
							{/* cover */}
							{cover ? (
								<BlurImage
									src={cover}
									alt={`Cover for ${dayjs().month(m).format('MMMM')}`}
									fill
									className="absolute inset-0 size-full"
									imageClassName="transition-transform duration-500 group-hover:scale-105"
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
								/>
							) : (
								<div className="absolute inset-0 bg-muted flex items-center justify-center">
									<span className="text-muted-foreground/30 font-medium">No photos</span>
								</div>
							)}

							{/* label */}
							<div className="absolute bottom-2 left-2 text-white drop-shadow-md">
								<p className="text-sm font-bold">{dayjs().month(m).format('MMM')}</p>
							</div>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default PhotoJournalPageView
