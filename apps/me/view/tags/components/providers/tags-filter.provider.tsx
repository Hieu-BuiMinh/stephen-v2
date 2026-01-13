'use client'

import type { TPost } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { useQueryState } from 'nuqs'
import React, { createContext, useContext, useMemo, useState } from 'react'

type TagItem = { name: string; active: boolean }

type TagsFilterContextValue = {
	q: string | null
	setQ: (q: string | null) => void

	tags: TagItem[]
	toggleTag: (name: string) => void
	clearTags: () => void

	activeTags: string[]
	posts: TPost[]
}

const TagsFilterContext = createContext<TagsFilterContextValue | null>(null)

export function TagsFilterProvider({ postsSource, children }: { postsSource: TPost[]; children: React.ReactNode }) {
	const [q, setQ] = useQueryState('q')

	const initialTags: TagItem[] = useMemo(() => {
		const allTags = postsSource.flatMap((post) => post.hashTags ?? [])
		const unique = [...new Set(allTags.filter((t): t is string => typeof t === 'string' && t.length > 0))]
		return unique.map((name) => ({ name, active: false }))
	}, [postsSource])

	const [tags, setTags] = useState<TagItem[]>(initialTags)

	const toggleTag = (name: string) => {
		setTags((prev) => prev.map((t) => (t.name === name ? { ...t, active: !t.active } : t)))
	}

	const clearTags = () => {
		setTags((prev) => prev.map((t) => (t.active ? { ...t, active: false } : t)))
	}

	const activeTags = useMemo(() => tags.filter((t) => t.active).map((t) => t.name), [tags])

	const postList = useMemo(() => sortPostsByDate(postsSource, 'desc'), [postsSource])

	const posts = useMemo(() => {
		const query = (q ?? '').trim().toLowerCase()

		let result = postList

		// 1) query filter
		if (query) {
			result = result.filter((post) => {
				const title = (post.title ?? '').toLowerCase()
				const slug = (post.slug ?? '').toLowerCase()
				const desc = (((post as TPost).description ?? (post as TPost).summary ?? '') as string).toLowerCase()
				const tagsText = (post.hashTags ?? []).join(' ').toLowerCase()

				return title.includes(query) || slug.includes(query) || desc.includes(query) || tagsText.includes(query)
			})
		}

		// 2) tag filter (OR)
		if (activeTags.length > 0) {
			result = result.filter((post) => {
				const postTags = post.hashTags ?? []
				return postTags.some((t) => t && activeTags.includes(t))
			})
		}

		return result
	}, [q, activeTags, postList])

	const value: TagsFilterContextValue = {
		q,
		setQ,
		tags,
		toggleTag,
		clearTags,
		activeTags,
		posts,
	}

	return <TagsFilterContext.Provider value={value}>{children}</TagsFilterContext.Provider>
}

export function useTagsFilter() {
	const ctx = useContext(TagsFilterContext)
	if (!ctx) throw new Error('useTagsFilter must be used within TagsFilterProvider')
	return ctx
}
