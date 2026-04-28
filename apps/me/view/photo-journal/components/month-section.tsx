import dayjs from 'dayjs'
import React from 'react'

import CalendarGrid from './calendar-grid'
import { PhotoItem } from '@/constants/photo-journal'

function SmallCalendar({ year, month }: { year: number; month: number }) {
	const startOfMonth = dayjs().year(year).month(month).startOf('month')
	const startDay = startOfMonth.day()
	const totalDays = startOfMonth.endOf('month').date()
	const totalCells = Math.ceil((startDay + totalDays) / 7) * 7

	const days = Array.from({ length: totalCells }).map((_, i) => {
		const date = startOfMonth.subtract(startDay, 'day').add(i, 'day')
		return { date, isCurrentMonth: date.month() === month }
	})

	const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

	return (
		<div className="w-full max-w-[200px]">
			<div className="grid grid-cols-7 gap-1 text-center mb-2">
				{weekDays.map((wd) => (
					<div key={wd} className="text-xs font-semibold text-muted-foreground">
						{wd}
					</div>
				))}
			</div>
			<div className="grid grid-cols-7 gap-1 text-center">
				{days.map((d, i) => (
					<div
						key={i}
						className={`text-sm py-1 rounded-sm ${
							!d.isCurrentMonth ? 'text-muted-foreground/30' : 'text-foreground'
						}`}
					>
						{d.date.date()}
					</div>
				))}
			</div>
		</div>
	)
}

interface IMonthSectionProps {
	year: number
	month: number
	data: PhotoItem[]
}

export default function MonthSection({ year, month, data }: IMonthSectionProps) {
	return (
		<section className="mb-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
			{/* Left side: Heading + Small Calendar */}
			<div className="lg:w-[250px] shrink-0 flex flex-col gap-6 justify-between">
				<h2 className="text-3xl md:text-4xl font-bold flex flex-col gap-1">
					{dayjs().year(year).month(month).format('MMMM')}
					<span className="text-muted-foreground font-normal text-xl">{year}</span>
				</h2>
				<div className="hidden lg:block">
					<SmallCalendar year={year} month={month} />
				</div>
			</div>

			{/* Right side: The big CalendarGrid with photos */}
			<div className="flex-1">
				<CalendarGrid year={year} month={month} data={data} />
			</div>
		</section>
	)
}
