import React from 'react'

import SiteFooter from '@/components/footer'
import Navbar from '@/components/navigation/navbar'
import NewsletterSignUp from '@/components/sections/newsletter-signup'

function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col md:max-w-7xl lg:mx-auto lg:flex-row">
			<main className="flex flex-1 flex-col lg:border-x border-muted-foreground/10">
				<Navbar />

				<div className="relative grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px] pt-0">
					<div className="sticky top-0 h-[calc(100vh)] hidden w-full border-r dark:opacity-10 bg-dashed lg:block" />
					<div className="relative col-span-1 px-3 sm:pt-10 md:pt-16">{children}</div>
					<div className="sticky top-0 h-[calc(100vh)] hidden w-full border-l dark:opacity-10 bg-dashed lg:block" />
				</div>

				<NewsletterSignUp />

				<SiteFooter />
			</main>
		</div>
	)
}

export default MainLayout
