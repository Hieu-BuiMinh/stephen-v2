import type { BOOKS_POST_TYPE, TPost } from '@repo/stephen-v2-contents'
import { bookRecap } from '@repo/stephen-v2-contents'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'
import React from 'react'

import LightRaysClient from '@/components/effects/light-rays-client'
import BookCards from '@/components/post/book-cards'

type T = TPost & { bookCover: string }

function BookPage() {
	const bookRecaps: { [key: string]: T[] } = {
		'life-habits': bookRecap?.filter((post) => post.type === 'life-habits'),
		productivity: bookRecap?.filter((post) => post.type === 'productivity'),
		others: bookRecap?.filter((post) => post.type === 'others'),
	}

	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col gap-36 py-36">
				{Object.entries(bookRecaps).map(([key, posts]) => (
					<div key={key} className="group relative flex flex-col overflow-visible">
						<AnimatedBlock type="FADE_IN_FROM_BOTTOM" className="group/post-card relative">
							<div
								className="absolute -top-24 capitalize z-[-1] text-9xl font-extrabold text-neutral-400 opacity-20 duration-300 ease-in group-hover:opacity-90 dark:text-neutral-800"
								style={{
									textShadow: `-0.3px 0 var(--muted-foreground),
											0 0.3px var(--muted-foreground),
											0.3px 0 var(--muted-foreground),
											0 -0.3px var(--muted-foreground)`,
								}}
							>
								{key}
							</div>
						</AnimatedBlock>
						<BookCards className="pb-0" posts={posts} collection={key as BOOKS_POST_TYPE} />

						<div className="my-8 flex items-center justify-center">
							<Link href={`/books/${key}`}>
								<Button variant="outline" className="w-auto cursor-pointer">
									View All
								</Button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default BookPage
