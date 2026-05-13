import { FooterAuthSection } from '@/components/footer/auth-section'
import FooterRoutingSection from '@/components/footer/routing-section'
import { Socials } from '@/components/footer/socials'
import Signature from '@/components/signature'

function SiteFooter() {
	return (
		<footer className="relative m-auto flex w-full flex-col p-3 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] md:p-10">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
			<div className="grid grid-cols-1 gap-14 py-16 md:grid-cols-2 md:gap-5">
				<div className="col-span-1 flex items-center justify-center sm:justify-start">
					<div className="flex flex-col items-center justify-center gap-6">
						<Signature className="h-[145px] w-full max-w-[290px]" />
						<Socials />
						<p className="max-w-72 text-center leading-5 text-muted-foreground">
							I&apos;m Stephen - a Front-end Developer and blogger. Thanks for checking out my site <br />
							(❁´◡`❁)
						</p>

						<FooterAuthSection />
					</div>
				</div>
				<div className="col-span-1">
					<FooterRoutingSection />
				</div>
			</div>

			<span className="w-full h-px border-t border-dashed" />

			<div className="my-8 flex flex-col items-center justify-center gap-5 text-center text-xs md:flex-row">
				<span>
					Copyright © {new Date().getUTCFullYear()} Made with ❤️ in <u>Vietnam</u>.
				</span>
			</div>
		</footer>
	)
}

export default SiteFooter
