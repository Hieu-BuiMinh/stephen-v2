/* eslint-disable @typescript-eslint/no-unused-vars */
export interface HexgramBagua {
	creatures: string[]
	branch: string
	elements: ELEMENTS_TYPE[]
	value: number[]
	label: string
	index: number
}

export const converToHexagrams = ({
	upper,
	lower,
	elementToCompareWith,
}: {
	upper: number
	lower: number
	elementToCompareWith?: ELEMENTS_TYPE
}) => {
	// tìm 8 quái + tên riêng của 8 quái + ngũ hành của 3 hào trong mỗi quái + lục thú
	const upperBaguaCoverted = transformToBaguasData({
		type: 'UPPER',
		baguaIndex: upper,
	})
	const lowerBaguaCoverted = transformToBaguasData({ type: 'LOWER', baguaIndex: lower })

	// tìm 8 họ nhà quái
	const family = hexagramFamily.find((f) => f.members.some((item) => item.value === `[${upper}, ${lower}]`))
	const member = family?.members.find((mem) => mem.value === `[${upper}, ${lower}]`)
	// tìm quẻ chủ đại diện cho họ nhà quẻ, để tìm phục thần
	const originHexagramOfFamily = {
		upperBaguaCoverted: transformToBaguasData({
			type: 'UPPER',
			baguaIndex: family!.id,
		}),
		lowerBaguaCoverted: transformToBaguasData({ type: 'LOWER', baguaIndex: family!.id }),
	}
	const originHexagramOfFamilyOriginLement = hexagramFamily.find((f) => f.id === family!.id)?.originRelatives

	const elementOfOriginHexagramOfFamily = [
		...(originHexagramOfFamily?.upperBaguaCoverted?.elements as ELEMENTS_TYPE[]),
		...(originHexagramOfFamily?.lowerBaguaCoverted?.elements as ELEMENTS_TYPE[]),
	]

	// originElement dùng để so sánh ngũ hành 6 hào với ngũ hành quẻ gốc
	// nhằm an đúng lục thân cho quẻ gốc và quẻ biến
	// nếu có `elementToCompareWith` chứng tỏ Hexagrams này là quẻ biến => so sánh 6 hào với ngũ hành của quẻ gốc biến ra nó
	// nếu không có `elementToCompareWith` thì Hexagrams này là quẻ gốc => so sánh 6 hào với ngũ hành của quẻ gốc của chính nó
	const originElement = elementToCompareWith ? elementToCompareWith : (family!.originElement as ELEMENTS_TYPE)

	// tìm lục thân
	const upperRelative =
		upperBaguaCoverted?.elements.map((element) => {
			return relativeConverter({ originElement, element })
		}) || []
	const lowerRelative =
		lowerBaguaCoverted?.elements.map((element) => {
			return relativeConverter({ originElement, element })
		}) || []

	// tìm phục thần
	const hiddenRelative = findHiddenRelative({
		allRelative: [...upperRelative, ...lowerRelative],
		family,
		originHexagramOfFamilyRelatives: originHexagramOfFamilyOriginLement!,
		originHexagramOfFamilyElements: elementOfOriginHexagramOfFamily,
		sixCreatures: [
			...originHexagramOfFamily!.upperBaguaCoverted!.creatures,
			...originHexagramOfFamily!.lowerBaguaCoverted!.creatures,
		],
		tenBranches: [
			...(Array.from({ length: 3 }, (_) => originHexagramOfFamily!.upperBaguaCoverted!.branch) as string[]),
			...(Array.from({ length: 3 }, (_) => originHexagramOfFamily!.lowerBaguaCoverted!.branch) as string[]),
		],
	})

	return {
		upperBaguaCoverted,
		lowerBaguaCoverted,
		family,
		member,
		relatives: { upper: upperRelative, lower: lowerRelative },
		hiddenRelative: !elementToCompareWith ? hiddenRelative : null,
	}
}

