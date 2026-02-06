'use client'
import type { ChartConfig } from '@repo/stephen-v2-ui/shadcn'
import { ChartContainer, ChartTooltip } from '@repo/stephen-v2-ui/shadcn'
import { useMemo } from 'react'
import { Area, AreaChart, CartesianGrid, ReferenceDot, ReferenceLine, XAxis, YAxis } from 'recharts'
import SunCalc from 'suncalc'

import { d } from '@/lib/day-js'

const LAT = 10.762622
const LON = 106.660172

const rad2deg = (r: number) => (r * 180) / Math.PI
const hhmm = (min: number) => `${String(Math.floor(min / 60)).padStart(2, '0')}h${String(min % 60).padStart(2, '0')}`

const HOUR_TICKS = Array.from({ length: 25 }, (_, i) => i * 60)

export default function SunChart({
	lat = LAT,
	lon = LON,
	day = new Date(),
}: {
	lat?: number
	lon?: number
	day?: Date
}) {
	// Times
	const times = SunCalc.getTimes(day, lat, lon)
	const sunriseMin = times.sunrise.getHours() * 60 + times.sunrise.getMinutes()
	const noonMin = times.solarNoon.getHours() * 60 + times.solarNoon.getMinutes()
	const sunsetMin = times.sunset.getHours() * 60 + times.sunset.getMinutes()

	const now = d()
	const chartDay = d(day)
	const isSameDay = now.isSame(chartDay, 'day')
	const nowMin = now.hour() * 60 + now.minute()

	// Altitudes tại 3 mốc
	const sunriseAlt = rad2deg(
		SunCalc.getPosition(
			new Date(
				day.getFullYear(),
				day.getMonth(),
				day.getDate(),
				Math.floor(sunriseMin / 60),
				sunriseMin % 60,
				0,
				0
			),
			lat,
			lon
		).altitude
	)

	const noonAlt = rad2deg(
		SunCalc.getPosition(
			new Date(day.getFullYear(), day.getMonth(), day.getDate(), Math.floor(noonMin / 60), noonMin % 60, 0, 0),
			lat,
			lon
		).altitude
	)

	const sunsetAlt = rad2deg(
		SunCalc.getPosition(
			new Date(
				day.getFullYear(),
				day.getMonth(),
				day.getDate(),
				Math.floor(sunsetMin / 60),
				sunsetMin % 60,
				0,
				0
			),
			lat,
			lon
		).altitude
	)

	// Dữ liệu mỗi 5 phút (nhớ có 0 và 1440)
	const chartData = useMemo(() => {
		const data: Array<{ minute: number; timeLabel: string; altitude: number }> = []
		for (let min = 0; min <= 1440; min += 5) {
			const t = new Date(day)
			t.setHours(Math.floor(min / 60), min % 60, 0, 0)
			const { altitude } = SunCalc.getPosition(t, lat, lon)
			data.push({ minute: min, timeLabel: hhmm(min), altitude: rad2deg(altitude) })
		}
		return data
	}, [day, lat, lon])

	const chartConfig: ChartConfig = {
		altitude: { label: 'Độ cao Mặt Trời (°)', color: 'var(--chart-1)' },
	}

	const gradientOffset = () => {
		const dataMax = Math.max(...chartData.map((i) => i.altitude))
		const dataMin = Math.min(...chartData.map((i) => i.altitude))

		if (dataMax <= 0) {
			return 0
		}
		if (dataMin >= 0) {
			return 1
		}

		return dataMax / (dataMax - dataMin)
	}

	const off = gradientOffset()

	return (
		<>
			<div className="border p-2 rounded-lg shrink-0 w-full">
				<ChartContainer config={chartConfig}>
					<AreaChart data={chartData} margin={{ left: 0, right: 10, top: 20, bottom: 10 }}>
						<CartesianGrid vertical={false} strokeDasharray="3 3" />

						<XAxis
							dataKey="minute"
							type="number"
							domain={[0, 1440]}
							ticks={HOUR_TICKS}
							tickFormatter={(v) => (v === 1440 ? '24:00' : hhmm(v as number))}
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							allowDecimals={false}
							padding={{ left: 0, right: 0 }}
						/>

						<YAxis
							domain={[-90, 90]}
							tickFormatter={(v) => `${v}°`}
							tickCount={7}
							width={40}
							axisLine={false}
							tickLine={false}
						/>

						<ReferenceLine y={0} stroke="#888" strokeDasharray="3 3" />

						<defs>
							<linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0" stopColor="white" stopOpacity={1} />
								<stop offset={off} stopColor="white" stopOpacity={0.05} />
								<stop offset={off} stopColor="#333" stopOpacity={0.05} />
								<stop offset="1" stopColor="#333" stopOpacity={1} />
							</linearGradient>
						</defs>
						<Area
							type="monotone"
							dataKey="altitude"
							stroke="var(--muted-foreground)"
							fill="url(#splitColor)"
						/>

						{/* 4 DOT: Sunrise / Noon / Sunset / Now */}
						<ReferenceDot
							x={sunriseMin}
							y={sunriseAlt}
							r={4}
							isFront
							fill="var(--background)"
							stroke="var(--foreground)"
							label={{
								value: `Sunrise ${hhmm(sunriseMin)} • ${sunriseAlt.toFixed(1)}°`,
								position: 'top',
								fill: 'var(--foreground)',
								fontSize: 11,
							}}
						/>
						<ReferenceDot
							x={noonMin}
							y={noonAlt}
							r={4}
							isFront
							fill="var(--background)"
							stroke="var(--foreground)"
							label={{
								value: `Noon ${hhmm(noonMin)} • ${noonAlt.toFixed(1)}°`,
								position: 'top',
								fill: 'var(--foreground)',
								fontSize: 11,
							}}
						/>
						<ReferenceDot
							x={sunsetMin}
							y={sunsetAlt}
							r={4}
							isFront
							fill="var(--background)"
							stroke="var(--foreground)"
							label={{
								value: `Sunset ${hhmm(sunsetMin)} • ${sunsetAlt.toFixed(1)}°`,
								position: 'top',
								fill: 'var(--foreground)',
								fontSize: 11,
							}}
						/>
						{isSameDay && (
							<ReferenceDot
								x={nowMin}
								y={0}
								r={4}
								isFront
								fill="#3498db"
								stroke="var(--foreground)"
								label={{
									// value: `Bây giờ: ${hhmm(nowMin)}`,
									position: 'top',
									fill: 'var(--foreground)',
									fontSize: 11,
								}}
							/>
						)}

						<ChartTooltip
							content={({ active, payload }) => {
								if (!active || !payload?.length) return null
								const p = payload[0].payload as { timeLabel: string; altitude: number }
								return (
									<div className="rounded-md border bg-background/90 p-2 shadow-md text-xs">
										<div className="flex items-center justify-between gap-9">
											<strong>Thời gian:</strong> <span>{p.timeLabel}</span>
										</div>
										<div className="flex items-center justify-between gap-9">
											<strong>Độ cao:</strong> <span>{p.altitude.toFixed(2)}</span>
										</div>
									</div>
								)
							}}
						/>

						<Area
							type="monotone"
							dataKey="altitude"
							stroke="transparent"
							fill="transparent"
							activeDot={({ cx, cy, payload }) => {
								if (!cx || !cy || !payload) return <></>
								const { minute } = payload
								const isDay = minute >= sunriseMin && minute <= sunsetMin
								const icon = isDay ? '☀️' : '🌓'
								return (
									<text
										x={cx}
										y={cy - 10}
										textAnchor="middle"
										fontSize={18}
										dy={16}
										style={{ pointerEvents: 'none' }}
									>
										{icon}
									</text>
								)
							}}
						/>
					</AreaChart>
				</ChartContainer>
			</div>
		</>
	)
}
