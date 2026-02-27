import { hexagramFamily } from './constants/64-hexagrams'
import type {
	TEarthlyBranchIndex,
	TElementIndex,
	THeavenlyStems,
	TRelativeIndex,
	TSixSymbolicAminals,
} from './i-ching.dto'
import {
	ElementType,
	type IHexagramFamily,
	type IHexagramMember,
	SixSymbolicAminals,
	type TBaguaId,
	type TElementType,
	type TYinYang,
} from './i-ching.dto'

type HexagramConverted = {
	fammily?: IHexagramFamily
	member?: IHexagramMember
	memberIndex?: number
	indexesElements?: [TElementIndex, TElementIndex, TElementIndex, TElementIndex, TElementIndex, TElementIndex]
}

export const converToHexagrams = ({
	upper,
	lower,
	hexagramYinyangIndexs,
	elementToCompareWith,
}: {
	upper?: TBaguaId
	lower?: TBaguaId
	hexagramYinyangIndexs?: TYinYang[]
	elementToCompareWith?: TElementType | string
	// nếu như có elementToCompareWith (ngũ hành của quẻ chủ): có nghĩa đây là quẻ biến
	// dùng lục thân quẻ biến để so sánh vs ngũ hành của quẻ chủ
}): HexagramConverted => {
	let member: IHexagramMember | undefined
	let memberIndex: number | undefined
	let indexesElements:
		| [TElementIndex, TElementIndex, TElementIndex, TElementIndex, TElementIndex, TElementIndex]
		| undefined

	const hexagramValue = [upper, lower]
	const fammily: IHexagramFamily | undefined = hexagramFamily.find((f) =>
		f.members.some((m, index) => {
			if (
				(m.value[0] === hexagramValue[0] && m.value[1] === hexagramValue[1]) ||
				(m.yinyangIndexs[0] === hexagramYinyangIndexs?.[0] &&
					m.yinyangIndexs[1] === hexagramYinyangIndexs?.[1] &&
					m.yinyangIndexs[2] === hexagramYinyangIndexs?.[2] &&
					m.yinyangIndexs[3] === hexagramYinyangIndexs?.[3] &&
					m.yinyangIndexs[4] === hexagramYinyangIndexs?.[4] &&
					m.yinyangIndexs[5] === hexagramYinyangIndexs?.[5])
			) {
				member = m
				memberIndex = index
				indexesElements = m.indexesElements
				return true
			}
			return false
		})
	)

	// tiến hành so sánh ngũ hành của quẻ chủ với ngũ hành của từng hào trong quẻ biến
	if (elementToCompareWith && member?.indexesElements?.length === 6) {
		const newRelatives = member.indexesElements.map((elementIndex) => {
			const r = handleCompareRelationsWithElement(ElementType[elementIndex] as TElementType, elementToCompareWith)
			return (r ?? -1) as TRelativeIndex
		})

		const [a, b, c, d, e, f] = newRelatives as [
			TRelativeIndex,
			TRelativeIndex,
			TRelativeIndex,
			TRelativeIndex,
			TRelativeIndex,
			TRelativeIndex,
		]

		member.hexagramRelatives = [a, b, c, d, e, f]
	}

	return { fammily, member, memberIndex, indexesElements }
}

