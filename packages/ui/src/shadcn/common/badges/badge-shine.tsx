// https://ui.ibelick.com/badge-shine

import { motion } from 'motion/react'

type BadgeShineProps = {
	children?: React.ReactNode
}

const BadgeShine: React.FC<BadgeShineProps> = ({ children }) => {
	return (
		<motion.span
			className="inline-flex item-center justify-center text-center cursor-pointer items-center rounded-full border bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 text-xs font-medium text-gray-300 border-gray-600 leading-none py-1"
			animate={{ backgroundPosition: '-200% 0' }}
			transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
		>
			{children || 'Badge Text'}
		</motion.span>
	)
}

export { BadgeShine }
