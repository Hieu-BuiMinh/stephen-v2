export const HeavenlyStems = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'] as const
export type THeavenlyStems = (typeof HeavenlyStems)[number]
export enum EHeavenlyStems {
	'Giáp' = 1,
	'Ất' = 2,
	'Bính' = 3,
	'Đinh' = 4,
	'Mậu' = 5,
	'Kỷ' = 6,
	'Canh' = 7,
	'Tân' = 8,
	'Nhâm' = 9,
	'Quý' = 10,
}

export const SixSymbolicAminals = ['Thanh Long', 'Chu Tước', 'Câu Trần', 'Đằng Xà', 'Bạch Hổ', 'Huyển Vũ'] as const
export type TSixSymbolicAminals = (typeof SixSymbolicAminals)[number]
export enum ESixSymbolicAminals {
	'Thanh Long' = 1,
	'Chu Tước' = 2,
	'Câu Trần' = 3,
	'Đằng Xà' = 4,
	'Bạch Hổ' = 5,
	'Huyển Vũ' = 6,
}

// ===== enums / primitives =====
export type TBaguaId = 9 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 0
export enum TBagua {
	'Càn' = 1,
	'Đoài' = 2,
	'Ly' = 3,
	'Chấn' = 4,
	'Tốn' = 5,
	'Khảm' = 6,
	'Cấn' = 7,
	'Khôn' = 8,
}

export type TBaguaFamily = 'Càn' | 'Đoài' | 'Ly' | 'Chấn' | 'Tốn' | 'Khảm' | 'Cấn' | 'Khôn'

export type TElementType = 'Metal' | 'Wood' | 'Water' | 'Fire' | 'Earth'
export enum ElementType {
	'Water' = 1,
	'Fire' = 2,
	'Wood' = 3,
	'Metal' = 4,
	'Earth' = 5,
}
export type TElementIndex = 1 | 2 | 3 | 4 | 5
export type TElemVi = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ'
export enum ElemVi {
	'Thủy' = 1,
	'Hỏa' = 2,
	'Mộc' = 3,
	'Kim' = 4,
	'Thổ' = 5,
}

// 6 hào: 0 = âm, 1 = dương
export type TYinYang = 0 | 1

// Địa chi: Tý=1 ... Hợi=12
export type TEarthlyBranchIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export enum EarthlyBranch {
	'Tý' = 1,
	'Sửu' = 2,
	'Dần' = 3,
	'Mão' = 4,
	'Thìn' = 5,
	'Tỵ' = 6,
	'Ngọ' = 7,
	'Mùi' = 8,
	'Thân' = 9,
	'Dậu' = 10,
	'Tuất' = 11,
	'Hợi' = 12,
}
export enum EarthlyBranchElementVi {
	'Tý' = ElementType.Water,
	'Sửu' = ElementType.Earth,
	'Dần' = ElementType.Wood,
	'Mão' = ElementType.Wood,
	'Thìn' = ElementType.Earth,
	'Tỵ' = ElementType.Fire,
	'Ngọ' = ElementType.Fire,
	'Mùi' = ElementType.Earth,
	'Thân' = ElementType.Metal,
	'Dậu' = ElementType.Metal,
	'Tuất' = ElementType.Earth,
	'Hợi' = ElementType.Water,
}

// lục thân: bạn đang map bằng số 1..5 và có thể null
export type TRelativeIndex = 1 | 2 | 3 | 4 | 5
export enum Relative {
	'Phụ mẫu' = 1,
	'Huynh đệ' = 2,
	'Tử tôn' = 3,
	'Thê tài' = 4,
	'Quan quỷ' = 5,
}

// value là cặp [thượng quái, hạ quái] theo id 1..8
export type THexagramValue = [TBaguaId, TBaguaId]

// ===== element model (compat: có nơi string, có nơi object) =====
export type TElementObj = { type: TElementType; vi: TElemVi; en: TElementType }
export type TOriginElement = TElementType | TElementObj

// ===== member =====
export interface IHexagramMember {
	value: THexagramValue
	questionerIndex: number
	questionIndex: number
	hexagramName: string

	yinyangIndexs: [TYinYang, TYinYang, TYinYang, TYinYang, TYinYang, TYinYang]
	hexagramRelatives: [TRelativeIndex, TRelativeIndex, TRelativeIndex, TRelativeIndex, TRelativeIndex, TRelativeIndex]
	hexagramEarthlyBranches: [
		TEarthlyBranchIndex,
		TEarthlyBranchIndex,
		TEarthlyBranchIndex,
		TEarthlyBranchIndex,
		TEarthlyBranchIndex,
		TEarthlyBranchIndex,
	]

	// optional flags
	wanderer?: boolean
	returner?: boolean

	// phục thần (có thể null)
	hexagramHiddenRelatives?: [
		TRelativeIndex | null,
		TRelativeIndex | null,
		TRelativeIndex | null,
		TRelativeIndex | null,
		TRelativeIndex | null,
		TRelativeIndex | null,
	]
	hexagramHiddenEarthlyBranches?: [
		TEarthlyBranchIndex | null,
		TEarthlyBranchIndex | null,
		TEarthlyBranchIndex | null,
		TEarthlyBranchIndex | null,
		TEarthlyBranchIndex | null,
		TEarthlyBranchIndex | null,
	]
	indexesElements?: [TElementIndex, TElementIndex, TElementIndex, TElementIndex, TElementIndex, TElementIndex]
}

// ===== family =====
export interface IHexagramFamily {
	id: TBaguaId
	baguaFamily: TBaguaFamily
	originElement: TOriginElement
	vietnameseElementName?: TElemVi
	members: IHexagramMember[]
	originRelatives: [string, string, string, string, string, string]
	indexesElements?: [TElementIndex, TElementIndex, TElementIndex, TElementIndex, TElementIndex, TElementIndex]
	indexesElement?: TElementIndex
}
