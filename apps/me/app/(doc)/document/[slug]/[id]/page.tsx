import type { DevBlogPost } from '@repo/stephen-v2-contents'
import React from 'react'

import SiteFooter from '@/components/footer'
import DocNavbar from '@/components/navigation/doc/doc-navbar'
import DocSidebarStatic from '@/components/navigation/doc/doc-sidebar-static'
import NewsletterSignUp from '@/components/sections/newsletter-signup'
import type { TDocumentCollection } from '@/constants/document'
import { documentCollection } from '@/constants/document'
import DocumentDetailPageView from '@/view/document/pages/document-detail.page'

export const dynamic = 'force-static'

function extractPostIdsBySlug(collection: TDocumentCollection[], slug: string): DevBlogPost['id'][] {
	const doc = collection.find((d) => d.slug === slug)
	if (!doc?.toc?.length) return []

	const out: DevBlogPost['id'][] = []
	const seen = new Set<DevBlogPost['id']>()

	const walk = (nodes: TDocumentCollection['toc']) => {
		if (!nodes?.length) return
		for (const node of nodes) {
			const id = node.id
			if (id !== null && !seen.has(id)) {
				seen.add(id)
				out.push(id)
			}
			if (node.children?.length) walk(node.children)
		}
	}

	walk(doc.toc)
	return out
}

const allDocumentCollection = documentCollection.map((doc) => doc.slug)

const allCollectionParams = allDocumentCollection.flatMap((slug) =>
	extractPostIdsBySlug(documentCollection, slug).map((id) => ({
		slug,
		id: String(id),
	}))
)

export async function generateStaticParams(): Promise<{ slug: string; id: string }[]> {
	return allCollectionParams
}

function DocumentDetailLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen overflow-x-hidden">
			<main className="flex flex-1 flex-col border-muted-foreground/10">
				<DocNavbar className="w-full h-16 sticky top-0 border-b bg-background z-60" />
				<div className="flex">{children}</div>
				<NewsletterSignUp />
				<SiteFooter />
			</main>
		</div>
	)
}

async function DocumentDetailPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
	const { slug, id } = await params

	const doc = documentCollection.find((d) => d.slug === slug)
	const tableOfContent = doc?.toc ?? []

	return (
		<DocumentDetailLayout>
			<DocSidebarStatic tableOfContent={tableOfContent} docId={id} baseHref={`/document/${slug}`} />
			<div className="p-3 flex-1">
				<DocumentDetailPageView id={id} />
			</div>
		</DocumentDetailLayout>
	)
}

export default DocumentDetailPage
