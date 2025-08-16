import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Regex to catch any request path that contains "/src/".
// This includes:
// - Direct requests like /src/...
// - DevTools requests such as /_next/.../src/... or /_next/static/.../src/...
const SRC_RE = /(^\/src\/)|(^\/_next\/(?:static\/)?(?:.+\/)?src\/)/

export default function middleware(req: NextRequest) {
	const p = req.nextUrl.pathname

	// If the request matches a "src/" path, block it
	if (SRC_RE.test(p)) {
		// Return a 204 No Content response
		// - No body
		// - Add a custom header for debugging (optional)
		return new NextResponse(null, {
			status: 204,
			headers: { 'x-devtools-blocked': '1' },
		})
	}

	// Allow all other requests to continue
	return NextResponse.next()
}

// The matcher must be a literal (statically analyzable) so that Next.js can parse it.
// Using a global matcher (/:path*) ensures this middleware runs for all requests,
// and then we filter with SRC_RE inside.
export const config = {
	matcher: ['/:path*'],
}
