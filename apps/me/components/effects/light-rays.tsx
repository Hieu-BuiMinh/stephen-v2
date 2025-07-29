'use client'

import type { LightRaysProps } from '@repo/stephen-v2-ui/shadcn'
import { LightRays } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'

function LightRaysComponent({ ...props }: LightRaysProps) {
	const { className, ...rest } = props

	return <LightRays {...rest} className={cn('custom-rays', className)} />
}

export default LightRaysComponent
