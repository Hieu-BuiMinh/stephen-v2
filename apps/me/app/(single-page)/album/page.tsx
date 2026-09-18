import type { Metadata } from 'next'

import { APP_CONFIG } from '@/configs/app-config'
import { albumArchive } from '@/view/album/data/album.data'
import AlbumPageView from '@/view/album/pages/album.page'

const title = 'Photo Album'
const description = 'A quiet personal photo archive of places, people, and ordinary days I wanted to keep.'
const canonicalPath = '/album'

export const metadata: Metadata = {
	title,
	description,
	keywords: ['personal photo album', 'visual diary', 'photo archive', 'life moments', 'Stephen'],
	alternates: {
		canonical: canonicalPath,
	},
	openGraph: {
		title: `${title} - ${APP_CONFIG.name}`,
		description,
		url: canonicalPath,
		type: 'website',
		images: [
			{
				url: '/assets/images/og.png',
				width: 1200,
				height: 630,
				alt: `${title} - ${APP_CONFIG.name}`,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${title} - ${APP_CONFIG.name}`,
		description,
		images: ['/assets/images/og.png'],
	},
}

export default function AlbumPage() {
	const media = Object.values(albumArchive).flat()
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: title,
		description,
		url: `${APP_CONFIG.url}${canonicalPath}`,
		mainEntity: {
			'@type': 'ImageGallery',
			name: title,
			numberOfItems: media.length,
			associatedMedia: media.map((item) => ({
				'@type': item.type === 'photo' ? 'ImageObject' : 'VideoObject',
				contentUrl: new URL(item.src, APP_CONFIG.url).toString(),
				...(item.type === 'video' && {
					thumbnailUrl: new URL(item.poster, APP_CONFIG.url).toString(),
				}),
				dateCreated: item.date,
				caption: item.description,
				width: item.width,
				height: item.height,
			})),
		},
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
			/>
			<AlbumPageView />
		</>
	)
}
