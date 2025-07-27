import type { DevShortPost } from '@repo/stephen-v2-contents'
import { devShort } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'

import PageTitle from '@/components/post/page-title'
import PostCards from '@/components/post/post-cards'

const title = 'Short Short'
const description = `My personal notes that's not long enough to be a blog post`

const sortedPosts: DevShortPost[] = sortPostsByDate(
	devShort.filter((post) => post.published),
	'desc'
)

function DevShortPostPageView() {
	return (
		<div className="flex flex-col gap-5">
			<PageTitle title={title} description={description} />

			{sortedPosts?.length > 0 ? <PostCards posts={sortedPosts} /> : <p>I have no posts yet... ㄟ( ▔, ▔ )ㄏ</p>}
		</div>
	)
}

export default DevShortPostPageView
