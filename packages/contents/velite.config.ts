import { defineConfig, s } from 'velite'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const computedFields: any = <T extends { slug: string }>(data: T) => {
	return { ...data, slugAsParams: data.slug.split('/').slice(1).join('/') }
	// blog/hello-world => ['blog', 'hello-world'] => ['hello-world] => '/hello-world'
}

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
		posts: {
			name: 'ShortNotes',
			pattern: 'posts/**/*.md',
			schema: s
				.object({
					title: s.string().max(99),
					slug: s.path(),
					date: s.isodate(),
					metadata: s.metadata(),
					content: s.markdown(),
				})
				.transform(computedFields),
		},
	},
})
