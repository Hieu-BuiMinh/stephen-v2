import { type ARTICLES, type OTHERS_POST_TYPE, shortWriting } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import { ShortCard } from '@/components/post/short-card'

interface ITopicShortWritingTypePageProps {
	params: Promise<{ collection: keyof typeof ARTICLES; type: OTHERS_POST_TYPE }>
}

const sortedPostsByType = ({ type }: { type: OTHERS_POST_TYPE }) => {
	const posts = shortWriting?.filter((post) => post?.type?.toLocaleLowerCase() === type)

	return sortPostsByDate(posts, 'desc')
}

async function TopicShortWritingTypePage({ params }: ITopicShortWritingTypePageProps) {
	const { type } = await params

	const headertitle: Partial<Record<OTHERS_POST_TYPE, { title: string; description: string }>> = {
		journaling: {
			title: 'Journaling',
			description: 'A record of experiences, reflections, and gradual personal growth over time.',
		},

		buddhism: {
			title: 'Buddhism',
			description: `Exploring philosophical ideas and life principles.`,
		},
		'i-ching': {
			title: 'I Ching',
			description: `Insights and wisdom from the ancient Chinese text to guide decision-making.`,
		},
		'ba-zi': {
			title: 'Ba Zi (Eight Characters)',
			description: `A collection of life insights and practices to help understand oneself.`,
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
								const url = post.type
									? `/topics/others/${post.type}/${post.id}`
									: `/topics/others/${post.id}`

								return <ShortCard key={post.slug} post={post} url={url} delay={0.1 * index} />
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

export default TopicShortWritingTypePage
