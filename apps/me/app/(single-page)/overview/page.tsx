import { shortWriting } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'
import { notFound } from 'next/navigation'

import LightRaysClient from '@/components/effects/light-rays-client'
import MDXContentComponent from '@/components/mdx-content'
import PostPageTitle from '@/components/post/post-page-title'
import Signature from '@/components/signature'
import { APP_CONFIG } from '@/configs/app-config'
import ConfettiRain from '@/components/confetti/confetti-rain'

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
		<div className="pb-44">
			<LightRaysClient />
			<ConfettiRain />
			<PostPageTitle
				title="Welcome to Version 2.0"
				description="A fresh new look, better performance, and more to explore."
			/>
			<MDXContentComponent code={post.body} className="min-w-full" />

			<div className="flex flex-col items-end justify-center gap-4 mt-10 ml-auto max-w-[226px]">
				<p className="w-full text-base text-center">All the best,</p>
				<Signature className="h-[145px] w-full max-w-[226px]" />
				<p className="w-full text-base text-center">Stephen 🪶</p>
			</div>
		</div>
	)
}

export default OverviewPage