export const transformToBaguasData = ({
	type,
	baguaIndex,
}: {
	type: 'UPPER' | 'LOWER'
	baguaIndex: number
}): HexgramBagua | null => {
	let bagua = null
	let baguaWithData = null

	switch (baguaIndex) {
		case 0 || 8:
			bagua = { value: [0, 0, 0], label: 'Địa', index: 8 }
			break
		case 1 || 9:
			bagua = { value: [1, 1, 1], label: 'Thiên', index: 1 }
			break
		case 2:
			bagua = { value: [0, 1, 1], label: 'Trạch', index: 2 }
			break
		case 3:
			bagua = { value: [1, 0, 1], label: 'Hỏa', index: 3 }
			break
		case 4:
			bagua = { value: [0, 0, 1], label: 'Lôi', index: 4 }
			break
		case 5:
			bagua = { value: [1, 1, 0], label: 'Phong', index: 5 }
			break
		case 6:
			bagua = { value: [0, 1, 0], label: 'Thủy', index: 6 }
			break
		case 7:
			bagua = { value: [1, 0, 0], label: 'Sơn', index: 7 }
			break

		default:
			bagua = { value: [1, 1, 1], label: 'Thiên', index: 1 }
			break
	}

	if (type === 'UPPER') {
		switch (baguaIndex) {
			case 0:
			case 8:
				baguaWithData = {
					...bagua,
					creatures: ['Dậu', 'Hợi', 'Sửu'],
					branch: 'Quý',
					elements: ['Mental', 'Water', 'Earth'] as ELEMENTS_TYPE[],
				}
				break
			case 1:
			case 9:
				baguaWithData = {
					...bagua,
					creatures: ['Tuất', 'Thân', 'Ngọ'],
					branch: 'Nhâm',
					elements: ['Earth', 'Mental', 'Fire'] as ELEMENTS_TYPE[],
				}
				break
			case 2:
				baguaWithData = {
					...bagua,
					creatures: ['Mùi', 'Dậu', 'Hợi'],
					branch: 'Đinh',
					elements: ['Earth', 'Mental', 'Water'] as ELEMENTS_TYPE[],
				}
				break
			case 3:
				baguaWithData = {
					...bagua,
					creatures: ['Tỵ', 'Mùi', 'Dậu'],
					branch: 'Kỹ',
					elements: ['Fire', 'Earth', 'Mental'] as ELEMENTS_TYPE[],
				}
				break
			case 4:
				baguaWithData = {
					...bagua,
					creatures: ['Tuất', 'Thân', 'Ngọ'],
					branch: 'Canh',
					elements: ['Earth', 'Mental', 'Fire'] as ELEMENTS_TYPE[],
				}
				break
			case 5:
				baguaWithData = {
					...bagua,
					creatures: ['Mão', 'Tỵ', 'Mùi'],
					branch: 'Tân',
					elements: ['Wood', 'Fire', 'Earth'] as ELEMENTS_TYPE[],
				}
				break
			case 6:
				baguaWithData = {
					...bagua,
					creatures: ['Tý', 'Tuất', 'Thân'],
					branch: 'Mậu',
					elements: ['Water', 'Earth', 'Mental'] as ELEMENTS_TYPE[],
				}
				break
			case 7:
				baguaWithData = {
					...bagua,
					creatures: ['Dần', 'Tý', 'Tuất'],
					branch: 'Bính',
					elements: ['Wood', 'Water', 'Earth'] as ELEMENTS_TYPE[],
				}
				break

			default:
				baguaWithData = {
					...bagua,
					creatures: ['Tuất', 'Thân', 'Ngọ'],
					branch: 'Nhâm',
					elements: ['Earth', 'Mental', 'Fire'] as ELEMENTS_TYPE[],
				}
				break
		}
	}

	if (type === 'LOWER') {
		switch (baguaIndex) {
			case 0:
			case 8:
				baguaWithData = {
					...bagua,
					creatures: ['Mão', 'Tỵ', 'Mùi'],
					branch: 'Ất',
					elements: ['Wood', 'Fire', 'Earth'] as ELEMENTS_TYPE[],
				}
				break
			case 1:
			case 9:
				baguaWithData = {
					...bagua,
					creatures: ['Thìn', 'Dần', 'Tý'],
					branch: 'Giáp',
					elements: ['Earth', 'Wood', 'Water'] as ELEMENTS_TYPE[],
				}
				break
			case 2:
				baguaWithData = {
					...bagua,
					creatures: ['Sửu', 'Mão', 'Tỵ'],
					branch: 'Đinh',
					elements: ['Earth', 'Wood', 'Fire'] as ELEMENTS_TYPE[],
				}
				break
			case 3:
				baguaWithData = {
					...bagua,
					creatures: ['Hợi', 'Sửu', 'Mão'],
					branch: 'Kỹ',
					elements: ['Water', 'Earth', 'Wood'] as ELEMENTS_TYPE[],
				}
				break
			case 4:
				baguaWithData = {
					...bagua,
					creatures: ['Thìn', 'Dần', 'Tý'],
					branch: 'Canh',
					elements: ['Earth', 'Wood', 'Water'] as ELEMENTS_TYPE[],
				}
				break
			case 5:
				baguaWithData = {
					...bagua,
					creatures: ['Dậu', 'Hợi', 'Sửu'],
					branch: 'Tân',
					elements: ['Mental', 'Water', 'Earth'] as ELEMENTS_TYPE[],
				}
				break
			case 6:
				baguaWithData = {
					...bagua,
					creatures: ['Ngọ', 'Thìn', 'Dần'],
					branch: 'Mậu',
					elements: ['Fire', 'Earth', 'Wood'] as ELEMENTS_TYPE[],
				}
				break
			case 7:
				baguaWithData = {
					...bagua,
					creatures: ['Thân', 'Ngọ', 'Thìn'],
					branch: 'Bính',
					elements: ['Mental', 'Fire', 'Earth'] as ELEMENTS_TYPE[],
				}
				break

			default:
				baguaWithData = {
					...bagua,
					creatures: ['Thìn', 'Dần', 'Tý'],
					branch: 'Nhâm',
					elements: ['Earth', 'Wood', 'Water'] as ELEMENTS_TYPE[],
				}
				break
		}
	}

	return baguaWithData
}

