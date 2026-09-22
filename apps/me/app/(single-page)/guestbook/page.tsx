import type { Metadata } from 'next'

import LightRaysClient from '@/components/effects/light-rays-client'
import { APP_CONFIG } from '@/configs/app-config'
import GuestbookPageView from '@/view/guestbook/pages/guestbook.page'

export const metadata: Metadata = {
	title: 'Guestbook',
	description: APP_CONFIG.description,
	openGraph: {
		title: 'Guestbook',
		description: 'Sign my guestbook and share your idea. You can tell me anything here!',
	},
}
function GuestbookPage() {
	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col">
				<GuestbookPageView />
			</div>
		</>
	)
}

export default GuestbookPage
