import type { Metadata } from 'next'

import { APP_CONFIG } from '@/configs/app-config'
import RetrospectivePageView from '@/view/retrospective/pages/retrospective.page'

export const metadata: Metadata = {
	title: `Retrospective`,
	description: APP_CONFIG.description,
	openGraph: {
		title: `Retrospective`,
		description: APP_CONFIG.description,
	},
}

function RetrospectivePage() {
	return <RetrospectivePageView />
}

export default RetrospectivePage
