/**
 * primitives (MIT License)
 * Copyright (c) Ali Imam: https://21st.dev/designali-in
 * Source:
 *  - https://21st.dev/designali-in/book/book
 *
 * Modified by: Stephen
 */

import './style.css'

import { cn } from '@repo/stephen-v2-utils'
import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

import { GlareHover } from '../../../motion/components/glare-hover'

const bookvariants = tv({
	slots: {
		container:
			'contain-inline-size aspect-[49/60] w-fit rotate-0 relative [transform-style:preserve-3d] min-w-[calc(var(--book-width))] transition-transform duration-500 ease-out group-hover/book:[transform:rotateY(-20deg)_scale(1.066)translateX(-8px)] overflow-visible',
		'book-front': 'rounded-l rounded-r shadow-book bg-[#292524] size-full absolute overflow-hidden text-zinc-200',
		'book-paper': 'absolute w-[calc(var(--book-depth)-2px)] h-[calc(100%-2*6px)] top-[6px] book-paper',
		'book-back': 'rounded-l-md rounded-r bg-[var(--book-color)] book-bg absolute left-0 w-full h-full',
	},
})

export interface BookProps {
	color?: string
	textColor?: string
	texture?: boolean
	depth?: number
	variant?: 'default' | 'simple'
	icon?: React.ReactNode
	illustration?: React.ReactNode
	width?: number
	title?: string
	onClick?: () => void
}

function Book({ color, depth, illustration, icon, textColor, texture, variant, width, title, onClick }: BookProps) {
	const { container, 'book-front': bookFront, 'book-paper': bookPaper, 'book-back': bookBack } = bookvariants()
	const Icon = icon

	return (
		<div
			className={cn('w-fit [perspective:900px] inline-block group/book cursor-pointer')}
			style={
				{
					'--book-color': color || '#292524',
					'--text-color': textColor,
					'--book-depth': (depth || 4) + 'cqw',
					'--book-width': (width || 196) + 'px',
				} as React.CSSProperties
			}
			onClick={onClick}
		>
			<div className={cn(container())}>
				<Stack align="stretch" className={cn(bookFront())}>
					{variant !== 'simple' && (
						<Stack
							shrink
							grow
							direction="row"
							className={cn(
								'min-w-[calc(var(--book-width))] bg-[var(--book-color)] relative overflow-hidden'
							)}
						>
							<div className="absolute inset-y-0 mix-blend-overlay opacity-100 min-w-[8.2%] book-bind" />
							{illustration && <div className="size-full">{illustration}</div>}
						</Stack>
					)}
					{title && (
						<Stack grow={variant === 'simple'} direction="row" className="h-fit bg-[var(--book-color)]">
							<div className="mix-blend-overlay opacity-60 min-w-[8.2%] h-full book-bind" />
							<div className="contain-inline-size w-full">
								<div className="p-3 mb-2 flex flex-col justify-between">
									<h1 className="font-semibold text-[calc(var(--book-width)/12)] text-[var(--text-color)]">
										{title}
									</h1>
									{Icon ? Icon : null}
								</div>
							</div>
						</Stack>
					)}
					{texture && <div className="book-texture" />}
				</Stack>

				<div
					className={cn(bookPaper())}
					style={{
						transform:
							'translateX(calc(var(--book-width) - var(--book-depth) / 2 - 3px)) rotateY(90deg) translateX(calc(var(--book-depth) / 2))',
					}}
				/>
				<div
					className={cn(bookBack())}
					style={{
						transform: 'translateZ(calc(-1 * var(--book-depth)))',
					}}
				/>
			</div>
			<GlareHover className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover/book:[transform:rotateY(-20deg)_scale(1.066)translateX(-8px)] rounded-[6px_4px_4px_6px]" />
		</div>
	)
}

type FlexAlignItems = 'stretch' | 'start' | 'end' | 'center'
type FlexJustifyContent = 'stretch' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'center'

interface StackProps extends ComponentProps<'div'> {
	children: React.ReactNode
	direction?: 'column' | 'row'
	align?: FlexAlignItems
	justify?: FlexJustifyContent
	gap?: number
	padding?: number
	grow?: boolean
	shrink?: boolean
	wrap?: boolean
	className?: string
}

function Stack(props: StackProps) {
	const {
		children,
		shrink = false,
		grow = false,
		justify = 'start',
		align = 'start',
		wrap = false,
		padding = 0,
		gap = 0,
		direction = 'column',
		className,
		...etc
	} = props

	return (
		<div
			className={className}
			style={{
				display: 'flex',
				flex: 'initial',
				flexDirection: direction,
				alignItems: align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align,
				justifyContent: justify === 'start' ? 'flex-start' : justify === 'end' ? 'flex-end' : justify,
				flexWrap: wrap ? 'wrap' : 'nowrap',
				flexGrow: grow ? 1 : 0,
				flexShrink: shrink ? 1 : 0,
				padding: padding * 4 + 'px',
				gap: gap * 4 + 'px',
			}}
			{...etc}
		>
			{children}
		</div>
	)
}

export { Book }
