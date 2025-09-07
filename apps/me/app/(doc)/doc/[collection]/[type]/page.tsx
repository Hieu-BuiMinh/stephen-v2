import { redirect } from 'next/navigation'

interface IDocumentPage {
	params: Promise<{ collection: string; type: string; id?: string }>
}

async function DocumentPage({ params }: IDocumentPage) {
	const { collection, type, id } = await params

	if (!id) {
		redirect(`/doc/${collection}/${type}/abc`)
	}

	return null
}

export default DocumentPage
