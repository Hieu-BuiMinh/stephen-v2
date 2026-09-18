'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

const HERO_IMAGES = [
	{ src: '/assets/images/avt/polaroids/polaroid-01.png', width: 1581, height: 1841, sizes: '380px' },
	{ src: '/assets/images/avt/polaroids/polaroid-02.png', width: 1647, height: 1319, sizes: '290px' },
	{ src: '/assets/images/avt/polaroids/polaroid-03.png', width: 1743, height: 1751, sizes: '265px' },
	{ src: '/assets/images/avt/polaroids/polaroid-04.png', width: 941, height: 1672, sizes: '200px' },
]

let hasLoadedHome = false

function LoadingLayer({ children }: Readonly<{ children: ReactNode }>) {
	const [loadedImages, setLoadedImages] = useState(() => (hasLoadedHome ? HERO_IMAGES.length : 0))
	const [fontsReady, setFontsReady] = useState(hasLoadedHome)
	const ready = fontsReady && loadedImages === HERO_IMAGES.length

	useEffect(() => {
		if (hasLoadedHome) {
			return
		}

		let active = true

		document.fonts.ready.then(() => {
			if (active) {
				setFontsReady(true)
			}
		})

		return () => {
			active = false
		}
	}, [])

	useEffect(() => {
		if (ready) {
			hasLoadedHome = true
		}
	}, [ready])

	if (ready) {
		return children
	}

	return (
		<div
			role="status"
			aria-label="Loading home page"
			className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
		>
			<div aria-hidden="true" className="invisible absolute size-px overflow-hidden">
				{HERO_IMAGES.map((image) => (
					<Image
						key={image.src}
						{...image}
						alt=""
						priority
						onLoad={() => setLoadedImages((count) => Math.min(count + 1, HERO_IMAGES.length))}
						onError={() => setLoadedImages((count) => Math.min(count + 1, HERO_IMAGES.length))}
					/>
				))}
			</div>
			<div className="flex flex-col items-center gap-4">
				<span className="size-7 animate-spin rounded-full border-2 border-muted border-t-foreground" />
				<span className="text-xs tracking-[0.24em] text-muted-foreground">LOADING</span>
			</div>
		</div>
	)
}

export default LoadingLayer
