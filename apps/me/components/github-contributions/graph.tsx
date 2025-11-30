/**
 * Theme transition
 * primitives (MIT License)
 * Copyright (c) zephinax: https://github.com/zephinax
 * Source:
 *  - https://github.dev/zephinax/personal-website
 *
 * Modified by: Stephen
 */

'use client'

import { Skeleton, Spinner, Tooltip, TooltipContent, TooltipTrigger } from '@repo/stephen-v2-ui/shadcn'
import { d } from '@repo/stephen-v2-utils'
import { motion } from 'motion/react'
import { use, useEffect, useState } from 'react'

import type { Activity } from '@/components/kibo-ui/contribution-graph'
import {
	ContributionGraph,
	ContributionGraphBlock,
	ContributionGraphCalendar,
	ContributionGraphFooter,
	ContributionGraphLegend,
	ContributionGraphTotalCount,
} from '@/components/kibo-ui/contribution-graph'
import { APP_CONFIG } from '@/configs/app-config'

export function GitHubContributionGraph({ contributions }: { contributions: Promise<Activity[]> }) {
	const [loaded, setLoaded] = useState(false)

	const data = use(contributions)

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded) {
		return (
			<Skeleton className="mx-auto py-2">
				<Spinner />
			</Skeleton>
		)
	}

	return (
		<ContributionGraph className="mx-auto py-2" data={data} blockSize={11} blockMargin={3} blockRadius={0}>
			<ContributionGraphCalendar className="no-scrollbar px-2" title="GitHub Contributions">
				{({ activity, dayIndex, weekIndex }) => {
					const index = weekIndex * 7 + dayIndex

					return (
						<Tooltip>
							<TooltipTrigger asChild>
								<motion.g
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.25,
										delay: index * 0.01,
									}}
								>
									<ContributionGraphBlock
										activity={activity}
										dayIndex={dayIndex}
										weekIndex={weekIndex}
									/>
								</motion.g>
							</TooltipTrigger>

							<TooltipContent className="font-sans" sideOffset={0}>
								<p>
									{activity.count} contribution{activity.count > 1 ? 's' : null} on{' '}
									{d(activity.date).format('DD.MM.YYYY')}
								</p>
							</TooltipContent>
						</Tooltip>
					)
				}}
			</ContributionGraphCalendar>

			<ContributionGraphFooter className="px-2">
				<ContributionGraphTotalCount>
					{({ totalCount, year }) => (
						<div className="text-muted-foreground">
							{totalCount.toLocaleString('en')} contributions in {year} on{' '}
							<a
								className="font-medium underline underline-offset-4"
								href={`https://github.com/${APP_CONFIG.author.githubUserName}`}
								target="_blank"
								rel="noopener"
							>
								GitHub
							</a>
							.
						</div>
					)}
				</ContributionGraphTotalCount>

				<ContributionGraphLegend />
			</ContributionGraphFooter>
		</ContributionGraph>
	)
}

export function GitHubContributionFallback() {
	return (
		<Skeleton className="flex h-[162px] w-full max-w-[739px] items-center justify-center">
			<Spinner />
		</Skeleton>
	)
}
