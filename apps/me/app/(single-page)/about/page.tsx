import { shortWriting } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { notFound } from 'next/navigation'

import LightRaysClient from '@/components/effects/light-rays-client'
import MDXContentComponent from '@/components/mdx-content'
import PostPageTitle from '@/components/post/post-page-title'
import { APP_CONFIG } from '@/configs/app-config'

const getShortWritingPost = () => {
	const id = 'b13a7efd-de2a-4353-9433-5c216584939a'
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
function AboutPage() {
	const post = getShortWritingPost()

	if (!post) {
		notFound()
	}

	return (
		<div className="pb-44">
			<LightRaysClient />
			<PostPageTitle title={post.title} description={post.description} />
			<MDXContentComponent code={post.body} className="min-w-full px-3" />
		</div>
	)
}

export default AboutPage
