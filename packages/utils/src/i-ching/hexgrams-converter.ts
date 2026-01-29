import { hexagramFamily } from './constants/64-hexagrams'
import type { IHexagramFamily, IHexagramMember, TBaguaId, TElementType, TYinYang } from './i-ching.dto'

type HexagramConverted = {
	fammily?: IHexagramFamily
	member?: IHexagramMember
	memberIndex?: number
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
	elementToCompareWith?: TElementType
}): HexagramConverted => {
	let member: IHexagramMember | undefined
	let memberIndex: number | undefined

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
				return true
			}
			return false
		})
	)

	const memberIndexes = member?.yinyangIndexs

	console.log('🤝memberIndexes', memberIndexes)

	return { fammily, member, memberIndex }
}
