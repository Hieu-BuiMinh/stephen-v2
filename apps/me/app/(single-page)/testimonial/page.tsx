import { Loader } from 'lucide-react'
import type { Metadata } from 'next'
import React, { Suspense } from 'react'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import TestimonialPageView from '@/view/testimonial/pages/testimonial.page'

export const metadata: Metadata = {
	title: 'Testimonial',
	description: `Some words from people I've worked with`,
}

function TestimonialPage() {
	return (
		<div>
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
					<TestimonialPageView />
				</Suspense>
			</div>
		</div>
	)
}

export default TestimonialPage
