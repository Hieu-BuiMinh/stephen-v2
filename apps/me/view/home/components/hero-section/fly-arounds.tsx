'use client'

import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { cn } from '@repo/stephen-v2-utils'
import {
	BicepsFlexed,
	Flame,
	Heart,
	Lightbulb,
	type LucideIcon,
	PartyPopper,
	Pyramid,
	Rocket,
	Signpost,
	Sparkles,
	Sprout,
	Star,
	Zap,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

const nouns = [
	'Innovation',
	'Creativity',
	'Growth',
	'Learning',
	'Discovery',
	'Exploration',
	'Wisdom',
	'Balance',
	'Energy',
	'Focus',
	'Vision',
	'Freedom',
	'Courage',
	'Momentum',
	'Strategy',
	'Inspiration',
	'Potential',
	'Ambition',
	'Discipline',
	'Passion',
	'Patience',
	'Progress',
	'Persistence',
	'Excellence',
	'Curiosity',
	'Leadership',
	'Confidence',
	'Determination',
	'Trust',
	'Unity',
	'Hope',
	'Collaboration',
	'Adventure',
	'Mindfulness',
	'Motivation',
	'Consistency',
	'Simplicity',
	'Brilliance',
	'Precision',
	'Flow',
	'Drive',
	'Optimism',
	'Dedication',
	'Mastery',
	'Achievement',
	'Challenge',
	'Success',
	'Calmness',
	'Insight',
	'Empowerment',
	'Efficiency',
	'Imagination',
	'Intuition',
	'Sustainability',
	'Commitment',
	'Responsibility',
	'Adaptability',
	'Action',
	'Transformation',
	'Strength',
	'Charisma',
	'Aspiration',
	'Performance',
	'Spark',
	'Execution',
	'Tactics',
	'Teamwork',
	'Preparation',
	'Effort',
	'Joy',
	'Compassion',
	'Stability',
	'Mission',
	'Truth',
	'Peace',
	'Faith',
	'Ethic',
	'Result',
]
const iconList = [
	Star,
	Lightbulb,
	Zap,
	Sprout,
	BicepsFlexed,
	Signpost,
	Heart,
	Rocket,
	Sparkles,
	Pyramid,
	Flame,
	PartyPopper,
]

function getRandomItems<T>(arr: T[], count: number): T[] {
	const shuffled = [...arr].sort(() => Math.random() - 0.5)
	return shuffled.slice(0, count)
}

function FlyArounds() {
	const [icons, setIcons] = useState<LucideIcon[]>([])
	const [words, setWords] = useState<string[]>([])

	const classes = [
		'top-10 right-[-15%] rotate-[-25deg] hidden xl:flex',
		'top-72 right-[-15%] rotate-[25deg] hidden xl:flex',
		'top-10 left-[-15%] rotate-[25deg] flex-row-reverse hidden xl:flex',
		'top-72 left-[-15%] rotate-[-25deg] flex-row-reverse hidden xl:flex',
	]

	useEffect(() => {
		setWords(getRandomItems(nouns, 4))
		setIcons(getRandomItems(iconList, 4))
	}, [])

	return (
		<>
			{words.map((word, i) => {
				const Icon = icons[i]
				const positionClass = classes[i]

				const isRightSide = i < 2
				const arrowSide = isRightSide ? '-left-1/2' : 'left-1/2'
				const arrowFlip = isRightSide ? '' : 'scale-x-[-1]'

				return (
					<FlyAround
						key={word}
						icon={Icon}
						text={word}
						className={positionClass}
						subItem={
							<>
								<img
									className={`absolute top-12 ${arrowSide} hidden dark:block ${arrowFlip}`}
									src="/assets/images/snippets/spring-arrow-dark.svg"
									alt="spring-arrow-dark"
								/>
								<img
									className={`absolute top-12 ${arrowSide} block dark:hidden ${arrowFlip}`}
									src="/assets/images/snippets/spring-arrow-light.svg"
									alt="spring-arrow-light"
								/>
							</>
						}
					/>
				)
			})}
		</>
	)
}

export default FlyArounds

const FlyAround = ({
	icon,
	text,
	className,
	subItem,
}: {
	text: string
	icon: LucideIcon
	className?: string
	subItem?: ReactNode
}) => {
	const [randomColor, setRandomColor] = useState<string>('')

	const iconColors = [
		'text-green-500',
		'text-yellow-500',
		'text-rose-400',
		'text-blue-500',
		'text-orange-500',
		'text-green-400',
		'text-yellow-400',
		'text-red-400',
		'text-blue-400',
		'text-pink-400',
		'text-purple-400',
		'text-orange-400',
		'text-indigo-400',
		'text-red-500',
		'text-purple-500',
		'text-indigo-500',
		'text-pink-500',
	]

	useEffect(() => {
		// runs only once when the component mounts
		setRandomColor(iconColors[Math.floor(Math.random() * iconColors.length)])
	}, [])

	const Icon = icon

	return (
		<AnimatedBlock
			className={cn(
				'group absolute flex items-center gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-foreground underline-offset-3',
				className
			)}
			type="BOUNCE_IN"
			delay={Math.random() * (0.9 - 0.1) + 0.1}
		>
			{text}
			<Icon size={13} className={randomColor} />
			{subItem}
		</AnimatedBlock>
	)
}
