import UnderConstructionLayer from '@/components/layers/under-construction-layer'
import GuestbookHeader from '@/view/guestbook/components/guestbook-header'

function GuestbookPageView() {
	return (
		<div className="w-full relative p-3 pb-48">
			<GuestbookHeader />
			<UnderConstructionLayer />
		</div>
	)
}

export default GuestbookPageView
