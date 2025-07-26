import { defineConfig } from 'velite'

import { devPost, devShort } from './collections/dev.collections'

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
		devShort,
	},
})
