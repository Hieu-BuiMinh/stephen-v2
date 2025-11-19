import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { DividerSlash } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'

import TextGradient from '@/components/texts/text-gradient'

interface IPostPageTitleProps {
	title: string
	description: string
	className?: string
}

function PostPageTitle({ description, title, className }: IPostPageTitleProps) {
	return (
		<div>
			<div
				className={cn(
					'relative p-12 flex w-full flex-col items-center justify-center gap-5 text-center md:p-20',
					className
				)}
			>
				<AnimatedBlock>
					<TextGradient as="h1" className="text-4xl font-bold md:text-5xl leading-snug">
						{title}
					</TextGradient>
				</AnimatedBlock>
				<AnimatedBlock delay={0.3}>
					<TextGradient className="text-base" as="div">
						{description}
					</TextGradient>
				</AnimatedBlock>

				<svg
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 [z-index:-1] size-full fill-blue-500/50 stroke-blue-500/50 [mask-image:linear-gradient(to_top,_#ffffffad,_transparent)] opacity-[.30]"
				>
					<defs>
						<pattern id=":S1:" width="12" height="12" patternUnits="userSpaceOnUse" x="-1" y="-1">
							<path d="M.5 12V.5H12" fill="none" strokeDasharray="0" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" strokeWidth="0" fill="url(#:S1:)" />
				</svg>
			</div>

			<DividerSlash className="my-0" />
		</div>
	)
}

export default PostPageTitle
