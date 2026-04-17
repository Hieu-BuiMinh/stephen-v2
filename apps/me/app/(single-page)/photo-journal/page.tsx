import { Suspense } from 'react'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import PhotoJournalPageView from '@/view/photo-journal/pages/photo-journal.page'

function PhotoJournal() {
	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle title="Collected Memories" description="A visual diary of unforgettable moments" />

				<Suspense fallback={null}>
					<PhotoJournalPageView />
				</Suspense>
			</div>
		</>
	)
}

export default PhotoJournal
