'use client'

import { Lock, LockOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { ConfirmModal } from '@/components/modals/confirm-modal'
import { UserRole } from '@/enums/user-role'
import { useCurrentUser } from '@/hooks/use-current-user'
import { usePostManagement } from '@/hooks/use-post-management'
import type { Post } from '@/services/customer/post/post-res.dto'

interface PostPublishButtonProps {
	postId: string
	post?: Post
}

export function PostPublishButton({ postId, post }: PostPublishButtonProps) {
	const { user } = useCurrentUser()
	const router = useRouter()
	const { publish: publishMutation } = usePostManagement(postId)
	const published = !!post?.published
	const role = String(user?.publicMetadata?.role ?? '').toUpperCase()

	if (role !== UserRole.ADMIN) {
		return published ? (
			<LockOpen className="size-4" aria-hidden="true" />
		) : (
			<Lock className="size-4" aria-hidden="true" />
		)
	}

	const handlePublish = () => {
		publishMutation.mutate({ id: postId, published: !published }, { onSuccess: () => router.refresh() })
	}

	return (
		<ConfirmModal
			title={published ? 'Un-publish this post?' : 'Publish this post?'}
			description={
				published
					? 'This post will be removed from the published posts list.'
					: 'This post will become visible in the published posts list.'
			}
			confirmText={published ? 'Un-publish' : 'Publish'}
			onConfirm={handlePublish}
			isLoading={publishMutation.isPending}
		>
			<button
				type="button"
				className="inline-flex cursor-pointer items-center justify-center rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-fit"
				aria-label={published ? 'Un-publish this post' : 'Publish this post'}
			>
				{published ? (
					<LockOpen className="size-4 text-yellow-400" />
				) : (
					<Lock className="size-4 text-yellow-400" />
				)}
			</button>
		</ConfirmModal>
	)
}
