'use client'

import type { TPost } from '@repo/stephen-v2-contents'
import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { cn, formatDate } from '@repo/stephen-v2-utils'
import { AlarmClock, Eye, Heart, Sigma } from 'lucide-react'
import Link from 'next/link'
import numeral from 'numeral'
import { unstable_ViewTransition as ViewTransition } from 'react'

interface IDocDetailHeaderProps {
	post: TPost
	className?: string
}

function DocDetailHeader({ post, className }: IDocDetailHeaderProps) {
	const { title, id, description, metadata, author, createdAt } = post

	const formattedDate = formatDate(createdAt, 'MMMM D, YYYY')

	return (
		<div className={cn('relative flex flex-col gap-5 border-b border-dashed pb-5', className)}>
			<div className="min-h-[190px] flex flex-col gap-4">
				<ViewTransition name={`title-${id}`}>
					<h1 className="z-10 bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-center text-4xl font-bold text-transparent dark:from-white dark:via-white/90 dark:to-white/70 md:text-5xl md:leading-[64px]">
						{title}
					</h1>
				</ViewTransition>

				{description && (
					<ViewTransition name={`description-${id}`}>
						<p className="text-muted-foreground text-center">{description}</p>
					</ViewTransition>
				)}

				<div className="flex items-end justify-center flex-wrap gap-6 md:justify-start">
					<ViewTransition name={`auth-${id}`}>
						<Link
							href={author.github}
							target="_blank"
							className="hidden gap-2 items-center text-muted-foreground text-xs mt-2 transition-colors md:flex"
						>
							<div className="size-6 rounded-full flex items-center justify-center overflow-hidden md:size-8">
								<BlurImage
									src={author.avatar}
									width={45}
									height={45}
									className="grayscale-100"
									alt="author"
									unoptimized={false}
								/>
							</div>
							<div className="flex flex-col gap-1">
								<p>@{author.name}</p>
								<p className="capitalize">{formattedDate}</p>
							</div>
						</Link>
					</ViewTransition>

					<div className="flex gap-6 flex-wrap">
						<ViewTransition name={`like-${id}`}>
							<div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
								<Heart className="size-4" />
								<span>{numeral(120).format('0,0')}</span>
							</div>
						</ViewTransition>
						<ViewTransition name={`view-${id}`}>
							<div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
								<Eye className="size-4" />
								<span>{numeral(1200).format('0,0')}</span>
							</div>
						</ViewTransition>
						<div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
							<AlarmClock className="size-4" />
							<span>{numeral(metadata?.readingTime).format('0,0')}m</span>
						</div>
						<div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
							<Sigma className="size-4" />
							<span>{numeral(metadata?.wordCount).format('0,0')}w</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DocDetailHeader
