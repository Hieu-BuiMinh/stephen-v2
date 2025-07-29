import type { DevBlogPost } from '../index.ts'

interface IGetPostByIdParams {
	id: DevBlogPost['id']
	postsList: DevBlogPost
}

export const getVelitePostById = ({ id, postsList }: IGetPostByIdParams) => {
	return postsList.find((post: { id: string }) => post.id === id)
}
