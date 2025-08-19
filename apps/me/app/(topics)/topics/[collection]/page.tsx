import TopicDevPage from '@/view/topics/pages/dev/topic-dev.page'

interface ICollectionProps {
	params: Promise<{ collection: 'dev' | 'buddhism' | 'writing' }>
}

async function TopicCollectionPage({ params }: ICollectionProps) {
	const { collection } = await params

	switch (collection) {
		case 'dev':
			return <TopicDevPage />

		default:
			return null
	}
}

export default TopicCollectionPage
