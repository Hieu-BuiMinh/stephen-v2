import { Book } from '@repo/stephen-v2-ui/shadcn'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'

import { docCollections } from '@/constants/doc'

function DocumentPageView() {
	return (
		<>
			<div className="flex flex-col gap-8 px-6 py-12">
				{docCollections
					.filter((c) => c.status === 'published')
					.map((collection) => {
						return (
							<Fragment key={collection.title}>
								<div className="flex flex-col gap-3">
									<p className="text-base font-bold sm:text-xl md:text-3xl">{collection.title}</p>
									<p className="text-sm font-light text-muted-foreground md:text-lg">
										{collection.description}
									</p>

									<Link
										href={`/doc/${collection.collectionName}`}
										className="flex items-center hover:text-muted-foreground transition-colors"
									>
										Learn more <ArrowUpRight />
									</Link>
								</div>

								<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{collection?.collections.map((doc, index) => {
										const docSlug = doc?.slug
										const firstPostId = doc?.tableOfContent?.[index]?.id || ''
										const url = `/doc/${collection.collectionName}/${docSlug}/${firstPostId}`
										return (
											<Link href={url} className="z-10 flex" key={doc.title}>
												<Book
													width={220}
													texture
													title={doc.title}
													color={doc?.color || '#DBDBDB'}
													textColor={doc?.textColor || 'var(--background)'}
													variant={doc?.variant || 'simple'}
													icon={doc.icon}
												/>
											</Link>
										)
									})}
								</div>
							</Fragment>
						)
					})}
			</div>
		</>
	)
}

export default DocumentPageView
