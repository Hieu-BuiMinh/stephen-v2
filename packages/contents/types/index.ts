/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DEV_POST_TYPE } from './dev-post'

export * from './articles'
export * from './dev-post'

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
	type: DEV_POST_TYPE
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
