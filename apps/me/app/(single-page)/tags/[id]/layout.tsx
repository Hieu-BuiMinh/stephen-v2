import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { APP_CONFIG } from '@/configs/app-config'
import { allPostByTag } from '@/constants/post/post.constant'

interface GenerateMetaProps {
	params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: GenerateMetaProps): Promise<Metadata> {
	const { id } = await params
	const post = await getVelitePostById({ id, postsList: allPostByTag })

	if (!post) {
		notFound()
	}

	return {
		title: post.title,
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

async function DireactlyReadPostDetailLayout({
	children,
	// params,
}: {
	children: React.ReactNode
	// params: Promise<{ id: string }>
}) {
	return <>{children}</>
}

export default DireactlyReadPostDetailLayout
