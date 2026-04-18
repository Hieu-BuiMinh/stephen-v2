'use client'

import './style.css'

import { VideoZoom } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { Loader } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'

import { useVideoThumbnail } from '@repo/stephen-v2-ui/hooks'
import { shortSparksList } from '@/view/short-spark/data/short-sparks.data'

function ShortSparkPageView() {
	const [loaded, setLoaded] = useState(false)

	const [spark, setSpark] = useQueryState('spark', { defaultValue: '' })

	const handleUpdateSearchParam = ({ videoId, isOpen }: { videoId: string; isOpen: boolean }) => {
		if (!videoId) return
		if (isOpen) {
			setSpark(videoId)
		} else {
			setSpark('')
		}
	}

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded)
		return (
			<div className="flex h-screen w-full items-center justify-center">
				<Loader size={20} className="animate-spin" />
			</div>
		)

	const heights = [280, 320, 340, 380, 420, 450, 480, 520]

	const getCardHeight = (id: string, index: number) => {
		if (index === 0) return 520
		let hash = 0
		for (let i = 0; i < id.length; i++) {
			hash = id.charCodeAt(i) + ((hash << 5) - hash)
		}
		return heights[Math.abs(hash) % heights.length]
	}

	return (
		<div className="not-prose short-sparks-masonry px-6 py-36">
			{shortSparksList.map((video, index) => (
				<ShortSparkCard
					key={video.id}
					video={video}
					height={getCardHeight(video.id, index)}
					isSparkOpen={video.id === spark}
					onOpenChange={(isOpen) => handleUpdateSearchParam({ videoId: video.id, isOpen })}
				/>
			))}
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
			className={cn('short-sparks-masonry-item')}
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
