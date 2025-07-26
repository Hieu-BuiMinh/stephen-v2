import { cn } from '@repo/stephen-v2-utils'

import BentoCard from '@/view/marketing/components/bento-card'

function ProjectsBento({ className }: { className?: string }) {
	return (
		<BentoCard className={cn('relative w-full h-[276px] overflow-hidden bento-shadow', className)} linkTo="/retro">
			<div className="absolute inset-0 h-full w-full bg-gradient-to-t from-background to-transparent flex flex-col gap-2 justify-end p-2">
				<h2 className="font-medium">Projects</h2>
				<p className="text-text-secondary">A selection of projects that I've worked on.</p>
			</div>
		</BentoCard>
	)
}

export default ProjectsBento
