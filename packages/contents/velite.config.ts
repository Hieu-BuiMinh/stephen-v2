import rehypeShiki from '@shikijs/rehype'
import {
	transformerNotationDiff,
	transformerNotationErrorLevel,
	transformerNotationFocus,
	transformerNotationHighlight,
} from '@shikijs/transformers'
import rehypeAutoLinkHeading from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { defineConfig } from 'velite'

import { devPost } from './collections/dev.collections'

export default defineConfig({
	root: '.',
	output: {
		data: '.velite',
		assets: 'public/static',
		base: '/static/',
		name: '[name]-[hash:6].[ext]',
		clean: true,
	},
	collections: {
		devPost,
	},
	mdx: {
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeShiki,
				{
					themes: {
						dark: 'night-owl',
						light: 'github-light',
						keepBackground: false,
					},

					transformers: [
						// https://shiki.style/packages/transformers#matchalgorithm-v3
						transformerNotationDiff({ matchAlgorithm: 'v3' }),
						transformerNotationHighlight({
							matchAlgorithm: 'v3',
							classActiveLine: 'code-block__line--highline',
							classActivePre: 'code-block__pre--highline',
						}),
						transformerNotationFocus({ matchAlgorithm: 'v3' }),
						transformerNotationErrorLevel({ matchAlgorithm: 'v3' }),
					],
				},
			],
			[
				rehypeAutoLinkHeading,
				{
					behavior: 'wrap',
					properties: {
						className: ['subheading-anchor'],
						ariaLabel: 'Link to section',
					},
				},
			],
		],
		remarkPlugins: [],
	},
})
