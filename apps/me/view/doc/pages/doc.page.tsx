import MainLayout from '@/components/layouts/main-layout'
import { docCollections } from '@/constants/doc'
import DocCollectionCard from '@/view/doc/components/doc-collection-card'

function DocumentPageView() {
	return (
		<MainLayout>
			<div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{docCollections.map((collection) => {
					const url = `/doc/${collection.collectionName}`
					return (
						<DocCollectionCard
							className="col-span-1"
							key={collection.title}
							icon={collection?.icon}
							title={collection.title}
							description={collection.description}
							url={url}
						/>
					)
				})}
			</div>
		</MainLayout>
	)
}

export default DocumentPageView
