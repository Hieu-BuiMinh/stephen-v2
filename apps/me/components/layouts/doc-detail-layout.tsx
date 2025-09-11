import React from 'react'

import SiteFooter from '@/components/footer'
import DocNavbar from '@/components/navigation/doc/doc-navbar'
import DocSidebar from '@/components/navigation/doc/doc-sidebar'
import NewsletterSignUp from '@/components/sections/newsletter-signup'
import type { ITableOfContent } from '@/types/doc/doc-collection'

function DocumentDetailLayout({
	children,
	docId,
	tableOfContent,
}: {
	children: React.ReactNode
	docId: string
	tableOfContent: ITableOfContent[] | undefined
}) {
	return (
		<main className="flex flex-1 flex-col border-muted-foreground/10">
			<DocNavbar className="w-full h-16 sticky top-0 border-b bg-background z-30" />
			<div className="flex">
				<DocSidebar
					docId={docId}
					tableOfContent={tableOfContent}
					className="w-70 h-screen sticky top-16 border-r p-3"
				/>
				<div className="min-h-[calc(200vh-7rem)] p-3 flex-1">{children}</div>
			</div>

			<NewsletterSignUp />

			<SiteFooter />
		</main>
	)
}

export default DocumentDetailLayout
