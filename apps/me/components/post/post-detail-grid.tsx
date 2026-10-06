'use client'

import { cn } from '@repo/stephen-v2-utils'
import type { ReactNode } from 'react'

import { usePostManagement } from '@/hooks/use-post-management'

import PostLikeButtonContainer from './post-like-button-container'

interface PostDetailGridProps {
	postId: string
	hasSidebarContent: boolean
	sidebar: ReactNode
	children: ReactNode
}

export default function PostDetailGrid({ postId, hasSidebarContent, sidebar, children }: PostDetailGridProps) {
	const { post } = usePostManagement(postId)
	const hasSidebar = hasSidebarContent || post.data?.data.published === true

	return (
		<div
			className={cn(
				'grid col-span-1 lg:grid-cols-[1fr_0px] gap-10 mt-5 px-3',
				hasSidebar && 'lg:grid-cols-[1fr_250px]'
			)}
		>
			<>{children}</>
			{hasSidebar && (
				<aside className="hidden lg:block lg:w-[250px]">
					<div className="sticky top-20 z-10 flex flex-col gap-4">
						<>{sidebar}</>
						<PostLikeButtonContainer postId={postId} />
					</div>
				</aside>
			)}
		</div>
	)
}
