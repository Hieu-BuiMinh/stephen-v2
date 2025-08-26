'use client'

import type { LightRaysProps } from '@repo/stephen-v2-ui/shadcn'
import { LightRays } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { memo } from 'react'

function LightRaysComponent({ ...props }: LightRaysProps) {
	const { className, ...rest } = props

	return <LightRays {...rest} className={cn('custom-rays', className)} />
}

export default memo(LightRaysComponent)
