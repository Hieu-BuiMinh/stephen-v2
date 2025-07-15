import React from 'react'

import Navbar from '@/components/navigation/navbar'

function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col md:max-w-7xl lg:mx-auto lg:flex-row">
			<main className="flex flex-1 flex-col lg:border-x border-muted-foreground/10">
				<Navbar />
				<div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px] mt-0 sm:mt-16">
					<div className="hidden w-full border-r dark:opacity-10 bg-dashed lg:block" />
					<div className="relative col-span-1 p-3">{children}</div>
					<div className="hidden w-full border-l dark:opacity-10 bg-dashed lg:block" />
				</div>
			</main>
		</div>
	)
}

export default MainLayout
