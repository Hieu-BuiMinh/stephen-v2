import { defineCollection, s } from 'velite'

import { computedFields } from '../utils/velite-transform'

const shortWriting = defineCollection({
	name: 'shortWriting',
	pattern: ['articles/short-writing/**/*.mdx'],
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
			type: s.enum(['ba-zi', 'i-ching', 'buddhism', 'single']),
			body: s.mdx(),
			author: s
				.object({
					avatar: s.string(),
					name: s.string(),
					github: s.string(),
				})
				.optional(),
			links: s
				.object({
					repoUrl: s.string().optional(),
					demoUrl: s.string().optional(),
				})
				.optional(),
			toc: s.toc({ tight: true, ordered: true, maxDepth: 6 }),
			//slugAsParams <=> needed transform
		})
		.transform(computedFields),
})

export { shortWriting }
