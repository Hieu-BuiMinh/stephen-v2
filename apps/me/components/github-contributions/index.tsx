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
	contributions: Promise<Activity[]>
}

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: 5 }, (_, i) => CURRENT_YEAR - 4 + i)

const options: GitHubContributionsOption[] = [
	// 5 years till now
	...YEARS.map((year) => ({
		id: String(year),
		label: String(year),
		contributions: getGitHubContributions({ year }),
	})),
	{
		id: 'last',
		label: 'Last year',
		contributions: getGitHubContributions(),
	},
]

export function GitHubContributions() {
	const [selectedId, setSelectedId] = useState<string>(
		options.some((opt) => opt.id === 'last') ? 'last' : (options[options.length - 1]?.id ?? '')
	)

	const active = options.find((opt) => opt.id === selectedId) ?? options[0]

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
				<GitHubContributionGraph key={selectedId} contributions={active.contributions} />
			</Suspense>
		</div>
	)
}
