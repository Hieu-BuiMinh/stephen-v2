import { cn } from '@repo/stephen-v2-utils'
import Image from 'next/image'
import React from 'react'

import BentoCard from '@/view/home/components/bento-card'

function IntroCard({
	className,
	linkTo,
	desciption,
	title,
	img,
}: {
	className?: string
	linkTo: string
	title?: string
	desciption?: string
	img?: string
}) {
	return (
		<BentoCard className={cn('group/card relative w-full h-[276px] overflow-hidden', className)} linkTo={linkTo}>
			{img && (
				<div className="absolute inset-0 p-2">
					<Image
						width={400}
						height={400}
						className="transition-all duration-500 size-full object-cover rounded-lg grayscale-100 group-hover/card:scale-[1.2] group-hover/card:grayscale-0"
						src={img}
						alt="retro-img"
					/>
				</div>
			)}

			<div className="absolute inset-0 h-full w-full bg-gradient-to-t from-background to-transparent flex flex-col gap-2 justify-end p-2">
				<h2 className="font-medium">{title}</h2>
				<p className="text-text-secondary">{desciption}</p>
			</div>
		</BentoCard>
	)
}

export default IntroCard
