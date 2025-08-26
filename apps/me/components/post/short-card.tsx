import type { TPost } from '@repo/stephen-v2-contents'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { AspectRatio, BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { cn, formatDate } from '@repo/stephen-v2-utils'
import { ArrowRight } from 'lucide-react'
import { Link } from 'next-view-transitions'
import pluralize from 'pluralize'

import FoldedCornerCard from '@/components/cards/folded-corner-card'

interface ShortCardProps {
	post: TPost
	url?: string
	className?: string
	delay?: number | undefined
}

export const ShortCard = ({ post, url, className, delay }: ShortCardProps) => {
	const { title, description, createdAt, author, id } = post

	// const postBySlug = useQuery(api.services.post.getPostBySlug, { slug: post?.slugAsParams })

	const formattedDate = formatDate(createdAt, 'MMMM D, YYYY')

	// const viewsQuery = postBySlug?.views || 0 // save in api here

	// const likesQuery = postBySlug?.likes?.reduce((acc, like) => acc + like.count, 0) || 0 // save in api here

	return (
		<AnimatedBlock type="FADE_IN" delay={delay} className="group/post-card relative">
			<FoldedCornerCard className="z-[1] size-full">
				<Link
					href={url || '#'}
					className={cn(
						'flex flex-col justify-between rounded-md p-2 gap-2 bg-neutral-200 dark:bg-transparent',
						className
					)}
				>
					<AspectRatio
						ratio={16 / 9}
						className="relative rounded-md overflow-hidden flex items-center justify-center"
					>
						<BlurImage
							src={post.cover || ''}
							className="size-full object-cover transition-all grayscale-100 md:group-hover/post-card:grayscale-0"
							width={300}
							height={300}
							alt={title}
							unoptimized={false}
						/>
						{/* this image is used for view transition */}
						<BlurImage
							src={post.cover || ''}
							className="size-full object-cover transition-all !grayscale-100 md:group-hover/post-card:grayscale-0 opacity-0 absolute inset-0 -z-10"
							width={300}
							height={300}
							alt={title}
							unoptimized={false}
							style={{ viewTransitionName: `cover-${id}` }}
						/>
					</AspectRatio>

					<div className="flex flex-col">
						<h3
							className="font-title text-md line-clamp-1 text-left font-bold"
							style={{ viewTransitionName: `title-${id}` }}
						>
							{title}
						</h3>
						<p
							className="mt-2 line-clamp-1 md:line-clamp-2 text-left text-xs text-muted-foreground md:h-8 transition-colors group-hover/post-card:text-foreground"
							style={{ viewTransitionName: `description-${id}` }}
						>
							{description}
						</p>
					</div>

					<div className="w-full h-[1px] border-t border-dashed"></div>

					<div
						className="flex gap-2 items-center text-muted-foreground text-xs mt-2 transition-colors group-hover/post-card:text-foreground"
						style={{ viewTransitionName: `auth-${id}` }}
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
					</div>

					<div
						className="flex items-center justify-between gap-2 text-xs text-zinc-500 transition-colors group-hover/post-card:text-foreground"
						style={{ viewTransitionName: `meta-${id}` }}
					>
						<div className="flex gap-2">
							{/* <div>{pluralize('like', likesQuery, true)}</div> */}
							<div>{pluralize('like', 100, true)}</div>
							<div>&middot;</div>
							{/* <div>{pluralize('view', viewsQuery, true)}</div> */}
							<div>{pluralize('view', 120, true)}</div>
						</div>
						<span className="flex items-center justify-center gap-1">
							Read more <ArrowRight size={10} />
						</span>
					</div>
				</Link>
			</FoldedCornerCard>
			<div className="absolute inset-0 border border-transparent border-dashed rounded-lg bg-muted-foreground/10 z-[0] group-hover/post-card:border-muted-foreground" />
		</AnimatedBlock>
	)
}
