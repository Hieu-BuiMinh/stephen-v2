import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'

import ConnectionBlock from '@/view/connections/components/connection-block'
import { MyConnections } from '@/view/connections/constants/connections'

function ConnectionsPageView() {
	const sortedConnections = [...MyConnections].sort((a, b) => {
		if (a.isConnected === b.isConnected) {
			return a.name.localeCompare(b.name)
		}
		return a.isConnected ? -1 : 1
	})

	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-9 max-[280px]:grid-cols-1 gap-3 pb-24">
			{sortedConnections.map((item, i) => {
				return (
					<AnimatedBlock type="FADE_IN" delay={0.1 * i} className="col-span-1" key={i}>
						<ConnectionBlock data={item} />
					</AnimatedBlock>
				)
			})}
		</div>
	)
}

export default ConnectionsPageView
