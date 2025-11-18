import type { DevBlogPost } from '@repo/stephen-v2-contents'
import type { BookProps } from '@repo/stephen-v2-ui/shadcn'
import type { ReactNode } from 'react'

interface ITableOfContent {
	id: DevBlogPost['id'] | null
	title?: string
	description?: string
	cover?: string
	children?: ITableOfContent[]
}
interface ICollections extends Partial<BookProps> {
	id: string
	title: string
	description: string
	tableOfContent: ITableOfContent[]
	slug: string
	icon?: ReactNode | string
	cover?: string
}
export interface IDocCollection {
	title: string
	description: string
	collectionName: string
	collections: ICollections[]
	status: 'draft' | 'published'
}
export interface IOtherTopicsCollection {
	title: string
	description: string
	collectionName: string
	collections: ICollections[]
}
