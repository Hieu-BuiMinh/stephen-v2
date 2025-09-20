'use client'

import { MDXContent } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import React from 'react'

function MDXContentComponent({ code, className }: { code: string; className?: string }) {
	return (
		<div className={cn('prose prose-gray prose-sm dark:prose-invert md:prose-sm', className)}>
			<MDXContent code={code} />
		</div>
	)
}

export default MDXContentComponent
