import { redirect } from 'next/navigation'

interface IDocumentPage {
	params: Promise<{ collection: string; doc: string; id?: string }>
}

async function DocumentPage({ params }: IDocumentPage) {
	const { collection, doc, id } = await params

	if (!id) {
		redirect(`/doc/${collection}/${doc}/abc`)
	}

	return null
}

export default DocumentPage
