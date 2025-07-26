'use client'

import type { DevBlogPost, DevShortPost } from '@repo/stephen-v2-contents'
import { BlurImage, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@repo/stephen-v2-ui/shadcn'
import { formatDate } from '@repo/stephen-v2-utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
// import pluralize from 'pluralize'

interface PostCardProps {
	post: DevBlogPost | DevShortPost
}

export const PostCard = ({ post }: PostCardProps) => {
	const { title, description, date, slug } = post

	// const postBySlug = useQuery(api.services.post.getPostBySlug, { slug: post?.slugAsParams })

	const formattedDate = formatDate(date)

	// const viewsQuery = postBySlug?.views || 0 // save in api here

	// const likesQuery = postBySlug?.likes?.reduce((acc, like) => acc + like.count, 0) || 0 // save in api here

	return (
		<Link
			href={`/${slug}`}
			className="group flex flex-col justify-between rounded-md border p-2 dark:border-none dark:p-0"
		>
			<BlurImage
				src={post.cover || ''}
				className="h-[220px] rounded-md object-cover"
				width={450}
				height={450}
				imageClassName="transition-transform group-hover:scale-105 object-cover"
				alt={title}
				unoptimized={false}
			/>
			<div className="flex items-center justify-between gap-2 pt-4 text-xs text-zinc-500">{formattedDate}</div>

			<div className="flex flex-col py-4">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<h3 className="font-title text-md line-clamp-1 text-left font-bold">{title}</h3>
						</TooltipTrigger>
						<TooltipContent className="max-w-[250px] bg-secondary text-foreground shadow-md">
							<p>{title}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<p className="mt-2 line-clamp-2 text-left text-xs text-muted-foreground">{description}</p>
						</TooltipTrigger>
						<TooltipContent className="max-w-[250px] bg-secondary text-xs text-foreground shadow-md">
							<p>{description}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<div className="flex items-center justify-between gap-2 text-xs text-zinc-500">
				<div className="flex gap-2">
					{/* <div>{pluralize('like', likesQuery, true)}</div> */}
					<div>&middot;</div>
					{/* <div>{pluralize('view', viewsQuery, true)}</div> */}
				</div>
				<span className="flex items-center justify-center gap-1">
					Read more <ArrowRight size={10} />
				</span>
			</div>
		</Link>
	)
}
