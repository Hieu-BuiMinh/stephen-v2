/**
 * image-card-stack
 * Copyright (c) github.com/kianbazza: https://github.com/mirayatech
 * Source:
 *  - https://github.com/mirayatech/image-card-stack
 *
 * Modified by: Stephen
 */

import type { PanInfo } from 'motion/react'
import { useMotionValue, useTransform } from 'motion/react'

export function useCardRotation(onThresholdExceed?: () => void) {
	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const rotateX = useTransform(y, [-100, 100], [60, -60])
	const rotateY = useTransform(x, [-100, 100], [-60, 60])

	const handleDragEnd = (_: never, info: PanInfo) => {
		if (Math.abs(info.offset.x) > 180 || Math.abs(info.offset.y) > 180) {
			onThresholdExceed?.()
		} else {
			x.set(0)
			y.set(0)
		}
	}

	return { x, y, rotateX, rotateY, handleDragEnd }
}
