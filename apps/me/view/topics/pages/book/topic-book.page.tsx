import type { TPost } from '@repo/stephen-v2-contents'
import { bookRecap } from '@repo/stephen-v2-contents'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'

import LightRaysClient from '@/components/effects/light-rays-client'
import { BookCard } from '@/components/post/book-card'

type T = TPost & { bookCover: string }

function TopicBookPageView() {
	const bookRecaps: { [key: string]: { name: string; posts: T[] } } = {
		'life-habits': {
			name: 'Life Habits',
			posts: bookRecap?.filter((post) => post.type === 'life-habits'),
		},
		productivity: {
			name: 'Productivity',
			posts: bookRecap?.filter((post) => post.type === 'productivity'),
		},
		others: {
			name: 'Others',
			posts: bookRecap?.filter((post) => post.type === 'others'),
		},
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-36 py-36">
				{Object.entries(bookRecaps).map(([key, value]) => (
					<div key={key} className="group relative flex flex-col overflow-visible">
						<AnimatedBlock type="FADE_IN_FROM_BOTTOM" className="group/post-card relative">
							<div className="absolute -top-24 capitalize z-[-1] text-9xl font-extrabold text-neutral-400 opacity-20 duration-300 ease-in group-hover:opacity-90 dark:text-neutral-800">
								{value.name}
							</div>
						</AnimatedBlock>

						<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-0">
							{value?.posts?.map((post) => {
								const url = `/topics/books/${key}/${post.id}`
								return <BookCard key={post.slug} post={post} url={url} />
							})}
						</div>

						<div className="my-8 flex items-center justify-center">
							<Link href={`/topics/books/${key}`}>
								<Button variant="secondary-matter" className="w-auto cursor-pointer">
									View All
								</Button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default TopicBookPageView
