import { cn } from '@repo/stephen-v2-utils'
import type { HTMLAttributes } from 'react'
import type { MarqueeProps as FastMarqueeProps } from 'react-fast-marquee'
import FastMarquee from 'react-fast-marquee'

// This component I've found from: https://www.kibo-ui.com
// https://www.kibo-ui.com/components/marquee
// https://www.react-fast-marquee.com/documentation

export type MarqueeProps = HTMLAttributes<HTMLDivElement>
export const Marquee = ({ className, ...props }: MarqueeProps) => (
	<div className={cn('relative w-full overflow-hidden', className)} {...props} />
)

export type MarqueeContentProps = FastMarqueeProps

export const MarqueeContent = ({ loop = 0, autoFill = true, pauseOnHover = true, ...props }: MarqueeContentProps) => (
	<FastMarquee autoFill={autoFill} loop={loop} pauseOnHover={pauseOnHover} {...props} />
)
export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
	side: 'left' | 'right'
}
export const MarqueeFade = ({ className, side, ...props }: MarqueeFadeProps) => (
	<div
		className={cn(
			'absolute top-0 bottom-0 z-10 h-full w-24 from-background to-transparent',
			side === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
			className
		)}
		{...props}
	/>
)
export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>
export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
	<div className={cn('mx-2 flex-shrink-0 object-contain overflow-hidden', className)} {...props} />
)

/*
	this is how to use it:
	<Marquee>
		<MarqueeFade side="left" />
		<MarqueeFade side="right" />
		<MarqueeContent>
			{new Array(10).fill(null).map((_, index) => (
				<MarqueeItem className="size-16" key={index}>
					<img
						alt={`Placeholder ${index}`}
						className="overflow-hidden rounded-full"
						src={`https://placehold.co/64x64?random=${index}`}
					/>
				</MarqueeItem>
			))}
		</MarqueeContent>
	</Marquee>
 */
