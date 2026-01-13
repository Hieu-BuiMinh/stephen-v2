'use client'

import { Input } from '@repo/stephen-v2-ui/shadcn'
import { CircleX } from 'lucide-react'
import { useEffect, useState } from 'react'

import TagBadge from '@/view/tags/components/post-tag'
import { useTagsFilter } from '@/view/tags/components/providers/tags-filter.provider'

function TagActions() {
	const { tags, toggleTag, q, setQ } = useTagsFilter()
	const [loaded, setLoaded] = useState(false)

	useEffect(() => setLoaded(true), [])
	if (!loaded) return null

	return (
		<div className="flex flex-col gap-5">
			<Input
				value={q || ''}
				onChange={(e) => setQ(e.target.value || null)}
				className="max-w-2xl m-auto"
				placeholder="#title #slug #desc #tag"
			/>

			<div className="flex gap-1.5 flex-wrap px-1">
				{tags.map((t) => (
					<TagBadge
						className="cursor-pointer"
						key={t.name}
						variant={t.active ? 'default' : 'secondary'}
						onClick={() => toggleTag(t.name)}
					>
						{t.active && <CircleX />}
						{t.name}
					</TagBadge>
				))}
			</div>
		</div>
	)
}

export default TagActions
