import type { TPost } from '@repo/stephen-v2-contents'
import { shortWriting } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'

import LightRaysClient from '@/components/effects/light-rays-client'
import { PostCard } from '@/components/post/post-card'

function TopicShortWritingPage() {
	const shortWritingPosts: { [key: string]: { name: string; posts: TPost[]; description?: string } } = {
		'kinh-dich': {
			name: 'Kinh Dịch',
			posts: sortPostsByDate(
				shortWriting?.filter((post) => post.type === 'kinh-dich'),
				'desc'
			),
			description: `Thoughts, mental models about front-end development.`,
		},
		'bat-tu': {
			name: 'Bát Tự',
			posts: sortPostsByDate(
				shortWriting?.filter((post) => post.type === 'bat-tu'),
				'desc'
			),
			description: `These are a collection of code snippets I have used in the past and want to share with you.`,
		},
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-3 py-36">
				{Object.entries(shortWritingPosts).map(([key, value]) => (
					<div key={key} className="group relative flex flex-col gap-3 overflow-visible">
						<div className="flex flex-col gap-3">
							<p className="text-base font-bold sm:text-xl md:text-3xl">{value.name}</p>
							<p className="text-sm font-light text-muted-foreground md:text-lg">{value?.description}</p>
						</div>

						<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
							{value?.posts.map((post, index) => {
								const url = post.type
									? `/topics/others/${post.type}/${post.id}`
									: `/topics/others/${post.id}`
								return <PostCard key={post.slug} post={post} url={url} delay={0.1 * index} />
							})}
						</div>

						<div className="my-8 flex items-center justify-center">
							<Link href={`/topics/others/${key}`}>
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

export default TopicShortWritingPage
