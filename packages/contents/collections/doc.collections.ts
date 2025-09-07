import { defineCollection, s } from 'velite'

import { computedFields } from '../utils/velite-transform'

const docPost = defineCollection({
	name: 'DocBlogPost',
	pattern: ['articles/doc/**/*.mdx'],
	schema: s
		.object({
			id: s.unique(),
			slug: s.path(),
			title: s.string().max(999),
			createdAt: s.isodate().optional(),
			updatedAt: s.isodate().optional(),
			cover: s.string().optional(),
			metadata: s.metadata(),
			description: s.string().max(999).optional(),
			published: s.boolean().default(true),
			hashTags: s.array(s.string()).optional(),
			body: s.mdx(),
			author: s
				.object({
					avatar: s.string(),
					name: s.string(),
					github: s.string(),
				})
				.optional(),
			toc: s.toc({ tight: true, ordered: true, maxDepth: 6 }),
			//slugAsParams <=> needed transform
		})
		.transform(computedFields),
})

export { docPost }
