'use client'

import { cn } from '@repo/stephen-v2-utils'
import { CheckIcon, LinkIcon, PlayCircle } from 'lucide-react'
import { forwardRef, useEffect, useState } from 'react'

import { Button } from '../../button'
import { BlurImage } from '../../common/image/blur-image'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../dialog'
import { Video } from './video'

type TVideoZoom = {
	src: string
	width: number
	height: number
	videoClassName?: string
	previewImage?: string
	description?: string
	previewImageClassName?: string
	className?: string
	open?: boolean
	allowSharing?: boolean
	onOpenChangeCallback?: (value: boolean) => void
} & React.ComponentPropsWithoutRef<'video'>

const VideoZoom = forwardRef<HTMLVideoElement, TVideoZoom>((props, ref) => {
	const {
		previewImage,
		previewImageClassName,
		onOpenChangeCallback,
		open: dialogIsOpen,
		allowSharing,
		className,
		...rest
	} = props

	const [isCopied, setIsCopied] = useState(false)
	const [open, setOpen] = useState(dialogIsOpen)

	const onCopy = () => {
		if (!window || window === undefined) return
		if (isCopied) return
		const url = window.location.href
		void navigator.clipboard.writeText(url)
	}

	useEffect(() => {
		const copyResetTimeoutId = setTimeout(() => {
			setIsCopied(false)
		}, 2000)

		return () => {
			clearTimeout(copyResetTimeoutId)
		}
	}, [isCopied])

	return (
		<>
			<Dialog
				open={open}
				onOpenChange={(_open) => {
					setOpen?.(_open)
					onOpenChangeCallback?.(_open)
				}}
			>
				<DialogTitle className="hidden" />
				<DialogTrigger asChild role="button">
					<div className={cn('not-prose group/trigger relative', className)}>
						<BlurImage
							className="rounded-md border"
							imageClassName={cn('aspect-video object-contain', previewImageClassName)}
							quality={100}
							alt=""
							src={previewImage || ''}
							description={props.description}
							width={props.width || 100}
							height={props.height || 100}
						/>
						<PlayCircle className="absolute left-2 top-2 size-5 text-foreground/50 transition-colors group-hover/trigger:text-foreground" />
					</div>
				</DialogTrigger>
				<DialogContent className="h-[75vh] max-w-screen-sm overflow-hidden p-1 md:max-w-screen-md md:p-0 lg:max-w-screen-xl">
					{allowSharing && (
						<Button
							onClick={() => {
								onCopy()
								setIsCopied(true)
							}}
							className="absolute left-4 top-4 z-10 flex gap-2 text-xs"
							autoFocus={false}
							variant="ghost"
						>
							{isCopied ? <CheckIcon className="size-4" /> : <LinkIcon className="size-4" />}
							Copy link
						</Button>
					)}

					<Video ref={ref} className={cn('size-full', props.videoClassName)} {...rest} />
				</DialogContent>
			</Dialog>
		</>
	)
})

VideoZoom.displayName = 'VideoZoom'

export { VideoZoom }
