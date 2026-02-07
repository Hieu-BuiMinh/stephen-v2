'use client'

import { Hexagram, HexagramToImage } from '@repo/stephen-v2-ui/i-ching'
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@repo/stephen-v2-ui/shadcn'
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'

import LunarHeader from '@/view/tools/components/lunar-header'
import CalendarSheet from '@/view/tools/pages/lunar-time-chart/components/calendar-sheet'
import { handleCalcDateToHexagram } from '@/view/tools/utils/calc-date-to-hexagram'

function HexagramAnalyzerPageView() {
	const [day, setDay] = useState(() => new Date())
	const [open, setOpen] = useState(false)

	const handleOpenModal = () => setOpen(true)
	const handleCloseModal = () => setOpen(false)
	const handleReset = () => setDay(new Date())

	const hexagramData = useMemo(() => {
		return handleCalcDateToHexagram(day)
	}, [day])

	const isToday = useMemo(() => {
		return dayjs(day).isSame(dayjs(), 'day')
	}, [day])

	useEffect(() => {
		handleOpenModal()
	}, [])

	return (
		<div className="flex flex-col gap-14 p-3">
			<LunarHeader day={day} className="mx-auto" />

			<div className="hidden lg:block">
				<Hexagram
					upper={hexagramData.upper}
					lower={hexagramData.lower}
					actives={[hexagramData.active]}
					showResultHexagram
					showBranches
					showElements
					showHexagramName
					showHiddenRelative
					showIndex
					showLabel
					showOriginFamily
					showQuestionerAndQuestion
					showSixCreatures
					showSixRelatives
					day={day}
				/>
			</div>

			<div className="block lg:hidden">
				<HexagramToImage
					upper={hexagramData.upper}
					lower={hexagramData.lower}
					actives={[hexagramData.active]}
					showResultHexagram
					showBranches
					showElements
					showHexagramName
					showHiddenRelative
					showIndex
					showLabel
					showOriginFamily
					showQuestionerAndQuestion
					showSixCreatures
					showSixRelatives
					day={day}
				/>
			</div>

			<Dialog open={open} onOpenChange={setOpen}>
				<div className="flex items-center justify-end">
					<DialogTrigger asChild>
						<Button onClick={handleOpenModal} variant="secondary-matter">
							Chọn Ngày
						</Button>
					</DialogTrigger>
				</div>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-center">Chọn Ngày/Giờ Động Tâm</DialogTitle>
					</DialogHeader>
					<div className="mx-auto flex flex-col gap-5">
						<CalendarSheet day={day} onchange={setDay} />
						<div className="flex gap-3 items-center justify-end">
							<Button variant="secondary-matter" disabled={isToday} onClick={handleReset}>
								Đặt Lại
							</Button>
							<Button variant="primary-matter" onClick={handleCloseModal}>
								Xác Nhận
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default HexagramAnalyzerPageView
