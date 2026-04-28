import dayjs from 'dayjs'

import type { PhotoItem } from '@/constants/photo-journal'

export function groupByMonth(data: PhotoItem[]) {
	const map = new Map<string, PhotoItem[]>()

	data.forEach((item) => {
		const key = dayjs(item.date).format('YYYY-MM')

		if (!map.has(key)) map.set(key, [])
		map.get(key)!.push(item)
	})

	return map
}

export function getMonthCover(items?: PhotoItem[]) {
	if (!items || items.length === 0) return null

	// sort by date ascending -> get first image
	return items.sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix())[0].image
}

export function mapByDate(data: PhotoItem[]) {
	return new Map(data.map((d) => [d.date, d]))
}
