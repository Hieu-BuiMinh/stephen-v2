import type { SVGIconComponent } from '@repo/stephen-v2-ui/shadcn'
import { SVGIcons } from '@repo/stephen-v2-ui/shadcn'

export const isProduction = process.env.NODE_ENV === 'production'

export const APP_CONFIG = {
	name: `Stephen's Corner`,
	shortName: 'by Stephen',
	url: isProduction ? 'https://hieu-buiminh.io.vn/' : 'http://localhost:3000',
	description: 'Next js 15 blog using Turborepo, velite, tailwind and shadcn',
	siteKeywords: [
		'hieu.buiminh',
		'stephen-blog',
		'turborepo',
		'next.js',
		'react',
		'typeScript',
		'node.js',
		'tailwind',
		'shadcn',
	],
	author: {
		avatar: '/assets/images/avt/avt_001.jpg',
		name: 'Stephen',
		resume: 'https://hieu-buiminh-resume.io.vn/',
	},
	links: {
		instagram: 'https://www.instagram.com/stephen.02.12/',
		twitter: 'https://x.com/Stephen_b591',
		youtube: 'https://www.youtube.com/@stephen-dev-cool',
		facebook: 'https://www.facebook.com/hieu.buiminh.37',
		github: 'https://github.com/Hieu-BuiMinh',
		linkedin: 'https://www.linkedin.com/in/minh-hieu-bui-78a315208',
		personalSite: '/',
	},
	logos: {
		light: '/assets/images/logo/logo-circle-light.svg',
		dark: '/assets/images/logo/logo-circle-dark.svg',
	},
	og: '/',
}

export type APP_CONFIG = typeof APP_CONFIG

export const SOCIAL_LINKS: {
	label: string
	icon: SVGIconComponent
	href: string
}[] = [
	{
		label: 'GitHub',
		icon: SVGIcons.gitHub,
		href: APP_CONFIG.links.github,
	},
	{
		label: 'X',
		icon: SVGIcons.X,
		href: APP_CONFIG.links.twitter,
	},
	{
		label: 'Facebook',
		icon: SVGIcons.facebook,
		href: APP_CONFIG.links.facebook,
	},
	{
		label: 'Youtube',
		icon: SVGIcons.youtube,
		href: APP_CONFIG.links.youtube,
	},
	{
		label: 'Instagram',
		icon: SVGIcons.instagram,
		href: APP_CONFIG.links.instagram,
	},
]
