'use client'

import { useAuth, useUser } from '@clerk/nextjs'
import { Button, toast } from '@repo/stephen-v2-ui/shadcn'

import { SingInButton } from '@/components/buttons/auth/auth-buttons'
import CommentEditor from '@/components/editor'
import { UserRole } from '@/enums/user-role'

import { useGuestbookComment } from '../hooks/use-guestbook-comment'
import GuestbookComments from './guestbook-comments'
import GuestbookHeader from './guestbook-header'

function GuestbookCommentSection() {
	const { isLoaded, isSignedIn, userId } = useAuth()
	const { user } = useUser()
	const { comments, create, remove } = useGuestbookComment(isLoaded)
	const entries = comments.data?.pages.flatMap((page) => page.data) ?? []
	const isAdmin = String(user?.publicMetadata?.role ?? '').toUpperCase() === UserRole.ADMIN
	const handleDelete = (id: string) => {
		remove.mutate(id, {
			onSuccess: () => toast.success('Message deleted'),
			onError: () => toast.error('Failed to delete message'),
		})
	}

	return (
		<section className="relative mx-auto w-full" aria-label="Guestbook messages">
			<GuestbookHeader />
			<div className="mt-20 flex flex-col gap-4">
				{isLoaded && !isSignedIn ? (
					<div className="flex flex-col items-center justify-center gap-4">
						<span>Sign in to leave a message.</span>
						<SingInButton />
					</div>
				) : isSignedIn ? (
					<CommentEditor
						placeholder="Share your thoughts..."
						onSubmit={(message) => create.mutateAsync({ message })}
						contentName="message"
						successMessage="Message posted"
						showErrorToast={false}
						disabled={!isSignedIn || create.isPending}
					/>
				) : null}
				{comments.isPending ? (
					<p className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">Loading messages...</p>
				) : comments.isError && !comments.data ? (
					<Button
						type="button"
						variant="outline"
						className="mx-auto flex"
						onClick={() => void comments.refetch()}
					>
						Could not load messages. Retry
					</Button>
				) : (
					<>
						<GuestbookComments
							comments={entries}
							currentUserId={userId ?? null}
							isAdmin={isAdmin}
							onDelete={handleDelete}
							deletingId={remove.isPending ? (remove.variables ?? null) : null}
						/>
						{comments.hasNextPage && (
							<Button
								type="button"
								variant="outline"
								className="mx-auto mt-8 flex"
								onClick={() => void comments.fetchNextPage()}
								disabled={comments.isFetchingNextPage}
							>
								{comments.isFetchingNextPage ? 'Loading...' : 'Load more messages'}
							</Button>
						)}
					</>
				)}
			</div>
		</section>
	)
}

export default GuestbookCommentSection
