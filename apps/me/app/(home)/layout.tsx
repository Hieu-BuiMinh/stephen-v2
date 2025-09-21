import React from 'react'

import MainLayout from '@/components/layouts/main-layout'

function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<MainLayout>
			{/* Background Elements */}
			{/* <div className="absolute inset-0 -top-1 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none select-none" /> */}
			{/* <div className="absolute inset-0 -top-1 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none select-none" /> */}

			<div className="absolute inset-0 h-[170vh] bg-linear-to-b from-transparent from-0% via-transparent via-80% to-background to-100% -z-10" />
			{children}
		</MainLayout>
	)
}

export default MarketingLayout
