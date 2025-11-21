import { cn } from '@repo/stephen-v2-utils'
import React from 'react'

import SiteFooter from '@/components/footer'
import MobileNavbar from '@/components/navigation/mobile-navbar'
import Navbar from '@/components/navigation/navbar'
import NewsletterSignUp from '@/components/sections/newsletter-signup'

function MainLayout({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className="overflow-x-hidden">
			<div className={cn('flex min-h-screen flex-col md:max-w-7xl lg:mx-auto lg:flex-row', className)}>
				<main className="flex flex-1 flex-col lg:border-x border-muted-foreground/10">
					<Navbar />

					<div className="grid flex-1 min-h-screen grid-cols-1 lg:grid-cols-[32px_1fr_32px] pt-0">
						{/* MOBILE NAVBAR STICKY */}
						<MobileNavbar />
						{/* LEFT RAIL */}
						<div className="hidden lg:block lg:sticky lg:top-0 lg:self-stretch border-r dark:opacity-10 bg-dashed z-0" />

						{/* CONTENT + NEWSLETTER */}
						<div className="relative col-span-1 sm:pt-10 md:pt-[calc(4rem+0.75rem)]">
							{children}
							<NewsletterSignUp />
						</div>

						{/* RIGHT RAIL */}
						<div className="hidden lg:block lg:sticky lg:top-0 lg:self-stretch border-l dark:opacity-10 bg-dashed z-0" />
					</div>
				</main>
			</div>
			{/* FOOTER */}
			<SiteFooter />
		</div>
	)
}

export default MainLayout
