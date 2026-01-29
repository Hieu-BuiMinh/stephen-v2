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

export type TElementType = 'Mental' | 'Wood' | 'Water' | 'Fire' | 'Earth'
export enum ElementType {
	'Water' = 1,
	'Fire' = 2,
	'Wood' = 3,
	'Mental' = 4,
	'Earth' = 5,
}
export type TElemVi = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ'

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
	'Thân' = ElementType.Mental,
	'Dậu' = ElementType.Mental,
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
}

// ===== family =====
export interface IHexagramFamily {
	id: TBaguaId
	baguaFamily: TBaguaFamily
	originElement: TOriginElement
	vietnameseElementName?: TElemVi // (một số item của bạn chưa có field này)
	members: IHexagramMember[]
	originRelatives: [string, string, string, string, string, string]
	indexesElements?: [ElementType, ElementType, ElementType, ElementType, ElementType, ElementType]
}
