'use client'

import { buttonVariants } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ProjectLink({ title, url = '' }: { title: string; url: string }) {
	return (
		<Link href={url} target="_blank" className={cn(buttonVariants({ variant: 'primary-matter' }), 'group')}>
			{title}
			<SquareArrowOutUpRight className="ml-2 size-5 transition-transform group-hover:-rotate-12" />
		</Link>
	)
}

export default ProjectLink
