import React from 'react'

import { APP_CONFIG } from '@/configs/app-config'
import SocialHoverCard from '@/view/home/components/new-hero-05/social-hover-card'
import SoftPillButton from '@/view/home/components/new-hero-05/soft-pill-button'

export interface SocialLinkItem {
	name: string
	href: string
	icon: React.ReactNode
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
	{
		name: 'GitHub',
		href: APP_CONFIG.links.github,
		icon: (
			<path
				d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
			/>
		),
	},
	{
		name: 'Twitter',
		href: APP_CONFIG.links.twitter,
		icon: (
			<path
				d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
			/>
		),
	},
	{
		name: 'LinkedIn',
		href: APP_CONFIG.links.linkedin,
		icon: (
			<path
				d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
			/>
		),
	},
]

export default function SocialContact() {
	return (
		<div className="mt-6 mb-4">
			<div className="flex flex-wrap items-center gap-2">
				{SOCIAL_LINKS.map((social) => (
					<SocialHoverCard key={social.name} socialName={social.name}>
						<SoftPillButton
							as="a"
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							variant="secondary"
							className="px-3 py-1.5 text-[12px]!"
						>
							<div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
								<svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
									{social.icon}
								</svg>
								{social.name}
							</div>
						</SoftPillButton>
					</SocialHoverCard>
				))}
			</div>
		</div>
	)
}
