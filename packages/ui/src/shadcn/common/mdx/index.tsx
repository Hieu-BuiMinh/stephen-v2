'use client'

import './style.css'

import { cn } from '@repo/stephen-v2-utils'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import * as runtime from 'react/jsx-runtime'

import { FiveElementsDiagram } from '../../../i-ching'
import { AnimatedBlock } from '../../../motion/components/animate-block'
import { StickyAudio } from '../audio'
import { DividerSlash } from '../divider'
import { SVGIcons } from '../icons'
import { BlurImage } from '../image/blur-image'
import type { ImageZoom } from '../image/image-zoom'
import { ImageZoomV2 } from '../image/image-zoom-v2'
import { AvatarCardStack, CardStack } from '../image-card-stack'
import { RoughMark, RoughMarkGroup } from '../rough'
import { VideoZoom } from '../video'
import CodeBlockTabs from './custom-components/code-block-tabs'
import Heading from './custom-components/heading'
import { Table } from './custom-components/table'

const useMDXComponent = (code: string) => {
	if (!code) {
		return
	}
	const fn = new Function(code)
	return fn({ ...runtime })?.default
}

const components = {
	h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <Heading as="h2" {...props} />,
	h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <Heading as="h3" {...props} />,
	h4: (props: React.ComponentPropsWithoutRef<'h4'>) => <Heading as="h4" {...props} />,
	h5: (props: React.ComponentPropsWithoutRef<'h5'>) => <Heading as="h5" {...props} />,
	h6: (props: React.ComponentPropsWithoutRef<'h6'>) => <Heading as="h6" {...props} />,
	hr: () => <hr className="w-full h-px border-t border-dashed border-foreground/60 dark:border-border" />,
	// p: (props: React.ComponentPropsWithRef<'p'>) => (
	// 	<p className="text-sm text-foreground dark:text-muted-foreground md:text-base">{props.children}</p>
	// ),
	a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
		const { children, href, ...rest } = props

		if (!href) {
			return (
				<span className="font-medium text-sky-600 hover:text-foreground dark:text-sky-300" {...rest}>
					{children}
				</span>
			)
		}

		return (
			<Link className="font-medium text-sky-600 hover:text-foreground dark:text-sky-300" href={href} {...rest}>
				{children}
			</Link>
		)
	},
	Image: (props: React.ComponentPropsWithoutRef<typeof ImageZoom>) => {
		const { alt, className, ...rest } = props

		return (
			<>
				<ImageZoomV2 className={cn('not-prose m-auto rounded-md flex items-center justify-center', className)}>
					<BlurImage
						imageClassName="size-auto"
						className={cn('size-full cursor-pointer rounded-md not-prose')}
						alt={alt || ''}
						width={props.width || 0}
						height={props.height || 0}
						{...rest}
					/>
				</ImageZoomV2>
				{alt && <figcaption className="mt-4 text-center">{alt}</figcaption>}
			</>
		)
	},
	code: (props: React.ComponentPropsWithoutRef<'code'>) => {
		const { children } = props
		// console.log('props', props)
		return <code>{children}</code>
	},
	CodeBlockTabs,
	Table,
	SVGIcons,
	CardStack,
	AvatarCardStack,
	VideoZoom,
	StickyAudio: (props: {
		className?: string
		audioTrack: { id: string; name: string; url: string; artist: string }
	}) => {
		return <StickyAudio {...props} className={cn('not-prose sticky top-18 z-10 w-full', props.className)} />
	},
	DividerSlash,

	// rough mark
	RoughMark,
	RoughMarkGroup,

	// i-ching
	FiveElementsDiagram,

	// effect
	AnimatedBlock,
}

interface MdxProps {
	code: string
}

function MDXContent({ code }: MdxProps) {
	const Component = useMDXComponent(code)
	if (!code) {
		return <p className="py-5">The content is on updating 🧪...</p>
	}
	return <Component components={components} key={nanoid()} />
}

export { MDXContent }
