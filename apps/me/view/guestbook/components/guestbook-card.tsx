import { Avatar, AvatarFallback, AvatarImage, Button, Card, CardContent } from '@repo/stephen-v2-ui/shadcn'
import { Trash2 } from 'lucide-react'

import { ConfirmModal } from '@/components/modals/confirm-modal'
import Markdown from '@/components/post/comment/comment-markdown'

interface GuestbookCardProps {
	name: string
	avatar?: string
	message: string
	createdAt: string
	onDelete?: () => void
	isDeleting?: boolean
}

export function GuestbookCard({ name, avatar, message, createdAt, onDelete, isDeleting }: GuestbookCardProps) {
	return (
		<Card className="group gap-0 rounded-sm p-0">
			<CardContent className="p-4">
				<div className="flex items-center gap-3">
					<Avatar className="size-9 shrink-0">
						<AvatarImage src={avatar} alt={name} />
						<AvatarFallback className="bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
							{name.slice(0, 2).toUpperCase()}
						</AvatarFallback>
					</Avatar>

					<div className="min-w-0 flex-1">
						<p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{name}</p>
						<time className="block truncate text-xs text-slate-500 dark:text-slate-400">{createdAt}</time>
					</div>

					{onDelete && (
						<ConfirmModal
							title="Delete this guestbook message?"
							description="This message will be removed."
							confirmText="Delete"
							variant="destructive"
							isLoading={isDeleting}
							onConfirm={onDelete}
						>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="-mr-2 size-7 shrink-0 text-slate-400 hover:text-destructive"
								aria-label={`Delete message from ${name}`}
							>
								<Trash2 className="size-3.5" />
							</Button>
						</ConfirmModal>
					)}
				</div>

				<div className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 [&_p]:my-0">
					<Markdown>{message}</Markdown>
				</div>
			</CardContent>
		</Card>
	)
}
