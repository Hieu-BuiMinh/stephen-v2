import { Book } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'
import React from 'react'

import { documentCollection } from '@/constants/document'

function DocumentPageView() {
	return (
		<div className="inline-flex flex-col gap-8 px-6 py-12">
			{documentCollection.map((doc) => {
				const url = `/document/${doc.slug}/${doc?.toc?.[0]?.id}`

				return (
					<Link href={url} className="z-10 flex" key={doc.title}>
						<Book key={doc.title} {...doc} />
					</Link>
				)
			})}
			{/* <Book
				texture
				title="Tự Học Kinh Dịch"
				color="#161C2E"
				textColor="#fff"
				illustration={
					<Image
						src="/assets/images/books/48-laws-of-power-cover.png"
						className="size-full object-cover opacity-50"
						width={220}
						height={150}
						alt="48-laws-of-power-cover.png"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				}
			/> */}
		</div>
	)
}

export default DocumentPageView
