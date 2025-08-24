import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'

import AppProvider from '@/components/providers/app-provider'
import { APP_CONFIG } from '@/configs/app-config'

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
})

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export const metadata: Metadata = {
	metadataBase: new URL(APP_CONFIG.url),
	title: {
		default: APP_CONFIG.name,
		template: `%s | ${APP_CONFIG.shortName}`,
	},
	description: APP_CONFIG.description,
	manifest: '/favicon/site.webmanifest',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		card: 'summary_large_image',
		title: APP_CONFIG.shortName,
		description: APP_CONFIG.description,
		site: '@Stephen_b591',
		siteId: '@Stephen_b591',
		creator: '@Stephen_b591',
		creatorId: '@Stephen_b591',
		images: [
			{
				url: '/assets/images/og.png',
				width: 1200,
				height: 630,
				alt: APP_CONFIG.description,
			},
		],
	},
	keywords: APP_CONFIG.siteKeywords,
	creator: 'Hieu.BuiMinh',
	openGraph: {
		url: APP_CONFIG.url,
		type: 'website',
		title: APP_CONFIG.shortName,
		siteName: APP_CONFIG.name,
		description: APP_CONFIG.description,
		locale: 'en-US',
		images: [
			{
				url: '/assets/images/og.png',
				width: 1200,
				height: 630,
				alt: APP_CONFIG.description,
				type: 'image/png',
			},
		],
	},
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/assets/images/logo/logo-light.svg',
				href: '/assets/images/logo/logo-light.svg',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/assets/images/logo/logo-dark.svg',
				href: '/assets/images/logo/logo-dark.svg',
			},
		],
		shortcut: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/assets/images/logo/logo-light.svg',
				href: '/assets/images/logo/logo-light.svg',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/assets/images/logo/logo-dark.svg',
				href: '/assets/images/logo/logo-dark.svg',
			},
		],
		apple: [
			{
				url: '/favicon/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
		other: [
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				url: '/favicon/favicon-16x16.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				url: '/favicon/favicon-32x32.png',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${roboto.variable} antialiased`} suppressHydrationWarning>
				<AppProvider>
					{/* <SiteHeader /> */}
					{children}
					{/* <SiteFooter /> */}
				</AppProvider>
			</body>
		</html>
	)
}
