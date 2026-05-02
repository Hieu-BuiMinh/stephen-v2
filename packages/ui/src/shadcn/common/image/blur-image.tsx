'use client'
/**
 * Adapted from: https://github.com/delbaoliveira/website/blob/59e6f181ad75751342ceaa8931db4cbcef86b018/ui/BlurImage.tsx
 */

import { cn } from '@repo/stephen-v2-utils'
import { Spinner } from '@ui/shadcn/common/spinner'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { forwardRef, useEffect, useState } from 'react'

type ImageProps = {
	description?: string | React.ReactNode
	imageClassName?: string
	lazy?: boolean
} & React.ComponentPropsWithoutRef<typeof Image>

const BlurImage = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
	const { theme, resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const activeTheme = mounted ? resolvedTheme || theme : 'light'
	const fallbackSrc =
		activeTheme === 'dark'
			? '/assets/images/fallback/img-fallback-dark.jpg'
			: '/assets/images/fallback/img-fallback-light.jpg'

	const { alt, src, className, imageClassName, lazy = true, description, unoptimized = false, style, ...rest } = props
	const [isLoading, setIsLoading] = useState(true)
	const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc)

	useEffect(() => {
		setCurrentSrc(src || fallbackSrc)
	}, [src, activeTheme, fallbackSrc])

	return (
		<div
			className={cn(
				'group relative overflow-hidden transition-all',
				isLoading && 'animate-pulse bg-muted',
				className
			)}
			data-description={description}
			style={style}
		>
			<Image
				ref={ref}
				className={cn(
					'size-full object-cover transition-all duration-700 ease-in-out',
					isLoading ? 'scale-[1.02] blur-xl grayscale' : 'scale-100 blur-0 grayscale-0',
					imageClassName
				)}
				src={currentSrc}
				alt={alt}
				loading={lazy ? 'lazy' : undefined}
				priority={!lazy}
				unoptimized={unoptimized}
				onLoad={() => {
					setIsLoading(false)
				}}
				onError={() => {
					setCurrentSrc(fallbackSrc)
				}}
				{...(rest.blurDataURL ? { placeholder: 'blur' } : {})}
				{...rest}
			/>

			{description && (
				<div className="pointer-events-none absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-b from-transparent to-black/60 p-3 text-xs font-semibold italic text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
					{description}
				</div>
			)}

			{isLoading && (
				<div className={cn('absolute inset-0 flex items-center justify-center backdrop-blur-sm')}>
					<Spinner size={'default'} />
				</div>
			)}
		</div>
	)
})

BlurImage.displayName = 'BlurImage'

export { BlurImage }
