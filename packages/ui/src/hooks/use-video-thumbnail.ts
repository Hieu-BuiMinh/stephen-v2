'use client'

import { ALL_FORMATS, CanvasSink, Input, UrlSource } from 'mediabunny'
import { useEffect, useState } from 'react'

/**
 * Hook to generate a thumbnail from a video URL using mediabunny.
 * @param videoUrl The remote URL of the video file.
 * @param timestamp The time in seconds to extract the frame from (default: 1.5s).
 * @returns Object containing the generated thumbnailUrl, loading state, and any error.
 */
export function useVideoThumbnail(videoUrl: string, timestamp: number = 1.5) {
	const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)
	const [error, setError] = useState<Error | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (!videoUrl) {
			setIsLoading(false)
			return
		}

		let isMounted = true
		let currentObjectUrl: string | null = null

		const generate = async () => {
			try {
				setIsLoading(true)

				// 1. Initialize input from URL
				// mediabunny's UrlSource uses fetch() internally, so CORS must be supported.
				const input = new Input({
					formats: ALL_FORMATS,
					source: new UrlSource(videoUrl),
				})

				// 2. Get the primary video track
				const videoTrack = await input.getPrimaryVideoTrack()
				if (!videoTrack) {
					throw new Error('No video track found')
				}

				// 3. Ensure the browser can decode this track (WebCodecs)
				const decodable = await videoTrack.canDecode()
				if (!decodable) {
					throw new Error('WebCodecs: Video track not decodable in this browser')
				}

				// 4. Create a CanvasSink to extract frames
				// We limit width to 400px for the thumbnail to optimize performance.
				const sink = new CanvasSink(videoTrack, { width: 400 })

				// 5. Extract the canvas at the given timestamp
				const result = await sink.getCanvas(timestamp)

				if (!isMounted) return

				if (!result || !result.canvas) {
					throw new Error('No frame found at the given timestamp')
				}

				// 6. Convert the canvas to a Blob URL for display
				// Support both HTMLCanvasElement (toBlob) and OffscreenCanvas (convertToBlob)
				const canvas = result.canvas
				let blob: Blob | null = null

				if ('toBlob' in canvas) {
					blob = await new Promise<Blob | null>((resolve) =>
						(canvas as HTMLCanvasElement).toBlob(resolve, 'image/webp', 0.8)
					)
				} else if ('convertToBlob' in canvas) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					blob = await (canvas as any).convertToBlob({
						type: 'image/webp',
						quality: 0.8,
					})
				}

				if (blob && isMounted) {
					currentObjectUrl = URL.createObjectURL(blob)
					setThumbnailUrl(currentObjectUrl)
				}
			} catch (err) {
				console.error(`[useVideoThumbnail] Failed for ${videoUrl}:`, err)
				if (isMounted) {
					setError(err as Error)
				}
			} finally {
				if (isMounted) {
					setIsLoading(false)
				}
			}
		}

		generate()

		// Cleanup: revoke the object URL to avoid memory leaks
		return () => {
			isMounted = false
			if (currentObjectUrl) {
				URL.revokeObjectURL(currentObjectUrl)
			}
		}
	}, [videoUrl, timestamp])

	return { thumbnailUrl, error, isLoading }
}
