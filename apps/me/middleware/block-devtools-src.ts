import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const blockDevtoolsSrc = {
	name: 'block-devtools-src',

	// URL patterns this mini-middleware cares about
	matcher: ['/src/:path*', '/_next/src/:path*', '/_next/static/src/:path*', '/_next/:segment*/src/:path*'],

	async run(req: NextRequest) {
		const p = req.nextUrl.pathname

		// If the request is trying to load files from src/ (DevTools overlay),
		// block it by returning an empty 204 response
		if (
			p.startsWith('/src/') ||
			p.startsWith('/_next/src/') ||
			p.startsWith('/_next/static/src/') ||
			/\/_next\/.*\/src\//.test(p)
		) {
			return new NextResponse(null, {
				status: 204, // No Content
				headers: { 'x-devtools-blocked': '1' }, // custom marker
			})
		}

		// Returning undefined → let the next middleware in the chain run
		return
	},
} as const
