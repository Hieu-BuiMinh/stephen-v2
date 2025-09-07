import DocumentPostDetailPageView from '@/view/doc/pages/doc-post-detail.page'

interface IDocumentPostDetail {
	params: Promise<{ collection: string; type: string; id: string }>
}

async function DocumentPostDetail({ params }: IDocumentPostDetail) {
	const { id } = await params

	return <DocumentPostDetailPageView id={id} />
}

export default DocumentPostDetail
