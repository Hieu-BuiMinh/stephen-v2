import { d } from '@/lib/day-js'
import { getLunarSnapshotSolar } from '@/lib/day-js/lunar'

function LunarHeader({ day }: { day?: Date }) {
	const baseDate = day ? d(day) : d()

	const snap = getLunarSnapshotSolar(baseDate.toDate())

	const { lunar, zodiacDay, zodiacHour, zodiacMonth, zodiacYear, tietKhi } = snap

	return (
		<div className="flex flex-col text-muted-foreground gap-2 items-center justify-center">
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
		</div>
	)
}

export default LunarHeader
