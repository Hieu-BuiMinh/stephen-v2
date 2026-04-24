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
import { CheckIcon, ChevronDown, ChevronUp, CopyIcon } from 'lucide-react'
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
	const [isExpanded, setIsExpanded] = useState(false)
	const [isOverflowing, setIsOverflowing] = useState(false)
	const [activeTab, setActiveTab] = useState('0')

	const onCopy = () => {
		void navigator.clipboard.writeText(textInput.current?.textContent ?? '')
	}

	useEffect(() => {
		const checkOverflow = () => {
			if (textInput.current) {
				const hasOverflow = textInput.current.scrollHeight > 700
				setIsOverflowing(hasOverflow)
			}
		}

		checkOverflow()
		const observer = new ResizeObserver(checkOverflow)
		if (textInput.current) {
			observer.observe(textInput.current)
		}

		return () => observer.disconnect()
	}, [activeTab, children])

	const renderContent = (content: ReactNode, index?: number) => {
		const isCurrentTab = (index?.toString() ?? '0') === activeTab
		return (
			<TabsContent key={index} className="w-full flex-none px-[3px] pb-[3.5px]" value={index?.toString() ?? '0'}>
				<div className="relative">
					<div className="rounded-[0.5rem_0.5rem_0.8rem_0.8rem] overflow-hidden border border-slate-300 dark:border-border/70 relative">
						<div
							ref={isCurrentTab ? textInput : null}
							className={cn(
								JetBrainsMono.className,
								'size-full max-w-full flex p-2 bg-slate-100 dark:bg-[#18181B] [&>pre]:min-w-full [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:max-w-1 [&>pre]:overflow-auto transition-[max-height] duration-300 ease-in-out',
								!isExpanded && isOverflowing ? 'max-h-[700px] pb-12' : 'max-h-fit'
							)}
						>
							{content}
						</div>

						{/* Gradient Overlay - Inside the rounded container */}
						{!isExpanded && isOverflowing && (
							<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100 dark:from-[#18181B] to-transparent pointer-events-none" />
						)}
					</div>

					{/* Control Button - Positioned on the bottom border */}
					{isOverflowing && (
						<div className="absolute left-1/2 -bottom-[1px] -translate-x-1/2 translate-y-1/2 z-20">
							<Button
								variant="outline"
								size="sm"
								onClick={() => setIsExpanded(!isExpanded)}
								className="flex items-center gap-2 text-xs h-7 px-4 rounded-full bg-white dark:bg-zinc-900 dark:hover:bg-zinc-700 hover:bg-zinc-900 border-slate-300 dark:border-zinc-800 shadow-md hover:shadow-lg transition-all"
							>
								{isExpanded ? (
									<>
										<ChevronUp className="size-3.5" />
										Collapse
									</>
								) : (
									<>
										<ChevronDown className="size-3.5" />
										Expand
									</>
								)}
							</Button>
						</div>
					)}
				</div>
			</TabsContent>
		)
	}

	return (
		<Tabs
			defaultValue="0"
			onValueChange={setActiveTab}
			className="rounded-xl border border-slate-300 gap-1.5 bg-neutral-200 dark:bg-[#18181B] dark:border-border/70"
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
			{childrenIsArray ? children?.map((child, index) => renderContent(child, index)) : renderContent(children)}
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
