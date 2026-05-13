import { clerkMiddleware } from '@clerk/nextjs/server'
import type { NextRequest } from 'next/server'

export const clerkAuth = {
	name: 'clerk-auth',
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)',
	],

	async run(req: NextRequest) {
		return clerkMiddleware()(req, {} as any)
	},
} as const
