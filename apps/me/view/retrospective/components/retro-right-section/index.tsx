import type { TPost } from '@repo/stephen-v2-contents'
import { retroPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { d } from '@repo/stephen-v2-utils'
import { Minus } from 'lucide-react'
import Link from 'next/link'

import RetroPostItem from '@/view/retrospective/components/retro-post-item'

type PostsByYear = Record<string, TPost[]>

export function groupPostsByYear(posts: TPost[]): PostsByYear {
	const sorted = [...posts].sort((a, b) => {
		return d(b.milestone).valueOf() - d(a.milestone).valueOf()
	})

	return sorted.reduce<PostsByYear>((acc, post) => {
		const year = d(post.milestone).year().toString()

		if (!acc[year]) {
			acc[year] = []
		}

		acc[year].push(post)
		return acc
	}, {})
}

function RetroRightSection() {
	const postList = sortPostsByDate(
		retroPost.filter((post: TPost) => post.retroType === 'MILESTONE'),
		'desc'
	)
	const postsByYear = groupPostsByYear(postList)

	const years = Object.keys(postsByYear)
		.map(Number)
		.sort((a, b) => b - a)

	return (
		<div className="relative flex flex-col gap-10">
			{years.map((year) => (
				<section key={year} className="flex flex-col gap-5 relative">
					<div className="absolute h-[calc(100%-1rem)] top-[1rem] -left-[6rem] hidden md:block">
						<div className="h-full relative">
							<Link
								id={`year-${year}`}
								href={`#year-${year}`}
								className="flex gap-2 items-center text-muted-foreground text-xl font-bold sticky top-[5rem]"
							>
								{year}
								<Minus className="text-muted-foreground/50" />
							</Link>
						</div>
					</div>

					<div className="flex flex-col gap-10">
						{postsByYear[year.toString()].map((post) => (
							<RetroPostItem key={post.id} post={post} />
						))}
					</div>
				</section>
			))}
		</div>
	)
}

export default RetroRightSection
