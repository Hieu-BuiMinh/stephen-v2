'use client'

import { cn } from '@repo/stephen-v2-utils'
import { Quote } from 'lucide-react'
import { motion } from 'motion/react'

interface DailyQuoteButtonProps {
	onClick: () => void
}

export default function DailyQuoteButton({ onClick }: DailyQuoteButtonProps) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			className="fixed bottom-8 right-8 z-40 hidden md:block"
		>
			<button
				onClick={onClick}
				className={cn(
					'group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full',
					'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95',
					'hover:border-indigo-500/50 hover:shadow-indigo-500/20'
				)}
			>
				{/* Hover Background Glow */}
				<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

				<Quote
					className="relative z-10 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors"
					size={24}
				/>
			</button>
		</motion.div>
	)
}
