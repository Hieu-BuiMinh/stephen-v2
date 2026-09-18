'use client'

import { Play } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

import FoldedCornerCard from '@/components/cards/folded-corner-card'
import type { AlbumMedia } from '@/view/album/data/album.data'
import { formatAlbumDate } from '@/view/album/utils/album'

const rotations = [-2, 2, -1.2, 1.2, -0.6, 0.6]

export default function PhotoPaper({
	media,
	index,
	total,
	onOpen,
}: {
	media: AlbumMedia
	index: number
	total: number
	onOpen: (media: AlbumMedia, trigger: HTMLButtonElement) => void
}) {
	let hash = 0
	for (let i = 0; i < media.id.length; i++) {
		hash = media.id.charCodeAt(i) + ((hash << 5) - hash)
	}

	const rotation = rotations[Math.abs(hash) % rotations.length]
	const photoRef = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: photoRef,
		offset: ['start end', 'end start'],
	})
	const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])

	return (
		<article
			className="mb-12 inline-block w-full break-inside-avoid"
			style={{ transform: `rotate(${rotation}deg)` }}
			ref={photoRef}
		>
			<motion.div style={{ scale: photoScale }}>
				<FoldedCornerCard cornerRadius={3} className="rounded-[3px] border-0 bg-transparent hover:rotate-3">
					<div className="rounded-[3px] border border-stone-900/10 bg-[#fdfcf7] p-1.5 pb-4 shadow-[0_1px_2px_rgba(28,25,23,0.08),0_12px_32px_rgba(28,25,23,0.06)] dark:border-white/10 dark:bg-stone-200 sm:p-2 sm:pb-5">
						<button
							type="button"
							className="group/media relative block w-full cursor-zoom-in overflow-hidden rounded-[2px] bg-stone-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 dark:bg-stone-800"
							style={{ aspectRatio: `${media.width} / ${media.height}` }}
							onClick={(event) => onOpen(media, event.currentTarget)}
							aria-label={`Open ${media.type}: ${media.description ?? formatAlbumDate(media.date)}`}
						>
							<Image
								src={media.type === 'photo' ? media.src : media.poster}
								alt={media.type === 'photo' ? media.alt : ''}
								fill
								unoptimized={media.src.includes('i.ibb.co')}
								sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 280px"
								className="object-cover transition-transform duration-500 group-hover/media:scale-[1.015] motion-reduce:transition-none"
							/>
							{media.type === 'video' && (
								<span className="absolute inset-0 flex items-center justify-center">
									<span className="flex size-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
										<Play className="ml-0.5 size-4 fill-current" />
									</span>
								</span>
							)}
						</button>

						<div className="px-1 pt-4 text-stone-900">
							<div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.13em] text-stone-500 sm:text-[10px]">
								<time dateTime={media.date}>{formatAlbumDate(media.date)}</time>
								<span>
									{String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
								</span>
							</div>
							{media.description && (
								<p className="mt-2 text-xs leading-5 sm:text-sm">{media.description}</p>
							)}
							{media.location && <p className="mt-1 text-[11px] text-stone-500">{media.location}</p>}
						</div>
					</div>
				</FoldedCornerCard>
			</motion.div>
		</article>
	)
}
