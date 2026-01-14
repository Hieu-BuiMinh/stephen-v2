import LightRaysClient from '@/components/effects/light-rays-client'
import PostPageTitle from '@/components/post/post-page-title'
import GuestbookPageView from '@/view/guestbook/pages/guestbook.page'

function GuestbookPage() {
	return (
		<>
			<LightRaysClient />
			<div className="flex flex-col">
				<PostPageTitle
					title="Guestbook"
					description="Sign my guestbook and share your idea. You can tell me anything here!"
				/>
				<GuestbookPageView />
			</div>
		</>
	)
}

export default GuestbookPage
