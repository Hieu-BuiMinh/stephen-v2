'use client'
import './style.css'

import { useVideoThumbnail } from '@repo/stephen-v2-ui/hooks'
import { VideoZoom } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { defaultRangeExtractor, useWindowVirtualizer } from '@tanstack/react-virtual'
import { Loader } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { shortSparksList } from '@/view/short-spark/data/short-sparks.data'

const CARD_HEIGHTS = [280, 320, 340, 380, 420, 450, 480, 520]
const COLUMN_GAP = 8

const getCardHeight = (id: string, index: number) => {
	if (index === 0) return 520

	let hash = 0
	for (let i = 0; i < id.length; i++) {
		hash = id.charCodeAt(i) + ((hash << 5) - hash)
	}

	return CARD_HEIGHTS[Math.abs(hash) % CARD_HEIGHTS.length]
}

function ShortSparkPageView() {
	const [loaded, setLoaded] = useState(false)
	const [columns, setColumns] = useState(1)
	const [scrollMargin, setScrollMargin] = useState(0)
	const masonryRef = useRef<HTMLDivElement>(null)

	const [spark, setSpark] = useQueryState('spark', { defaultValue: '' })
	const selectedSparkIndex = shortSparksList.findIndex((video) => video.id === spark)

	const handleUpdateSearchParam = ({ videoId, isOpen }: { videoId: string; isOpen: boolean }) => {
		if (!videoId) return
		if (isOpen) {
			setSpark(videoId)
		} else {
			setSpark('')
		}
	}

	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 640px)')
		const updateColumns = () => setColumns(mediaQuery.matches ? 3 : 1)

		updateColumns()
		setLoaded(true)
		mediaQuery.addEventListener('change', updateColumns)

		return () => mediaQuery.removeEventListener('change', updateColumns)
	}, [])

	useLayoutEffect(() => {
		if (!loaded || !masonryRef.current) return

		const updateScrollMargin = () => {
			if (!masonryRef.current) return

			setScrollMargin(masonryRef.current.getBoundingClientRect().top + window.scrollY)
		}

		updateScrollMargin()
		window.addEventListener('resize', updateScrollMargin)

		return () => window.removeEventListener('resize', updateScrollMargin)
	}, [loaded])

	const virtualizer = useWindowVirtualizer({
		count: shortSparksList.length,
		estimateSize: (index) => getCardHeight(shortSparksList[index].id, index),
		getItemKey: (index) => shortSparksList[index].id,
		gap: COLUMN_GAP,
		lanes: columns,
		overscan: 5,
		scrollMargin,
		rangeExtractor: (range) => {
			const indexes = defaultRangeExtractor(range)

			if (selectedSparkIndex >= 0 && !indexes.includes(selectedSparkIndex)) {
				indexes.push(selectedSparkIndex)
				indexes.sort((a, b) => a - b)
			}

			return indexes
		},
		useFlushSync: false,
	})

	if (!loaded)
		return (
			<div className="flex h-screen w-full items-center justify-center">
				<Loader size={20} className="animate-spin" />
			</div>
		)

	return (
		<div className="not-prose px-6 py-36">
			<div
				ref={masonryRef}
				className="short-sparks-masonry"
				style={{ height: `${virtualizer.getTotalSize()}px` }}
			>
				{virtualizer.getVirtualItems().map((virtualItem) => {
					const video = shortSparksList[virtualItem.index]
					const columnWidth = `calc(${100 / columns}% - ${(COLUMN_GAP * (columns - 1)) / columns}px)`
					const columnLeft = `calc(${(virtualItem.lane * 100) / columns}% + ${(virtualItem.lane * COLUMN_GAP) / columns}px)`

					return (
						<div
							key={video.id}
							className="short-sparks-masonry-item"
							style={{
								left: columnLeft,
								width: columnWidth,
								height: `${virtualItem.size}px`,
								transform: `translateY(${virtualItem.start - scrollMargin}px)`,
							}}
						>
							<ShortSparkCard
								video={video}
								height={virtualItem.size}
								isSparkOpen={video.id === spark}
								onOpenChange={(isOpen) => handleUpdateSearchParam({ videoId: video.id, isOpen })}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

function ShortSparkCard({
	video,
	height,
	isSparkOpen,
	onOpenChange,
}: {
	video: (typeof shortSparksList)[number] & { previewImage?: string; thumbnailTime?: number }
	height: number
	isSparkOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}) {
	// Only extract if previewImage is NOT provided
	const shouldExtract = !video.previewImage
	const { thumbnailUrl, isLoading } = useVideoThumbnail(shouldExtract ? video.src : '', video?.thumbnailTime || 1.5)

	const finalPreviewImage = video.previewImage || thumbnailUrl

	return (
		<VideoZoom
			height={height}
			width={200}
			previewImage={finalPreviewImage || ''}
			src={video.src}
			description={video.description}
			className="h-full w-full"
			style={{ height: `${height}px` }}
			previewImageClassName={cn(
				'h-full w-full aspect-auto',
				isLoading && shouldExtract && 'animate-pulse bg-muted'
			)}
			onOpenChangeCallback={onOpenChange}
			open={isSparkOpen}
			allowSharing
		/>
	)
}

export default ShortSparkPageView
