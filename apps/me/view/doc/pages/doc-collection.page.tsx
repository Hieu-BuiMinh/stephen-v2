import MainLayout from '@/components/layouts/main-layout'

function DocumentCollectionPageView({ collection }: { collection: string }) {
	return <MainLayout>{collection}</MainLayout>
}

export default DocumentCollectionPageView
