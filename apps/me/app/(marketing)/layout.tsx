import React from 'react'

import MainLayout from '@/components/layouts/main-layout'

function MarketingLayout({ children }: { children: React.ReactNode }) {
	return <MainLayout>{children}</MainLayout>
}

export default MarketingLayout
