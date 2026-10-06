'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'

import type { FrameSource } from '../lib/audiocn-mixer/types'

export interface UseFrameSourceOptions {
	/** Pause the subscription without unmounting. Default true. */
	enabled?: boolean
}

/**
 * Subscribes `onFrame` to a frame source. The callback can change on every
 * render without resubscribing.
 */
export const useFrameSource = <T>(
	source: FrameSource<T> | null | undefined,
	onFrame: (frame: T) => void,
	{ enabled = true }: UseFrameSourceOptions = {}
): void => {
	const onFrameRef = useRef(onFrame)

	useLayoutEffect(() => {
		onFrameRef.current = onFrame
	})

	useEffect(() => {
		if (!(source && enabled)) {
			return
		}
		return source.subscribe((frame) => {
			onFrameRef.current(frame)
		})
	}, [source, enabled])
}