export const transformActiveBaguaToNewBagua = ({
	baguaIndex,
	actives,
}: {
	baguaIndex: number
	actives: number[]
}): {
	value: number[]
	label: string
	newIndex: number
} => {
	let bagua = null

	switch (baguaIndex) {
		case 0 || 8:
			bagua = { value: [0, 0, 0], label: 'Địa', index: 8 }
			break
		case 1 || 9:
			bagua = { value: [1, 1, 1], label: 'Thiên', index: 1 }
			break
		case 2:
			bagua = { value: [0, 1, 1], label: 'Trạch', index: 2 }
			break
		case 3:
			bagua = { value: [1, 0, 1], label: 'Hỏa', index: 3 }
			break
		case 4:
			bagua = { value: [0, 0, 1], label: 'Lôi', index: 4 }
			break
		case 5:
			bagua = { value: [1, 1, 0], label: 'Phong', index: 5 }
			break
		case 6:
			bagua = { value: [0, 1, 0], label: 'Thủy', index: 6 }
			break
		case 7:
			bagua = { value: [1, 0, 0], label: 'Sơn', index: 7 }
			break

		default:
			bagua = { value: [1, 1, 1], label: 'Thiên', index: 1 }
			break
	}

	if (actives.length > 0) {
		const indicesSet = new Set(actives)
		const newValue = bagua.value.map((value, index) => {
			return indicesSet.has(3 - index) ? 1 - value : value
		})

		switch (JSON.stringify(newValue)) {
			case '[0,0,0]':
				bagua = { value: [0, 0, 0], label: 'Địa', index: 8 }
				break
			case '[1,1,1]':
				bagua = { value: [1, 1, 1], label: 'Thiên', index: 1 }
				break
			case '[0,1,1]':
				bagua = { value: [0, 1, 1], label: 'Trạch', index: 2 }
				break
			case '[1,0,1]':
				bagua = { value: [1, 0, 1], label: 'Hỏa', index: 3 }
				break
			case '[0,0,1]':
				bagua = { value: [0, 0, 1], label: 'Lôi', index: 4 }
				break
			case '[1,1,0]':
				bagua = { value: [1, 1, 0], label: 'Phong', index: 5 }
				break
			case '[0,1,0]':
				bagua = { value: [0, 1, 0], label: 'Thủy', index: 6 }
				break
			case '[1,0,0]':
				bagua = { value: [1, 0, 0], label: 'Sơn', index: 7 }
				break

			default:
				bagua = { value: [1, 1, 1], label: 'Thiên', index: 1 }
				break
		}
	}

	return { ...bagua, newIndex: bagua.index }
}

