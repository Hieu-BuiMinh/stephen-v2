import {
	type ARTICLES,
	bookRecap,
	type BOOKS_POST_TYPE,
	type DEV_POST_TYPE,
	devPost,
	type OTHERS_POST_TYPE,
	shortWriting,
} from '@repo/stephen-v2-contents'
import React from 'react'

import TopicBookTypeDetailPage from '@/view/topics/pages/book/topic-book-type-detail.page'
import TopicDevTypeDetailPage from '@/view/topics/pages/dev/topic-dev-type-detail.page'
import TopicShortWritingTypeDetailPage from '@/view/topics/pages/short-writing/topic-dev-type-detail.page'

export const dynamic = 'force-static'

type TCollection = keyof typeof ARTICLES
type TType = DEV_POST_TYPE | BOOKS_POST_TYPE | OTHERS_POST_TYPE

type TResolvedParams = {
	collection: TCollection
	type: TType
	id: string
}

type TPageParams = Promise<TResolvedParams>

export async function generateStaticParams(): Promise<TResolvedParams[]> {
	const params: TResolvedParams[] = []

	for (const post of devPost as Array<{ id: string; type: DEV_POST_TYPE }>) {
		params.push({ collection: 'dev' as TCollection, type: post.type as TType, id: String(post.id) })
	}

	for (const post of bookRecap as Array<{ id: string; type: BOOKS_POST_TYPE }>) {
		params.push({ collection: 'books' as TCollection, type: post.type as TType, id: String(post.id) })
	}

	for (const post of shortWriting as Array<{ id: string; type: OTHERS_POST_TYPE }>) {
		params.push({ collection: 'others' as TCollection, type: post.type as TType, id: String(post.id) })
	}

	return params
}

export default async function PostDetailPage({ params }: { params: TPageParams }) {
	const resolved = await params

	switch (resolved.collection) {
		case 'dev':
			return <TopicDevTypeDetailPage params={resolved} />
		case 'books':
			return <TopicBookTypeDetailPage params={resolved} />
		case 'others':
			return <TopicShortWritingTypeDetailPage params={resolved} />
		default:
			return null
	}
}
