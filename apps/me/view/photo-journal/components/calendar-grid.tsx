import { BlurImage, ImageZoomV3 } from '@repo/stephen-v2-ui/shadcn'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import dayjs from 'dayjs'
import React, { useMemo } from 'react'

import FoldedCornerCard from '@/components/cards/folded-corner-card'
import { mapByDate } from '@/utils/photo-journal'
import { PhotoItem } from '@/constants/photo-journal'

interface ICalendarGridProps {
	year: number
	month: number
	data: PhotoItem[]
}

export default function CalendarGrid({ year, month, data }: ICalendarGridProps) {
	const dateMap = useMemo(() => mapByDate(data), [data])

	const days = useMemo(() => {
		const startOfMonth = dayjs().year(year).month(month).startOf('month')
		const startDay = startOfMonth.day()

		const totalDays = startOfMonth.endOf('month').date()
		const totalCells = Math.ceil((startDay + totalDays) / 7) * 7

		return Array.from({ length: totalCells }).map((_, i) => {
			const date = startOfMonth.subtract(startDay, 'day').add(i, 'day')

			return {
				date,
				isCurrentMonth: date.month() === month,
			}
		})
	}, [year, month])

	return (
		<div className="grid grid-cols-7 gap-[1px] bg-border border border-border">
			{days.map((d, index) => {
				const key = d.date.format('YYYY-MM-DD')
				const item = dateMap.get(key)

				if (item?.image) {
					return (
						<AnimatedBlock
							type="FADE_IN"
							delay={index * 0.05}
							className="group/post-card relative aspect-square"
							key={key}
						>
							<FoldedCornerCard className="z-[1] size-full rounded-none" cornerRadius={0}>
								<div
									className={`relative size-full bg-card overflow-hidden group ${!d.isCurrentMonth ? 'opacity-30' : ''}`}
								>
									<ImageZoomV3
										src={item.image}
										alt={`Photo for ${key}`}
										className="absolute inset-0 size-full"
										imageClassName="rounded-none transition-transform duration-300 group-hover:scale-110"
										width={800}
										height={800}
									/>
									<div className="pointer-events-none absolute top-1 left-1 md:top-2 md:left-2 text-xs md:text-sm text-foreground/70 drop-shadow-md z-10">
										{d.date.date()}
									</div>
								</div>
							</FoldedCornerCard>
							<div className="absolute inset-0 border border-transparent border-dashed rounded-none bg-muted-foreground/10 z-[0] group-hover/post-card:border-muted-foreground" />
						</AnimatedBlock>
					)
				}

				return (
					<div
						key={key}
						className={`relative aspect-square bg-card overflow-hidden group ${
							!d.isCurrentMonth ? 'opacity-30' : ''
						}`}
					>
						{/* day */}
						<div className="pointer-events-none absolute top-1 left-1 md:top-2 md:left-2 text-xs md:text-sm text-foreground/70 drop-shadow-md z-10">
							{d.date.date()}
						</div>
					</div>
				)
			})}
		</div>
	)
}
