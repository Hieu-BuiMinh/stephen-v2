import { Heart } from 'lucide-react'

import GuestbookCommentSection from '@/view/guestbook/components/guestbook-comment-section'

function GuestbookPageView() {
	return (
		<div className="relative isolate min-h-screen overflow-hidden bg-[#fbfcff] p-3 pb-48 dark:bg-background">
			<div
				className="pointer-events-none absolute -left-40 top-36 -z-10 size-80 rounded-full bg-rose-100/60 blur-3xl dark:hidden"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute -right-32 top-0 -z-10 size-96 rounded-full bg-sky-100/80 blur-3xl dark:hidden"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute -right-36 bottom-0 -z-10 size-96 rounded-full bg-blue-100/80 blur-3xl dark:hidden"
				aria-hidden="true"
			/>
			<GuestbookCommentSection />
		</div>
	)
}

export default GuestbookPageView
