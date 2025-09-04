import { iChingCollection } from '@/constants/doc/i-ching'
import type { IDocCollection } from '@/types/doc/doc-collection'

export const docCollections: IDocCollection[] = [
	{
		title: 'I Ching',
		description: 'Learn about the origins and evolution of the I Ching, an ancient oracle and philosophy.',
		collectionName: 'i-ching',
		collections: iChingCollection,
		status: 'published',
	},
	{
		title: 'Buddhism',
		description: 'Minus iste aliquam',
		collectionName: 'buddhism',
		collections: [],
		status: 'draft',
	},
]
