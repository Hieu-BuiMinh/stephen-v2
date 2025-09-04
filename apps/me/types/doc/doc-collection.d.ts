import type { ReactNode } from 'react'

interface ITableOfContent {
	id: string
	title: string
	description: string
	cover?: string
	children?: ITableOfContent[]
}
interface ICollections {
	id: string
	title: string
	description: string
	cover?: string
	tableOfContent: ITableOfContent[]
}
export interface IDocCollection {
	icon: ReactNode
	title: string
	description: string
	collectionName: string
	collections: ICollections[]
	status: 'draft' | 'published'
}
