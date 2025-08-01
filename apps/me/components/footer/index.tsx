'use client'

import { Separator } from '@repo/stephen-v2-ui/shadcn'
import Image from 'next/image'
import Link from 'next/link'

import FooterRoutingSection from '@/components/footer/routing-section'
import { SOCIAL_LINKS } from '@/configs/app-config'

function SiteFooter() {
	return (
		<footer className="relative m-auto w-full p-3 md:p-10 border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
			<div className="grid grid-cols-1 gap-7 py-16 md:grid-cols-2 md:gap-5">
				<div className="col-span-1 flex flex-col gap-6">
					<Link className="size-[35px] inline-block" href="/">
						<Image
							width={40}
							height={40}
							className="size-auto hidden dark:block"
							src="/assets/images/logo/logo-dark.svg"
							alt="Stephen's Logo"
						/>
						<Image
							width={40}
							height={40}
							className="size-auto block dark:hidden"
							src="/assets/images/logo/logo-light.svg"
							alt="Stephen's Logo"
						/>
					</Link>
					<p className="w-60 leading-5 text-muted-foreground">
						I&apos;m Stephen - a Junior Front-end Developer and blogger. Thanks for checking out my site!
					</p>
				</div>
				<div className="col-span-1">
					<FooterRoutingSection />
				</div>
			</div>

			<Separator className="bg-muted-foreground/10" />

			<div className="my-8 flex flex-col items-center justify-between gap-5 text-center text-xs md:flex-row">
				<span>Copyright © {new Date().getUTCFullYear()} Made with ❤️ in Vietnam.</span>
				<div className="flex gap-3">
					{SOCIAL_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							target="_blank"
							className="p-2 text-muted-foreground hover:text-foreground"
						>
							<link.icon className="size-[18px]" />
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}

export default SiteFooter
