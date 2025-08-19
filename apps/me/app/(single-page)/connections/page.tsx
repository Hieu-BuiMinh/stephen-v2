import type { Metadata } from 'next'

import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import ConnectionsPageView from '@/view/connections/pages/connections.page'

const title = 'Connections'
const description = `An evolving list of people I've met and those I wish to meet.`

export const metadata: Metadata = {
	title,
	description,
}

function ConnectionsPage() {
	return (
		<div className="min-h-[calc(100vh-4rem)]">
			<LightRaysClient />
			<PostPageTitle title={title} description={description} />
			<ConnectionsPageView />
			<div className="bg-dots-sm absolute inset-0 -z-10" />
		</div>
	)
}

export default ConnectionsPage
