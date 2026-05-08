import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const QUOTABLE_API_URL = 'https://zenquotes.io/api'

async function proxyRequest(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
	try {
		const resolvedParams = await params
		const path = (resolvedParams.path || []).join('/')
		const url = new URL(`${QUOTABLE_API_URL}/${path}`)

		// Forward search params
		request.nextUrl.searchParams.forEach((value, key) => {
			url.searchParams.append(key, value)
		})

		const headers = new Headers(request.headers)
		headers.delete('host')
		headers.delete('connection')

		const init: RequestInit = {
			method: request.method,
			headers: headers,
			body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
			// @ts-expect-error - needed for forward body in nextjs/node
			duplex: 'half',
		}

		const response = await fetch(url.toString(), init)

		const responseHeaders = new Headers(response.headers)
		// Avoid compression issues
		responseHeaders.delete('content-encoding')

		return new NextResponse(response.body, {
			status: response.status,
			headers: responseHeaders,
		})
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error)
		console.error('Quote Proxy Error:', message)
		return NextResponse.json({ error: 'Failed to proxy Quote request', details: message }, { status: 500 })
	}
}

export const GET = proxyRequest
export const POST = proxyRequest
export const PUT = proxyRequest
export const DELETE = proxyRequest
