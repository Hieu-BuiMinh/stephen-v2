import { TextEffect } from '@repo/stephen-v2-ui/motion'
import React from 'react'

import { GitHubContributions } from '@/components/github-contributions'
import TextGradient from '@/components/texts/text-gradient'
import ShortIntroSection from '@/view/home/components/short-intro-section'

function GithubContributionsSection() {
	return (
		<div className="flex flex-col gap-10 items-center justify-center my-32 min-h-[50vh] px-3">
			<TextGradient as="div" className="text-center font-semibold text-3xl md:text-4xl max-w-xl">
				<TextEffect preset="slide" per="char">
					GitHub Contributions
				</TextEffect>
			</TextGradient>

			<GitHubContributions />

			<ShortIntroSection />
		</div>
	)
}

export default GithubContributionsSection
