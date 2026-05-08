import type { TPost } from '@repo/stephen-v2-contents'
import { devPost, retroPost, shortWriting } from '@repo/stephen-v2-contents'

export const allPostByTag: TPost[] = [
	...devPost.filter((post: TPost) => post.published !== false),
	...shortWriting.filter((post: TPost) => post.type !== 'single' && post.published !== false),
	...retroPost.filter((post: TPost) => post.retroType === 'RECAP' && post.published !== false),
]
