import { type ARTICLES, type DEV_POST_TYPE, devPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostCards from '@/components/post/post-cards'
import PostPageTitle from '@/components/post/post-page-title'

interface ITopicDevTypePageProps {
	params: Promise<{ collection: 'dev' | 'buddhism' | 'writing'; type: DEV_POST_TYPE }>
}

const sortedPostsBySlug = ({ article, slug }: { article: keyof typeof ARTICLES; slug: DEV_POST_TYPE }) => {
	let postCollection = []

	switch (article) {
		case 'dev':
			postCollection = devPost?.filter((post) => post.type === slug)
			break

		default:
			postCollection = []
			break
	}

	const posts = postCollection?.filter((post) => post?.type?.toLocaleLowerCase() === slug)

	return sortPostsByDate(posts, 'desc')
}

async function TopicDevTypePage({ params }: ITopicDevTypePageProps) {
	const { collection, type } = await params

	const headertitle = {
		post: {
			title: 'Dev Post',
			description: `Thoughts, mental models about front-end development.`,
		},
		short: {
			title: 'Dev Short',
			description: `These are a collection of code snippets I have used in the past and want to share with you.`,
		},
		doc: {
			title: 'Dev Doc',
			description: `...`,
		},
	}

	const headerTitleByType = headertitle[type as keyof typeof headertitle]

	if (!headerTitleByType) {
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

	const postList = sortedPostsBySlug({ article: collection, slug: type })

	return (
		<>
			<LightRaysClient />

			<div className="flex flex-col gap-5">
				<PostPageTitle title={headerTitleByType.title} description={headerTitleByType.description} />
				<div className="w-full min-h-52 flex">
					{postList?.length > 0 ? (
						<PostCards posts={postList} slug={type} />
					) : (
						<TextEffect preset="slide" per="word" delay={0.5} className="mx-auto text-xl capitalize">
							I have no posts yet... ㄟ( ▔, ▔ )ㄏ
						</TextEffect>
					)}
				</div>
			</div>
		</>
	)
}

export default TopicDevTypePage
