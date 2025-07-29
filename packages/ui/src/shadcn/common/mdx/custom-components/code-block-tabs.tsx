/**
 * Inspired by clerk: https://clerk.com/docs
 * Source:
 *  - https://clerk.com/docs/quickstarts/react
 *  - https://github.com/clerk/clerk-docs/blob/main/docs/quickstarts/react.mdx?plain=1
 *
 * Modified by: Stephen
 */

import type { ReactNode } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../index'

interface ICodeBlockTabs {
	options: string[]
	children: ReactNode[]
}

function CodeBlockTabs({ children, options }: ICodeBlockTabs) {
	return (
		<Tabs defaultValue="0" className="rounded-xl border gap-1 bg-[#212126]">
			<div className="border-b border-b-[rgb(19,19,22)]">
				<div className="w-full border-b border-b-[rgba(255,255,255,0.04)]">
					<TabsList className="flex flex-none rounded-none items-center justify-start gap-2 bg-transparent">
						{options?.map((option, index) => {
							return (
								<TabsTrigger
									className="group/tab relative !shadow-none transition-colors text-gray-400 hover:text-gray-300 data-[state=active]:!text-sky-300 border-none !bg-transparent text-xs md:text-sm"
									value={index.toString()}
								>
									{option}
									<div className="absolute inset-x-2 -bottom-1 h-px bg-sky-300 opacity-0 transition-opacity group-data-[state=active]/tab:opacity-100" />
								</TabsTrigger>
							)
						})}
					</TabsList>
				</div>
			</div>
			{children?.map((child, index) => {
				return (
					<TabsContent className="w-full flex-none px-[3px] pb-[3px]" value={index.toString()}>
						<div className="rounded-[0.5rem_0.5rem_0.8rem_0.8rem] border bg-[#2F3037]">{child}</div>
					</TabsContent>
				)
			})}
		</Tabs>
	)
}

export default CodeBlockTabs
