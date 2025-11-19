import type { TPost } from '@repo/stephen-v2-contents'
import { devPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'

import LightRaysClient from '@/components/effects/light-rays-client'
import { PostCard } from '@/components/post/post-card'
import { ShortCard } from '@/components/post/short-card'

function TopicDevPage() {
	const devPosts: { [key: string]: TPost[] } = {
		post: sortPostsByDate(
			devPost?.filter((post) => post.type === 'post'),
			'desc'
		),
		short: sortPostsByDate(
			devPost?.filter((post) => post.type === 'short'),
			'desc'
		),
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-36 py-36 px-6">
				{Object.entries(devPosts).map(([key, posts]) => (
					<div key={key} className="group relative flex flex-col overflow-visible">
						<AnimatedBlock type="FADE_IN_FROM_BOTTOM" className="group/post-card relative">
							<div className="absolute -top-24 capitalize z-[-1] text-9xl font-extrabold text-neutral-400 opacity-20 duration-300 ease-in group-hover:opacity-90 dark:text-neutral-800">
								{key}
							</div>
						</AnimatedBlock>

						{key === 'post' && (
							<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
								{posts.map((post, index) => {
									const url = post.type
										? `/topics/dev/${post.type}/${post.id}`
										: `/topics/dev/${post.id}`
									return <PostCard key={post.slug} post={post} url={url} delay={0.1 * index} />
								})}
							</div>
						)}
						{key === 'short' && (
							<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
								{posts.map((post, index) => {
									const url = post.type
										? `/topics/dev/${post.type}/${post.id}`
										: `/topics/dev/${post.id}`
									return <ShortCard key={post.slug} post={post} url={url} delay={0.1 * index} />
								})}
							</div>
						)}

						<div className="my-8 flex items-center justify-center">
							<Link href={`/topics/dev/${key}`}>
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

export default TopicDevPage
