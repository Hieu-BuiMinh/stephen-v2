import { shortWriting } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'

import PostPageTitle from '@/components/post/post-page-title'
import LunarTimeChartPageView from '@/view/tools/pages/lunar-time-chart/lunar-time-chart.page'
import { notFound } from 'next/navigation'
import { APP_CONFIG } from '@/configs/app-config'
import MDXContentComponent from '@/components/mdx-content'

const getShortWritingPost = () => {
	const id = 'b6371c36-fb1e-4cc1-96bc-63e776ee54f8'
	return getVelitePostById({ id, postsList: shortWriting })
}

export async function generateMetadata() {
	const post = getShortWritingPost()

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

function LunarDateChart() {
	const post = getShortWritingPost()

	return (
		<div className="pb-44">
			<PostPageTitle
				title="Lunar Day Conversion Chart"
				description="Explore how to convert between the Lunar and Gregorian calendars with this intuitive and easy-to-use tool."
			/>

			<LunarTimeChartPageView />
			{post.body && <MDXContentComponent code={post.body} className="min-w-full px-3 pt-8" />}
		</div>
	)
}

export default LunarDateChart
