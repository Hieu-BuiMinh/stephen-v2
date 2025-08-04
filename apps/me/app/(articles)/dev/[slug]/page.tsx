import type { DEV_POST_TYPE } from '@repo/stephen-v2-contents'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import PostPageView from '@/view/articles/dev/post/pages/post.page'

interface IDevPostPageProps {
	params: Promise<{ slug: DEV_POST_TYPE }>
}

async function DevPostPage({ params }: IDevPostPageProps) {
	const { slug } = await params

	const headertitle = {
		post: {
			title: 'Dev Post',
			description: `Thoughts, mental models, and tutorials about front-end development.`,
		},
		short: {
			title: 'Dev Short',
			description: `These are a collection of code snippets I have used in the past and want to share with you.`,
		},
		doc: {
			title: 'Dev Doc',
			description: `My personal notes that's not long enough to be a blog post`,
		},
	}

	const headerTitleBySlug = headertitle[slug as keyof typeof headertitle]

	if (!headerTitleBySlug) {
		return (
			<>
				<LightRaysClient />
				<div className="flex items-center justify-center min-h-[450px]">
					<TextEffect preset="slide" per="word" as="span" delay={0.5} className="mx-auto text-xl capitalize">
						Nothing you can find here... ㄟ( ▔, ▔ )ㄏ
					</TextEffect>
				</div>
			</>
		)
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle title={headerTitleBySlug.title} description={headerTitleBySlug.description} />
				<PostPageView article="dev" slug={slug} />
			</div>
		</>
	)
}

export default DevPostPage
