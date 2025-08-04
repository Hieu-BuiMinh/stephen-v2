/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BOOKS_POST_TYPE, DEV_POST_TYPE } from './post'

export * from './articles'
export * from './post'

export type TPost = {
	id: string
	slug: string
	title: string
	createdAt: string // ISO date
	updatedAt?: string // ISO date
	cover?: string
	metadata?: Record<string, any> // s.metadata()
	description?: string
	published: boolean
	hashTags?: string[]
	type: DEV_POST_TYPE | BOOKS_POST_TYPE
	body: any // s.mdx() | string
	author: {
		avatar: string
		name: string
		github: string
	}
	toc: {
		tight: boolean
		ordered: boolean
		maxDepth: number
	}

	[key: string]: any
}
