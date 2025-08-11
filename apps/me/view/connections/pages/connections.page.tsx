import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { d } from '@repo/stephen-v2-utils'

import ConnectionBlock from '@/view/connections/components/connection-block'
import { MyConnections } from '@/view/connections/constants/connections'

function ConnectionsPageView() {
	const connections = [...MyConnections].sort((a, b) => {
		// put items with a connectedDate first
		if (a.connectedDate && !b.connectedDate) return -1
		if (!a.connectedDate && b.connectedDate) return 1

		// if both have a connectedDate -> sort by date (newest first)
		if (a.connectedDate && b.connectedDate) {
			return d(b.connectedDate).valueOf() - d(a.connectedDate).valueOf()
		}

		// if neither has a connectedDate -> keep original order
		return 0
	})

	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-9 max-[280px]:grid-cols-1 gap-3 pb-24">
			{connections.map((item, i) => (
				<AnimatedBlock type="FADE_IN" delay={0.1 * i} className="col-span-1" key={i}>
					<ConnectionBlock data={item} />
				</AnimatedBlock>
			))}
		</div>
	)
}

export default ConnectionsPageView
