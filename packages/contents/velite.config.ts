import rehypeShiki from '@shikijs/rehype'
import rehypeAutoLinkHeading from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
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
			[rehypeShiki, { themes: { dark: 'night-owl', light: 'github-light', keepBackground: false } }],
			[rehypeHighlight],
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
