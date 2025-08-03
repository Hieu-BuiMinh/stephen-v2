import type { BOOKS_POST_TYPE } from '@repo/stephen-v2-contents'
import { TextEffect } from '@repo/stephen-v2-ui/motion'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import BooksCollectionsPageView from '@/view/articles/books/pages/books-collection.page'

interface IBooksPostPageProps {
	params: Promise<{ collection: BOOKS_POST_TYPE }>
}

async function BooksPostPage({ params }: IBooksPostPageProps) {
	const { collection } = await params

	const headertitle = {
		'life-habits': {
			title: 'Life Habits',
			description: `Thoughts, mental models, and tutorials about front-end development.`,
		},
		productivity: {
			title: 'Productivity',
			description: `These are a collection of code snippets I have used in the past and want to share with you.`,
		},
		others: {
			title: 'Others',
			description: `My personal notes that's not long enough to be a blog post`,
		},
	}

	const headerTitleByCollection = headertitle[collection as keyof typeof headertitle]

	if (!headerTitleByCollection) {
		return (
			<>
				<LightRaysClient />
				<div className="flex items-center justify-center min-h-[450px]">
					<TextEffect preset="slide" per="word" as="span" delay={0.5} className="mx-auto text-xl capitalize">
						Nothing you can find here... ㄟ( ▔, ▔ )ㄏ
					</TextEffect>
				</div>
			</>
		)
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-5">
				<PostPageTitle
					title={headerTitleByCollection.title}
					description={headerTitleByCollection.description}
				/>
				<BooksCollectionsPageView article="books" collection={collection} />
			</div>
		</>
	)
}

export default BooksPostPage
