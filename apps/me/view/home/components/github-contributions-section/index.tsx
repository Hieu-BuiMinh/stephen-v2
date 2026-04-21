import { TextEffect } from '@repo/stephen-v2-ui/motion'
import Image from 'next/image'
import React from 'react'

import { GitHubContributions } from '@/components/github-contributions'
import TextGradient from '@/components/texts/text-gradient'
import ShortIntroSection from '@/view/home/components/short-intro-section'

function GithubContributionsSection() {
	return (
		<div className="relative flex flex-col gap-10 items-center justify-center my-32 min-h-[50vh] px-3">
			<Image
				src="/assets/images/fallback/profile-first-issue-light.svg"
				alt="background illustration"
				width={400}
				height={400}
				className="absolute -top-16 -left-10 opacity-30 scale-125 dark:hidden -z-10"
			/>
			<Image
				src="/assets/images/fallback/profile-first-issue-darksvg.svg"
				alt="background illustration"
				width={400}
				height={400}
				className="absolute -top-16 -left-10 opacity-30 scale-125 hidden dark:block -z-10"
			/>
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
