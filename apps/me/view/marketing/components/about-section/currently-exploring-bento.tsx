import { cn } from '@repo/stephen-v2-utils'
import { FireExtinguisher } from 'lucide-react'

import BentoCard from '@/view/marketing/components/bento-card'

const defaultCards = [
	{
		icon: <FireExtinguisher className="size-4" />,
		title: 'Nest JS',
		description:
			'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
		date: 'Line 42, Column 10',
		className:
			"[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
	},
	{
		icon: <FireExtinguisher className="size-4" />,
		title: 'Next JS',
		description: 'Create high-quality web applications',
		date: 'Line 15, Column 14',
		className:
			"[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
	},
	{
		icon: <FireExtinguisher className="size-4" />,
		title: 'Turborepo',
		description: 'A build system for JavaScript and TypeScript codebases',
		date: 'Line 28, Column 20',
		className: '[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10',
	},
]

// src for this card: https://github.dev/haydenbleasel/ultracite
// haydenbleasel/ultracite/docs/app/(docs)/[[...slug]]/(home)/components/benefits/type-safety.tsx
function CurrentlyExploringBento({ linkTo }: { linkTo?: string }) {
	return (
		<BentoCard linkTo={linkTo} className="size-full relative overflow-hidden min-h-[210px]">
			<div className="absolute right-0 top-1/2 -translate-y-1/2 fade-in-0 grid animate-in place-items-center opacity-100 duration-700 [grid-template-areas:'stack'] z-10">
				{defaultCards.map((card) => (
					<div
						className={cn(
							'-skew-y-[8deg] relative flex h-36 w-[22rem] select-none flex-col justify-between rounded-xl border p-4 font-mono backdrop-blur-sm transition-all duration-700',
							"after:-right-1 after:absolute after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']",
							'hover:border-foreground/20 hover:bg-muted',
							'[&>*]:flex [&>*]:items-center [&>*]:gap-2',
							card.className
						)}
						key={card.title}
					>
						<div>
							{card.icon}
							<p className="font-medium text-sm">{card.title}</p>
						</div>
						<p className="line-clamp-2 text-balance">{card.description}</p>
						<p className="text-muted-foreground text-sm">{card.date}</p>
					</div>
				))}
			</div>

			<div className="flex flex-col gap-0 text-muted-foreground group-hover:text-foreground transition-colors">
				<p className="text-xl font-bold hidden md:block">Currently Exploring!</p>
			</div>

			{/* bg-img: https://bg.ibelick.com/ */}
			<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] rotate-180"></div>
		</BentoCard>
	)
}

export default CurrentlyExploringBento

// const BackgroundImg = () => {
// 	return (
// 		<svg
// 			className="absolute rotate-180 -bottom-2 -left-3"
// 			xmlns="http://www.w3.org/2000/svg"
// 			width="441"
// 			height="245"
// 			fill="none"
// 		>
// 			<mask id="b" maskUnits="userSpaceOnUse" x="1" y="0" width="440" height="336">
// 				<path fill="url(#a)" d="M1 0h440v336H1z" />
// 			</mask>
// 			<g mask="url(#b)" stroke="#333333">
// 				<circle cx="311.5" cy="-20.5" r="37" />
// 				<circle cx="311.5" cy="-20.5" r="57" />
// 				<circle cx="311.5" cy="-20.5" r="84" />
// 				<circle cx="311.5" cy="-20.5" r="116" />
// 				<circle cx="311.5" cy="-20.5" r="155" />
// 				<circle cx="311.5" cy="-20.5" r="199" />
// 			</g>
// 			<defs>
// 				<linearGradient id="a" x1="317.156" y1="7" x2="237.961" y2="169.705" gradientUnits="userSpaceOnUse">
// 					<stop stopColor="#333333" />
// 					<stop offset=".32" stopColor="#333333" stopOpacity=".9" />
// 					<stop offset=".845" stopColor="#333333" stopOpacity=".39" />
// 					<stop offset="1" stopColor="#333333" stopOpacity="0" />
// 				</linearGradient>
// 			</defs>
// 		</svg>
// 	)
// }