const handleCompareRelationsWithElement = (
	element: TElementType,
	elementToCompareWith: TElementType | string
): number | null => {
	let relative = -1

	switch (elementToCompareWith) {
		case 'Water':
			switch (element) {
				case 'Water':
					relative = 2 // 'Huynh đệ'
					break
				case 'Fire':
					relative = 4 // 'Thê tài'
					break
				case 'Wood':
					relative = 3 // 'Tử tôn'
					break
				case 'Metal':
					relative = 1 // 'Phụ mẫu'
					break
				case 'Earth':
					relative = 5 // 'Quan quỷ'
					break
				default:
					relative = 2 // 'Huynh đệ'
					break
			}
			break

		case 'Fire':
			switch (element) {
				case 'Water':
					relative = 5 // 'Quan quỷ'
					break
				case 'Fire':
					relative = 2 // 'Huynh đệ'
					break
				case 'Wood':
					relative = 1 // 'Phụ mẫu'
					break
				case 'Metal':
					relative = 4 // 'Thê tài'
					break
				case 'Earth':
					relative = 3 // 'Tử tôn'
					break
				default:
					relative = 2 // 'Huynh đệ'
					break
			}
			break

		case 'Wood':
			switch (element) {
				case 'Water':
					relative = 1 // 'Phụ mẫu'
					break
				case 'Fire':
					relative = 3 // 'Tử tôn'
					break
				case 'Wood':
					relative = 2 // 'Huynh đệ'
					break
				case 'Metal':
					relative = 5 // 'Quan quỷ'
					break
				case 'Earth':
					relative = 4 // 'Thê tài'
					break
				default:
					relative = 2 // 'Huynh đệ'
					break
			}
			break

		case 'Metal':
			switch (element) {
				case 'Water':
					relative = 3 // 'Tử tôn'
					break
				case 'Fire':
					relative = 5 // 'Quan quỷ'
					break
				case 'Wood':
					relative = 4 // 'Thê tài'
					break
				case 'Metal':
					relative = 2 // 'Huynh đệ'
					break
				case 'Earth':
					relative = 1 // 'Phụ mẫu'
					break
				default:
					relative = 2 // 'Huynh đệ'
					break
			}
			break

		case 'Earth':
			switch (element) {
				case 'Water':
					relative = 4 // 'Thê tài'
					break
				case 'Fire':
					relative = 1 // 'Phụ mẫu'
					break
				case 'Wood':
					relative = 5 // 'Quan quỷ'
					break
				case 'Metal':
					relative = 3 // 'Tử tôn'
					break
				case 'Earth':
					relative = 2 // 'Huynh đệ'
					break
				default:
					relative = 2 // 'Huynh đệ'
					break
			}
			break

		default:
			break
	}

	return relative
}

export const converEarthlyBranchIndexToElement = (index?: TEarthlyBranchIndex): ElementType => {
	switch (index) {
		case 12:
		case 1:
			return ElementType.Water
		case 6:
		case 7:
			return ElementType.Fire
		case 3:
		case 4:
			return ElementType.Wood
		case 9:
		case 10:
			return ElementType.Metal
		case 2:
		case 5:
		case 8:
		case 11:
			return ElementType.Earth
		default:
			return ElementType.Water
	}
}

export const converTodayHeavenlySixSymbolicAnimals = (dayHevenly: THeavenlyStems): TSixSymbolicAminals[] => {
	switch (dayHevenly) {
		case 'Giáp':
		case 'Ất':
			return [
				SixSymbolicAminals[0],
				SixSymbolicAminals[1],
				SixSymbolicAminals[2],
				SixSymbolicAminals[3],
				SixSymbolicAminals[4],
				SixSymbolicAminals[5],
			]
		case 'Bính':
		case 'Đinh':
			return [
				SixSymbolicAminals[1],
				SixSymbolicAminals[2],
				SixSymbolicAminals[3],
				SixSymbolicAminals[4],
				SixSymbolicAminals[5],
				SixSymbolicAminals[0],
			]
		case 'Mậu':
			return [
				SixSymbolicAminals[2],
				SixSymbolicAminals[3],
				SixSymbolicAminals[4],
				SixSymbolicAminals[5],
				SixSymbolicAminals[0],
				SixSymbolicAminals[1],
			]
		case 'Kỷ':
			return [
				SixSymbolicAminals[3],
				SixSymbolicAminals[4],
				SixSymbolicAminals[5],
				SixSymbolicAminals[0],
				SixSymbolicAminals[1],
				SixSymbolicAminals[2],
			]
		case 'Canh':
		case 'Tân':
			return [
				SixSymbolicAminals[4],
				SixSymbolicAminals[5],
				SixSymbolicAminals[0],
				SixSymbolicAminals[1],
				SixSymbolicAminals[2],
				SixSymbolicAminals[3],
			]
		case 'Nhâm':
		case 'Quý':
			return [
				SixSymbolicAminals[5],
				SixSymbolicAminals[0],
				SixSymbolicAminals[1],
				SixSymbolicAminals[2],
				SixSymbolicAminals[3],
				SixSymbolicAminals[4],
			]
		default:
			return [
				SixSymbolicAminals[0],
				SixSymbolicAminals[1],
				SixSymbolicAminals[2],
				SixSymbolicAminals[3],
				SixSymbolicAminals[4],
				SixSymbolicAminals[5],
			]
	}
}
