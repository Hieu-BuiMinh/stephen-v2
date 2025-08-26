import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		viewTransition: true,
	},
	webpack(config, { dev }) {
		if (dev) config.devtool = 'inline-source-map'
		return config
	},
}

export default nextConfig
