import React from 'react'

import MainLayout from '@/components/layouts/main-layout'

function RoutesLayout({ children }: { children: React.ReactNode }) {
	return <MainLayout>{children}</MainLayout>
}

export default RoutesLayout
