'use client'

import { cn } from '@repo/stephen-v2-utils'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import * as runtime from 'react/jsx-runtime'

import { ImageZoom } from '../image/image-zoom'
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
	p: (props: React.ComponentPropsWithRef<'p'>) => (
		<p className="text-sm text-foreground dark:text-muted-foreground md:text-base">{props.children}</p>
	),
	a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
		const { children, href, ...rest } = props

		if (!href) {
			return (
				<span className="text-muted-foreground line-through transition-colors hover:text-foreground" {...rest}>
					{children}
				</span>
			)
		}

		return (
			<Link
				className="font-semibold text-sky-600 no-underline transition-colors hover:text-foreground hover:underline dark:text-sky-300"
				href={href}
				target="_blank"
				{...rest}
			>
				{children}
			</Link>
		)
	},
	Image: (props: React.ComponentPropsWithoutRef<typeof ImageZoom>) => {
		const { alt, className, ...rest } = props

		return (
			<>
				<ImageZoom
					className={cn('h-[350px] cursor-pointer', className)}
					alt={alt || ''}
					width={1200}
					height={630}
					{...rest}
				/>
				{alt && <figcaption className="mt-4 text-center">{alt}</figcaption>}
			</>
		)
	},
	CodeBlockTabs,
	Table,
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
