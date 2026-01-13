import { Suspense } from 'react'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import TagsPageView from '@/view/tags/pages/tags.page'

function AllTagPage() {
	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle title="Tags" description="Find your favorite topics here" />

				<Suspense fallback={null}>
					<TagsPageView />
				</Suspense>
			</div>
		</>
	)
}

export default AllTagPage
