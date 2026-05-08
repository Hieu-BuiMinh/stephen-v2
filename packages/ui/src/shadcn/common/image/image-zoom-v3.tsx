'use client'

import { cn } from '@repo/stephen-v2-utils'
import { BlurImage } from '@ui/shadcn/common/image/blur-image'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@ui/shadcn/dialog'
import { useState } from 'react'

export type ImageZoomV3Props = {
	src: string
	alt?: string
	caption?: React.ReactNode
	className?: string
	backdropClassName?: string
	imageClassName?: string
	width?: number
	height?: number
	showDownload?: boolean
	style?: React.CSSProperties
}

export const ImageZoomV3 = ({
	src,
	alt = '',
	caption,
	className,
	backdropClassName,
	imageClassName,
	width = 1024,
	height = 1024,
	style,
}: ImageZoomV3Props) => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTitle className="hidden" />
			<DialogTrigger asChild>
				<div className={cn('cursor-zoom-in not-prose overflow-hidden', className)} style={style}>
					<BlurImage
						src={src}
						alt={alt}
						width={width}
						height={height}
						imageClassName={cn('rounded-md object-cover', imageClassName)}
						className="size-full"
					/>
				</div>
			</DialogTrigger>
			<DialogContent
				className={cn(
					'fixed left-1/2 top-1/2 z-[1000] flex max-h-screen w-screen max-w-none -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border-none bg-transparent shadow-none outline-none sm:p-10 !p-0',
					backdropClassName
				)}
				showCloseButton={false}
			>
				<div
					className="flex h-screen w-screen flex-col items-center justify-center outline-none"
					onClick={() => setOpen(false)}
				>
					<div className="group relative flex max-h-[calc(100vh-4rem)] w-full items-center justify-center">
						<BlurImage
							src={src}
							alt={alt}
							width={1920}
							height={1280}
							imageClassName="object-contain"
							className="size-full"
						/>
						{caption && (
							<div className="pointer-events-none absolute bottom-4 left-1/2 z-10 w-full -translate-x-1/2 px-4">
								<div className="mx-auto max-w-2xl overflow-hidden rounded-lg bg-black/60 p-4 text-center font-medium text-white backdrop-blur-md shadow-2xl text-xs animate-in fade-in slide-in-from-bottom-2 duration-500">
									{caption}
								</div>
							</div>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
