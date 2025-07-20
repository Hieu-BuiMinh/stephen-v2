import { cn } from '@repo/stephen-v2-utils'
import React, { memo } from 'react'

interface HTMLElements {
	h1: HTMLHeadingElement
	h2: HTMLHeadingElement
	h3: HTMLHeadingElement
	h4: HTMLHeadingElement
	h5: HTMLHeadingElement
	h6: HTMLHeadingElement
	div: HTMLDivElement
	p: HTMLParagraphElement
}

type Tags = keyof HTMLElements
type TagsProps<T extends Tags> = Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
	as?: T
}

const TextGradient = <T extends Tags = 'h1'>(props: TagsProps<T>) => {
	const { as, className, children, ...rest } = props
	const Component = as ?? 'h1'

	return (
		<Component
			className={cn(
				'bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 to-90% bg-clip-text text-transparent',
				className
			)}
			id={children?.toString()}
			{...rest}
		>
			{children}
		</Component>
	)
}

export default memo(TextGradient)
