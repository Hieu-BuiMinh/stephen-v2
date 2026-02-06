/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from '@repo/stephen-v2-utils'
import type { TBaguaId, TEarthlyBranchIndex } from '@repo/stephen-v2-utils/i-ching'
import { converToHexagrams, EarthlyBranch, ElementType, ElemVi, Relative } from '@repo/stephen-v2-utils/i-ching'
import { nanoid } from 'nanoid'

import { YinYang } from '../yin-yang'
import { ElementDotByRelative } from './element-dot-by-relative'

export interface IHexagram {
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
	animated?: boolean
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
	animated = true,
}: IHexagram) {
	// Quẻ Chủ
	const {
		member: memberBefore,
		fammily: fammilyBefore,
		indexesElements: indexesElementsBefore,
	} = converToHexagrams({
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
	const { member: memberAfter, indexesElements: indexesElementsAfter } = converToHexagrams({
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

	return (
		<div className="flex items-center justify-between gap-5 px-4">
			{/* Quẻ chủ */}
			<div className={cn('flex flex-col gap-3 items-center flex-1 shrink-0', className)}>
				<div className="flex flex-col w-full gap-1.5">
					{upperBeforeIndexes?.map((item, i) => (
						<div className="grid grid-cols-12" key={nanoid()}>
							{showIndex && (
								<span className="col-span-1 text-xs">
									{6 - i}{' '}
									{showQuestionerAndQuestion && memberBefore?.questionerIndex === 6 - i && '(T)'}
									{showQuestionerAndQuestion && memberBefore?.questionIndex === 6 - i && '(U)'}
								</span>
							)}
							<div className="col-span-2">
								<YinYang
									className={yinYangClassName}
									type={item}
									activated={actives?.some((a) => a + i === 6)}
									animated={animated}
								/>
							</div>
							{/* lục thân */}
							{showSixRelatives && (
								<span
									className={cn(
										'col-span-2 text-xs',
										actives?.some((a) => a + i === 6) && 'text-red-500 font-bold'
									)}
								>
									{Relative[memberBefore?.hexagramRelatives?.[i] as Relative]}
								</span>
							)}
							{/* phục thần */}
							{showHiddenRelative && (
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
												earthlyBranchIndex={
													memberBefore?.hexagramHiddenEarthlyBranches?.[
														i
													] as TEarthlyBranchIndex
												}
											/>
										</div>
									)}
								</span>
							)}
							{/* địa chi */}
							{showSixCreatures && (
								<span className="col-span-2 text-xs">
									{EarthlyBranch[memberBefore?.hexagramEarthlyBranches?.[i] as Relative]}
								</span>
							)}
							{/* Ngũ hành */}
							{showElements && (
								<span className="col-span-1">
									<ElementDotByRelative elementIndex={indexesElementsBefore?.[i]} />
								</span>
							)}
						</div>
					))}
				</div>

				<div className="flex flex-col w-full gap-1.5">
					{lowerBeforeIndexes?.map((item, i) => (
						<div className="grid grid-cols-12" key={nanoid()}>
							{showIndex && (
								<span className="col-span-1 text-xs">
									{3 - i}{' '}
									{showQuestionerAndQuestion && memberBefore?.questionerIndex === 3 - i && '(T)'}
									{showQuestionerAndQuestion && memberBefore?.questionIndex === 3 - i && '(U)'}
								</span>
							)}
							<div className="col-span-2">
								<YinYang
									className={yinYangClassName}
									type={item}
									key={nanoid()}
									animated={animated}
									activated={actives?.includes(3 - i)}
								/>
							</div>
							{/* lục thân */}
							{showSixRelatives && (
								<span
									className={cn(
										'col-span-2 text-xs',
										actives?.includes(3 - i) && 'text-red-500 font-bold'
									)}
								>
									{Relative[memberBefore?.hexagramRelatives?.[3 + i] as Relative]}
								</span>
							)}
							{/* phục thần */}
							{showHiddenRelative && (
								<span className="col-span-3 text-xs">
									{memberBefore?.hexagramHiddenRelatives?.[3 + i] && (
										<div className="flex items-center gap-1">
											{Relative[memberBefore?.hexagramHiddenRelatives?.[3 + i] as Relative]} -{' '}
											{
												EarthlyBranch[
													memberBefore?.hexagramHiddenEarthlyBranches?.[
														3 + i
													] as EarthlyBranch
												]
											}
											<ElementDotByRelative
												earthlyBranchIndex={
													memberBefore?.hexagramHiddenEarthlyBranches?.[
														3 + i
													] as TEarthlyBranchIndex
												}
											/>
										</div>
									)}
								</span>
							)}
							{/* địa chi */}
							{showSixCreatures && (
								<span className="col-span-2 text-xs">
									{EarthlyBranch[memberBefore?.hexagramEarthlyBranches?.[3 + i] as Relative]}
								</span>
							)}
							{/* Ngũ hành */}
							{showElements && (
								<span className="col-span-1">
									<ElementDotByRelative elementIndex={indexesElementsBefore?.[3 + i]} />
								</span>
							)}
						</div>
					))}
				</div>
				{showHexagramName && (
					<span>
						{memberBefore?.hexagramName}
						{showOriginFamily && (
							<>
								{' - '}
								<span className="font-bold underline">{ElemVi[fammilyBefore?.id as ElemVi]}</span>
							</>
						)}
					</span>
				)}
			</div>

			{/* Quẻ biến */}
			{showResultHexagram && (
				<div className={cn('flex flex-col gap-3 items-center flex-1 shrink-0', className)}>
					<div className="flex flex-col w-full gap-1.5">
						{upperAfterIndexes?.map((item, i) => (
							<div className="grid grid-cols-12" key={nanoid()}>
								{showIndex && <span className="col-span-1 text-xs">{6 - i}</span>}
								<div className="col-span-2">
									<YinYang
										className={yinYangClassName}
										type={item}
										activated={actives?.some((a) => a + i === 6)}
										animated={animated}
									/>
								</div>

								{showSixRelatives && (
									<span className="col-span-2 text-xs">
										{Relative[memberAfter?.hexagramRelatives?.[i] as Relative]}
									</span>
								)}
								{/* phục thần - quẻ biến không có phục thần */}
								{/* {showHiddenRelative && (
									<span className="col-span-3 text-xs">
										{memberAfter?.hexagramHiddenRelatives?.[i] && (
											<div className="flex items-center gap-1">
												{Relative[memberAfter?.hexagramHiddenRelatives?.[i] as Relative]} -{' '}
												{
													EarthlyBranch[
														memberAfter?.hexagramHiddenEarthlyBranches?.[i] as EarthlyBranch
													]
												}
												<ElementDotByRelative elementIndex={indexesElementsAfter?.[i]} />
											</div>
										)}
									</span>
								)} */}
								{/* địa chi */}
								{showSixCreatures && (
									<span className="col-span-2 text-xs">
										{EarthlyBranch[memberAfter?.hexagramEarthlyBranches?.[i] as Relative]}
									</span>
								)}
								{/* thiên can */}
								{/* lục thú */}
								{/* Ngũ hành */}
								{showElements && (
									<span className="col-span-1">
										<ElementDotByRelative elementIndex={indexesElementsAfter?.[i]} />
									</span>
								)}
							</div>
						))}
					</div>

					<div className="flex flex-col w-full gap-1.5">
						{lowerAfterIndexes?.map((item, i) => (
							<div className="grid grid-cols-12" key={nanoid()}>
								{showIndex && <span className="col-span-1 text-xs">{3 - i}</span>}
								<div className="col-span-2">
									<YinYang
										className={yinYangClassName}
										type={item}
										key={nanoid()}
										animated={animated}
										activated={actives?.includes(3 - i)}
									/>
								</div>
								{/* lục thân */}
								{showSixRelatives && (
									<span className="col-span-2 text-xs">
										{Relative[memberAfter?.hexagramRelatives?.[3 + i] as Relative]}
									</span>
								)}
								{/* phục thần - quẻ biến không có phục thần */}
								{/* {showHiddenRelative && (
									<span className="col-span-3 text-xs">
										{memberAfter?.hexagramHiddenRelatives?.[3 + i] && (
											<div className="flex items-center gap-1">
												{Relative[memberAfter?.hexagramHiddenRelatives?.[3 + i] as Relative]} -{' '}
												{
													EarthlyBranch[
														memberAfter?.hexagramHiddenEarthlyBranches?.[
															3 + i
														] as EarthlyBranch
													]
												}
												<ElementDotByRelative elementIndex={indexesElementsAfter?.[3 + i]} />
											</div>
										)}
									</span>
								)} */}
								{/* địa chi */}
								{showSixCreatures && (
									<span className="col-span-2 text-xs">
										{EarthlyBranch[memberAfter?.hexagramEarthlyBranches?.[3 + i] as Relative]}
									</span>
								)}
								{/* Ngũ hành */}
								{showElements && (
									<span className="col-span-1">
										<ElementDotByRelative elementIndex={indexesElementsAfter?.[3 + i]} />
									</span>
								)}
							</div>
						))}
					</div>
					{showHexagramName && <span>{memberAfter?.hexagramName}</span>}
				</div>
			)}
		</div>
	)
}

export { Hexagram }
