export const isProduction = process.env.NODE_ENV === 'production'

export const APP_CONFIG = {
	name: 'Stephen',
	shortName: 'ST',
	url: isProduction ? 'https://hieu-buiminh.io.vn/' : 'http://localhost:3000',
	description: 'Next js 15 blog using Turborepo, velite, tailwind and shadcn',
	siteKeywords: [
		'hieu.buiminh',
		'stephen-lab',
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
}

export type APP_CONFIG = typeof APP_CONFIG
