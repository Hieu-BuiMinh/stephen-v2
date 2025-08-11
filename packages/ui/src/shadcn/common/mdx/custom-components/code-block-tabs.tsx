/**
 * Inspired by clerk: https://clerk.com/docs
 * Source:
 *  - https://clerk.com/docs/quickstarts/react
 *  - https://github.com/clerk/clerk-docs/blob/main/docs/quickstarts/react.mdx?plain=1
 *
 * Modified by: Stephen
 */

'use client'

import './style.css'

import { cn } from '@repo/stephen-v2-utils'
import type { VariantProps } from 'class-variance-authority'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { JetBrains_Mono } from 'next/font/google'
import { type ReactNode, useEffect, useRef, useState } from 'react'

import type { buttonVariants } from '../../../index'
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '../../../index'

interface ICodeBlockTabs {
	options: string[]
	children: ReactNode | ReactNode[]
	fileName?: string | ReactNode
}

const JetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

function CodeBlockTabs({ children, options, fileName }: ICodeBlockTabs) {
	const childrenIsArray = Array.isArray(children)

	const textInput = useRef<HTMLDivElement>(null)

	const onCopy = () => {
		void navigator.clipboard.writeText(textInput.current?.textContent ?? '')
	}

	return (
		<Tabs
			defaultValue="0"
			className="rounded-xl border border-slate-300 gap-1.5 bg-neutral-200 dark:bg-[#212126] dark:border-border/70"
		>
			{childrenIsArray && (
				<div className="border-b border-b-slate-300 dark:border-b-[rgba(255,255,255,0.04)]">
					<div className="w-full flex items-center justify-between border-b border-white dark:border-b-[rgb(19,19,22)]">
						{
							<TabsList className="flex flex-none rounded-none items-center justify-start gap-2 bg-transparent">
								{options?.map((option, index) => {
									return (
										<TabsTrigger
											key={index}
											className="group/tab relative cursor-pointer !shadow-none transition-colors text-muted-foreground hover:!text-foreground/80 data-[state=active]:!text-sky-600 dark:data-[state=active]:!text-sky-300 border-none !bg-transparent text-xs md:text-sm"
											value={index.toString()}
										>
											{option}
											<div className="absolute inset-x-2 -bottom-[0.3rem] h-[0.5px] bg-sky-600 dark:bg-sky-300 opacity-0 transition-opacity group-data-[state=active]/tab:opacity-100" />
										</TabsTrigger>
									)
								})}
							</TabsList>
						}
						{!fileName && <CopyButton className="mr-3" onCopy={onCopy} />}
					</div>
				</div>
			)}

			{fileName && (
				<div className="p-2 pt-4 flex items-center justify-between font-medium text-foreground text-xs">
					{fileName}
					<CopyButton onCopy={onCopy} />
				</div>
			)}
			{childrenIsArray ? (
				children?.map((child, index) => {
					return (
						<TabsContent
							key={index}
							className="w-full flex-none px-[3px] pb-[3.5px]"
							value={index.toString()}
						>
							<div
								ref={textInput}
								className={cn(
									JetBrainsMono.className,
									'rounded-[0.5rem_0.5rem_0.8rem_0.8rem] size-full max-w-full border border-slate-300 dark:border-[var(--border)] flex p-2 bg-slate-100 dark:bg-[#2F3037] [&>pre]:min-w-full [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:max-w-1 [&>pre]:overflow-auto'
								)}
							>
								{child}
							</div>
						</TabsContent>
					)
				})
			) : (
				<TabsContent className="w-full flex-none px-[3px] pb-[3.5px]" value="0">
					<div
						ref={textInput}
						className={cn(
							JetBrainsMono.className,
							'rounded-[0.5rem_0.5rem_0.8rem_0.8rem] size-full max-w-full border border-slate-300 dark:border-[var(--border)] flex p-2 bg-slate-100 dark:bg-[#2F3037] [&>pre]:min-w-full [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:max-w-1 [&>pre]:overflow-auto'
						)}
					>
						{children}
					</div>
				</TabsContent>
			)}
		</Tabs>
	)
}

export default CodeBlockTabs

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

type CopyButtonProps = {
	onCopy: () => void
} & ButtonProps

const CopyButton = (props: CopyButtonProps) => {
	const { onCopy, className, ...rest } = props
	const [isCopied, setIsCopied] = useState(false)

	useEffect(() => {
		const copyResetTimeoutId = setTimeout(() => {
			setIsCopied(false)
		}, 2000)

		return () => {
			clearTimeout(copyResetTimeoutId)
		}
	}, [isCopied])

	return (
		<Button
			className={cn('size-6 p-0 cursor-pointer text-muted-foreground hover:text-foreground', className)}
			variant="ghost"
			onClick={() => {
				onCopy()
				setIsCopied(true)
			}}
			type="button"
			aria-label="Copy code to clipboard"
			{...rest}
		>
			{isCopied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
		</Button>
	)
}
