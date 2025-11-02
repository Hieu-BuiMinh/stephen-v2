import type { ReactNode } from 'react'

import SiteFooter from '@/components/footer'
import DocNavbar from '@/components/navigation/doc/doc-navbar'
import DocSidebar from '@/components/navigation/doc/doc-sidebar'
import NewsletterSignUp from '@/components/sections/newsletter-signup'

function DocumentDetailLayout({ children }: { children: ReactNode }) {
	return (
		<main className="flex flex-1 flex-col border-muted-foreground/10">
			<DocNavbar className="w-full h-16 sticky top-0 border-b border-dashed bg-background z-30" />
			<div className="flex">
				<DocSidebar />
				<div className="p-3 flex-1">{children}</div>
			</div>

			<NewsletterSignUp />

			<SiteFooter />
		</main>
	)
}

export default DocumentDetailLayout
