import { docPost } from '@repo/stephen-v2-contents'
import { getVelitePostById } from '@repo/stephen-v2-contents/utils'

import type { IDocCollection } from '@/types/doc/doc-collection'

const tuHocKinhdichTap1TableOfContentsOrder: IDocCollection['collections'][number]['tableOfContent'] = [
	{
		id: '75c80ca3-c5e4-449c-b718-f9dca03b6daa',
		title: '',
		description: '',
		children: [
			{
				id: null,
				title: 'Kiến thức đại cương',
				description: '',
				children: [
					{
						id: 'db2a92a2-25f3-42dc-84e0-d6cc0f5545a2',
						title: '',
						description: '',
					},
				],
			},
		],
	},
]

const processTableOfContents = (items: typeof tuHocKinhdichTap1TableOfContentsOrder) => {
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
			title: post?.title || item.title,
			description: post?.description || item.description,
		}

		if (updatedItem.children) {
			updatedItem.children = processTableOfContents(updatedItem.children)
		}

		return updatedItem
	})
}

// Chạy đệ quy để cập nhật bảng mục lục
export const tuHocKinhdichTap1TableOfContents = processTableOfContents(tuHocKinhdichTap1TableOfContentsOrder)
