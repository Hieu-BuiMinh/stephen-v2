import { cn } from '@repo/stephen-v2-utils'
import React from 'react'

import SiteFooter from '@/components/footer'
import MobileNavbar from '@/components/navigation/mobile-navbar'
import Navbar from '@/components/navigation/navbar'
import NewsletterSignUp from '@/components/sections/newsletter-signup'

function MainLayout({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn('flex min-h-screen flex-col md:max-w-7xl lg:mx-auto lg:flex-row', className)}>
			<main className="flex flex-1 flex-col lg:border-x border-muted-foreground/10">
				<Navbar />
				<MobileNavbar />

				<div className="relative grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px] pt-0">
					<div className="sticky top-0 h-[calc(100vh)] hidden w-full border-r dark:opacity-10 bg-dashed lg:block" />
					<div className="relative col-span-1 sm:pt-10 md:pt-[calc(4rem+0.75rem)]">{children}</div>
					<div className="sticky top-0 h-[calc(100vh)] hidden w-full border-l dark:opacity-10 bg-dashed lg:block" />
				</div>

				<NewsletterSignUp />

				<SiteFooter />
			</main>
		</div>
	)
}

export default MainLayout
