import type { DEV_POST_TYPE } from '@repo/stephen-v2-contents'

import LightRaysComponent from '@/components/effects/light-rays'
import PageTitle from '@/components/post/page-title'
import PostPageView from '@/view/articles/dev/post/pages/post.page'

interface IDevPostPageProps {
	params: Promise<{ slug: DEV_POST_TYPE }>
}

async function DevPostPage({ params }: IDevPostPageProps) {
	const { slug } = await params

	const headertitle = {
		post: {
			title: 'Dev Post',
			description: `My personal notes that's not long enough to be a blog post`,
		},
		short: {
			title: 'Dev Short',
			description: `My personal notes that's not long enough to be a blog post`,
		},
		doc: {
			title: 'Dev Doc',
			description: `My personal notes that's not long enough to be a blog post`,
		},
	}

	const headerTitleBySlug = headertitle[slug as keyof typeof headertitle]

	if (!headerTitleBySlug) {
		return (
			<>
				<LightRaysComponent
					raysOrigin="top-center"
					raysColor="#ffffff"
					raysSpeed={0.5}
					lightSpread={2}
					rayLength={1.2}
					fadeDistance={0.5}
					saturation={0.9}
					followMouse={true}
					mouseInfluence={0}
					noiseAmount={0.1}
					distortion={0}
					pulsating={false}
					className="absolute inset-0 hidden md:block"
				/>
				<div className="flex flex-col gap-5 min-h-[450px]">
					<span className="m-auto">Nothing you can find here... ㄟ( ▔, ▔ )ㄏ</span>
				</div>
			</>
		)
	}

	return (
		<>
			<LightRaysComponent
				raysOrigin="top-center"
				raysColor="#ffffff"
				raysSpeed={0.5}
				lightSpread={2}
				rayLength={1.2}
				fadeDistance={0.5}
				saturation={0.9}
				followMouse={true}
				mouseInfluence={0}
				noiseAmount={0.1}
				distortion={0}
				pulsating={false}
				className="absolute inset-0 hidden md:block"
			/>
			<div className="flex flex-col gap-5">
				<PageTitle title={headerTitleBySlug.title} description={headerTitleBySlug.description} />
				<PostPageView article="dev" slug={slug} />
			</div>
		</>
	)
}

export default DevPostPage
