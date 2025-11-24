import type { IDocCollection } from '@/types/doc/doc-collection'
import { processTableOfContents } from '@/utils/document-process-content-table-extract'

const daiCuongTableOfContentsOrder: IDocCollection['collections'][number]['tableOfContent'] = [
	{
		id: 'd78921aa-d42a-45cb-9a53-604858a29b5e',
	},
	{
		id: null,
		title: 'Upading...',
	},
]

export const daiCuongTableOfContents = processTableOfContents(daiCuongTableOfContentsOrder)
