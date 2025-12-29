import React from 'react'

import MainLayout from '@/components/layouts/main-layout'

function layout({ children }: { children: React.ReactNode }) {
	return <MainLayout>{children}</MainLayout>
}

export default layout
