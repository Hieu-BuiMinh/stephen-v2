import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		viewTransition: true,
	},
	images: {
		remotePatterns: [
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
