'use client'

import { Button, Dialog, DialogContent, DialogDescription, DialogTitle } from '@repo/stephen-v2-ui/shadcn'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

import type { AlbumMedia } from '@/view/album/data/album.data'
import { formatAlbumDate } from '@/view/album/utils/album'

export default function MediaLightbox({
	media,
	onClose,
	onRestoreFocus,
}: {
	media: AlbumMedia | null
	onClose: () => void
	onRestoreFocus: () => void
}) {
	useEffect(() => {
		if (!media) return

		const previousOverflow = document.body.style.overflow
		const previousPriority = document.body.style.getPropertyPriority('overflow')
		document.body.style.setProperty('overflow', 'hidden', 'important')

		return () => {
			if (previousOverflow) {
				document.body.style.setProperty('overflow', previousOverflow, previousPriority)
			} else {
				document.body.style.removeProperty('overflow')
			}
		}
	}, [media])

	if (!media) return null

	return (
		<Dialog open onOpenChange={(open) => !open && onClose()}>
			<DialogContent
				showCloseButton={false}
				className="w-fit max-w-[calc(100vw-2rem)] gap-0 border-none bg-transparent p-0 text-white shadow-none sm:max-w-[calc(100vw-4rem)]"
				onCloseAutoFocus={(event) => {
					event.preventDefault()
					onRestoreFocus()
				}}
			>
				<DialogTitle className="sr-only">{media.description ?? 'Album media'}</DialogTitle>
				<DialogDescription className="sr-only">{formatAlbumDate(media.date)}</DialogDescription>

				<div className="relative flex w-fit max-w-full flex-col items-end">
					<div className="relative flex w-fit max-w-full items-center justify-center">
						{media.type === 'photo' ? (
							<Image
								key={media.id}
								src={media.src}
								alt={media.alt}
								width={media.width}
								height={media.height}
								sizes="100vw"
								className="h-auto max-h-[calc(90dvh-2.5rem)] w-auto max-w-full rounded-sm object-contain shadow-2xl"
								priority
							/>
						) : (
							<video
								key={media.id}
								src={media.src}
								poster={media.poster}
								className="h-auto max-h-[calc(90dvh-2.5rem)] w-auto max-w-full rounded-sm object-contain shadow-2xl"
								controls
								autoPlay
								playsInline
							/>
						)}

						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="absolute right-2 top-2 rounded-full bg-black/40 text-white hover:bg-black/60 hover:text-white"
							onClick={onClose}
							aria-label="Close lightbox"
						>
							<X />
						</Button>
					</div>

					<div className="flex w-full items-start justify-between gap-6 pt-2 font-mono text-ms tracking-[0.08em]">
						{media.description && <p className="text-white/60">{media.description}</p>}
						<time
							dateTime={media.date}
							className="ml-auto shrink-0 uppercase tracking-[0.16em] text-orange-400"
						>
							{formatAlbumDate(media.date)}
						</time>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
