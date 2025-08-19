import type { DEV_POST_TYPE, TPost } from '@repo/stephen-v2-contents'
import { devPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostCards from '@/components/post/post-cards'

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
			<div className="flex flex-col gap-36 py-36">
				{Object.entries(devPosts).map(([key, posts]) => (
					<div key={key} className="group relative flex flex-col overflow-visible">
						<AnimatedBlock type="FADE_IN_FROM_BOTTOM" className="group/post-card relative">
							<div className="absolute -top-24 capitalize z-[-1] text-9xl font-extrabold text-neutral-400 opacity-20 duration-300 ease-in group-hover:opacity-90 dark:text-neutral-800">
								{key}
							</div>
						</AnimatedBlock>
						<PostCards className="pb-0" posts={posts} slug={key as DEV_POST_TYPE} />

						<div className="my-8 flex items-center justify-center">
							<Link href={`/topics/dev/${key}`}>
								<Button variant="outline" className="w-auto cursor-pointer">
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
