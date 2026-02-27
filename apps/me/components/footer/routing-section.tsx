'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'

interface LinkItem {
	lable: string
	href: string
	disable?: boolean
	target?: string
}

function FooterRoutingSection() {
	const routingData = [
		{
			name: 'Blog',
			links: [
				{ lable: 'Dev blog', href: '/topics/dev' },
				{ lable: 'Documentation', href: '/docs' },
				{ lable: 'Guestbook', href: '/guestbook' },
			],
		},
		{
			name: 'About',
			links: [
				{ lable: 'About me', href: '/about' },
				{ lable: 'My journey', href: '/retrospective' },
				// { lable: 'Me & my crew', href: '/' },
			],
		},
		{
			name: 'Explore',
			links: [
				{ lable: 'Tags', href: '/tags' },
				{ lable: 'Quotes', href: '/quotes' },
				{ lable: 'Other Topics', href: '/other-topics' },
				{
					lable: 'Analytics',
					href: 'https://cloud.umami.is/share/4cPVGaK1H86C9y5K',
					target: '_blank',
				},
			],
		},
		{
			name: 'Tools',
			links: [
				{ lable: 'I-Ching divination', href: '/tools/hexagram-analyzer', disable: false },
				{ lable: 'Lunar date time', href: '/tools/lunar-time-chart' },
			],
		},
	]

	return (
		<div className="grid grid-cols-2 gap-5 text-xs lg:grid-cols-3">
			{routingData.map((item) => {
				return (
					<div key={item.name} className="col-span-1 flex flex-col gap-2">
						<span>{item.name}</span>
						{item.links.map((link: LinkItem) => {
							if (link?.disable) {
								return (
									<div
										className="relative text-muted-foreground dark:text-muted-foreground/30"
										key={item.links[0].lable}
									>
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger className="cursor-pointer italic" asChild>
													<span>{link.lable}</span>
												</TooltipTrigger>
												<TooltipContent>
													<p className="w-32">Comming soon</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>
								)
							}
							return (
								<Link
									target={link?.target === '_blank' ? '_blank' : '_self'}
									className="text-muted-foreground hover:text-foreground"
									key={link.lable}
									href={link.href}
								>
									{link.lable}
								</Link>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default FooterRoutingSection
