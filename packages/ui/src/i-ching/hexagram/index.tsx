/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from '@repo/stephen-v2-utils'
import type { TBaguaId } from '@repo/stephen-v2-utils/i-ching'
import { converToHexagrams, EarthlyBranch, ElementType, ElemVi, Relative } from '@repo/stephen-v2-utils/i-ching'
import { nanoid } from 'nanoid'

import { YinYang } from '../yin-yang'
import { ElementDotByRelative } from './element-dot-by-relative'

interface IHexagram {
	upper: TBaguaId
	lower: TBaguaId
	actives?: number[]
	className?: string
	showIndex?: boolean
	showLabel?: boolean
	showElements?: boolean
	showSixRelatives?: boolean
	showBranches?: boolean
	showSixCreatures?: boolean
	showOriginFamily?: boolean
	showResultHexagram?: boolean
	showQuestionerAndQuestion?: boolean
	showHiddenRelative?: boolean
	showHexagramName?: boolean
	yinYangClassName?: string
}

function Hexagram({
	upper, // quẻ thượng [0->9]
	lower, // quẻ hạ [0->9]
	actives, // danh sách hào động [1->6]
	className,
	showIndex, // hiện thứ tự từng hào
	showLabel, // hiện tên quẻ
	showElements, // hiện ngũ hành của từng hào
	showSixRelatives, // hiện lục thân của từng hào
	showBranches, // hiện thiên can
	showSixCreatures, // hiện địa chi của từng hào
	showOriginFamily, // hiện ngũ hành của quẻ gốc
	showResultHexagram, // hiện kết quả sau khi động hào
	showQuestionerAndQuestion, // hiện thế ứng
	showHiddenRelative, // hiện phục thần
	showHexagramName, // hiện tên quẻ
	yinYangClassName,
}: IHexagram) {
	// Quẻ Chủ
	const { member: memberBefore, fammily: fammilyBefore } = converToHexagrams({
		upper,
		lower,
	})

	const upperBeforeIndexes = [
		memberBefore?.yinyangIndexs?.[0],
		memberBefore?.yinyangIndexs?.[1],
		memberBefore?.yinyangIndexs?.[2],
	]
	const lowerBeforeIndexes = [
		memberBefore?.yinyangIndexs?.[3],
		memberBefore?.yinyangIndexs?.[4],
		memberBefore?.yinyangIndexs?.[5],
	]

	const indexesAfterChange = memberBefore?.yinyangIndexs?.map((value, i) => {
		if (actives?.some((a) => a + i === 6)) {
			return value === 1 ? 0 : 1
		}
		return value
	})

	// Quẻ Biến
	const { member: memberAfter } = converToHexagrams({
		hexagramYinyangIndexs: indexesAfterChange,
		elementToCompareWith: ElementType[fammilyBefore?.id as ElementType],
	})

	const upperAfterIndexes = [
		memberAfter?.yinyangIndexs?.[0],
		memberAfter?.yinyangIndexs?.[1],
		memberAfter?.yinyangIndexs?.[2],
	]
	const lowerAfterIndexes = [
		memberAfter?.yinyangIndexs?.[3],
		memberAfter?.yinyangIndexs?.[4],
		memberAfter?.yinyangIndexs?.[5],
	]

	console.log('👻memberBefore', memberBefore)

	return (
		<div className="grid grid-cols-12 gap-5">
			{/* Quẻ chủ */}
			<div className={cn('flex flex-col gap-3 items-center col-span-6', className)}>
				<div className="flex flex-col w-full gap-1.5">
					{upperBeforeIndexes?.map((item, i) => (
						<div className="grid grid-cols-12" key={nanoid()}>
							<span className="col-span-1 text-xs">
								{6 - i} {memberBefore?.questionerIndex === 6 - i && '(T)'}
								{memberBefore?.questionIndex === 6 - i && '(U)'}
							</span>
							<div className="col-span-2">
								<YinYang
									className={yinYangClassName}
									type={item}
									activated={actives?.some((a) => a + i === 6)}
								/>
							</div>
							{/* lục thân */}
							<span
								className={cn(
									'col-span-2 text-xs',
									actives?.some((a) => a + i === 6) && 'text-red-500 font-bold'
								)}
							>
								{Relative[memberBefore?.hexagramRelatives?.[i] as Relative]}
							</span>
							{/* phục thần */}
							<span className="col-span-3 text-xs">
								{memberBefore?.hexagramHiddenRelatives?.[i] && (
									<div className="flex items-center gap-1">
										{Relative[memberBefore?.hexagramHiddenRelatives?.[i] as Relative]} -{' '}
										{
											EarthlyBranch[
												memberBefore?.hexagramHiddenEarthlyBranches?.[i] as EarthlyBranch
											]
										}
										<ElementDotByRelative
											relative={memberBefore?.hexagramHiddenEarthlyBranches?.[i]}
										/>
									</div>
								)}
							</span>
							{/* địa chi */}
							<span className="col-span-2 text-xs">
								{EarthlyBranch[memberBefore?.hexagramEarthlyBranches?.[i] as Relative]}
							</span>
							{/* Ngũ hành */}
							<span className="col-span-1">
								<ElementDotByRelative relative={memberBefore?.hexagramRelatives?.[i]} />
							</span>
						</div>
					))}
				</div>

				<div className="flex flex-col w-full gap-1.5">
					{lowerBeforeIndexes?.map((item, i) => (
						<div className="grid grid-cols-12" key={nanoid()}>
							<span className="col-span-1 text-xs">
								{3 - i} {memberBefore?.questionerIndex === 3 - i && '(T)'}
								{memberBefore?.questionIndex === 3 - i && '(U)'}
							</span>
							<div className="col-span-2">
								<YinYang
									className={yinYangClassName}
									type={item}
									key={nanoid()}
									activated={actives?.includes(3 - i)}
								/>
							</div>
							{/* lục thân */}
							<span
								className={cn(
									'col-span-2 text-xs',
									actives?.includes(3 - i) && 'text-red-500 font-bold'
								)}
							>
								{Relative[memberBefore?.hexagramRelatives?.[3 + i] as Relative]}
							</span>
							{/* phục thần */}
							<span className="col-span-3 text-xs">
								{memberBefore?.hexagramHiddenRelatives?.[3 + i] && (
									<div className="flex items-center gap-1">
										{Relative[memberBefore?.hexagramHiddenRelatives?.[3 + i] as Relative]} -{' '}
										{
											EarthlyBranch[
												memberBefore?.hexagramHiddenEarthlyBranches?.[3 + i] as EarthlyBranch
											]
										}
										<ElementDotByRelative
											relative={memberBefore?.hexagramHiddenEarthlyBranches?.[3 + i]}
										/>
									</div>
								)}
							</span>
							{/* địa chi */}
							<span className="col-span-2 text-xs">
								{EarthlyBranch[memberBefore?.hexagramEarthlyBranches?.[3 + i] as Relative]}
							</span>
							{/* Ngũ hành */}
							<span className="col-span-1">
								<ElementDotByRelative relative={memberBefore?.hexagramRelatives?.[3 + i]} />
							</span>
						</div>
					))}
				</div>
				<span>
					{memberBefore?.hexagramName}-{' '}
					<span className="font-bold underline">{ElemVi[fammilyBefore?.id as ElemVi]}</span>
				</span>
			</div>

			{/* Quẻ biến */}
			<div className={cn('flex flex-col gap-3 items-center col-span-6', className)}>
				<div className="flex flex-col w-full gap-1.5">
					{upperAfterIndexes?.map((item, i) => (
						<div className="grid grid-cols-12" key={nanoid()}>
							<span className="col-span-1 text-xs">{6 - i}</span>
							<div className="col-span-2">
								<YinYang
									className={yinYangClassName}
									type={item}
									activated={actives?.some((a) => a + i === 6)}
								/>
							</div>

							<span className="col-span-2 text-xs">
								{Relative[memberAfter?.hexagramRelatives?.[i] as Relative]}
							</span>
							{/* phục thần */}
							<span className="col-span-3 text-xs">
								{memberAfter?.hexagramHiddenRelatives?.[i] && (
									<div className="flex items-center gap-1">
										{Relative[memberAfter?.hexagramHiddenRelatives?.[i] as Relative]} -{' '}
										{
											EarthlyBranch[
												memberAfter?.hexagramHiddenEarthlyBranches?.[i] as EarthlyBranch
											]
										}
										<ElementDotByRelative
											relative={memberAfter?.hexagramHiddenEarthlyBranches?.[i]}
										/>
									</div>
								)}
							</span>
							{/* địa chi */}
							<span className="col-span-2 text-xs">
								{EarthlyBranch[memberAfter?.hexagramEarthlyBranches?.[i] as Relative]}
							</span>
							{/* Ngũ hành */}
							<span className="col-span-1">
								<ElementDotByRelative relative={memberAfter?.hexagramRelatives?.[i]} />
							</span>
						</div>
					))}
				</div>

				<div className="flex flex-col w-full gap-1.5">
					{lowerAfterIndexes?.map((item, i) => (
						<div className="grid grid-cols-12" key={nanoid()}>
							<span className="col-span-1 text-xs">{3 - i}</span>
							<div className="col-span-2">
								<YinYang
									className={yinYangClassName}
									type={item}
									key={nanoid()}
									activated={actives?.includes(3 - i)}
								/>
							</div>
							{/* lục thân */}
							<span className="col-span-2 text-xs">
								{Relative[memberAfter?.hexagramRelatives?.[3 + i] as Relative]}
							</span>
							{/* phục thần */}
							<span className="col-span-3 text-xs">
								{memberAfter?.hexagramHiddenRelatives?.[3 + i] && (
									<div className="flex items-center gap-1">
										{Relative[memberAfter?.hexagramHiddenRelatives?.[3 + i] as Relative]} -{' '}
										{
											EarthlyBranch[
												memberAfter?.hexagramHiddenEarthlyBranches?.[3 + i] as EarthlyBranch
											]
										}
										<ElementDotByRelative
											relative={memberAfter?.hexagramHiddenEarthlyBranches?.[3 + i]}
										/>
									</div>
								)}
							</span>
							{/* địa chi */}
							<span className="col-span-2 text-xs">
								{EarthlyBranch[memberAfter?.hexagramEarthlyBranches?.[3 + i] as Relative]}
							</span>
							{/* Ngũ hành */}
							<span className="col-span-1">
								<ElementDotByRelative relative={memberAfter?.hexagramRelatives?.[3 + i]} />
							</span>
						</div>
					))}
				</div>
				<span>{memberAfter?.hexagramName}</span>
			</div>
		</div>
	)
}

export { Hexagram }
