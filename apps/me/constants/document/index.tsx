import type { DevBlogPost } from '@repo/stephen-v2-contents'
import type { BookProps } from '@repo/stephen-v2-ui/shadcn'
import Image from 'next/image'

interface ITableOfContent {
	id: DevBlogPost['id'] | null
	title?: string
	description?: string
	cover?: string
	children?: ITableOfContent[]
}

export type TDocumentCollection = BookProps & { status: 'published' | 'draft'; slug: string; toc?: ITableOfContent[] }

export const documentCollection: TDocumentCollection[] = [
	{
		// book props
		title: 'Tự Học Kinh Dịch',
		icon: <span className="text-2xl text-white">☯</span>,
		texture: true,
		color: '#1D1C1D',
		textColor: '#fff',
		illustration: (
			<Image
				src="/assets/images/document/tu-hoc-kinh-dich/cover.png"
				className="size-full object-cover"
				width={220}
				height={150}
				alt="48-laws-of-power-cover.png"
				sizes="(max-width: 768px) 100vw, 50vw"
			/>
		),

		// other props
		slug: 'tu-hoc-kinh-dich-tap-1',
		status: 'published',
		toc: [
			{
				id: '75c80ca3-c5e4-449c-b718-f9dca03b6daa',
				children: [
					{
						id: null,
						title: 'Kiến thức đại cương',
						children: [
							{
								id: 'db2a92a2-25f3-42dc-84e0-d6cc0f5545a2',
							},
							{
								id: '36e88a95-f612-40d3-87d1-f731a14ea3e5',
							},
							{
								id: 'b1d24ee6-fa88-442a-a677-59977b8d6c36',
							},
							{ id: '6a10122d-e603-4fa7-a830-ccf23946239e', title: 'Chương 1: Bát Quái' },
							{ id: null, title: 'Chương 2: Quái Tượng Đồ' },
							{ id: '85412c0a-f850-4f6d-b65d-611b529675ee', title: 'Chương 3: 8 Cung và 64 Quẻ Dịch' },
							{ id: null, title: 'Chương 4: Hỗn Thiên Giáp Tý' },
							{ id: null, title: 'Chương 5: Lục Thân Ca' },
							{ id: null, title: 'Chương 6: Thế Ứng' },
							{ id: null, title: 'Chương 7: Động Biến' },
							{ id: 'c75034a5-de31-488b-a13b-a7207ea93a9a', title: 'Chương 8: Dụng Thần' },
							{
								id: 'c309d21d-5304-47f3-bef9-65c594fc14d1',
								title: 'Chương 9: Nguyên Thần, Kỵ Thần, Cừu Thần',
							},
							{ id: null, title: 'Chương 10: Sự Vượng Suy của Nguyên Thần, Kỵ Thần' },
							{ id: null, title: 'Chương 11: Ngũ Hành Tương Sinh' },
							{ id: null, title: 'Chương 12: Ngũ Hành Tương Khắc' },
							{ id: null, title: 'Chương 13: Khắc Xứ Phùng Sinh' },
							{ id: null, title: 'Chương 14: Động Tịnh Sinh Khắc' },
							{ id: null, title: 'Chương 15: Động Biến Sinh Khắc Xung Hợp' },
							{ id: null, title: 'Chương 16: Tứ Thời Vượng Tướng' },
							{ id: null, title: 'Chương 17: Nguyệt Tướng' },
							{ id: null, title: 'Chương 18: Nhật Thần' },
							{ id: null, title: 'Chương 19: Lục Thần' },
							{ id: null, title: 'Chương 20: Lục Hợp' },
							{ id: null, title: 'Chương 21: Lục Xung' },
							{ id: null, title: 'Chương 22: Tam Hình' },
							{ id: null, title: 'Chương 23: Ám Động' },
							{ id: null, title: 'Chương 24: Động Tán' },
							{ id: null, title: 'Chương 25: Quẻ Biến Sinh Khắc Mộ Tuyệt' },
							{ id: null, title: 'Chương 26: Phản Phục' },
							{ id: null, title: 'Chương 27: Tuần Không' },
							{ id: null, title: 'Chương 28: Sinh Vượng Mộ Tuyệt' },
						],
					},
					{
						id: '19abf401-126c-49f4-a62e-918e4ae8abe1',
					},
					{
						id: null,
						title: 'Phương Pháp Lập Quẻ Kinh Dịch',
						children: [
							{
								id: null,
								title: 'Lập Quẻ kinh Dịch Hữu Thường',
								children: [
									{
										id: null,
										title: 'Trường Hợp Đặc Biệt',
									},
								],
							},
							{
								id: null,
								title: 'Lập Quẻ kinh Dịch Bất Thường',
								children: [
									{
										id: null,
										title: 'Trường Hợp Đặc Biệt',
									},
								],
							},
						],
					},
				],
			},
			{
				id: null,
				title: 'Upading...',
			},
		],
	},
	{
		// book props
		title: 'Huyền Không Phi Tinh',
		// icon: <span className="text-2xl text-[#DEC79D]">☯</span>,
		texture: true,
		color: '#374545',
		textColor: '#DEC79D',
		illustration: (
			<Image
				src="/assets/images/document/huyen-khong-phi-tinh/cover.png"
				className="size-full object-cover ml-2"
				width={220}
				height={150}
				alt="48-laws-of-power-cover.png"
				sizes="(max-width: 768px) 100vw, 50vw"
			/>
		),

		// other props
		slug: 'huyen-khong-phi-tinh',
		status: 'published',
		toc: [
			{
				id: '6cdcabf1-184b-4902-b1b6-fe34a6f835c7',
			},
			{
				id: 'b22307a5-ddcd-4eb6-9b6a-006f9f7f8bbb',
			},
		],
	},
	{
		// book props
		title: 'Financial Matrix',
		// icon: <span className="text-2xl text-white">💊</span>,
		texture: true,
		color: '#333333',
		textColor: '#ffffff',
		illustration: (
			<Image
				src="https://i.ibb.co/Kcmjt8r0/kanchanara-rf-Ul0-Lfyays-unsplash.jpg"
				className="size-full object-cover"
				width={220}
				height={150}
				alt="the-financial-matrix-cover.png"
				sizes="(max-width: 768px) 100vw, 50vw"
			/>
		),

		// other props
		slug: 'the-financial-matrix',
		status: 'published',
		toc: [
			{
				id: '82248a9d-745b-4112-8431-49a24c1e4e5e',
				title: 'Lời nói đầu',
			},
			{
				id: null,
				title: 'Introduction',
				children: [
					{
						id: 'b513d659-29f3-4d2f-afab-4bf108f467de',
						title: 'Bài 1: Bản chất thực sự của nền kinh tế là gì?',
					},
					{
						id: '3522482c-7692-4eff-a995-0b395b8e4298',
						title: 'Bài 2: GDP, Lạm phát và "Nghịch lý của sự tiết kiệm"',
					},
					{
						id: '37ce0cbb-3532-4fb8-9e29-18513b117ea0',
						title: 'Bài 3: Ai nên điều hành nền kinh tế? (Thị trường tự do vs Bàn tay Chính phủ)',
					},
					{
						id: '92a1ece0-c017-420a-97a7-a21502b00635',
						title: 'Bài 4: Thuế - Sự bóc lột hợp pháp hay Công cụ định hướng hành vi?',
					},
					{
						id: 'd7ba6140-4604-4205-96ad-da334239f34e',
						title: 'Bài 4.1 (Mở rộng): Chén thánh "Buy, Borrow, Die" - Trò chơi Đòn bẩy và Lạm phát',
					},
				],
			},
			{
				id: null,
				title: 'Banking And Money',
				children: [
					{
						id: '0b9a6d1f-24f2-4cd0-9f60-109c37055180',
						title: 'Bài 1: Lịch sử của Tiền và "Cú lừa" vĩ đại nhất thế kỷ 20',
					},
					{
						id: '7a5e96b2-925a-4054-8402-0b654531fc8b',
						title: 'Bài 2: Hệ thống Dự trữ theo Tỷ lệ (Lâu đài xây trên cát)',
					},
					{
						id: '042c53c8-5706-46ac-88bd-6ee5d641ebd3',
						title: 'Bài 3: Ngân hàng Trung ương và sự thật về việc In tiền',
					},
				],
			},
			{
				id: null,
				title: 'Global Picture',
				children: [
					{
						id: 'e582868e-b0f5-46c5-a484-cb8ca7c4c3c1',
						title: 'Bài 1: Trật tự Tài chính Thế giới và Quyền lực của đồng Đô la',
					},
					{
						id: '1ec38b36-bb99-4493-abc4-6774c9c118c7',
						title: 'Bài 2: Những tổ chức nắm giữ vận mệnh toàn cầu (IMF, WB, BIS)',
					},
					{
						id: '85b154fd-5a15-470a-ac1b-ea7b00314367',
						title: 'Bài 3: "Bàn tay vô hình" thực sự: BlackRock, Vanguard và Deep State',
					},
				],
			},
			{
				id: null,
				title: 'Application And Future',
				children: [
					{
						id: 'af619238-2872-431e-88c0-bf9212746563',
						title: 'Bài 1: Giải phẫu Lòng tham: Bản chất của Bong bóng Kinh tế và Khủng hoảng',
					},
					{
						id: '1479a063-d05c-40cb-9979-39e664db47cb',
						title: 'Bài 2: Tâm lý học Đám đông và Nghệ thuật Thao túng Truyền thông (Smart Money vs Dumb Money)',
					},
					{
						id: '683213a3-2b52-4ef4-a26f-c164859389ca',
						title: 'Bài 3: Tương lai của Tiền tệ - Cuộc chiến sinh tử giữa CBDC và Crypto',
					},
				],
			},
			{
				id: null,
				title: 'Strategic Blueprints',
				children: [
					{
						id: 'eeab732a-fb8e-4d0e-aefb-e41ab7e01006',
						title: 'Bài 1: Chiến lược Thăng tiến trong Ma trận Tài chính (The Ascension Strategy)',
					},
				],
			},
		],
	},
]