/*
const hexagramFamilyArray = [
  [[1, 1], [1, 5], [1, 7], [1, 8], [5, 8], [7, 8], [3, 8], [3, 1]],
  [[2, 2], [2, 6], [2, 8], [2, 7], [6, 7], [8, 7], [4, 7], [4, 2]],
  [[3, 3], [3, 7], [3, 5], [3, 6], [7, 6], [5, 6], [1, 6], [1, 3]],
  [[4, 4], [4, 8], [4, 6], [4, 5], [8, 5], [6, 5], [2, 5], [2, 4]],
  [[5, 5], [5, 1], [5, 3], [5, 4], [1, 4], [3, 4], [7, 4], [7, 5]],
  [[6, 6], [6, 2], [6, 4], [6, 3], [2, 3], [4, 3], [8, 3], [8, 6]],
  [[7, 7], [7, 3], [7, 1], [7, 2], [3, 2], [1, 2], [5, 2], [5, 7]],
  [[8, 8], [8, 4], [8, 2], [8, 1], [4, 1], [2, 1], [6, 1], [6, 8]]
];
*/
const transformToHexagramsData = ({ upper, lower }: { upper: number; lower: number }) => {
	const inputUpperLower = [upper, lower]

	let hexagramData = null

	switch (JSON.stringify(inputUpperLower)) {
		case JSON.stringify([1, 1]):
			hexagramData = {
				order: [1, 1],
				name: 'Càn Vi Thiên',
				meaning: `Quẻ Thiên Vi Càn (hoặc Thuần Càn), hay được gọi là Quẻ Càn, là quẻ số 1 trong 64 Quẻ Kinh Dịch thuộc loại quẻ Đại Cát. Thuộc nhóm tượng quái Càn, Ngũ hành Kim. Bốn đức tính Nguyên, Hanh, Lợi, Trinh chỉ Càn và Khôn có nên chủ đạo làm điều thiện lớn. Quẻ Thuần Càn có 6 hào đều là hào dương. Hình dung tình trạng cương cường, sáng sủa cực độ. Dù mạnh mẽ nhưng không có tàn bạo, chính nghĩa của đạo Trời muôn vật che chở, giúp đời an dân. Việc nào xứng với việc đó, đều thuận.`,
			}
			break

		default:
			hexagramData = {}
			break
	}

	return hexagramData
}

export type ELEMENTS_TYPE = 'Water' | 'Fire' | 'Wood' | 'Mental' | 'Earth'
// export type HEXAGRAM_RELATIVE = 'Phụ mẫu' | 'Thế tài' | 'Tử tôn' | 'huynh đệ' | 'Quan quỷ'

