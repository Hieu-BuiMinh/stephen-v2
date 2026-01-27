import type { DEV_POST_TYPE, OTHERS_POST_TYPE, TPost } from '@repo/stephen-v2-contents'
import { type ARTICLES, bookRecap, type BOOKS_POST_TYPE } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import LightRaysClient from '@/components/effects/light-rays-client'
import { BookCard } from '@/components/post/book-card'
import PostPageTitle from '@/components/post/post-page-title'

type T = TPost & { bookCover: string }
type TType = DEV_POST_TYPE | BOOKS_POST_TYPE | OTHERS_POST_TYPE
interface ITopicBookTypePageProps {
	params: Promise<{ collection: keyof typeof ARTICLES; type: TType }>
}

const sortedPostsByType = ({ type }: { type: TType }) => {
	const posts = bookRecap?.filter((post) => post?.type?.toLocaleLowerCase() === type)?.slice(0, 4)

	return sortPostsByDate(posts, 'desc')
}

async function TopicBookTypePage({ params }: Readonly<ITopicBookTypePageProps>) {
	const { type } = await params

	const headertitle: Partial<Record<TType, { title: string; description: string }>> = {
		'life-habits': {
			title: 'Life Habits',
			description: `Chill tips & fresh mindsets to keep your life on point`,
		},
		productivity: {
			title: 'Productivity',
			description: `Handy tricks, tools & snippets to level up your workflow`,
		},
		others: {
			title: 'Others',
			description: `Random cool stuff that doesn't fit anywhere else`,
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
						<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20">
							{postList?.map((post) => {
								const url = `/topics/books/${type}/${post.id}`
								return <BookCard key={post.slug} url={url} post={post as T} />
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

export default TopicBookTypePage
