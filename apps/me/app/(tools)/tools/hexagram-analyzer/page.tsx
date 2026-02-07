import { shortWriting } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { notFound } from 'next/navigation'
import React from 'react'

import PostPageTitle from '@/components/post/post-page-title'
import { APP_CONFIG } from '@/configs/app-config'
import HexagramAnalyzerPageView from '@/view/tools/pages/hexagram-analyzer/hexagram-analyzer.page'

const getShortWritingPost = () => {
	const id = 'b6371c36-fb1e-4cc1-96bc-63e776ee54f8'
	return getVelitePostById({ id, postsList: shortWriting })
}

export async function generateMetadata() {
	const post = getShortWritingPost()

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

function HexagramAnalyzer() {
	return (
		<div className="pb-44">
			<PostPageTitle
				title="I Ching Hexagram Tool"
				description="Explore and interpret I Ching hexagrams with an intuitive six-line hexagram analysis tool."
			/>

			<HexagramAnalyzerPageView />
		</div>
	)
}

export default HexagramAnalyzer
