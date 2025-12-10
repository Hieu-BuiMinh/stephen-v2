import type { TPost } from '@repo/stephen-v2-contents'
import { shortWriting } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'

import LightRaysClient from '@/components/effects/light-rays-client'
import { PostCard } from '@/components/post/post-card'

function TopicShortWritingPage() {
	const shortWritingPosts: { [key: string]: { name: string; posts: TPost[]; description?: string } } = {
		buddhism: {
			name: 'Buddhism',
			posts: sortPostsByDate(
				shortWriting?.filter((post) => post.type === 'buddhism'),
				'desc'
			),
			description: `Exploring philosophical ideas and life principles.`,
		},
		'i-ching': {
			name: 'I Ching',
			posts: sortPostsByDate(
				shortWriting?.filter((post) => post.type === 'i-ching'),
				'desc'
			),
			description: `Insights and wisdom from the ancient Chinese text to guide decision-making.`,
		},
		'ba-zi': {
			name: 'Ba Zi (Eight Characters)',
			posts: sortPostsByDate(
				shortWriting?.filter((post) => post.type === 'ba-zi'),
				'desc'
			),
			description: `A collection of life insights and practices to help understand oneself.`,
		},
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-3 py-36 px-6">
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
