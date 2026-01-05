import type { TPost } from '@repo/stephen-v2-contents'
import { retroPost } from '@repo/stephen-v2-contents'
import { notFound } from 'next/navigation'
import React from 'react'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'

const findpostByYear = (year: string): TPost | undefined => {
	return (retroPost as TPost[]).find((post: TPost) => post?.hashTags?.includes(year) && post.retroType === 'RECAP')
}

async function RecapDetailLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ year: string }>
}) {
	const { year } = await params

	const post = findpostByYear(year)

	if (!post) {
		notFound()
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle
					title="Year Recap"
					description="Explore the milestones, achievements, and unforgettable moments from each year."
				/>
				{children}
			</div>
		</>
	)
}

export default RecapDetailLayout
