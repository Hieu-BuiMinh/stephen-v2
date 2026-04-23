import { v2 as cloudinary } from 'cloudinary'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const API_KEY = process.env.CLOUDINARY_API_KEY
const API_SECRET = process.env.CLOUDINARY_API_SECRET

// Configure cloudinary for internal use if needed,
// but for a raw proxy we might just forward to the REST API.
cloudinary.config({
	cloud_name: CLOUD_NAME,
	api_key: API_KEY,
	api_secret: API_SECRET,
})

async function proxyRequest(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
	try {
		const resolvedParams = await params
		const path = (resolvedParams.path || []).join('/')

		// Cloudinary Admin API vs Upload API
		// Upload normally goes to /image/upload or /video/upload
		// Admin goes to /folders, /resources, etc.

		const url = new URL(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${path}`)

		request.nextUrl.searchParams.forEach((value, key) => {
			url.searchParams.append(key, value)
		})

		const headers = new Headers(request.headers)

		// Basic Auth for Cloudinary
		const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64')
		headers.set('Authorization', `Basic ${auth}`)
		headers.delete('host')
		headers.delete('connection')

		const init: RequestInit = {
			method: request.method,
			headers: headers,
			body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			duplex: 'half',
		}

		const response = await fetch(url.toString(), init)

		const responseHeaders = new Headers(response.headers)
		responseHeaders.delete('content-encoding')

		return new NextResponse(response.body, {
			status: response.status,
			headers: responseHeaders,
		})
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error('Cloudinary Proxy Error:', error.message)
		return NextResponse.json(
			{ error: 'Failed to proxy Cloudinary request', details: error.message },
			{ status: 500 }
		)
	}
}

export const GET = proxyRequest
export const POST = proxyRequest
export const PUT = proxyRequest
export const DELETE = proxyRequest
