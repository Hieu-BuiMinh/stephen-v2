'use client'

import type { TPost } from '@repo/stephen-v2-contents'
import { ImageZoom } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'

interface IDocDetailHeaderProps {
	post: TPost
	className?: string
}

function DocDetailHeader({ post, className }: IDocDetailHeaderProps) {
	const { cover, title } = post

	return (
		<div className={cn('relative flex flex-col gap-5 border-b border-dashed pb-5', className)}>
			<div className="min-h-[230px] md:min-h-[630px]">
				<ImageZoom
					alt="cover"
					src={cover || ''}
					width={1300}
					height={630}
					unoptimized={false}
					className="dot-cover relative h-[230px] md:h-[630px] w-full rounded-lg hidden md:block"
				/>
				<h1 className="z-10 bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text py-2 text-center text-4xl font-bold text-transparent dark:from-white dark:via-white/90 dark:to-white/70 md:text-5xl md:leading-[64px]">
					{title}
				</h1>
				<ImageZoom
					alt="cover"
					src={cover || ''}
					width={1200}
					height={630}
					className="dot-cover relative h-[230px] md:h-[630px] w-full rounded-lg block md:hidden"
				/>
			</div>
		</div>
	)
}

export default DocDetailHeader
