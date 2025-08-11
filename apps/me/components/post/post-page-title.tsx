import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { cn } from '@repo/stephen-v2-utils'

import TextGradient from '@/components/texts/text-gradient'

interface IPostPageTitleProps {
	title: string
	description: string
	className?: string
}

function PostPageTitle({ description, title, className }: IPostPageTitleProps) {
	return (
		<div
			className={cn(
				'relative p-12 flex w-full flex-col items-center justify-center gap-5 text-center md:p-20',
				className
			)}
		>
			<AnimatedBlock>
				<TextGradient as="h1" className="text-4xl font-bold md:text-5xl">
					{title}
				</TextGradient>
			</AnimatedBlock>
			<AnimatedBlock delay={0.3}>
				<TextGradient className="text-base" as="div">
					{description}
				</TextGradient>
			</AnimatedBlock>
		</div>
	)
}

export default PostPageTitle
