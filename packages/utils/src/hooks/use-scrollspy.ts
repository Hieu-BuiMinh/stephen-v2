'use client'

import { useEffect, useRef, useState } from 'react'

const useScrollSpy = (ids: string[], options: IntersectionObserverInit): string[] => {
	const [activeIds, setActiveIds] = useState<string[]>([])
	const observer = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		const elements = ids.map((id) => document?.querySelector(`#${CSS.escape(id)}`))

		if (observer.current) {
			observer.current.disconnect()
		}

		observer.current = new IntersectionObserver((entries) => {
			setActiveIds((prev) => {
				const currentActive = new Set(prev)
				for (const entry of entries) {
					if (entry.isIntersecting) {
						currentActive.add(entry.target.id)
					} else {
						currentActive.delete(entry.target.id)
					}
				}
				const nextIds = ids.filter((id) => currentActive.has(id))

				// Sticky logic: If no headers are currently intersecting (e.g., in long content),
				// find the last header that is currently above the viewport.
				const finalIds =
					nextIds.length === 0
						? (() => {
								let lastAbove = null
								for (const id of ids) {
									const el = document.getElementById(id)
									if (!el) continue
									const rect = el.getBoundingClientRect()
									if (rect.top <= 150) {
										lastAbove = id
									} else {
										break
									}
								}
								return lastAbove ? [lastAbove] : []
							})()
						: nextIds

				// Optimization: Only update state if the array content has actually changed
				if (finalIds.length === prev.length && finalIds.every((id, index) => id === prev[index])) {
					return prev
				}

				return finalIds
			})
		}, options)

		for (const el of elements) {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			el && observer.current.observe(el)
		}

		return () => observer.current?.disconnect()
	}, [ids, options])

	return activeIds
}

export { useScrollSpy }
