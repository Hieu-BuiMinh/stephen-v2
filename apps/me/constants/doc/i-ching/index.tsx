import { tuHocKinhdichTap1TableOfContents } from '@/constants/doc/i-ching/tu-hoc-kinh-dich-tap-1'
import type { IDocCollection } from '@/types/doc/doc-collection'

export const iChingCollection: IDocCollection['collections'] = [
	{
		id: '1',
		title: 'Tự học kinh dịch (Tập 1)',
		description: 'Tự học kinh dịch',
		slug: 'tu-hoc-kinh-dich-tap-1',
		cover: '',
		icon: <span className="text-5xl text-muted">☯</span>,
		tableOfContent: tuHocKinhdichTap1TableOfContents,
	},
]
