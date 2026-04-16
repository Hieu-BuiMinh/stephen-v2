'use client'

import { shortWriting } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { Hexagram, HexagramToImage } from '@repo/stephen-v2-ui/i-ching'
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@repo/stephen-v2-ui/shadcn'
import type { IHexagramMember } from '@repo/stephen-v2-utils/i-ching'
import { useCallback, useMemo, useState } from 'react'

import MDXContentComponent from '@/components/mdx-content'
import LunarHeader from '@/view/tools/components/lunar-header'
import CalendarSheet from '@/view/tools/pages/lunar-time-chart/components/calendar-sheet'
import { handleCalcDateToHexagram } from '@/view/tools/utils/calc-date-to-hexagram'

const getShortWritingPost = ({ id }: { id: string }) => {
	if (!id) return null
	const post = getVelitePostById({ id, postsList: shortWriting })
	return post?.published ? post : null
}

function HexagramAnalyzerPageView() {
	const [hexagramData, setHexagramData] = useState<{
		before?: IHexagramMember
		after?: IHexagramMember
	}>({ before: undefined, after: undefined })
	const [day, setDay] = useState(() => new Date())
	const [open, setOpen] = useState(false)

	const handleOpenModal = () => setOpen(true)
	const handleCloseModal = () => setOpen(false)
	const handleReset = () => setDay(new Date())

	const handleReturnHexagrams = useCallback(
		(payload: { hexagramBefore?: IHexagramMember; hexagramAfter?: IHexagramMember }) => {
			setHexagramData({
				before: payload.hexagramBefore,
				after: payload.hexagramAfter,
			})
		},
		[]
	)

	const calcData = useMemo(() => {
		return handleCalcDateToHexagram(day)
	}, [day])

	const hexagramPostBefore = getShortWritingPost({ id: hexagramData?.before?.postId || '' })

	const hexagramPostAfter = getShortWritingPost({ id: hexagramData?.after?.postId || '' })

	return (
		<div className="flex flex-col gap-14 p-3">
			<LunarHeader day={day} className="mx-auto" />

			<div className="hidden lg:block">
				<Hexagram
					upper={calcData.upper}
					lower={calcData.lower}
					actives={[calcData.active]}
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
					onReturnHexagrams={handleReturnHexagrams}
				/>
			</div>

			<div className="block lg:hidden">
				<HexagramToImage
					upper={calcData.upper}
					lower={calcData.lower}
					actives={[calcData.active]}
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
				<div className="inline-flex items-center justify-end">
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
							<Button variant="secondary-matter" onClick={handleReset}>
								Đặt Lại
							</Button>
							<Button variant="primary-matter" onClick={handleCloseModal}>
								Xác Nhận
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>

			{hexagramPostBefore && <MDXContentComponent code={hexagramPostBefore.body} className="min-w-full px-3" />}

			{hexagramPostAfter && <MDXContentComponent code={hexagramPostAfter.body} className="min-w-full px-3" />}
		</div>
	)
}

export default HexagramAnalyzerPageView
