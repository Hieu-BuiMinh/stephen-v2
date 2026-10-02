import dayjs from '@/lib/day-js'
import type { GuestbookEntry } from '@/services/customer/guestbook/guestbook-res.dto'

import { GuestbookCard } from './guestbook-card'

interface GuestbookCommentsProps {
	comments: GuestbookEntry[]
	currentUserId: string | null
	isAdmin: boolean
	onDelete: (id: string) => void
	deletingId: string | null
}

function GuestbookComments({ comments, currentUserId, isAdmin, onDelete, deletingId }: GuestbookCommentsProps) {
	if (comments.length === 0) {
		return (
			<p className="rounded-2xl border border-dashed border-slate-200 bg-white/70 px-6 py-12 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
				No messages yet. Be the first to sign the guestbook.
			</p>
		)
	}

	return (
		<div className="columns-1 gap-4 md:columns-2 lg:columns-3">
			{comments.map((comment) => (
				<div key={comment.id} className="mb-4 inline-block w-full break-inside-avoid">
					<GuestbookCard
						userId={comment.clerkId}
						firstName={comment.author.firstName}
						lastName={comment.author.lastName}
						avatarUrl={comment.author.avatarUrl}
						message={comment.message}
						createdAt={dayjs(comment.createdAt).fromNow()}
						onDelete={currentUserId === comment.clerkId || isAdmin ? () => onDelete(comment.id) : undefined}
						isDeleting={deletingId === comment.id}
					/>
				</div>
			))}
		</div>
	)
}

export default GuestbookComments
