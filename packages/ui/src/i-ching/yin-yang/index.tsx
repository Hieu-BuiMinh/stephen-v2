import '../i-ching.style.css'

import { cn } from '@repo/stephen-v2-utils'

interface YinYangProps {
	type?: 1 | 0 // 1: yang, 0: yin
	activated?: boolean
	className?: string
}

function YinYang({ type = 1, activated = false, className }: YinYangProps) {
	if (type === 0) {
		return (
			<div className="w-16 h-4 flex items-center gap-2.5">
				<span
					className={cn(
						'yin-yang size-full rounded-xs dark:border dark:bg-white bg-neutral-50',
						activated && 'yin-yang--active bg-stripes border border-red-400 bg-[length:7.07px_7.07px]',
						className
					)}
				/>
				<span
					className={cn(
						'yin-yang size-full rounded-xs dark:border dark:bg-white bg-neutral-50',
						activated && 'yin-yang--active bg-stripes border border-red-400 bg-[length:7.07px_7.07px]',
						className
					)}
				/>
			</div>
		)
	}

	return (
		<div
			className={cn(
				'yin-yang w-16 h-4 rounded-xs dark:border dark:bg-white bg-neutral-50',
				activated && 'yin-yang--active bg-stripes border border-red-400 bg-[length:7.07px_7.07px]',
				className
			)}
		/>
	)
}

export { YinYang }
