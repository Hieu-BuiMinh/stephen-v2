import type { DevBlogPost } from '../.velite'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const computedFields: any = <T extends { slug: string }>(data: T) => {
	return {
		...data,
		updatedAt: new Date().toLocaleString(),
		author: {
			avatar: '/assets/images/avt/me_04.png',
			name: 'Stephen',
			github: 'https://github.com/Hieu-BuiMinh',
		},
		slugAsParams: data.slug.split('/').slice(1).join('/'), // blog/hello-world => ['blog', 'hello-world'] => ['hello-world] => '/hello-world'
	}
}

export function sortPostsByDate(posts: Array<DevBlogPost>, order: 'asc' | 'desc' = 'asc'): Array<DevBlogPost> {
	return posts.sort((a, b) => {
		const dateA = new Date(a.date).getTime()
		const dateB = new Date(b.date).getTime()

		if (order === 'asc') {
			return dateA - dateB // Sort in ascending order
		} else if (order === 'desc') {
			return dateB - dateA // Sort in descending order
		} else {
			throw new Error("Invalid order parameter. Use 'asc' for ascending or 'desc' for descending.")
		}
	})
}
