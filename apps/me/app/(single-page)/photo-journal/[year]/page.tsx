import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import { APP_CONFIG } from '@/configs/app-config'
import { mockPhotoJournalData } from '@/constants/photo-journal'
import PhotoJournalDetailPageView from '@/view/photo-journal/pages/photo-journal-detail.page'

export const dynamic = 'force-static'

interface IPhotoJournalDetailProps {
	params: Promise<{ year: string }>
}

export async function generateStaticParams(): Promise<{ year: string }[]> {
	const years = Array.from(new Set(mockPhotoJournalData.map((d) => dayjs(d.date).year())))
	return years.map((y) => ({ year: y.toString() }))
}

export async function generateMetadata({ params }: IPhotoJournalDetailProps): Promise<Metadata> {
	const { year } = await params

	return {
		title: `Photo Journal ${year} - ${APP_CONFIG.name}`,
		description: `A visual diary of unforgettable moments in ${year}`,
		openGraph: {
			title: `Photo Journal ${year} - ${APP_CONFIG.name}`,
			description: `A visual diary of unforgettable moments in ${year}`,
		},
	}
}

export default async function PhotoJournalDetailPage({ params }: IPhotoJournalDetailProps) {
	const { year } = await params
	const yearNum = parseInt(year, 10)

	const validYears = Array.from(new Set(mockPhotoJournalData.map((d) => dayjs(d.date).year())))

	if (isNaN(yearNum) || !validYears.includes(yearNum)) {
		notFound()
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle title={`Memories of ${year}`} description="A visual diary of unforgettable moments" />

				<Suspense fallback={null}>
					<PhotoJournalDetailPageView data={mockPhotoJournalData} year={yearNum} />
				</Suspense>
			</div>
		</>
	)
}