const hexagramFamily = [
	{
		id: 1,
		baguaFamily: 'Càn',
		originElement: 'Mental',
		vietnameseElementName: 'Kim',
		members: [
			{ value: '[1, 1]', questionerIndex: 6, questionIndex: 3, hexagramName: 'Thuần Càn' },
			{ value: '[1, 5]', questionerIndex: 1, questionIndex: 4, hexagramName: 'Thiên Phong Cấu' },
			{ value: '[1, 7]', questionerIndex: 2, questionIndex: 5, hexagramName: 'Thiên Sơn Độn' },
			{ value: '[1, 8]', questionerIndex: 3, questionIndex: 6, hexagramName: 'Thiên Địa Bĩ' },
			{ value: '[5, 8]', questionerIndex: 4, questionIndex: 1, hexagramName: 'Phong Địa Quan' },
			{ value: '[7, 8]', questionerIndex: 5, questionIndex: 2, hexagramName: 'Sơn Địa Bác' },
			{ value: '[3, 8]', questionerIndex: 4, questionIndex: 1, wanderer: true, hexagramName: 'Hỏa Địa Tấn' },
			{
				value: '[3, 1]',
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Hỏa Thiên Đại Hữu',
			},
		],
		originRelatives: ['Phụ mẫu', 'Huynh đệ', 'Quan quỷ', 'Phụ mẫu', 'Thê tài', 'Tử tôn'],
	},
	{
		id: 2,
		baguaFamily: 'Đoài',
		originElement: 'Mental',
		vietnameseElementName: 'Kim',
		members: [
			{ value: '[2, 2]', questionerIndex: 6, questionIndex: 3, hexagramName: 'Thuần Đoài' },
			{ value: '[2, 6]', questionerIndex: 1, questionIndex: 4, hexagramName: 'Trạch Thủy Khốn' },
			{ value: '[2, 8]', questionerIndex: 2, questionIndex: 5, hexagramName: 'Trạch Địa Tụy' },
			{ value: '[2, 7]', questionerIndex: 3, questionIndex: 6, hexagramName: 'Trạch Sơn Hàm' },
			{ value: '[6, 7]', questionerIndex: 4, questionIndex: 1, hexagramName: 'Thủy Sơn Kiển' },
			{ value: '[8, 7]', questionerIndex: 5, questionIndex: 2, hexagramName: 'Địa Sơn Khiêm' },
			{ value: '[4, 7]', questionerIndex: 4, questionIndex: 1, wanderer: true, hexagramName: 'Lôi Sơn Tiểu Quá' },
			{
				value: '[4, 2]',
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Lôi Trạch Quy Muội',
			},
		],
		originRelatives: ['Phụ mẫu', 'Huynh đệ', 'Tử tôn', 'Phụ mẫu', 'Thê tài', 'Quan quỷ'],
	},
	{
		id: 3,
		baguaFamily: 'Ly',
		originElement: 'Fire',
		vietnameseElementName: 'Hỏa',
		members: [
			{ value: '[3, 3]', questionerIndex: 6, questionIndex: 3, hexagramName: 'Thuần Ly' },
			{ value: '[3, 7]', questionerIndex: 1, questionIndex: 4, hexagramName: 'Hỏa Sơn Lữ' },
			{ value: '[3, 5]', questionerIndex: 2, questionIndex: 5, hexagramName: 'Hỏa Phong Đỉnh' },
			{ value: '[3, 6]', questionerIndex: 3, questionIndex: 6, hexagramName: 'Hỏa Thủy Vị Tế' },
			{ value: '[7, 6]', questionerIndex: 4, questionIndex: 1, hexagramName: 'Sơn Thủy Mông' },
			{ value: '[5, 6]', questionerIndex: 5, questionIndex: 2, hexagramName: 'Phong Thủy Hoán' },
			{ value: '[1, 6]', questionerIndex: 4, questionIndex: 1, wanderer: true, hexagramName: 'Thiên Thủy Tụng' },
			{
				value: '[1, 3]',
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Thiên Hỏa Đồng Nhân',
			},
		],
		originRelatives: ['Huynh đệ', 'Tử tôn', 'Thê tài', 'Quan quỷ', 'Tử tôn', 'Phụ mẫu'],
	},
	{
		id: 4,
		baguaFamily: 'Chấn',
		originElement: 'Wood',
		vietnameseElementName: 'Mộc',
		members: [
			{ value: '[4, 4]', questionerIndex: 6, questionIndex: 3, hexagramName: 'Thuần Chấn' },
			{ value: '[4, 8]', questionerIndex: 1, questionIndex: 4, hexagramName: 'Lôi Địa Dự' },
			{ value: '[4, 6]', questionerIndex: 2, questionIndex: 5, hexagramName: 'Lôi Thủy Giải' },
			{ value: '[4, 5]', questionerIndex: 3, questionIndex: 6, hexagramName: 'Lôi Phong Hằng' },
			{ value: '[8, 5]', questionerIndex: 4, questionIndex: 1, hexagramName: 'Địa Phong Thăng' },
			{ value: '[6, 5]', questionerIndex: 5, questionIndex: 2, hexagramName: 'Thủy Phong Tỉnh' },
			{
				value: '[2, 5]',
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Trạch Phong Đại Quá',
			},
			{ value: '[2, 4]', questionerIndex: 3, questionIndex: 6, returner: true, hexagramName: 'Trạch Lôi Tùy' },
		],
		originRelatives: ['Thê tài', 'Quan quỷ', 'Tử tôn', 'Thê tài', 'Huynh đệ', 'Phụ mẫu'],
	},
	{
		id: 5,
		baguaFamily: 'Tốn',
		originElement: 'Wood',
		vietnameseElementName: 'Mộc',
		members: [
			{ value: '[5, 5]', questionerIndex: 6, questionIndex: 3, hexagramName: 'Thuần Tốn' },
			{ value: '[5, 1]', questionerIndex: 1, questionIndex: 4, hexagramName: 'Phong Thiên Tiểu Súc' },
			{ value: '[5, 3]', questionerIndex: 2, questionIndex: 5, hexagramName: 'Phong Hỏa Gia Nhân' },
			{ value: '[5, 4]', questionerIndex: 3, questionIndex: 6, hexagramName: 'Phong Lôi Ích' },
			{ value: '[1, 4]', questionerIndex: 4, questionIndex: 1, hexagramName: 'Thiên Lôi Vô Vọng' },
			{ value: '[3, 4]', questionerIndex: 5, questionIndex: 2, hexagramName: 'Hỏa Lôi Phệ Hạp' },
			{ value: '[7, 4]', questionerIndex: 4, questionIndex: 1, wanderer: true, hexagramName: 'Sơn Lôi Di' },
			{ value: '[7, 5]', questionerIndex: 3, questionIndex: 6, returner: true, hexagramName: 'Sơn Phong Cổ' },
		],
		originRelatives: ['Huynh đệ', 'Tử tôn', 'Thê tài', 'Quan quỷ', 'Phụ mẫu', 'Thê tài'],
	},
	{
		id: 6,
		baguaFamily: 'Khảm',
		originElement: 'Water',
		vietnameseElementName: 'Thủy',
		members: [
			{ value: '[6, 6]', questionerIndex: 6, questionIndex: 3, hexagramName: 'Thuần Khảm' },
			{ value: '[6, 2]', questionerIndex: 1, questionIndex: 4, hexagramName: 'Thủy Trạch Tiết' },
			{ value: '[6, 4]', questionerIndex: 2, questionIndex: 5, hexagramName: 'Thủy Lôi Truân' },
			{ value: '[6, 3]', questionerIndex: 3, questionIndex: 6, hexagramName: 'Thủy Hỏa Ký Tế' },
			{ value: '[2, 3]', questionerIndex: 4, questionIndex: 1, hexagramName: 'Trạch Hỏa Cách' },
			{ value: '[4, 3]', questionerIndex: 5, questionIndex: 2, hexagramName: 'Lôi Hỏa Phong' },
			{ value: '[8, 3]', questionerIndex: 4, questionIndex: 1, wanderer: true, hexagramName: 'Địa Hỏa Minh Di' },
			{ value: '[8, 6]', questionerIndex: 3, questionIndex: 6, returner: true, hexagramName: 'Địa Thủy Sư' },
		],
		originRelatives: ['Huynh đệ', 'Quan quỷ', 'Phụ mẫu', 'Thê tài', 'Quan quỷ', 'Tử tôn'],
	},
	{
		id: 7,
		baguaFamily: 'Cấn',
		originElement: 'Earth',
		vietnameseElementName: 'Thổ',
		members: [
			{ value: '[7, 7]', questionerIndex: 6, questionIndex: 3, hexagramName: 'Thuần Cấn' },
			{ value: '[7, 3]', questionerIndex: 1, questionIndex: 4, hexagramName: 'Sơn Hỏa Bí' },
			{ value: '[7, 1]', questionerIndex: 2, questionIndex: 5, hexagramName: 'Sơn Thiên Đại Súc' },
			{ value: '[7, 2]', questionerIndex: 3, questionIndex: 6, hexagramName: 'Sơn Trạch Tổn' },
			{ value: '[3, 2]', questionerIndex: 4, questionIndex: 1, hexagramName: 'Hỏa Trạch Khuê' },
			{ value: '[1, 2]', questionerIndex: 5, questionIndex: 2, hexagramName: 'Thiên Trạch Cách' },
			{
				value: '[5, 2]',
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Phong Trạch Trung Phu',
			},
			{ value: '[5, 7]', questionerIndex: 3, questionIndex: 6, returner: true, hexagramName: 'Phong Sơn Tiệm' },
		],
		originRelatives: ['Quan quỷ', 'Thê tài', 'Huynh đệ', 'Tử tôn', 'Phụ mẫu', 'Huynh đệ'],
	},
	{
		id: 8,
		baguaFamily: 'Khôn',
		originElement: 'Earth',
		vietnameseElementName: 'Thổ',
		members: [
			{ value: '[8, 8]', questionerIndex: 6, questionIndex: 3, hexagramName: 'Thuần Khôn' },
			{ value: '[8, 4]', questionerIndex: 1, questionIndex: 4, hexagramName: 'Địa Lôi Phục' },
			{ value: '[8, 2]', questionerIndex: 2, questionIndex: 5, hexagramName: 'Địa Trạch Lâm' },
			{ value: '[8, 1]', questionerIndex: 3, questionIndex: 6, hexagramName: 'Địa Thiên Thái' },
			{ value: '[4, 1]', questionerIndex: 4, questionIndex: 1, hexagramName: 'Lôi Thiên Đại Tráng' },
			{ value: '[2, 1]', questionerIndex: 5, questionIndex: 2, hexagramName: 'Trạch Thiên Quải' },
			{ value: '[6, 1]', questionerIndex: 4, questionIndex: 1, wanderer: true, hexagramName: 'Thủy Thiên Nhu' },
			{ value: '[6, 8]', questionerIndex: 3, questionIndex: 6, returner: true, hexagramName: 'Thủy Địa Tỷ' },
		],
		originRelatives: ['Tử tôn', 'Thê tài', 'Huynh đệ', 'Quan quỷ', 'Phụ mẫu', 'Huynh đệ'],
	},
]

