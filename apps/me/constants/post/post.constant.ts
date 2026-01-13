import type { TPost } from '@repo/stephen-v2-contents'
import { devPost, retroPost, shortWriting } from '@repo/stephen-v2-contents'

export const allPostByTag = [
	...devPost,
	...shortWriting.filter((post: TPost) => post.type !== 'single'),
	...retroPost.filter((post: TPost) => post.retroType === 'RECAP'),
]
