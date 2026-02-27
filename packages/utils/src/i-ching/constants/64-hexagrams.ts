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
				postId: '5eca4e20-f0f0-4a8c-8c01-ef940718bd65',
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
				postId: '2be308f8-95ec-49fb-a484-84d654740d9d',
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
				postId: 'b1aa81c6-78ed-4a4b-ba86-02369fdda79e',
				yinyangIndexs: [1, 1, 1, 1, 0, 0],
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
				postId: '13073021-8ad5-4e89-8b96-d5facd97cc48',
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
				postId: '9e4d982b-b7fa-40c9-963f-b3f71d1a569d',
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
				postId: 'f1436148-1c84-41f6-8089-b177bfa9d815',
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
				postId: 'f0afae6e-7d3c-45a6-9579-f0b01f8dd516',
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
				postId: '5e9e1090-e2be-405a-8114-988d424adb6e',
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
				postId: '508d4b9c-b64b-4fdd-896c-c9ed281f69b8',
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
				postId: '213ff046-6863-4f31-b299-38036fbbacec',
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
				postId: 'c5d208b5-beda-4f52-b733-2781ef757b11',
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
				postId: '424e25f4-d045-4f8b-ac8c-fe0075a56e76',
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
				postId: '74fa28d4-e189-4208-b2db-9bdca703c891',
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
				postId: '02a31211-8678-4351-8397-862749f5303c',
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
				postId: 'deed4a32-fb78-4757-ae25-f044602c7729',
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
				postId: '3ca7e57f-536e-4231-85c6-8476e0d31c3f',
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
				postId: '77f6b4bb-22e4-4e24-96ab-22df3de7e967',
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
				postId: 'dae01a96-60a1-47b4-8f03-f0877004dcb0',
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
				postId: '19f80bdc-28b2-4f22-b5b6-34618ae4c416',
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
				postId: '1e05ac1d-9583-46e5-acab-5884e582522b',
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
				postId: '3ee98373-cc8b-4b4c-ba0d-ca77d513bfbd',
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
				postId: '8c588f49-61b3-4812-9746-1c3165dce954',
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
				postId: '7b5299a3-5414-4462-beb6-7ca954956d74',
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
				postId: '78e96d9f-c492-4c12-beea-5d56ea7c73b1',
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
				postId: '25ced05c-5465-480b-8a4e-e4b5210f5a40',
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
				postId: 'ffc6f149-edb9-4427-a0d1-3a80e1a28282',
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
				postId: '92538b70-9643-436c-92ba-59f5e92ad613',
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
				postId: '4ec339fc-e611-409f-9b57-830e6bac867d',
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
				postId: '0d2c56f3-873a-4587-a2f2-461d1336d6c5',
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
				postId: '2541a3d4-0edd-4f33-8f9c-4bb1e1e82293',
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
				postId: '5acd7873-e513-40ba-a919-af94f0a50c24',
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
				postId: '91dd77f8-dff9-4afe-98d0-ff3b4712bdbd',
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
				postId: '690e73e0-7469-40fd-b579-f4358f1bbd32',
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
				postId: '7e2f691c-285f-4808-bf65-b05a5837cf00',
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
				postId: '1f97804e-b07e-4e35-ba60-1bd59a4cdef9',
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
				postId: 'fd4ab7aa-bc70-4537-a83a-4c339a6b1fde',
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
				postId: '73b0bd7e-2519-4e09-b0f7-a2b3dc23460e',
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
				postId: 'c711ee2f-f902-427c-be15-56edc83bbffe',
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
				postId: '73233a6e-f163-4e9d-9b89-38197e1ae993',
				yinyangIndexs: [1, 0, 0, 0, 0, 1],
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
				postId: '8f46be33-0203-4d92-88d7-3f89f4ddf43b',
				yinyangIndexs: [1, 0, 0, 1, 1, 0],
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
				postId: 'b687155f-8396-4278-8a5f-919bf2364308',
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
				postId: '3375543e-c9af-47ce-8c6c-15ca434ab5a2',
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
				postId: 'c01df6c8-2ef8-41aa-b702-e2bb516c2141',
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
				postId: '0ade54ba-75f1-4e13-ad0a-400218b77035',
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
				postId: 'ae28d87a-5e0c-426f-b3ad-fd9aad5fb868',
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
				postId: 'df5e9c1b-e880-4038-bf35-e8410513deb1',
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
				postId: '0cc07227-c0a9-4c34-832f-4ab4f6c86103',
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
				postId: 'aa7ad6fd-a564-4b76-bb6a-92f95ae939c1',
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
				postId: 'a5773c0a-aa59-46ec-8155-ded45cc42b9c',
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
				postId: '4f5ebc88-edfe-49dc-8d56-dfb3e87a9e4a',
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
				postId: 'f868c839-1ae0-407b-81c7-22a6b9cdcb83',
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
				postId: '12a351f2-d3c9-46c2-ab0d-3b4b52171a25',
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
				postId: '3fcf7e99-b9c3-45a9-9749-4bbf751b58be',
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
				postId: '4928a701-d66d-4d69-8238-434625c7d993',
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
				postId: 'c29c80f2-e8b3-45b2-927c-011ca221d78e',
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
				postId: '08aaa5c4-cea6-46c2-b382-05f260a2ae09',
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
				postId: '217343c3-371a-48c8-9420-cd4a735d4505',
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
				postId: 'b624e126-89c2-4fde-b1fd-c82d252e1703',
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
				postId: '78c873be-cb77-4956-90af-56836352031f',
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
				postId: '2ca3b343-416a-41d6-9b15-868007972fb4',
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
				postId: '23ffda89-7fee-4021-92a1-25242d6eb46b',
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
				postId: '05024cd7-70d9-41a6-88a2-43d3e53b15c0',
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
				postId: 'dc18a088-0e19-46fd-bb03-e81ce01def83',
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
