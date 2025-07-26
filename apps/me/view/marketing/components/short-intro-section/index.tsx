import { TextEffect } from '@repo/stephen-v2-ui/motion'

import TextGradient from '@/components/texts/text-gradient'
import GuestbooksBento from '@/view/marketing/components/short-intro-section/guestbook-bento'
import ProjectsBento from '@/view/marketing/components/short-intro-section/projects-bento copy'
import RetroBento from '@/view/marketing/components/short-intro-section/retro-bento'

function ShortIntroSection() {
	return (
		<div className="flex flex-col gap-10 items-center justify-center my-24">
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
				<RetroBento className="col-span-1" />
				<ProjectsBento className="col-span-1" />
				<GuestbooksBento className="col-span-1" />
			</div>
		</div>
	)
}

export default ShortIntroSection
