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
							{
								id: '6a10122d-e603-4fa7-a830-ccf23946239e',
							},
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
