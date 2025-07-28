'use client'

import { MDXContent } from '@repo/stephen-v2-ui/shadcn'
import React from 'react'

function MDXContentComponent({ code }: { code: string }) {
	return <MDXContent code={code} />
}

export default MDXContentComponent
