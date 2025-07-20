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
				{ lable: 'Dev blog', href: '/dev-blog' },
				{ lable: 'Documentation', href: '/docs' },
				{ lable: 'Guestbook', href: '/guestbook' },
			],
		},
		{
			name: 'About',
			links: [
				{ lable: 'About me', href: '/about' },
				{ lable: 'My journey', href: '/retros' },
				{ lable: 'Me & my crew', href: '/' },
			],
		},
		{
			name: 'Explore',
			links: [
				{ lable: 'Tags', href: '/tags' },
				{ lable: 'Quotes', href: '/quotes' },
				{ lable: 'Other Topics', href: '/interests' },
				{
					lable: 'Analytics',
					href: 'https://cloud.umami.is/share/JEvvDKOMKBwOFYWE/hieu-buiminh.io.vn',
					target: '_blank',
				},
			],
		},
		// {
		// 	name: 'Tools',
		// 	links: [
		// 		{ lable: 'I-Ching divination', href: '/', disable: true },
		// 		{ lable: 'BaZi natal chart', href: '/', disable: true },
		// 	],
		// },
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
												<TooltipContent className="bg-black text-white">
													<p className="w-32">Comming soon 🧪</p>
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
