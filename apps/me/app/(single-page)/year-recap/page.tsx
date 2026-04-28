import type { Metadata } from 'next'

import { APP_CONFIG } from '@/configs/app-config'
import YearRecapPageView from '@/view/year-recap/pages/year-recap.page'

export const metadata: Metadata = {
	title: 'Year Recap',
	description: APP_CONFIG.description,
	openGraph: {
		title: 'Year Recap',
		description: APP_CONFIG.description,
	},
}

function RecapListPage() {
	return <YearRecapPageView />
}

export default RecapListPage
