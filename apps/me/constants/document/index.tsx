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
		title: 'Tự học kinh dịch',
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
							{ id: null, title: 'Chương 3: 8 Cung và 64 Quẻ Dịch' },
							{ id: null, title: 'Chương 4: Hỗn Thiên Giáp Tý' },
							{ id: null, title: 'Chương 5: Lục Thân Ca' },
							{ id: null, title: 'Chương 6: Thế Ứng' },
							{ id: null, title: 'Chương 7: Động Biến' },
							{ id: null, title: 'Chương 8: Dụng Thần' },
							{ id: null, title: 'Chương 9: Dụng Thần, Nguyên Thần, Kỵ Thần, Cừu Thần' },
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
]
