import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import { APP_CONFIG } from '@/configs/app-config'
import { mockPhotoJournalData } from '@/constants/photo-journal'
import PhotoJournalPageView from '@/view/photo-journal/pages/photo-journal.page'

export const metadata: Metadata = {
	title: 'Photo Journal',
	description: APP_CONFIG.description,
	openGraph: {
		title: 'Photo Journal',
		description: APP_CONFIG.description,
	},
}
function PhotoJournal() {
	const years = Array.from(new Set(mockPhotoJournalData.map((d) => dayjs(d.date).year()))).sort((a, b) => b - a)

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle title="Collected Memories" description="A visual diary of unforgettable moments" />

				<Suspense fallback={null}>
					<div className="flex flex-col gap-20 px-3 pb-32">
						{years.map((year) => (
							<div key={year} className="flex flex-col gap-2">
								<h2 className="text-3xl font-bold">{year}</h2>
								<PhotoJournalPageView data={mockPhotoJournalData} year={year} />
							</div>
						))}
					</div>
				</Suspense>
			</div>
		</>
	)
}

export default PhotoJournal
