import { Book } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'

import LightRaysClient from '@/components/effects/light-rays-client'
import MainLayout from '@/components/layouts/main-layout'
import PostPageTitle from '@/components/post/post-page-title'
import { docCollections } from '@/constants/doc'

function DocumentCollectionPageView({ collectionName }: { collectionName: string }) {
	const collection = docCollections.find((c) => c.collectionName === collectionName)

	if (!collection) {
		return (
			<MainLayout>
				<LightRaysClient />

				<PostPageTitle title="Oops!" description="I have no document yet... ㄟ( ▔, ▔ )ㄏ" />
			</MainLayout>
		)
	}

	return (
		<MainLayout>
			<LightRaysClient />

			<PostPageTitle title={collection.title} description={collection.description} />

			<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3">
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
		</MainLayout>
	)
}

export default DocumentCollectionPageView
