/*
 * https://vercel.com/resources
 */

import type { Metadata } from 'next'

import LightRaysClient from '@/components/effects/light-rays-client'
import MainLayout from '@/components/layouts/main-layout'
import PostPageTitle from '@/components/post/post-page-title'
import DocumentPageView from '@/view/doc/pages/doc.page'

const title = 'Document'
const description = 'Where I store interesting things as documents that I have learned from various subjects.'

export const metadata: Metadata = {
	title,
	description,
}

function DocumentPage() {
	return (
		<MainLayout>
			<LightRaysClient />

			<PostPageTitle title={title} description={description} />

			<DocumentPageView />
		</MainLayout>
	)
}

export default DocumentPage
