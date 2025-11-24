import { docPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'

import type { IDocCollection } from '@/types/doc/doc-collection'

const processTableOfContents = (items: IDocCollection['collections'][number]['tableOfContent']) => {
	return items.map((item) => {
		if (!item.id) {
			if (item.children) {
				item.children = processTableOfContents(item.children)
			}
			return item
		}

		const post = getVelitePostById({ id: item.id, postsList: docPost })

		const updatedItem = {
			...item,
			title: post?.title || item.title || 'Updating...',
			description: post?.description || item.description,
		}

		if (updatedItem.children) {
			updatedItem.children = processTableOfContents(updatedItem.children)
		}

		return updatedItem
	})
}

export { processTableOfContents }
