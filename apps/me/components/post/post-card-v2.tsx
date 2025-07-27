'use client'

import type { DevBlogPost, DevShortPost } from '@repo/stephen-v2-contents'
import { AspectRatio, BlurImage } from '@repo/stephen-v2-ui/shadcn'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
	post: DevBlogPost | DevShortPost
}

function PostCardV2({ post }: PostCardProps) {
	const { title, description, createdAt, slugAsParams, cover } = post

	return (
		<Link
			href={slugAsParams}
			className="group/post-card flex cursor-pointer flex-col gap-6 p-0 md:flex-row w-full border"
		>
			<div className="w-full md:w-[220px]">
				<AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl flex items-center justify-center">
					<BlurImage
						src={cover}
						width={250}
						height={250}
						className="object-cover transition-transform duration-200 group-hover:scale-105"
						alt={title}
					/>
				</AspectRatio>
			</div>
			<div className="flex flex-1 flex-col justify-between p-0">
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<p className="text-muted-foreground text-sm">Mar 15, 2024</p>
						<span className="text-muted-foreground text-sm">·</span>
						<p className="text-muted-foreground text-sm">Articles</p>
					</div>
					<h3 className="text-foreground text-base font-semibold hover:underline">
						How can shadcn/ui kit for Figma improve your workflow?
					</h3>
					<p className="text-muted-foreground line-clamp-2 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae
						sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris.
					</p>
				</div>
				<div className="mt-6 flex items-center gap-4 md:mt-0">
					<span
						data-slot="avatar"
						className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10"
					>
						<img
							data-slot="avatar-image"
							className="aspect-square size-full"
							alt="Lando Norris"
							src="https://github.com/shadcn.png"
						/>
					</span>
					<div className="flex flex-col">
						<p className="text-foreground text-sm font-medium">Lando Norris</p>
						<p className="text-muted-foreground text-sm">Product Designer</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default PostCardV2
