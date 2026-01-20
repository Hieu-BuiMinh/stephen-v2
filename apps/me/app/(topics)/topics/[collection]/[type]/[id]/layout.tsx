import type { BOOKS_POST_TYPE, DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import { bookRecap, devPost, shortWriting } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { APP_CONFIG } from '@/configs/app-config'

interface GenerateMetaProps {
	params: Promise<{ slug: DEV_POST_TYPE & BOOKS_POST_TYPE; id: string }>
}

export async function generateMetadata({ params }: GenerateMetaProps): Promise<Metadata> {
	const { id } = await params

	const allPost = [...devPost, ...bookRecap, ...shortWriting]

	const post = await getVelitePostById({ id, postsList: allPost })

	if (!post) {
		notFound()
	}

	return {
		title: `${post.title} | by Stephen 🪶`,
		description: post.description,
		authors: { name: APP_CONFIG.author.name },
		openGraph: {
			title: post.title,
			description: post.description,
			type: 'article',
			url: post.slug,
			images: [
				{
					url: post.cover || APP_CONFIG.og,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.description,
			images: [post.cover || APP_CONFIG.og],
		},
	}
}

async function TopicCollectionTypeDetailLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}

export default TopicCollectionTypeDetailLayout
