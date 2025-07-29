import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import type { LucideIcon } from 'lucide-react'

import TextGradient from '@/components/texts/text-gradient'

interface IPageTitleProps {
	title: string
	description: string
	icon?: LucideIcon
}

function PageTitle({ description, title }: IPageTitleProps) {
	return (
		<div className="relative p-12 flex w-full flex-col items-center justify-center gap-5 text-center md:p-20">
			<AnimatedBlock>
				<TextGradient as="h1" className="text-4xl font-bold md:text-5xl">
					{title}
				</TextGradient>
			</AnimatedBlock>
			<AnimatedBlock delay={0.3}>
				<TextGradient as="div">{description}</TextGradient>
			</AnimatedBlock>
		</div>
	)
}

export default PageTitle
