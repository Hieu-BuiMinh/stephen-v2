'use client'
/**
 * Adapted from: https://github.com/delbaoliveira/website/blob/59e6f181ad75751342ceaa8931db4cbcef86b018/ui/BlurImage.tsx
 */

import { cn } from '@repo/stephen-v2-utils'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { forwardRef, useEffect, useState } from 'react'

import { Spinner } from '../spinner'

type ImageProps = {
	description?: string | React.ReactNode
	imageClassName?: string
	lazy?: boolean
} & React.ComponentPropsWithoutRef<typeof Image>

const BlurImage = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
	const { theme } = useTheme()
	const fallbackSrc = '/assets/images/fallback/img-fallback-light.jpg'
	const { alt, src, className, imageClassName, lazy = true, ...rest } = props
	const [isLoading, setIsLoading] = useState(true)
	const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc)

	useEffect(() => {
		setCurrentSrc(src || fallbackSrc)
	}, [theme])

	useEffect(() => {
		setCurrentSrc(src || fallbackSrc)
	}, [src])

	return (
		<div
			className={cn(
				'group relative flex items-center justify-center overflow-hidden',
				isLoading && 'animate-pulse',
				className
			)}
			data-description={props.description}
		>
			<Image
				unoptimized
				ref={ref}
				className={cn(
					'size-full object-cover',
					isLoading && 'scale-[1.02] object-cover blur-xl grayscale',
					imageClassName
				)}
				style={{
					transition: 'filter 700ms ease, transform 150ms ease',
				}}
				src={currentSrc}
				alt={alt}
				loading={lazy ? 'lazy' : undefined}
				priority={!lazy}
				quality={100}
				onLoad={() => {
					setIsLoading(false)
				}}
				onError={() => {
					setCurrentSrc(fallbackSrc)
				}}
				{...rest}
			/>

			{rest?.description && (
				<div className="pointer-events-none absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-b from-transparent to-black p-3 text-xs font-semibold italic text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
					{/* <div className="line-clamp-2">{rest?.description}</div> */}
					{rest?.description}
				</div>
			)}

			{isLoading && (
				<div
					className={cn('absolute left-0 top-0 flex size-full items-center justify-center backdrop-blur-md')}
				>
					<Spinner size={'default'} />
				</div>
			)}
		</div>
	)
})

BlurImage.displayName = 'Image'

export { BlurImage }
