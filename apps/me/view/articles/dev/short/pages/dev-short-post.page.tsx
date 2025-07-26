import type { DevShortPost } from '@repo/stephen-v2-contents'
import { devShort } from '@repo/stephen-v2-contents'
import { sortPostsByDate } from '@repo/stephen-v2-contents/utils'
import { NotebookText } from 'lucide-react'
import React from 'react'

import PageTitle from '@/components/post/page-title'
import PostCards from '@/components/post/post-cards'

const title = 'Short Post'
const description =
	'My personal website and blog where I share my thoughts on various topics about personal experiences.'

const sortedPosts: DevShortPost[] = sortPostsByDate(
	devShort.filter((post) => post.published),
	'desc'
)

function DevShortPostPageView() {
	return (
		<div className="container m-auto flex max-w-screen-lg flex-col gap-3">
			<PageTitle
				title={title}
				description={description}
				blurImageSrc="/assets/images/background/blog-header-blur-bg.svg"
				icon={NotebookText}
			/>

			{sortedPosts?.length > 0 ? <PostCards posts={sortedPosts} /> : <p>I have no posts yet... ㄟ( ▔, ▔ )ㄏ</p>}
		</div>
	)
}

export default DevShortPostPageView
