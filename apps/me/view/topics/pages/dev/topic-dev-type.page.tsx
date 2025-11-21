import { type ARTICLES, type DEV_POST_TYPE, devPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import LightRaysClient from '@/components/effects/light-rays-client'
import { PostCard } from '@/components/post/post-card'
import PostPageTitle from '@/components/post/post-page-title'
import { ShortCard } from '@/components/post/short-card'

interface ITopicDevTypePageProps {
	params: Promise<{ collection: keyof typeof ARTICLES; type: DEV_POST_TYPE }>
}

const sortedPostsByType = ({ type }: { type: DEV_POST_TYPE }) => {
	const posts = devPost?.filter((post) => post?.type?.toLocaleLowerCase() === type)

	return sortPostsByDate(posts, 'desc')
}

async function TopicDevTypePage({ params }: ITopicDevTypePageProps) {
	const { type } = await params

	const headertitle: Partial<Record<DEV_POST_TYPE, { title: string; description: string }>> = {
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
			description: `Developer documentation, guidelines, and references for projects.`,
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

	const postList = sortedPostsByType({ type })

	return (
		<>
			<LightRaysClient />

			<div className="flex flex-col gap-5">
				<PostPageTitle title={headerTitleByType.title} description={headerTitleByType.description} />

				<div className="w-full min-h-52 flex px-6 py-36">
					{postList?.length > 0 ? (
						<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{postList.map((post, index) => {
								const url = post.type ? `/topics/dev/${post.type}/${post.id}` : `/topics/dev/${post.id}`

								if (post.type === 'short') {
									return <ShortCard key={post.slug} post={post} url={url} delay={0.1 * index} />
								}

								return <PostCard key={post.slug} post={post} url={url} delay={0.1 * index} />
							})}
						</div>
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
