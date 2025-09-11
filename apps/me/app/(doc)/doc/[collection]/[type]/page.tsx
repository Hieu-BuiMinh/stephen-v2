import { redirect } from 'next/navigation'

import { docCollections } from '@/constants/doc'

interface IDocumentPage {
	params: Promise<{ collection: string; type: string; id?: string }>
}

async function DocumentPage({ params }: IDocumentPage) {
	const { collection: collectionName, type, id } = await params
	const collection = docCollections.find((c) => c.collectionName === collectionName)

	if (!id) {
		redirect(`/doc/${collection}/${type}/${collection?.collections?.[0]?.id}`)
	}

	return null
}

export default DocumentPage
