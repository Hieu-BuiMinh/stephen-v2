import { cn } from '@repo/stephen-v2-utils'
import { getLunarSnapshotSolar } from '@repo/stephen-v2-utils/i-ching'

import { d } from '@/lib/day-js'

function LunarHeader({ day, className }: { day?: Date; className?: string }) {
	const baseDate = day ? d(day) : d()

	const snap = getLunarSnapshotSolar(baseDate.toDate())

	const { lunar, zodiacDay, zodiacHour, zodiacMonth, zodiacYear, week, tietKhi } = snap

	return (
		<div
			className={cn(
				'flex flex-col text-muted-foreground gap-2 items-center justify-center text-center',
				className
			)}
		>
			<p>
				Giờ: {baseDate.format('HH:mm DD/MM/YYYY')} Dương Lịch ( {lunar.day}/{lunar.month}/{lunar.year} Âm Lịch)
			</p>
			<p>
				(Giờ <span className="text-foreground">{zodiacHour}</span> - ngày{' '}
				<span className="text-foreground">{zodiacDay}</span> - tháng{' '}
				<span className="text-foreground">{zodiacMonth}</span> - năm{' '}
				<span className="text-foreground">{zodiacYear}</span>)
			</p>
			<p>
				Tiết <span className="text-foreground">{tietKhi.name}</span>, Nguyệt Lệnh{' '}
				<span className="text-foreground">{tietKhi.nguyetLenh}</span>
			</p>
			<p>
				Tuần: <span className="text-foreground">{week.name}</span> |{' '}
				<span className="text-foreground underline decoration-wavy">
					{week.none.map((n) => ` ${n}`).join(' - ')}
				</span>{' '}
				- không
			</p>
		</div>
	)
}

export default LunarHeader
