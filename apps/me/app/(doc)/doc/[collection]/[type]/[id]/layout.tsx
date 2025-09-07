import { docPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import DocumentDetailLayout from '@/components/layouts/doc-detail-layout'
import { APP_CONFIG } from '@/configs/app-config'

interface IProps {
	params: Promise<{ collection: string; type: string; id: string }>
	children: React.ReactNode
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
	const { id } = await params

	const allPost = docPost
	const post = await getVelitePostById({ id, postsList: allPost })

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

function Layout({ children }: IProps) {
	return <DocumentDetailLayout>{children}</DocumentDetailLayout>
}

export default Layout
