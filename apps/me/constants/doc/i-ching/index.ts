import { tuHocKinhdichTap1TableOfContents } from '@/constants/doc/i-ching/tu-hoc-kinh-dich-tap-1'
import type { IDocCollection } from '@/types/doc/doc-collection'

export const iChingCollection: IDocCollection['collections'] = [
	{
		id: '1',
		title: 'Tự học kinh dịch - Tập 1',
		description: 'Tự học kinh dịch',
		cover: '',
		tableOfContent: tuHocKinhdichTap1TableOfContents,
	},
]
