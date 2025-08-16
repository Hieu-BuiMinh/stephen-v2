import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export type MiniMiddleware = {
	name: string
	matcher: readonly string[]
	run: (req: NextRequest) => void | NextResponse | Response | Promise<void | NextResponse | Response>
}

// Compose: run middlewares sequentially, stop once a response is returned
export function compose(list: ReadonlyArray<MiniMiddleware>) {
	return async function middleware(req: NextRequest) {
		for (const m of list) {
			const res = await m.run(req)
			if (res) return res
		}
		return NextResponse.next()
	}
}
