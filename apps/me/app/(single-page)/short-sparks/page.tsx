import { Loader } from 'lucide-react'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import ShortSparkPageView from '@/view/short-spark/pages/short-spark.page'

export const metadata: Metadata = {
	title: 'Short Sparks',
	description: `Some videos that I really enjoy and find inspiring. This is where I share these little bursts motivation, hoping they'll spark something in you too 🌟`,
}

function ShortSparkPage() {
	return (
		<Suspense
			fallback={
				<div className="flex w-full items-center justify-center">
					<Loader size={20} className="animate-spin" />
				</div>
			}
		>
			<ShortSparkPageView />
		</Suspense>
	)
}

export default ShortSparkPage
