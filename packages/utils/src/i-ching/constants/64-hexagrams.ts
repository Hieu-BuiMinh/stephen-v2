import type { IHexagramFamily } from '../i-ching.dto'

const hexagramFamily: IHexagramFamily[] = [
	{
		id: 1,
		baguaFamily: 'Càn',
		originElement: { type: 'Metal', vi: 'Kim', en: 'Metal' },
		indexesElement: 4,
		members: [
			{
				value: [1, 1],
				questionerIndex: 6,
				questionIndex: 3,
				hexagramName: 'Thuần Càn',
				yinyangIndexs: [1, 1, 1, 1, 1, 1],
				hexagramRelatives: [1, 2, 5, 1, 4, 3], // Phụ mẫu, Huynh đệ, Tử tôn, Thế tài, Quan quỷ
				hexagramEarthlyBranches: [11, 9, 7, 5, 3, 1], // Tuất, Thân, Ngọ, Thìn, Dần, Tý
				indexesElements: [5, 4, 2, 5, 3, 1],
			},
			{
				value: [1, 5],
				questionerIndex: 1,
				questionIndex: 4,
				hexagramName: 'Thiên Phong Cấu',
				yinyangIndexs: [1, 1, 1, 1, 1, 0],
				hexagramRelatives: [1, 2, 5, 2, 3, 1], // Phụ mẫu, Huynh đệ, Quan quỷ, Huynh đệ, Tử tôn, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 10, 12, 2], // Tuất, Thân, Ngọ, Dậu, Hợi, Sửu
				indexesElements: [5, 4, 2, 4, 1, 5],
				hexagramHiddenRelatives: [null, null, null, null, 4, null], // Thế tài
				hexagramHiddenEarthlyBranches: [null, null, null, null, 3, null], // Dần
			},
			{
				value: [1, 7],
				questionerIndex: 2,
				questionIndex: 5,
				hexagramName: 'Thiên Sơn Độn',
				yinyangIndexs: [1, 1, 1, 0, 0, 1],
				hexagramRelatives: [1, 2, 5, 2, 5, 1], // Phụ mẫu, Huynh đệ, Quan quỷ, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 9, 7, 5], // Tuất, Thân, Ngọ, Thân, Ngọ, Thìn
				indexesElements: [5, 4, 2, 4, 2, 5],
				hexagramHiddenRelatives: [null, null, null, null, 4, 3], // (index 4) Thê tài, (index 5) Tử tôn
				hexagramHiddenEarthlyBranches: [null, null, null, null, 3, 1], // (index 4) Dần, (index 5) Tý
			},
			{
				value: [1, 8],
				questionerIndex: 3,
				questionIndex: 6,
				hexagramName: 'Thiên Địa Bĩ',
				yinyangIndexs: [1, 1, 1, 0, 0, 0],
				hexagramRelatives: [1, 2, 5, 4, 5, 1], // Phụ mẫu, Huynh đệ, Quan quỷ, Thê tài, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 4, 6, 8], // Tuất, Thân, Ngọ, Mão, Tỵ, Mùi
				indexesElements: [5, 4, 2, 3, 2, 5],
				hexagramHiddenRelatives: [null, null, null, null, null, 3], // (index 5) Tử tôn
				hexagramHiddenEarthlyBranches: [null, null, null, null, null, 1], // (index 5) Tý
			},
			{
				value: [5, 8],
				questionerIndex: 4,
				questionIndex: 1,
				hexagramName: 'Phong Địa Quan',
				yinyangIndexs: [1, 1, 0, 0, 0, 0],
				hexagramRelatives: [4, 5, 1, 4, 5, 1], // Thê tài, Quan quỷ, Phụ mẫu, Thê tài, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [4, 6, 8, 4, 6, 8], // Mão, Tỵ, Mùi, Mão, Tỵ, Mùi
				indexesElements: [3, 2, 5, 3, 2, 5],

				hexagramHiddenRelatives: [null, 2, null, null, null, 3], // (index 1) Huynh đệ, (index 5) Tử tôn
				hexagramHiddenEarthlyBranches: [null, 9, null, null, null, 1], // (index 1) Thân, (index 5) Tý
			},
			{
				value: [7, 8],
				questionerIndex: 5,
				questionIndex: 2,
				hexagramName: 'Sơn Địa Bác',
				yinyangIndexs: [1, 0, 0, 0, 0, 0],
				hexagramRelatives: [4, 3, 1, 4, 5, 1], // Thê tài, Tử tôn, Phụ mẫu, Thê tài, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [3, 1, 11, 4, 6, 8], // Dần, Tý, Tuất, Mão, Tỵ, Mùi
				indexesElements: [3, 1, 5, 3, 2, 5],

				hexagramHiddenRelatives: [null, 2, null, null, null, null], // (index 1) Huynh đệ
				hexagramHiddenEarthlyBranches: [null, 9, null, null, null, null], // (index 1) Thân
			},
			{
				value: [3, 8],
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Hỏa Địa Tấn',
				yinyangIndexs: [1, 0, 1, 0, 0, 0],
				hexagramRelatives: [5, 1, 2, 4, 5, 1], // Quan quỷ, Phụ mẫu, Huynh đệ, Thê tài, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [6, 8, 10, 4, 6, 8], // Tỵ, Mùi, Dậu, Mão, Tỵ, Mùi
				indexesElements: [2, 5, 4, 3, 2, 5],
				hexagramHiddenRelatives: [null, null, null, null, null, 3], // (index 5) Tử tôn
				hexagramHiddenEarthlyBranches: [null, null, null, null, null, 1], // (index 5) Tý
			},
			{
				value: [3, 1],
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Hỏa Thiên Đại Hữu',
				yinyangIndexs: [1, 0, 1, 1, 1, 1],
				hexagramRelatives: [5, 1, 2, 1, 4, 3], // Quan quỷ, Phụ mẫu, Huynh đệ, Phụ mẫu, Thê tài, Tử tôn
				hexagramEarthlyBranches: [6, 8, 10, 5, 3, 1], // Tỵ, Mùi, Dậu, Thìn, Dần, Tý
				indexesElements: [2, 5, 4, 5, 3, 1],
			},
		],
		originRelatives: ['Phụ mẫu', 'Huynh đệ', 'Quan quỷ', 'Phụ mẫu', 'Thê tài', 'Tử tôn'],
	},
	{
		id: 2,
		baguaFamily: 'Đoài',
		originElement: 'Metal',
		vietnameseElementName: 'Kim',
		indexesElement: 4,
		members: [
			{
				value: [2, 2],
				questionerIndex: 6,
				questionIndex: 3,
				hexagramName: 'Thuần Đoài',
				yinyangIndexs: [0, 1, 1, 0, 1, 1],
				hexagramRelatives: [1, 2, 3, 1, 4, 5], // Phụ mẫu, Huynh đệ, Tử tôn, Phụ mẫu, Thê tài, Quan quỷ
				hexagramEarthlyBranches: [8, 10, 12, 2, 4, 6], // Mùi, Dậu, Hợi, Sửu, Mão, Tỵ
				indexesElements: [5, 4, 1, 5, 3, 2],
			},
			{
				value: [2, 6],
				questionerIndex: 1,
				questionIndex: 4,
				hexagramName: 'Trạch Thủy Khốn',
				yinyangIndexs: [0, 1, 1, 0, 1, 0],
				hexagramRelatives: [1, 2, 3, 5, 1, 4], // Phụ mẫu, Huynh đệ, Tử tôn, Quan quỷ, Phụ mẫu, Thê tài
				hexagramEarthlyBranches: [8, 10, 12, 7, 5, 3], // Mùi, Dậu, Hợi, Ngọ, Thìn, Dần
				indexesElements: [5, 4, 1, 2, 5, 3],
			},
			{
				value: [2, 8],
				questionerIndex: 2,
				questionIndex: 5,
				hexagramName: 'Trạch Địa Tụy',
				yinyangIndexs: [0, 1, 1, 0, 0, 0],
				hexagramRelatives: [1, 2, 3, 4, 5, 1], // Phụ mẫu, Huynh đệ, Tử tôn, Thê tài, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [8, 10, 12, 4, 6, 8], // Mùi, Dậu, Hợi, Mão, Tỵ, Mùi
				indexesElements: [5, 4, 1, 3, 2, 5],
			},
			{
				value: [2, 7],
				questionerIndex: 3,
				questionIndex: 6,
				hexagramName: 'Trạch Sơn Hàm',
				yinyangIndexs: [0, 1, 1, 1, 0, 0],
				hexagramRelatives: [1, 2, 3, 2, 5, 1], // Phụ mẫu, Huynh đệ, Tử tôn, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [8, 10, 12, 9, 7, 5], // Mùi, Dậu, Hợi, Thân, Ngọ, Thìn
				indexesElements: [5, 4, 1, 4, 2, 5],

				hexagramHiddenRelatives: [null, null, null, null, 4, null], // (index 4) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, null, null, 4, null], // (index 4) Mão
			},
			{
				value: [6, 7],
				questionerIndex: 4,
				questionIndex: 1,
				hexagramName: 'Thủy Sơn Kiển',
				yinyangIndexs: [0, 1, 0, 1, 0, 0],
				hexagramRelatives: [3, 1, 2, 2, 5, 1], // Tử tôn, Phụ mẫu, Huynh đệ, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [1, 11, 9, 9, 7, 5], // Tý, Tuất, Thân, Thân, Ngọ, Thìn
				indexesElements: [1, 5, 4, 4, 2, 5],

				hexagramHiddenRelatives: [null, null, null, null, 4, null], // (index 4) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, null, null, 4, null], // (index 4) Mão
			},
			{
				value: [8, 7],
				questionerIndex: 5,
				questionIndex: 2,
				hexagramName: 'Địa Sơn Khiêm',
				yinyangIndexs: [0, 0, 0, 1, 0, 0],
				hexagramRelatives: [2, 3, 1, 2, 5, 1], // Huynh đệ, Tử tôn, Phụ mẫu, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [10, 12, 2, 9, 7, 5], // Dậu, Hợi, Sửu, Thân, Ngọ, Thìn
				indexesElements: [4, 1, 5, 4, 2, 5],

				hexagramHiddenRelatives: [null, null, null, null, 4, null], // (index 4) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, null, null, 4, null], // (index 4) Mão
			},
			{
				value: [4, 7],
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Lôi Sơn Tiểu Quá',
				yinyangIndexs: [0, 0, 1, 1, 0, 0],
				hexagramRelatives: [1, 2, 5, 2, 5, 1], // Phụ mẫu, Huynh đệ, Quan quỷ, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 9, 7, 5], // Tuất, Thân, Ngọ, Thân, Ngọ, Thìn
				indexesElements: [5, 4, 2, 4, 2, 5],

				hexagramHiddenRelatives: [null, null, 3, null, 4, null], // (index 2) Tử tôn, (index 4) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, 12, null, 4, null], // (index 2) Hợi, (index 4) Mão
			},
			{
				value: [4, 2],
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Lôi Trạch Quy Muội',
				yinyangIndexs: [0, 0, 1, 0, 1, 1],
				hexagramRelatives: [1, 2, 5, 1, 4, 5], // Phụ mẫu, Huynh đệ, Quan quỷ, Phụ mẫu, Thê tài, Quan quỷ
				hexagramEarthlyBranches: [11, 9, 7, 2, 4, 6], // Tuất, Thân, Ngọ, Sửu, Mão, Tỵ
				indexesElements: [5, 4, 2, 5, 3, 2],

				hexagramHiddenRelatives: [null, null, 3, null, null, null], // (index 2) Tử tôn
				hexagramHiddenEarthlyBranches: [null, null, 12, null, null, null], // (index 2) Hợi
			},
		],

		originRelatives: ['Phụ mẫu', 'Huynh đệ', 'Tử tôn', 'Phụ mẫu', 'Thê tài', 'Quan quỷ'],
	},
	{
		id: 3,
		baguaFamily: 'Ly',
		originElement: 'Fire',
		vietnameseElementName: 'Hỏa',
		indexesElement: 2,
		members: [
			{
				value: [3, 3],
				questionerIndex: 6,
				questionIndex: 3,
				hexagramName: 'Thuần Ly',
				yinyangIndexs: [1, 0, 1, 1, 0, 1],
				hexagramRelatives: [2, 3, 4, 5, 3, 1], // Huynh đệ, Tử tôn, Thê tài, Quan quỷ, Tử tôn, Phụ mẫu
				hexagramEarthlyBranches: [6, 8, 10, 12, 2, 4], // Tỵ, Mùi, Dậu, Hợi, Sửu, Mão
				indexesElements: [2, 5, 4, 1, 5, 3],
			},
			{
				value: [3, 7],
				questionerIndex: 1,
				questionIndex: 4,
				hexagramName: 'Hỏa Sơn Lữ',
				yinyangIndexs: [1, 0, 1, 1, 0, 0],
				hexagramRelatives: [2, 3, 4, 4, 2, 3], // Huynh đệ, Tử tôn, Thê tài, Thê tài, Huynh đệ, Tử tôn
				hexagramEarthlyBranches: [6, 8, 10, 9, 7, 5], // Tỵ, Mùi, Dậu, Thân, Ngọ, Thìn
				indexesElements: [2, 5, 4, 4, 2, 5],
				hexagramHiddenRelatives: [null, null, null, 5, null, 1], // (index 3) Quan quỷ, (index 5) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, 12, null, 4], // (index 3) Hợi, (index 5) Mão
			},
			{
				value: [3, 5],
				questionerIndex: 2,
				questionIndex: 5,
				hexagramName: 'Hỏa Phong Đỉnh',
				yinyangIndexs: [1, 0, 1, 1, 1, 0],
				hexagramRelatives: [2, 3, 4, 4, 5, 3], // Huynh đệ, Tử tôn, Thê tài, Thê tài, Quan quỷ, Tử tôn
				hexagramEarthlyBranches: [6, 8, 10, 10, 12, 2], // Tỵ, Mùi, Dậu, Dậu, Hợi, Sửu
				indexesElements: [2, 5, 4, 4, 1, 5],
				hexagramHiddenRelatives: [null, null, null, null, null, 1], // (index 5) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, null, null, 4], // (index 5) Mão
			},
			{
				value: [3, 6],
				questionerIndex: 3,
				questionIndex: 6,
				hexagramName: 'Hỏa Thủy Vị Tế',
				yinyangIndexs: [1, 0, 1, 0, 1, 0],
				hexagramRelatives: [2, 3, 4, 2, 3, 1], // Huynh đệ, Tử tôn, Thê tài, Huynh đệ, Tử tôn, Phụ mẫu
				hexagramEarthlyBranches: [6, 8, 10, 7, 5, 3], // Tỵ, Mùi, Dậu, Ngọ, Thìn, Dần
				indexesElements: [2, 5, 4, 2, 5, 3],
				hexagramHiddenRelatives: [null, null, null, 5, null, null], // (index 3) Quan quỷ
				hexagramHiddenEarthlyBranches: [null, null, null, 12, null, null], // (index 3) Hợi
			},
			{
				value: [7, 6],
				questionerIndex: 4,
				questionIndex: 1,
				hexagramName: 'Sơn Thủy Mông',
				yinyangIndexs: [1, 0, 0, 0, 1, 0],
				hexagramRelatives: [1, 5, 3, 2, 3, 1], // Phụ mẫu, Quan quỷ, Tử tôn, Huynh đệ, Tử tôn, Phụ mẫu
				hexagramEarthlyBranches: [3, 1, 11, 7, 5, 3], // Dần, Tý, Tuất, Ngọ, Thìn, Dần
				indexesElements: [3, 1, 5, 2, 5, 3],
				hexagramHiddenRelatives: [null, null, 4, null, null, null], // (index 2) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, 10, null, null, null], // (index 2) Dậu
			},
			{
				value: [5, 6],
				questionerIndex: 5,
				questionIndex: 2,
				hexagramName: 'Phong Thủy Hoán',
				yinyangIndexs: [1, 1, 0, 0, 1, 0],
				hexagramRelatives: [1, 2, 3, 2, 3, 1], // Phụ mẫu, Huynh đệ, Tử tôn, Huynh đệ, Tử tôn, Phụ mẫu
				hexagramEarthlyBranches: [4, 6, 8, 7, 5, 3], // Mão, Tỵ, Mùi, Ngọ, Thìn, Dần
				indexesElements: [3, 2, 5, 2, 5, 3],
				hexagramHiddenRelatives: [null, null, 4, 5, null, null], // (index 2) Thê tài, (index 3) Quan quỷ
				hexagramHiddenEarthlyBranches: [null, null, 10, 12, null, null], // (index 2) Dậu, (index 3) Hợi
			},
			{
				value: [1, 6],
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Thiên Thủy Tụng',
				yinyangIndexs: [1, 1, 1, 0, 1, 0],
				hexagramRelatives: [3, 4, 2, 2, 3, 1], // Tử tôn, Thê tài, Huynh đệ, Huynh đệ, Tử tôn, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 7, 5, 3], // Tuất, Thân, Ngọ, Ngọ, Thìn, Dần
				indexesElements: [5, 4, 2, 2, 5, 3],
				hexagramHiddenRelatives: [null, null, null, 5, null, null], // (index 3) Quan quỷ
				hexagramHiddenEarthlyBranches: [null, null, null, 12, null, null], // (index 3) Hợi
			},
			{
				value: [1, 3],
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Thiên Hỏa Đồng Nhân',
				yinyangIndexs: [1, 1, 1, 1, 0, 1],
				hexagramRelatives: [3, 4, 2, 5, 3, 1], // Tử tôn, Thê tài, Huynh đệ, Quan quỷ, Tử tôn, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 12, 2, 4], // Tuất, Thân, Ngọ, Hợi, Sửu, Mão
				indexesElements: [5, 4, 2, 1, 5, 3],
			},
		],
		originRelatives: ['Huynh đệ', 'Tử tôn', 'Thê tài', 'Quan quỷ', 'Tử tôn', 'Phụ mẫu'],
	},
	{
		id: 4,
		baguaFamily: 'Chấn',
		originElement: 'Wood',
		vietnameseElementName: 'Mộc',
		indexesElement: 3,
		members: [
			{
				value: [4, 4],
				questionerIndex: 6,
				questionIndex: 3,
				hexagramName: 'Thuần Chấn',
				yinyangIndexs: [0, 0, 1, 0, 0, 1],
				hexagramRelatives: [4, 5, 3, 4, 2, 1], // Thê tài, Quan quỷ, Tử tôn, Thê tài, Huynh đệ, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 5, 3, 1], // Tuất, Thân, Ngọ, Thìn, Dần, Tý
				indexesElements: [5, 4, 2, 5, 3, 1],
			},
			{
				value: [4, 8],
				questionerIndex: 1,
				questionIndex: 4,
				hexagramName: 'Lôi Địa Dự',
				yinyangIndexs: [0, 0, 1, 0, 0, 0],
				hexagramRelatives: [4, 5, 3, 2, 3, 4], // Thê tài, Quan quỷ, Tử tôn, Huynh đệ, Tử tôn, Thê tài
				hexagramEarthlyBranches: [11, 9, 7, 4, 6, 8], // Tuất, Thân, Ngọ, Mão, Tỵ, Mùi
				indexesElements: [5, 4, 2, 3, 2, 5],
				hexagramHiddenRelatives: [null, null, null, null, null, 1], // (index 5) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, null, null, 1], // (index 5) Tý
			},
			{
				value: [4, 6],
				questionerIndex: 2,
				questionIndex: 5,
				hexagramName: 'Lôi Thủy Giải',
				yinyangIndexs: [0, 0, 1, 0, 1, 0],
				hexagramRelatives: [4, 5, 3, 3, 4, 2], // Thê tài, Quan quỷ, Tử tôn, Tử tôn, Thê tài, Huynh đệ
				hexagramEarthlyBranches: [11, 9, 7, 7, 5, 3], // Tuất, Thân, Ngọ, Ngọ, Thìn, Dần
				indexesElements: [5, 4, 2, 2, 5, 3],
				hexagramHiddenRelatives: [null, null, null, null, null, 1], // (index 5) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, null, null, 1], // (index 5) Tý
			},
			{
				value: [4, 5],
				questionerIndex: 3,
				questionIndex: 6,
				hexagramName: 'Lôi Phong Hằng',
				yinyangIndexs: [0, 0, 1, 1, 1, 0],
				hexagramRelatives: [4, 5, 3, 5, 1, 4], // Thê tài, Quan quỷ, Tử tôn, Quan quỷ, Phụ mẫu, Thê tài
				hexagramEarthlyBranches: [11, 9, 7, 10, 12, 2], // Tuất, Thân, Ngọ, Dậu, Hợi, Sửu
				indexesElements: [5, 4, 2, 4, 1, 5],
				hexagramHiddenRelatives: [null, null, null, null, 2, null], // (index 4) Huynh đệ
				hexagramHiddenEarthlyBranches: [null, null, null, null, 3, null], // (index 4) Dần
			},
			{
				value: [8, 5],
				questionerIndex: 4,
				questionIndex: 1,
				hexagramName: 'Địa Phong Thăng',
				yinyangIndexs: [0, 0, 0, 1, 1, 0],
				hexagramRelatives: [5, 1, 4, 5, 1, 4], // Quan quỷ, Phụ mẫu, Thê tài, Quan quỷ, Phụ mẫu, Thê tài
				hexagramEarthlyBranches: [10, 12, 2, 10, 12, 2], // Dậu, Hợi, Sửu, Dậu, Hợi, Sửu
				indexesElements: [4, 1, 5, 4, 1, 5],
				hexagramHiddenRelatives: [null, null, 3, null, 2, null], // (index 2) Tử tôn, (index 4) Huynh đệ
				hexagramHiddenEarthlyBranches: [null, null, 7, null, 3, null], // (index 2) Ngọ, (index 4) Dần
			},
			{
				value: [6, 5],
				questionerIndex: 5,
				questionIndex: 2,
				hexagramName: 'Thủy Phong Tỉnh',
				yinyangIndexs: [0, 1, 0, 1, 1, 0],
				hexagramRelatives: [1, 4, 5, 5, 1, 4], // Phụ mẫu, Thê tài, Quan quỷ, Quan quỷ, Phụ mẫu, Thê tài
				hexagramEarthlyBranches: [1, 11, 9, 10, 12, 2], // Tý, Tuất, Thân, Dậu, Hợi, Sửu
				indexesElements: [1, 5, 4, 4, 1, 5],
				hexagramHiddenRelatives: [null, null, 3, null, 2, null], // (index 2) Tử tôn, (index 4) Huynh đệ
				hexagramHiddenEarthlyBranches: [null, null, 7, null, 3, null], // (index 2) Ngọ, (index 4) Dần
			},
			{
				value: [2, 5],
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Trạch Phong Đại Quá',
				yinyangIndexs: [0, 1, 1, 1, 1, 0],
				hexagramRelatives: [4, 5, 1, 5, 1, 4], // Thê tài, Quan quỷ, Phụ mẫu, Quan quỷ, Phụ mẫu, Thê tài
				hexagramEarthlyBranches: [8, 10, 12, 10, 12, 2], // Mùi, Dậu, Hợi, Dậu, Hợi, Sửu
				indexesElements: [5, 4, 1, 4, 1, 5],
				hexagramHiddenRelatives: [null, null, 3, null, 2, null], // (index 2) Tử tôn, (index 4) Huynh đệ
				hexagramHiddenEarthlyBranches: [null, null, 7, null, 3, null], // (index 2) Ngọ, (index 4) Dần
			},
			{
				value: [2, 4],
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Trạch Lôi Tùy',
				yinyangIndexs: [0, 1, 1, 0, 0, 1],
				hexagramRelatives: [4, 5, 1, 4, 2, 1], // Thê tài, Quan quỷ, Phụ mẫu, Thê tài, Huynh đệ, Phụ mẫu
				hexagramEarthlyBranches: [8, 10, 12, 5, 3, 1], // Mùi, Dậu, Hợi, Thìn, Dần, Tý
				indexesElements: [5, 4, 1, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, 3, null, null, null], // (index 2) Tử tôn
				hexagramHiddenEarthlyBranches: [null, null, 7, null, null, null], // (index 2) Ngọ
			},
		],
		originRelatives: ['Thê tài', 'Quan quỷ', 'Tử tôn', 'Thê tài', 'Huynh đệ', 'Phụ mẫu'],
	},
	{
		id: 5,
		baguaFamily: 'Tốn',
		originElement: 'Wood',
		vietnameseElementName: 'Mộc',
		indexesElement: 3,
		members: [
			{
				value: [5, 5],
				questionerIndex: 6,
				questionIndex: 3,
				hexagramName: 'Thuần Tốn',
				yinyangIndexs: [1, 1, 0, 1, 1, 0],
				hexagramRelatives: [2, 3, 4, 5, 1, 4], // Huynh đệ, Tử tôn, Thê tài, Quan quỷ, Phụ mẫu, Thê tài
				hexagramEarthlyBranches: [4, 6, 8, 10, 12, 2], // Mão, Tỵ, Mùi, Dậu, Hợi, Sửu
				indexesElements: [3, 2, 5, 4, 1, 5],
			},
			{
				value: [5, 1],
				questionerIndex: 1,
				questionIndex: 4,
				hexagramName: 'Phong Thiên Tiểu Súc',
				yinyangIndexs: [1, 1, 0, 1, 1, 1],
				hexagramRelatives: [2, 3, 4, 4, 2, 1], // Huynh đệ, Tử tôn, Thê tài, Thê tài, Huynh đệ, Phụ mẫu
				hexagramEarthlyBranches: [4, 6, 8, 5, 3, 1], // Mão, Tỵ, Mùi, Thìn, Dần, Tý
				indexesElements: [3, 2, 5, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, null, 5, null, null], // (index 3) Quan quỷ
				hexagramHiddenEarthlyBranches: [null, null, null, 10, null, null], // (index 3) Dậu
			},
			{
				value: [5, 3],
				questionerIndex: 2,
				questionIndex: 5,
				hexagramName: 'Phong Hỏa Gia Nhân',
				yinyangIndexs: [1, 1, 0, 1, 0, 1],
				hexagramRelatives: [2, 3, 4, 1, 4, 2], // Huynh đệ, Tử tôn, Thê tài, Phụ mẫu, Thê tài, Huynh đệ
				hexagramEarthlyBranches: [4, 6, 8, 12, 2, 4], // Mão, Tỵ, Mùi, Hợi, Sửu, Mão
				indexesElements: [3, 2, 5, 1, 5, 3],
				hexagramHiddenRelatives: [null, null, null, 5, null, null], // (index 3) Quan quỷ
				hexagramHiddenEarthlyBranches: [null, null, null, 10, null, null], // (index 3) Dậu
			},
			{
				value: [5, 4],
				questionerIndex: 3,
				questionIndex: 6,
				hexagramName: 'Phong Lôi Ích',
				yinyangIndexs: [1, 1, 0, 0, 0, 1],
				hexagramRelatives: [2, 3, 4, 4, 2, 1], // Huynh đệ, Tử tôn, Thê tài, Thê tài, Huynh đệ, Phụ mẫu
				hexagramEarthlyBranches: [4, 6, 8, 5, 3, 1], // Mão, Tỵ, Mùi, Thìn, Dần, Tý
				indexesElements: [3, 2, 5, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, null, 5, null, null], // (index 3) Quan quỷ
				hexagramHiddenEarthlyBranches: [null, null, null, 10, null, null], // (index 3) Dậu
			},
			{
				value: [1, 4],
				questionerIndex: 4,
				questionIndex: 1,
				hexagramName: 'Thiên Lôi Vô Vọng',
				yinyangIndexs: [1, 1, 1, 0, 0, 1],
				hexagramRelatives: [4, 5, 3, 4, 2, 1], // Thê tài, Quan quỷ, Tử tôn, Thê tài, Huynh đệ, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 5, 3, 1], // Tuất, Thân, Ngọ, Thìn, Dần, Tý
				indexesElements: [5, 4, 2, 5, 3, 1],
			},
			{
				value: [3, 4],
				questionerIndex: 5,
				questionIndex: 2,
				hexagramName: 'Hỏa Lôi Phệ Hạp',
				yinyangIndexs: [1, 0, 1, 0, 0, 1],
				hexagramRelatives: [3, 4, 5, 4, 2, 1], // Tử tôn, Thê tài, Quan quỷ, Thê tài, Huynh đệ, Phụ mẫu
				hexagramEarthlyBranches: [6, 8, 10, 5, 3, 1], // Tỵ, Mùi, Dậu, Thìn, Dần, Tý
				indexesElements: [2, 5, 4, 5, 3, 1],
			},
			{
				value: [7, 4],
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Sơn Lôi Di',
				yinyangIndexs: [0, 0, 1, 0, 0, 1],
				hexagramRelatives: [2, 1, 4, 4, 2, 1], // Huynh đệ, Phụ mẫu, Thê tài, Thê tài, Huynh đệ, Phụ mẫu
				hexagramEarthlyBranches: [3, 1, 11, 5, 3, 1], // Dần, Tý, Tuất, Thìn, Dần, Tý
				indexesElements: [3, 1, 5, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, 3, 5, null, null], // (index 2) Tử tôn, (index 3) Quan quỷ
				hexagramHiddenEarthlyBranches: [null, null, 6, 10, null, null], // (index 2) Tỵ, (index 3) Dậu
			},
			{
				value: [7, 5],
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Sơn Phong Cổ',
				yinyangIndexs: [0, 0, 1, 1, 1, 0],
				hexagramRelatives: [2, 1, 4, 5, 1, 4], // Huynh đệ, Phụ mẫu, Thê tài, Quan quỷ, Phụ mẫu, Thê tài
				hexagramEarthlyBranches: [3, 1, 11, 10, 12, 2], // Dần, Tý, Tuất, Dậu, Hợi, Sửu
				indexesElements: [3, 1, 5, 4, 1, 5],
				hexagramHiddenRelatives: [null, 3, null, null, null, null], // (index 1) Tử tôn
				hexagramHiddenEarthlyBranches: [null, 6, null, null, null, null], // (index 1) Tỵ
			},
		],
		originRelatives: ['Huynh đệ', 'Tử tôn', 'Thê tài', 'Quan quỷ', 'Phụ mẫu', 'Thê tài'],
	},
	{
		id: 6,
		baguaFamily: 'Khảm',
		originElement: 'Water',
		vietnameseElementName: 'Thủy',
		indexesElement: 1,
		members: [
			{
				value: [6, 6],
				questionerIndex: 6,
				questionIndex: 3,
				hexagramName: 'Thuần Khảm',
				yinyangIndexs: [0, 1, 0, 0, 1, 0],
				hexagramRelatives: [2, 5, 1, 4, 5, 3], // Huynh đệ, Quan quỷ, Phụ mẫu, Thê tài, Quan quỷ, Tử tôn
				hexagramEarthlyBranches: [1, 11, 9, 7, 5, 3], // Tý, Tuất, Thân, Ngọ, Thìn, Dần
				indexesElements: [1, 5, 4, 2, 5, 3],
			},
			{
				value: [6, 2],
				questionerIndex: 1,
				questionIndex: 4,
				hexagramName: 'Thủy Trạch Tiết',
				yinyangIndexs: [0, 1, 0, 0, 1, 1],
				hexagramRelatives: [2, 5, 1, 5, 3, 4], // Huynh đệ, Quan quỷ, Phụ mẫu, Quan quỷ, Tử tôn, Thê tài
				hexagramEarthlyBranches: [1, 11, 9, 2, 4, 6], // Tý, Tuất, Thân, Sửu, Mão, Tỵ
				indexesElements: [1, 5, 4, 5, 3, 2],
				// Quan Quỷ Sửu thổ (phục Tài Ngọ)
				hexagramHiddenRelatives: [null, null, null, 4, null, null], // (index 3) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, null, 7, null, null], // (index 3) Ngọ
			},
			{
				value: [6, 4],
				questionerIndex: 2,
				questionIndex: 5,
				hexagramName: 'Thủy Lôi Truân',
				yinyangIndexs: [0, 1, 0, 0, 0, 1],
				hexagramRelatives: [2, 5, 1, 5, 3, 2], // Huynh đệ, Quan quỷ, Phụ mẫu, Quan quỷ, Tử tôn, Huynh đệ
				hexagramEarthlyBranches: [1, 11, 9, 5, 3, 1], // Tý, Tuất, Thân, Thìn, Dần, Tý
				indexesElements: [1, 5, 4, 5, 3, 1],
				// Quan Quỷ Thìn thổ (phục Tài Ngọ)
				hexagramHiddenRelatives: [null, null, null, 4, null, null], // (index 3) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, null, 7, null, null], // (index 3) Ngọ
			},
			{
				value: [6, 3],
				questionerIndex: 3,
				questionIndex: 6,
				hexagramName: 'Thủy Hỏa Ký Tế',
				yinyangIndexs: [0, 1, 0, 1, 0, 1],
				hexagramRelatives: [2, 5, 1, 2, 5, 3], // Huynh đệ, Quan quỷ, Phụ mẫu, Huynh đệ, Quan quỷ, Tử tôn
				hexagramEarthlyBranches: [1, 11, 9, 12, 2, 4], // Tý, Tuất, Thân, Hợi, Sửu, Mão
				indexesElements: [1, 5, 4, 1, 5, 3],
				// Huynh Đệ Hợi thủy (phục Tài Ngọ)
				hexagramHiddenRelatives: [null, null, null, 4, null, null], // (index 3) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, null, 7, null, null], // (index 3) Ngọ
			},
			{
				value: [2, 3],
				questionerIndex: 4,
				questionIndex: 1,
				hexagramName: 'Trạch Hỏa Cách',
				yinyangIndexs: [0, 1, 1, 1, 0, 1],
				hexagramRelatives: [5, 1, 2, 2, 5, 3], // Quan quỷ, Phụ mẫu, Huynh đệ, Huynh đệ, Quan quỷ, Tử tôn
				hexagramEarthlyBranches: [8, 10, 12, 12, 2, 4], // Mùi, Dậu, Hợi, Hợi, Sửu, Mão
				indexesElements: [5, 4, 1, 1, 5, 3],
				// Huynh Đệ Hợi thủy (phục Tài Ngọ)
				hexagramHiddenRelatives: [null, null, null, 4, null, null], // (index 3) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, null, 7, null, null], // (index 3) Ngọ
			},
			{
				value: [4, 3],
				questionerIndex: 5,
				questionIndex: 2,
				hexagramName: 'Lôi Hỏa Phong',
				yinyangIndexs: [0, 0, 1, 1, 0, 1],
				hexagramRelatives: [5, 1, 4, 2, 5, 3], // Quan quỷ, Phụ mẫu, Thê tài, Huynh đệ, Quan quỷ, Tử tôn
				hexagramEarthlyBranches: [11, 9, 7, 12, 2, 4], // Tuất, Thân, Ngọ, Hợi, Sửu, Mão
				indexesElements: [5, 4, 2, 1, 5, 3],
			},
			{
				value: [8, 3],
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Địa Hỏa Minh Di',
				yinyangIndexs: [0, 0, 0, 1, 0, 1],
				hexagramRelatives: [1, 2, 5, 2, 5, 3], // Phụ mẫu, Huynh đệ, Quan quỷ, Huynh đệ, Quan quỷ, Tử tôn
				hexagramEarthlyBranches: [10, 12, 2, 12, 2, 4], // Dậu, Hợi, Sửu, Hợi, Sửu, Mão
				indexesElements: [4, 1, 5, 1, 5, 3],
				// Huynh Đệ Hợi thủy (phục Tài Ngọ)
				hexagramHiddenRelatives: [null, null, null, 4, null, null], // (index 3) Thê tài
				hexagramHiddenEarthlyBranches: [null, null, null, 7, null, null], // (index 3) Ngọ
			},
			{
				value: [8, 6],
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Địa Thủy Sư',
				yinyangIndexs: [0, 0, 0, 0, 1, 0],
				hexagramRelatives: [1, 2, 5, 4, 5, 3], // Phụ mẫu, Huynh đệ, Quan quỷ, Thê tài, Quan quỷ, Tử tôn
				hexagramEarthlyBranches: [10, 12, 2, 7, 5, 9], // Dậu, Hợi, Sửu, Ngọ, Thìn, Thân
				indexesElements: [4, 1, 5, 2, 5, 4],
			},
		],
		originRelatives: ['Huynh đệ', 'Quan quỷ', 'Phụ mẫu', 'Thê tài', 'Quan quỷ', 'Tử tôn'],
	},
	{
		id: 7,
		baguaFamily: 'Cấn',
		originElement: 'Earth',
		vietnameseElementName: 'Thổ',
		indexesElement: 5,
		members: [
			{
				value: [7, 7],
				questionerIndex: 6,
				questionIndex: 3,
				hexagramName: 'Thuần Cấn',
				yinyangIndexs: [1, 0, 0, 1, 0, 0],
				hexagramRelatives: [5, 4, 2, 3, 1, 2], // Quan quỷ, Thê tài, Huynh đệ, Tử tôn, Phụ mẫu, Huynh đệ
				hexagramEarthlyBranches: [3, 1, 11, 9, 7, 5], // Dần, Tý, Tuất, Thân, Ngọ, Thìn
				indexesElements: [3, 1, 5, 4, 2, 5],
			},
			{
				value: [7, 3],
				questionerIndex: 1,
				questionIndex: 4,
				hexagramName: 'Sơn Hỏa Bí',
				yinyangIndexs: [1, 0, 0, 1, 0, 1],
				hexagramRelatives: [5, 4, 2, 4, 2, 5], // Quan quỷ, Thê tài, Huynh đệ, Thê tài, Huynh đệ, Quan quỷ
				hexagramEarthlyBranches: [3, 1, 11, 12, 2, 4], // Dần, Tý, Tuất, Hợi, Sửu, Mão
				indexesElements: [3, 1, 5, 1, 5, 3],
				hexagramHiddenRelatives: [null, null, null, 3, 1, null], // (index 3) Tử tôn, (index 4) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, 9, 7, null], // (index 3) Thân, (index 4) Ngọ
			},
			{
				value: [7, 1],
				questionerIndex: 2,
				questionIndex: 5,
				hexagramName: 'Sơn Thiên Đại Súc',
				yinyangIndexs: [1, 0, 0, 1, 1, 1],
				hexagramRelatives: [5, 4, 2, 2, 5, 4], // Quan quỷ, Thê tài, Huynh đệ, Huynh đệ, Quan quỷ, Thê tài
				hexagramEarthlyBranches: [3, 1, 11, 5, 3, 1], // Dần, Tý, Tuất, Thìn, Dần, Tý
				indexesElements: [3, 1, 5, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, null, 3, 1, null], // (index 3) Tử tôn, (index 4) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, 9, 7, null], // (index 3) Thân, (index 4) Ngọ
			},
			{
				value: [7, 2],
				questionerIndex: 3,
				questionIndex: 6,
				hexagramName: 'Sơn Trạch Tổn',
				yinyangIndexs: [1, 0, 0, 0, 1, 1],
				hexagramRelatives: [5, 4, 2, 2, 5, 1], // Quan quỷ, Thê tài, Huynh đệ, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [3, 1, 11, 2, 4, 6], // Dần, Tý, Tuất, Sửu, Mão, Tỵ
				indexesElements: [3, 1, 5, 5, 3, 2],
				hexagramHiddenRelatives: [null, null, null, 3, null, null], // (index 3) Tử tôn
				hexagramHiddenEarthlyBranches: [null, null, null, 9, null, null], // (index 3) Thân
			},
			{
				value: [3, 2],
				questionerIndex: 4,
				questionIndex: 1,
				hexagramName: 'Hỏa Trạch Khuê',
				yinyangIndexs: [1, 0, 1, 0, 1, 1],
				hexagramRelatives: [1, 2, 3, 2, 5, 1], // Phụ mẫu, Huynh đệ, Tử tôn, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [6, 8, 10, 2, 4, 6], // Tỵ, Mùi, Dậu, Sửu, Mão, Tỵ
				indexesElements: [2, 5, 4, 5, 3, 2],
				hexagramHiddenRelatives: [null, 4, null, null, null, null], // (index 1) Thê tài
				hexagramHiddenEarthlyBranches: [null, 1, null, null, null, null], // (index 1) Tý
			},
			{
				value: [1, 2],
				questionerIndex: 5,
				questionIndex: 2,
				hexagramName: 'Thiên Trạch Lý',
				yinyangIndexs: [1, 1, 1, 0, 1, 1],
				hexagramRelatives: [2, 3, 1, 2, 5, 1], // Huynh đệ, Tử tôn, Phụ mẫu, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [11, 9, 7, 2, 4, 6], // Tuất, Thân, Ngọ, Sửu, Mão, Tỵ
				indexesElements: [5, 4, 2, 5, 3, 2],
				hexagramHiddenRelatives: [null, 4, null, null, null, null], // (index 1) Thê tài
				hexagramHiddenEarthlyBranches: [null, 1, null, null, null, null], // (index 1) Tý
			},
			{
				value: [5, 2],
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Phong Trạch Trung Phu',
				yinyangIndexs: [1, 1, 0, 0, 1, 1],
				hexagramRelatives: [5, 1, 2, 2, 5, 1], // Quan quỷ, Phụ mẫu, Huynh đệ, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [4, 6, 8, 2, 4, 6], // Mão, Tỵ, Mùi, Sửu, Mão, Tỵ
				indexesElements: [3, 2, 5, 5, 3, 2],
				hexagramHiddenRelatives: [null, 4, null, 3, null, null], // (index 1) Thê tài, (index 3) Tử tôn
				hexagramHiddenEarthlyBranches: [null, 1, null, 9, null, null], // (index 1) Tý, (index 3) Thân
			},
			{
				value: [5, 7],
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Phong Sơn Tiệm',
				yinyangIndexs: [1, 1, 0, 1, 0, 0],
				hexagramRelatives: [5, 1, 2, 3, 1, 2], // Quan quỷ, Phụ mẫu, Huynh đệ, Tử tôn, Phụ mẫu, Huynh đệ
				hexagramEarthlyBranches: [4, 6, 8, 9, 7, 5], // Mão, Tỵ, Mùi, Thân, Ngọ, Thìn
				indexesElements: [3, 2, 5, 4, 2, 5],
				hexagramHiddenRelatives: [null, 4, null, null, null, null], // (index 1) Thê tài
				hexagramHiddenEarthlyBranches: [null, 1, null, null, null, null], // (index 1) Tý
			},
		],
		originRelatives: ['Quan quỷ', 'Thê tài', 'Huynh đệ', 'Tử tôn', 'Phụ mẫu', 'Huynh đệ'],
	},
	{
		id: 8,
		baguaFamily: 'Khôn',
		originElement: 'Earth',
		vietnameseElementName: 'Thổ',
		indexesElement: 5,
		members: [
			{
				value: [8, 8],
				questionerIndex: 6,
				questionIndex: 3,
				hexagramName: 'Thuần Khôn',
				yinyangIndexs: [0, 0, 0, 0, 0, 0],
				hexagramRelatives: [3, 4, 2, 5, 1, 2], // Tử tôn, Thê tài, Huynh đệ, Quan quỷ, Phụ mẫu, Huynh đệ
				hexagramEarthlyBranches: [10, 12, 2, 4, 6, 8], // Dậu, Hợi, Sửu, Mão, Tỵ, Mùi
				indexesElements: [4, 1, 5, 3, 2, 5],
			},
			{
				value: [8, 4],
				questionerIndex: 1,
				questionIndex: 4,
				hexagramName: 'Địa Lôi Phục',
				yinyangIndexs: [0, 0, 0, 0, 0, 1],
				hexagramRelatives: [3, 4, 2, 2, 5, 4], // Tử tôn, Thê tài, Huynh đệ, Huynh đệ, Quan quỷ, Thê tài
				hexagramEarthlyBranches: [10, 12, 2, 5, 3, 1], // Dậu, Hợi, Sửu, Thìn, Dần, Tý
				indexesElements: [4, 1, 5, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, null, null, 1, null], // (index 4) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, null, 6, null], // (index 4) Tỵ
			},
			{
				value: [8, 2],
				questionerIndex: 2,
				questionIndex: 5,
				hexagramName: 'Địa Trạch Lâm',
				yinyangIndexs: [0, 0, 0, 0, 1, 1],
				hexagramRelatives: [3, 4, 2, 2, 5, 1], // Tử tôn, Thê tài, Huynh đệ, Huynh đệ, Quan quỷ, Phụ mẫu
				hexagramEarthlyBranches: [10, 12, 2, 2, 4, 6], // Dậu, Hợi, Sửu, Sửu, Mão, Tỵ
				indexesElements: [4, 1, 5, 5, 3, 2],
			},
			{
				value: [8, 1],
				questionerIndex: 3,
				questionIndex: 6,
				hexagramName: 'Địa Thiên Thái',
				yinyangIndexs: [0, 0, 0, 1, 1, 1],
				hexagramRelatives: [3, 4, 2, 2, 5, 4], // Tử tôn, Thê tài, Huynh đệ, Huynh đệ, Quan quỷ, Thê tài
				hexagramEarthlyBranches: [10, 12, 2, 5, 3, 1], // Dậu, Hợi, Sửu, Thìn, Dần, Tý
				indexesElements: [4, 1, 5, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, null, null, 1, null], // (index 4) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, null, 6, null], // (index 4) Tỵ
			},
			{
				value: [4, 1],
				questionerIndex: 4,
				questionIndex: 1,
				hexagramName: 'Lôi Thiên Đại Tráng',
				yinyangIndexs: [0, 0, 1, 1, 1, 1],
				hexagramRelatives: [2, 3, 1, 2, 5, 4], // Huynh đệ, Tử tôn, Phụ mẫu, Huynh đệ, Quan quỷ, Thê tài
				hexagramEarthlyBranches: [11, 9, 7, 5, 3, 1], // Tuất, Thân, Ngọ, Thìn, Dần, Tý
				indexesElements: [5, 4, 2, 5, 3, 1],
			},
			{
				value: [2, 1],
				questionerIndex: 5,
				questionIndex: 2,
				hexagramName: 'Trạch Thiên Quải',
				yinyangIndexs: [0, 1, 1, 1, 1, 1],
				hexagramRelatives: [2, 3, 4, 2, 5, 4], // Huynh đệ, Tử tôn, Thê tài, Huynh đệ, Quan quỷ, Thê tài
				hexagramEarthlyBranches: [8, 10, 12, 5, 3, 1], // Mùi, Dậu, Hợi, Thìn, Dần, Tý
				indexesElements: [5, 4, 1, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, null, null, 1, null], // (index 4) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, null, 6, null], // (index 4) Tỵ
			},
			{
				value: [6, 1],
				questionerIndex: 4,
				questionIndex: 1,
				wanderer: true,
				hexagramName: 'Thủy Thiên Nhu',
				yinyangIndexs: [0, 1, 0, 1, 1, 1],
				hexagramRelatives: [4, 2, 3, 2, 5, 4], // Thê tài, Huynh đệ, Tử tôn, Huynh đệ, Quan quỷ, Thê tài
				hexagramEarthlyBranches: [1, 11, 9, 5, 3, 1], // Tý, Tuất, Thân, Thìn, Dần, Tý
				indexesElements: [1, 5, 4, 5, 3, 1],
				hexagramHiddenRelatives: [null, null, null, null, 1, null], // (index 4) Phụ mẫu
				hexagramHiddenEarthlyBranches: [null, null, null, null, 6, null], // (index 4) Tỵ
			},
			{
				value: [6, 8],
				questionerIndex: 3,
				questionIndex: 6,
				returner: true,
				hexagramName: 'Thủy Địa Tỷ',
				yinyangIndexs: [0, 1, 0, 0, 0, 0],
				hexagramRelatives: [4, 2, 3, 5, 1, 2], // Thê tài, Huynh đệ, Tử tôn, Quan quỷ, Phụ mẫu, Huynh đệ
				hexagramEarthlyBranches: [1, 11, 9, 4, 6, 8], // Tý, Tuất, Thân, Mão, Tỵ, Mùi
				indexesElements: [1, 5, 4, 3, 2, 5],
			},
		],
		originRelatives: ['Tử tôn', 'Thê tài', 'Huynh đệ', 'Quan quỷ', 'Phụ mẫu', 'Huynh đệ'],
	},
]

export { hexagramFamily }
