import type { IDocCollection } from '@/types/doc/doc-collection'
import { processTableOfContents } from '@/utils/document-process-content-table-extract'

const tuHocKinhdichTap1TableOfContentsOrder: IDocCollection['collections'][number]['tableOfContent'] = [
	{
		id: '75c80ca3-c5e4-449c-b718-f9dca03b6daa',
		title: '',
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
]

export const tuHocKinhdichTap1TableOfContents = processTableOfContents(tuHocKinhdichTap1TableOfContentsOrder)
