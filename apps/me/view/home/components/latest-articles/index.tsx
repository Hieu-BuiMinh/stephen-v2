import { devPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { TextEffect } from '@repo/stephen-v2-ui/motion'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'

import { PostCard } from '@/components/post/post-card'
import { ShortCard } from '@/components/post/short-card'
import TextGradient from '@/components/texts/text-gradient'
function LatestArticles() {
	const postList = sortPostsByDate([...devPost], 'desc').slice(0, 4)

	return (
		<div className="flex flex-col gap-10 items-center justify-center my-32">
			<TextGradient as="div" className="text-center font-semibold text-3xl md:text-4xl max-w-xl">
				<TextEffect preset="slide" per="char">
					Latest Articles
				</TextEffect>
			</TextGradient>

			<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{postList.map((post) => {
					return post.type === 'post' ? (
						<PostCard
							key={post.slug}
							collection={'dev'}
							type={post.type}
							post={post}
							className="p-0 border-none"
						/>
					) : (
						<ShortCard key={post.slug} collection={'dev'} type={post.type} post={post} />
					)
				})}
			</div>

			<div className="my-8 flex items-center justify-center">
				<Link href={`/dev`}>
					<Button variant="outline" className="w-auto cursor-pointer">
						Explore
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default LatestArticles
