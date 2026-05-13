import { blockDevtoolsSrc } from '@/middleware/block-devtools-src'
import { clerkAuth } from '@/middleware/clerk-auth'
import { compose } from '@/middleware/utils'

export default compose([blockDevtoolsSrc, clerkAuth])

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
		// Also run for paths that might contain /src/ to support DevTools blocking
		'/(.*)/src/(.*)',
	],
}
