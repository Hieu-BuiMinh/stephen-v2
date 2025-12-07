'use client'

import './style.css'

import { VideoZoom } from '@repo/stephen-v2-ui/shadcn'
import { Loader } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'

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
			<div className="h-screen w-full flex items-center justify-center">
				<Loader size={20} className="animate-spin" />
			</div>
		)

	return (
		<div className="not-prose short-sparks-masonry p-3">
			{shortSparksList.map((video) => (
				<VideoZoom
					key={video.id}
					height={video.height}
					width={200}
					previewImage={video.previewImage}
					src={video.src}
					description={video.description}
					className={`short-sparks-masonry-item h-[${video.height || 100}px]`}
					previewImageClassName={`h-[${video.height || 100}px]`}
					onOpenChangeCallback={(_open: boolean) =>
						handleUpdateSearchParam({ isOpen: _open, videoId: video.id })
					}
					open={video.id === spark}
					allowSharing
				/>
			))}
		</div>
	)
}

export default ShortSparkPageView
