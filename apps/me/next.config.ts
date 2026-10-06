import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	transpilePackages: ['@repo/stephen-v2-ui'],
	experimental: {
		viewTransition: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
			},
			{
				protocol: 'https',
				hostname: 'unavatar.io',
			},
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
			},
			{
				protocol: 'https',
				hostname: 'i.postimg.cc',
			},
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
			},
		],
	},
}

export default nextConfig
