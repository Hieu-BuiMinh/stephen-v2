import { cn } from '@repo/stephen-v2-utils'

import BentoCard from '@/view/marketing/components/bento-card'

function GuestbooksBento({ className }: { className?: string }) {
	return (
		<BentoCard className={cn('relative w-full h-[276px] overflow-hidden bento-shadow', className)} linkTo="/retro">
			<div className="absolute inset-0 h-full w-full bg-gradient-to-t from-background to-transparent flex flex-col gap-2 justify-end p-2">
				<h2 className="font-medium">Guest Book</h2>
				<p className="text-text-secondary">
					Sign my guestbook and share your idea. You can tell me anything here!
				</p>
			</div>
		</BentoCard>
	)
}

export default GuestbooksBento
