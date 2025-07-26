import { TextEffect } from '@repo/stephen-v2-ui/motion'

import TextGradient from '@/components/texts/text-gradient'
import IntroCard from '@/view/home/components/short-intro-section/intro-card'

const intros = [
	{
		title: 'Retrospective',
		description: `Every year, I share my progress both in career and personal life. Here's how it's going`,
		linkTo: '/retro',
		img: '/assets/images/bg/intro-retro-card.png',
	},
	{
		title: 'Projects',
		description: `A selection of projects that I've worked on.`,
		linkTo: '/projects',
		img: '/assets/images/bg/intro-projects-card.png',
	},
	{
		title: 'Guest Book',
		description: `Sign my guestbook and share your idea. You can tell me anything here!`,
		linkTo: '/guestbook',
		img: '/assets/images/bg/intro-guestbook-card.png',
	},
]
function ShortIntroSection() {
	return (
		<div className="flex flex-col gap-10 items-center justify-center my-32">
			<div className="flex flex-col gap-0">
				<TextGradient as="div" className="text-center font-semibold text-3xl md:text-4xl max-w-xl">
					<TextEffect preset="slide" per="char">
						My site is a playful sandbox
					</TextEffect>
				</TextGradient>
				<TextGradient as="div" className="text-center font-semibold text-3xl md:text-4xl max-w-xl">
					<TextEffect preset="slide" per="char">
						Explore, experiment, && say hello
					</TextEffect>
				</TextGradient>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
				{intros.map((item) => {
					return (
						<IntroCard
							key={item.title}
							linkTo={item.linkTo}
							desciption={item.description}
							title={item.title}
							img={item?.img}
							className="col-span-1 relative w-full h-[276px] overflow-hidden"
						/>
					)
				})}
			</div>
		</div>
	)
}

export default ShortIntroSection
