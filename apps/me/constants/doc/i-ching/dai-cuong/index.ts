import type { IDocCollection } from '@/types/doc/doc-collection'
import { processTableOfContents } from '@/utils/document-process-content-table-extract'

const daiCuongTableOfContentsOrder: IDocCollection['collections'][number]['tableOfContent'] = [
	{
		id: 'd78921aa-d42a-45cb-9a53-604858a29b5e',
	},
	{
		id: '08706243-f8a9-4647-bff2-192bf363b682',
	},
	{
		id: 'a146951c-2671-491e-a948-43370f2d51e9',
	},
	{
		id: null,
		title: 'Upading...',
	},
]

export const daiCuongTableOfContents = processTableOfContents(daiCuongTableOfContentsOrder)
