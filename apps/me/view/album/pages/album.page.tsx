'use client'

import { useEffect, useRef, useState } from 'react'

import PostPageTitle from '@/components/post/post-page-title'
import AlbumIntro from '@/view/album/components/album-intro'
import AlbumNavigation from '@/view/album/components/album-navigation'
import AlbumYearSection from '@/view/album/components/album-year-section'
import MediaLightbox from '@/view/album/components/media-lightbox'
import { albumArchive, type AlbumMedia } from '@/view/album/data/album.data'

type YearAlbum = {
	year: number
	items: AlbumMedia[]
}

const albums: YearAlbum[] = Object.entries(albumArchive)
	.map(([year, items]) => ({
		year: Number(year),
		items: [...items].sort((a, b) => b.date.localeCompare(a.date)),
	}))
	.sort((a, b) => b.year - a.year)

const allMedia = albums.flatMap(({ items }) => items)

function AlbumPageView() {
	const [activeYear, setActiveYear] = useState(albums[0]?.year)
	const [selectedMedia, setSelectedMedia] = useState<AlbumMedia | null>(null)
	const triggerRef = useRef<HTMLButtonElement | null>(null)

	useEffect(() => {
		const sections = document.querySelectorAll<HTMLElement>('[data-album-year]')
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0]

				if (visible) setActiveYear(Number((visible.target as HTMLElement).dataset.albumYear))
			},
			{ rootMargin: '-20% 0px -65% 0px' }
		)

		sections.forEach((section) => observer.observe(section))
		return () => observer.disconnect()
	}, [])

	const openMedia = (media: AlbumMedia, trigger: HTMLButtonElement) => {
		triggerRef.current = trigger
		setSelectedMedia(media)
	}
	const closeLightbox = () => {
		setSelectedMedia(null)
		requestAnimationFrame(() => triggerRef.current?.focus())
	}

	return (
		<>
			<PostPageTitle title="Photo Album" description="A quiet archive of the moments I wanted to keep." />

			<div className="px-4 pb-32 sm:px-8 lg:px-10">
				<AlbumIntro firstYear={albums.at(-1)?.year} lastYear={albums[0]?.year} total={allMedia.length} />

				<div className="grid items-start gap-14 pt-14 lg:grid-cols-[minmax(0,1fr)_120px] lg:gap-10 lg:pt-24">
					<main className="min-w-0">
						{albums.map(({ year, items }) => (
							<AlbumYearSection key={year} year={year} items={items} onOpen={openMedia} />
						))}
					</main>

					<AlbumNavigation albums={albums} activeYear={activeYear} />
				</div>

				<footer className="pt-20 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
					<p>End of roll</p>
					<p className="mt-2">{allMedia.length} moments kept</p>
				</footer>
			</div>

			<MediaLightbox
				media={selectedMedia}
				onClose={closeLightbox}
				onRestoreFocus={() => triggerRef.current?.focus()}
			/>
		</>
	)
}

export default AlbumPageView
