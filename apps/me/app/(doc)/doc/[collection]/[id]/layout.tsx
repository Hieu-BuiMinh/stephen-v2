import React from 'react'

import DocumentDetailLayout from '@/components/layouts/doc-detail-layout'

function Layout({ children }: { children: React.ReactNode }) {
	return <DocumentDetailLayout>{children}</DocumentDetailLayout>
}

export default Layout
