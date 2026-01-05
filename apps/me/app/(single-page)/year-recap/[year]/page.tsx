import type { TPost } from '@repo/stephen-v2-contents'
import { retroPost } from '@repo/stephen-v2-contents'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import { APP_CONFIG } from '@/configs/app-config'
import YearRecapDetail from '@/view/year-recap/pages/year-recap-detail.page'

interface IRecapByYearPageProps {
	params: Promise<{ year: string }>
}

const findpostByYear = (year: string): TPost | undefined => {
	return (retroPost as TPost[]).find((post: TPost) => post?.hashTags?.includes(year) && post.retroType === 'RECAP')
}

export async function generateMetadata({ params }: IRecapByYearPageProps): Promise<Metadata> {
	const { year } = await params
	const post = findpostByYear(year)

	if (!post) {
		notFound()
	}

	return {
		title: post.title,
		description: post.description,
		authors: { name: APP_CONFIG.author.name },
		openGraph: {
			title: post.title,
			description: post.description,
			type: 'article',
			url: post.slug,
			images: [
				{
					url: post.cover || APP_CONFIG.og,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.description,
			images: [post.cover || APP_CONFIG.og],
		},
	}
}

async function RecapByYearPage({ params }: IRecapByYearPageProps) {
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
				<YearRecapDetail post={post} />
			</div>
		</>
	)
}

export default RecapByYearPage
