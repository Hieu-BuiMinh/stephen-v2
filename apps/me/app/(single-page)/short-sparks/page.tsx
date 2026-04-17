import { Loader } from 'lucide-react'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import ShortSparkPageView from '@/view/short-spark/pages/short-spark.page'

export const metadata: Metadata = {
	title: 'Short Sparks',
	description: `Some videos that I really enjoy and find inspiring. This is where I share these little bursts motivation, hoping they'll spark something in you too`,
}

function ShortSparkPage() {
	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle title={metadata.title as string} description={metadata.description as string} />
				<Suspense
					fallback={
						<div className="flex w-full items-center justify-center">
							<Loader size={20} className="animate-spin" />
						</div>
					}
				>
					<ShortSparkPageView />
				</Suspense>
			</div>
		</>
	)
}

export default ShortSparkPage
