import { getLunarSnapshotSolar, type TBaguaId } from '@repo/stephen-v2-utils/i-ching'

import { d } from '@/lib/day-js'

export const handleCalcDateToHexagram = (day: Date): { upper: TBaguaId; lower: TBaguaId; active: number } => {
	const baseDate = day ? d(day) : d()

	const snap = getLunarSnapshotSolar(baseDate.toDate())

	const lunarDay = snap.lunar.day
	const lunarMonth = snap.lunar.month
	const lunarYear = snap.lunar.yearIndex + 1
	const lunarHour = snap.lunar.hour + 1

	const upper = ((lunarDay + lunarMonth + lunarYear) % 8 || 8) as TBaguaId
	const lower = ((lunarDay + lunarMonth + lunarYear + lunarHour) % 8 || 8) as TBaguaId

	const active = (lunarDay + lunarMonth + lunarYear + lunarHour) % 6 || 6

	return { upper, lower, active }
}
