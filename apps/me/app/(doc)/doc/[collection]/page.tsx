import DocumentCollectionPageView from '@/view/doc/pages/doc-collection.page'

interface IDocumentCollectionsPage {
	params: Promise<{ collection: string }>
}

async function DocumentCollectionsPage({ params }: IDocumentCollectionsPage) {
	const { collection } = await params

	return <DocumentCollectionPageView collection={collection} />
}

export default DocumentCollectionsPage
