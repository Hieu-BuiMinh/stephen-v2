'use client'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import type { Dayjs } from 'dayjs'
import { useEffect, useMemo, useState } from 'react'

import type dayjs from '@/lib/day-js'
import { d } from '@/lib/day-js'
import type { HourSlot } from '@/lib/day-js/lunar'
import { getLunarSnapshotSolar } from '@/lib/day-js/lunar'

type Segment = {
	chi: string
	canChi: string
	start: string
	end: string
	rangeMinutes: [number, number]
}

const pad2 = (n: number) => String(n).padStart(2, '0')

const minutesToHHhMM = (m: number) => {
	const mm = ((m % 1440) + 1440) % 1440
	const h = Math.floor(mm / 60)
	const min = mm % 60
	return `${pad2(h)}h${pad2(min)}`
}

const getMinutesOfDay = (date: dayjs.Dayjs) => date.hour() * 60 + date.minute()

const isMinuteInRange = (range: [number, number], minute: number) => {
	const [start, end] = range
	return start <= end ? minute >= start && minute < end : minute >= start || minute < end
}

function LunarHour({ day }: { day?: Date }) {
	const baseDate = day ? d(day) : d()

	const snap = getLunarSnapshotSolar(baseDate.toDate())

	const data: Segment[] = snap.hours.map((s: HourSlot) => ({
		chi: s.chi,
		canChi: s.canChi,
		start: minutesToHHhMM(s.rangeMinutes[0]),
		end: minutesToHHhMM(s.rangeMinutes[1]),
		rangeMinutes: s.rangeMinutes as [number, number],
	}))

	const [realNow, setRealNow] = useState<Dayjs>(d())

	// Thời gian dựa theo ngày user nhập (để tô đậm hàng)
	const [now, setNow] = useState<Dayjs>(d())

	useEffect(() => {
		// Cập nhật thời gian thật (ping dot)
		const interval = setInterval(() => setRealNow(d()), 60_000)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (day) setNow(d(day))
		else setNow(d())
	}, [day])

	const nowMinute = useMemo(() => getMinutesOfDay(now), [now])
	const realMinute = useMemo(() => getMinutesOfDay(realNow), [realNow])

	return (
		<Table className="border">
			<TableCaption>Khung giờ 12 địa chi (GMT+7)</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-20 border">Chi</TableHead>
					<TableHead className="border">Can Chi</TableHead>
					<TableHead className="border">Bắt đầu</TableHead>
					<TableHead className="border">Kết thúc</TableHead>
					<TableHead className="text-right border">Khoảng (phút)</TableHead>
					<TableHead className="border">Khoảng (theo phút trong ngày)</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((row) => {
					const [startMin, endMin] = row.rangeMinutes
					const rangeText =
						startMin <= endMin
							? `${minutesToHHhMM(startMin)} → ${minutesToHHhMM(endMin)}`
							: `${minutesToHHhMM(startMin)} → 24h00 / 00h00 → ${minutesToHHhMM(endMin)}`
					const spanMinutes = startMin <= endMin ? endMin - startMin : 1440 - startMin + endMin

					const isNow = isMinuteInRange(row.rangeMinutes, nowMinute)
					const isRealNow = isMinuteInRange(row.rangeMinutes, realMinute)

					const rowClass = isNow ? 'bg-muted-foreground/10 font-semibold text-foreground' : ''
					const showPing = isRealNow && d().isSame(baseDate, 'day') // chỉ ping với ngày hiện tại thực

					return (
						<TableRow key={row.chi} className={cn('text-muted-foreground', rowClass)}>
							<TableCell className="relative font-medium text-xs border flex items-center gap-5">
								{row.chi}
								{showPing && <PingDot />}
							</TableCell>
							<TableCell className="text-xs border">{row.canChi}</TableCell>
							<TableCell className="text-xs border">{row.start}</TableCell>
							<TableCell className="text-xs border">{row.end}</TableCell>
							<TableCell className="text-right tabular-nums text-xs border">{spanMinutes}</TableCell>
							<TableCell className="tabular-nums text-xs border">{rangeText}</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}

export default LunarHour

const PingDot = () => (
	<span className="relative flex items-center justify-center size-2.5">
		<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full animate-ping rounded-full bg-red-300 opacity-75" />
		<span>⏰</span>
	</span>
)
