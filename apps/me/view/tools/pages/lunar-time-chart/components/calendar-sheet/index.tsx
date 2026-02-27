import { Button, Calendar, ScrollArea, ScrollBar } from '@repo/stephen-v2-ui/shadcn'

function CalendarSheet({ day, onchange }: { day: Date; onchange?: (day: Date) => void }) {
	const baseDay = day || new Date()

	// const snap = getLunarSnapshotSolar(day || new Date())

	const hours = Array.from({ length: 24 }, (_, i) => i)
	const handleDateSelect = (selectedDate: Date | undefined) => {
		if (selectedDate) {
			onchange?.(selectedDate)
		}
	}

	const handleTimeChange = (type: 'hour' | 'minute', value: string) => {
		const newDate = new Date(baseDay)
		if (type === 'hour') {
			newDate.setHours(parseInt(value))
		} else if (type === 'minute') {
			newDate.setMinutes(parseInt(value))
		}
		onchange?.(newDate)
	}

	return (
		<>
			<div className="flex">
				<Calendar mode="single" selected={baseDay} onSelect={handleDateSelect} />
				<div className="flex h-[319px] divide-y-0 divide-x">
					<ScrollArea className="w-auto">
						<div className="flex gap-1 flex-col p-3 text-xs">
							{hours.reverse().map((hour) => (
								<Button
									key={hour}
									size="icon"
									variant={baseDay && baseDay.getHours() === hour ? 'default' : 'ghost'}
									className="w-full shrink-0 aspect-square"
									onClick={() => handleTimeChange('hour', hour.toString())}
								>
									{hour}
								</Button>
							))}
						</div>
						<ScrollBar orientation="horizontal" className="hidden" />
					</ScrollArea>
					<ScrollArea className="w-auto">
						<div className="flex gap-1 flex-col p-3 text-xs">
							{Array.from({ length: 60 }, (_, i) => i).map((minute) => (
								<Button
									key={minute}
									size="icon"
									variant={baseDay && baseDay.getMinutes() === minute ? 'default' : 'ghost'}
									className="w-full shrink-0 aspect-square"
									onClick={() => handleTimeChange('minute', minute.toString())}
								>
									{minute}
								</Button>
							))}
						</div>
						<ScrollBar orientation="horizontal" className="hidden" />
					</ScrollArea>
				</div>
			</div>
		</>
	)
}

export default CalendarSheet
