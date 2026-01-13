'use client'

import { TextEffect } from '@repo/stephen-v2-ui/motion'

import { PostCard } from '@/components/post/post-card'
import { allPostByTag } from '@/constants/post/post.constant'
import { TagsFilterProvider, useTagsFilter } from '@/view/tags/components/providers/tags-filter.provider'
import TagActions from '@/view/tags/components/tags-action'

function TagsPageInner() {
	const { posts } = useTagsFilter()

	return (
		<div className="pt-5 pb-36">
			<TagActions />

			<div className="w-full min-h-52 flex pt-8">
				<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{posts.length > 0 ? (
						posts.map((post, index) => {
							const url = `/tags/${post.id}`
							return <PostCard key={post.slug} post={post} url={url} delay={0.1 * index} />
						})
					) : (
						<TextEffect
							preset="slide"
							per="word"
							delay={0.5}
							className="mx-auto my-5 text-xl capitalize col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
						>
							Not found... ㄟ( ▔, ▔ )ㄏ
						</TextEffect>
					)}
				</div>
			</div>
		</div>
	)
}

export default function TagsPageView() {
	return (
		<TagsFilterProvider postsSource={allPostByTag}>
			<TagsPageInner />
		</TagsFilterProvider>
	)
}
