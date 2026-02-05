import { defineCollection, s } from 'velite'

import { computedFields } from '../utils/velite-transform'

const retroPost = defineCollection({
	name: 'retroPost',
	pattern: ['articles/retro/**/*.mdx'],
	schema: s
		.object({
			id: s.unique(),
			slug: s.path(),
			title: s.string().max(999),
			createdAt: s.isodate().optional(),
			updatedAt: s.isodate().optional(),
			milestone: s.isodate(),
			relatedPostUrl: s.string().optional(),
			cover: s.string().optional(),
			metadata: s.metadata(),
			description: s.string().max(999).optional(),
			published: s.boolean().default(true),
			hashTags: s.array(s.string()).optional(),
			body: s.mdx(),
			retroType: s.enum(['MILESTONE', 'RECAP']).default('MILESTONE'),
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

export { retroPost }