const relativeConverter = ({ originElement, element }: { originElement: ELEMENTS_TYPE; element: ELEMENTS_TYPE }) => {
	let relative = null

	switch (originElement) {
		case 'Water':
			switch (element) {
				case 'Water':
					relative = 'Huynh đệ'
					break
				case 'Fire':
					relative = 'Thê tài'
					break
				case 'Wood':
					relative = 'Tử tôn'
					break
				case 'Mental':
					relative = 'Phụ mẫu'
					break
				case 'Earth':
					relative = 'Quan quỷ'
					break
				default:
					relative = 'Huynh đệ'
					break
			}
			break

		case 'Fire':
			switch (element) {
				case 'Water':
					relative = 'Quan quỷ'
					break
				case 'Fire':
					relative = 'Huynh đệ'
					break
				case 'Wood':
					relative = 'Phụ mẫu'
					break
				case 'Mental':
					relative = 'Thê tài'
					break
				case 'Earth':
					relative = 'Tử tôn'
					break
				default:
					relative = 'Huynh đệ'
					break
			}
			break

		case 'Wood':
			switch (element) {
				case 'Water':
					relative = 'Phụ mẫu'
					break
				case 'Fire':
					relative = 'Tử tôn'
					break
				case 'Wood':
					relative = 'Huynh đệ'
					break
				case 'Mental':
					relative = 'Quan quỷ'
					break
				case 'Earth':
					relative = 'Thê tài'
					break
				default:
					relative = 'Huynh đệ'
					break
			}
			break

		case 'Mental':
			switch (element) {
				case 'Water':
					relative = 'Tử tôn'
					break
				case 'Fire':
					relative = 'Quan quỷ'
					break
				case 'Wood':
					relative = 'Thê tài'
					break
				case 'Mental':
					relative = 'Huynh đệ'
					break
				case 'Earth':
					relative = 'Phụ mẫu'
					break
				default:
					relative = 'Huynh đệ'
					break
			}
			break

		case 'Earth':
			switch (element) {
				case 'Water':
					relative = 'Thê tài'
					break
				case 'Fire':
					relative = 'Phụ mẫu'
					break
				case 'Wood':
					relative = 'Quan quỷ'
					break
				case 'Mental':
					relative = 'Tử tôn'
					break
				case 'Earth':
					relative = 'Huynh đệ'
					break
				default:
					relative = 'Huynh đệ'
					break
			}
			break

		default:
			break
	}

	return relative
}

