import { TextEffect } from '@repo/stephen-v2-ui/motion'
import React from 'react'

import TextGradient from '@/components/texts/text-gradient'

function LatestArticles() {
	return (
		<div className="flex flex-col gap-10 items-center justify-center my-32">
			<TextGradient as="div" className="text-center font-semibold text-3xl md:text-4xl max-w-xl">
				<TextEffect preset="slide" per="char">
					Latest Articles
				</TextEffect>
			</TextGradient>
		</div>
	)
}

export default LatestArticles
