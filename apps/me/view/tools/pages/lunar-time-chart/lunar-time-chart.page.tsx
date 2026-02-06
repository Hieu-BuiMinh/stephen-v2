'use client'

import { Button } from '@repo/stephen-v2-ui/shadcn'
import { useState } from 'react'

import CalendarSheet from '@/view/tools/pages/lunar-time-chart/components/calendar-sheet'
import LunarHeader from '@/view/tools/pages/lunar-time-chart/components/lunar-header'
import LunarHour from '@/view/tools/pages/lunar-time-chart/components/lunar-hour'
import SunChart from '@/view/tools/pages/lunar-time-chart/components/sun-chart'

function LunarTimeChartPageView() {
	const [day, setDay] = useState(new Date())

	const handleReset = () => setDay(new Date())

	return (
		<div className="flex flex-col gap-4 p-3">
			<LunarHeader day={day} />
			<div className="flex gap-4 flex-col md:flex-row">
				<div className="w-full flex-1">
					<SunChart day={day} />
				</div>
				<div className="mx-auto flex flex-col gap-3">
					<CalendarSheet day={day} onchange={setDay} />
					<Button
						size="sm"
						variant="secondary"
						disabled={day === new Date()}
						onClick={handleReset}
						className="w-full"
					>
						Reset
					</Button>
				</div>
			</div>
			<LunarHour day={day} />
		</div>
	)
}

export default LunarTimeChartPageView