const findHiddenRelative = ({
	allRelative,
	family,
	originHexagramOfFamilyRelatives,
	originHexagramOfFamilyElements,
	sixCreatures,
	tenBranches,
}: {
	allRelative: (string | null)[]
	family: (typeof hexagramFamily)[number] | undefined
	originHexagramOfFamilyRelatives: (string | null)[]
	originHexagramOfFamilyElements: ELEMENTS_TYPE[]
	sixCreatures: (string | null)[]
	tenBranches: (string | null)[]
}) => {
	const hiddenRelative: string[] = []
	const indexes: number[] = []
	const elements: string[] = []
	const creatures: string[] = []
	const branches: string[] = []

	if (!allRelative.some((r) => r === 'Phụ mẫu')) {
		family?.originRelatives.map((r, i) => {
			if (r === 'Phụ mẫu') {
				hiddenRelative.push(r)
				indexes.push(i)
				elements.push(originHexagramOfFamilyElements[i] || '')
				creatures.push(sixCreatures[i] || '')
				branches.push(tenBranches[i] || '')
			}
		})
	}
	if (!allRelative.some((r) => r === 'Thê tài')) {
		family?.originRelatives.map((r, i) => {
			if (r === 'Thê tài') {
				hiddenRelative.push(r)
				indexes.push(i)
				elements.push(originHexagramOfFamilyElements[i] || '')
				creatures.push(sixCreatures[i] || '')
				branches.push(tenBranches[i] || '')
			}
		})
	}
	if (!allRelative.some((r) => r === 'Tử tôn')) {
		family?.originRelatives.map((r, i) => {
			if (r === 'Tử tôn') {
				hiddenRelative.push(r)
				indexes.push(i)
				elements.push(originHexagramOfFamilyElements[i] || '')
				creatures.push(sixCreatures[i] || '')
				branches.push(tenBranches[i] || '')
			}
		})
	}
	if (!allRelative.some((r) => r === 'Huynh đệ')) {
		family?.originRelatives.map((r, i) => {
			if (r === 'Huynh đệ') {
				hiddenRelative.push(r)
				indexes.push(i)
				elements.push(originHexagramOfFamilyElements[i] || '')
				creatures.push(sixCreatures[i] || '')
				branches.push(tenBranches[i] || '')
			}
		})
	}
	if (!allRelative.some((r) => r === 'Quan quỷ')) {
		family?.originRelatives.map((r, i) => {
			if (r === 'Quan quỷ') {
				hiddenRelative.push(r)
				indexes.push(i)
				elements.push(originHexagramOfFamilyElements[i] || '')
				creatures.push(sixCreatures[i] || '')
				branches.push(tenBranches[i] || '')
			}
		})
	}

	return { indexes, hiddenRelative, elements, creatures, branches }
}
