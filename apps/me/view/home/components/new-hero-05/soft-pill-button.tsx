'use client'
import { cn } from '@repo/stephen-v2-utils'
import React from 'react'

export type SoftPillVariant = 'secondary' | 'primary'

interface SoftPillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: SoftPillVariant
	as?: 'a' | 'button'
	href?: string
	target?: string
	rel?: string
}

function SoftPillButton({
	className,
	children,
	variant = 'secondary',
	as = 'button',
	href,
	target,
	rel,
	...props
}: SoftPillButtonProps) {
	const isPrimary = variant === 'primary'
	const rootClassName = cn(
		'group relative block rounded text-center px-5 py-2.5 text-[13px] font-medium tracking-tight transition-[transform] duration-200 active:scale-[0.99] active:duration-50',
		'[backdrop-filter:blur(6px)]',
		isPrimary ? 'text-neutral-50 dark:text-neutral-950' : 'text-neutral-900 dark:text-neutral-300',
		className
	)
	const content = (
		<>
			<span
				aria-hidden="true"
				className={cn(
					'absolute inset-0 rounded overflow-hidden transition-colors duration-200 group-active:duration-50',
					isPrimary
						? 'bg-[#18181b] group-hover:bg-[#27272a] dark:bg-white dark:group-hover:bg-neutral-100 border border-black/10 dark:border-white/10'
						: 'bg-white/90 dark:bg-[#0c0c0e] group-hover:dark:bg-[#121214] border border-black/5 dark:border-white/5 group-hover:border-black/10 dark:group-hover:border-white/10'
				)}
			>
				{!isPrimary && (
					<span className="absolute inset-0 rounded transition duration-200 bg-black/2 dark:bg-transparent group-hover:bg-transparent dark:group-hover:bg-white/2 group-active:bg-black/4 dark:group-active:bg-white/4 group-active:duration-50" />
				)}
				<span
					className={cn(
						'absolute inset-0 transition duration-200 group-active:opacity-0 group-active:duration-50',
						isPrimary ? 'opacity-[0.12]' : 'opacity-[0.16] dark:opacity-[0.04]'
					)}
					style={{
						background: 'linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
					}}
				/>
				<span
					className={cn(
						'absolute inset-0 transition duration-200 group-active:duration-50',
						isPrimary ? 'opacity-[0.32]' : 'opacity-[0.04] dark:opacity-[0.1]'
					)}
					style={{
						background:
							'radial-gradient(65.62% 65.62% at 50% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
					}}
				/>
				{!isPrimary && (
					<span
						className="absolute inset-0 transition duration-200 group-active:opacity-0 group-active:duration-50 opacity-[0.4] dark:opacity-[0.04]"
						style={{
							background:
								'linear-gradient(99deg, rgba(255, 255, 255, 0) 27.7%, rgba(255, 255, 255, 0.12) 60.19%, rgba(255, 255, 255, 0) 86.06%)',
						}}
					/>
				)}
				<span
					aria-hidden="true"
					className={cn('absolute inset-0 rounded p-px', isPrimary ? 'opacity-[0.24]' : 'hidden')}
					style={{
						background: isPrimary
							? 'linear-gradient(rgb(255, 255, 255) 0%, rgb(153, 153, 153) 55%, rgb(255, 255, 255) 80%, rgb(153, 153, 153) 95%)'
							: 'linear-gradient(transparent 0%, rgb(255, 255, 255) 55%, transparent 80%, rgb(255, 255, 255) 95%)',
						WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
						WebkitMaskComposite: 'xor',
						maskComposite: 'exclude',
					}}
				/>
			</span>
			<span className="relative">{children}</span>
		</>
	)

	if (as === 'a') {
		return (
			<a
				href={href}
				target={target}
				rel={rel}
				className={rootClassName}
				{...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{content}
			</a>
		)
	}

	return (
		<button className={rootClassName} {...props}>
			{content}
		</button>
	)
}

export default SoftPillButton
