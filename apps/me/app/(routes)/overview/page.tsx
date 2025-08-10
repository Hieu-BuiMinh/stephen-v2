import { shortWriting } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { notFound } from 'next/navigation'

import LightRaysClient from '@/components/effects/light-rays-client'
import MDXContentComponent from '@/components/mdx-content'
import PostPageTitle from '@/components/post/post-page-title'
import { APP_CONFIG } from '@/configs/app-config'

const getShortWritingPost = () => {
	const id = 'a71f3d38-48db-4d6f-873e-531ac25f3c54'
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

function OverviewPage() {
	const post = getShortWritingPost()

	if (!post) {
		notFound()
	}

	return (
		<>
			<LightRaysClient />
			<PostPageTitle title="Attribution" description="Journey to create this website." />
			<MDXContentComponent code={post.body} className="min-w-full" />
		</>
	)
}

export default OverviewPage
