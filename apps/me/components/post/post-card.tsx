import type { TPost } from '@repo/stephen-v2-contents'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { AspectRatio, BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { formatDate } from '@repo/stephen-v2-utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import pluralize from 'pluralize'

interface PostCardProps {
	post: TPost
	slug?: string
	article: string
}

export const PostCard = ({ post, article, slug }: PostCardProps) => {
	const { title, description, createdAt, author, id, cover } = post

	// const postBySlug = useQuery(api.services.post.getPostBySlug, { slug: post?.slugAsParams })

	const formattedDate = formatDate(createdAt)

	// const viewsQuery = postBySlug?.views || 0 // save in api here

	// const likesQuery = postBySlug?.likes?.reduce((acc, like) => acc + like.count, 0) || 0 // save in api here

	const url = slug ? `/${article}/${slug}/${id}` : `/${article}/${id}`

	return (
		<AnimatedBlock type="FADE_IN_FROM_BOTTOM">
			<div className="group/post-card rounded-lg p-1 post-card transition-all border border-dashed border-transparent duration-300 md:hover:shadow-2xl md:hover:border-border md:hover:scale-[1.02] bg-background">
				<Link href={url} className="flex flex-col justify-between rounded-md border p-2 gap-2">
					<AspectRatio ratio={16 / 9} className="rounded-md overflow-hidden flex items-center justify-center">
						<BlurImage
							src={cover || ''}
							className="size-full object-cover transition-all grayscale-100 md:group-hover/post-card:grayscale-0"
							width={300}
							height={300}
							alt={title}
							unoptimized={false}
						/>
					</AspectRatio>

					<div className="flex flex-col">
						<h3 className="font-title text-md line-clamp-1 text-left font-bold">{title}</h3>
						<p className="mt-2 line-clamp-1 md:line-clamp-2 text-left text-xs text-muted-foreground md:h-8 transition-colors group-hover/post-card:text-foreground">
							{description}
						</p>
					</div>

					<div className="w-full h-[1px] border-t border-dashed"></div>

					<div className="flex gap-2 items-center text-muted-foreground text-xs mt-2 transition-colors group-hover/post-card:text-foreground">
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
							<p>{formattedDate}</p>
						</div>
					</div>

					<div className="flex items-center justify-between gap-2 text-xs text-zinc-500 transition-colors group-hover/post-card:text-foreground">
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
			</div>
		</AnimatedBlock>
	)
}
