import { notFound, redirect } from 'next/navigation'

import { documentCollection } from '@/constants/document'

export const dynamic = 'force-static'

const allDocumentCollection = documentCollection.map((doc) => doc.slug)
const findFirstPostIdBySlug = (slug: string) => documentCollection.find((doc) => doc.slug === slug)?.toc?.[0]?.id

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	return allDocumentCollection.map((slug) => ({
		slug,
	}))
}

async function DocCollectionPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params

	if (!findFirstPostIdBySlug(slug)) {
		notFound()
	}

	redirect(`/document/${slug}/${findFirstPostIdBySlug(slug)}`)
}

export default DocCollectionPage
