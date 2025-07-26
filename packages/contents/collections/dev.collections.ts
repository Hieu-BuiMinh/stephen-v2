import { defineCollection, s } from 'velite'

import { computedFields } from '../utils/velite-transform'

const devPost = defineCollection({
	name: 'DevBlogPost',
	pattern: 'articles/dev/posts/**/*.mdx',
	schema: s
		.object({
			id: s.unique().optional(),
			slug: s.path(),
			title: s.string().max(999),
			createdAt: s.isodate(),
			updatedAt: s.isodate().optional(),
			cover: s.string().optional(),
			video: s.file().optional(),
			metadata: s.metadata().optional(),
			description: s.string().max(999).optional(),
			published: s.boolean().default(true),
			hashTags: s
				.object({
					category: s.string(),
					tags: s.array(s.string()),
				})
				.optional(),
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

const devShort = defineCollection({
	name: 'DevShortPost',
	pattern: 'articles/dev/short/**/*.mdx',
	schema: s
		.object({
			id: s.unique().optional(),
			slug: s.path(),
			title: s.string().max(999),
			createdAt: s.isodate(),
			updatedAt: s.isodate().optional(),
			cover: s.string().optional(),
			video: s.file().optional(),
			metadata: s.metadata().optional(),
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

export { devPost, devShort }
