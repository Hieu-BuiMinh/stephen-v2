// components/github-contributions/client.tsx
'use client'

import { Checkbox, Label } from '@repo/stephen-v2-ui/shadcn'
import { Suspense, useState } from 'react'

import type { Activity } from '@/components/kibo-ui/contribution-graph'
import { getGitHubContributions } from '@/utils/github-contributions'

import { GitHubContributionFallback, GitHubContributionGraph } from './graph'

export type GitHubContributionsOption = {
	id: string
	label: string
}

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: 5 }, (_, i) => CURRENT_YEAR - 4 + i)

const contributionsCache = new Map<string, Promise<Activity[]>>()

function getContributions(year?: number) {
	const key = typeof year === 'number' ? String(year) : 'last'
	const cached = contributionsCache.get(key)

	if (cached) return cached

	const contributions = getGitHubContributions(year === undefined ? {} : { year }).catch((error) => {
		contributionsCache.delete(key)
		throw error
	})

	contributionsCache.set(key, contributions)
	return contributions
}

const options: GitHubContributionsOption[] = [
	// Keep the requests lazy: the API rate-limits a burst of requests on page load.
	...YEARS.map((year) => ({
		id: String(year),
		label: String(year),
	})),
	{
		id: 'last',
		label: 'Last year',
	},
]

export function GitHubContributions() {
	const [selectedId, setSelectedId] = useState<string>(
		options.some((opt) => opt.id === 'last') ? 'last' : (options[options.length - 1]?.id ?? '')
	)

	const active = options.find((opt) => opt.id === selectedId) ?? options[0]
	const contributions = getContributions(active.id === 'last' ? undefined : Number(active.id))

	return (
		<div className="space-y-3 flex flex-col items-center gap-2 w-full overflow-x-hidden">
			<div className="flex flex-wrap items-center gap-3">
				{options.map((opt) => (
					<div key={opt.id} className="flex items-center gap-2">
						<Checkbox
							id={`year-${opt.id}`}
							checked={selectedId === opt.id}
							onCheckedChange={() => setSelectedId(opt.id)}
							className="h-3 w-3"
						/>
						<Label htmlFor={`year-${opt.id}`} className="cursor-pointer text-xs text-muted-foreground">
							{opt.label}
						</Label>
					</div>
				))}
			</div>

			<Suspense key={selectedId} fallback={<GitHubContributionFallback />}>
				<GitHubContributionGraph key={selectedId} contributions={contributions} />
			</Suspense>
		</div>
	)
}
