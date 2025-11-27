/**
 * Theme transition
 * primitives (MIT License)
 * Copyright (c) zephinax: https://github.com/zephinax
 * Source:
 *  - https://github.dev/zephinax/personal-website
 *
 * Modified by: Stephen
 */
import type { Activity } from '@/components/kibo-ui/contribution-graph'
import { APP_CONFIG } from '@/configs/app-config'

type GitHubContributionsResponse = {
	contributions: Activity[]
}

const BASE_URL = 'https://github-contributions-api.jogruber.de/v4'

type GetGitHubContributionsOptions = {
	/**
	 * specify year: 2025, 2024, 2023...
	 * if not specified -> use latest 12 months (`y=last`).
	 */
	year?: number
}

export async function getGitHubContributions(options: GetGitHubContributionsOptions = {}): Promise<Activity[]> {
	const { year } = options

	const query = typeof year === 'number' ? `y=${year}` : 'y=last'

	const res = await fetch(`${BASE_URL}/${APP_CONFIG.author.githubUserName}?${query}`, {
		next: { revalidate: 86400 }, // cache 1 day (24 hours)
	})

	if (!res.ok) {
		throw new Error(`Failed to fetch GitHub contributions (${query}): ${res.status} ${res.statusText}`)
	}

	const data = (await res.json()) as GitHubContributionsResponse
	return data.contributions
}
