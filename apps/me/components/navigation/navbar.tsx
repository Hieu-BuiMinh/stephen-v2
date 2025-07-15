'use client'

import './style.css'

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'
import type { TNavbarItem } from '@/constants/components/navbar.const'
import { navbarItems } from '@/constants/components/navbar.const'

function Navbar() {
	const navKeys = Object.keys(navbarItems)

	return (
		<nav className="fixed hidden h-16 w-full items-center justify-between px-4 bg-background left-1/2 -translate-x-1/2 md:max-w-7xl lg:mx-auto md:flex md:border-b lg:border-x md:border-primary/10 z-[999]">
			<div className="flex items-center justify-center gap-2 capitalize">
				{navKeys.map((key) => {
					const navItem = navbarItems[key as keyof typeof navbarItems]
					if (navItem?.length === 1) {
						return (
							<Link key={navItem[0].href} href={navItem[0].href}>
								<div className="p-2">{navItem[0].title}</div>
							</Link>
						)
					}
					return (
						<div key={navItem[0].href} className="flex gap-1 items-center">
							<div className="flex-1 h-5 w-[1px] border-r" />
							<DropdownMenu>
								<DropdownMenuTrigger className="capitalize p-2 cursor-pointer group focus:outline-0 flex items-center gap-1">
									{key}

									<ChevronDown size={12} className="navbar-chevron-icon" />
								</DropdownMenuTrigger>

								<DropdownMenuContent
									className="p-2 rounded-xl bg-foreground/10 shadow-xl/30 outline-none backdrop-blur-sm border dark:border-none border-background"
									align="center"
								>
									<div className="grid grid-cols-2 gap-2">
										{navItem.map((item) => {
											return <ItemLink item={item} className="col-span-1 w-60" key={item.href} />
										})}
									</div>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					)
				})}
			</div>
			<ModeToggle />
		</nav>
	)
}
export default Navbar

interface IItemLink {
	className?: string
	item: TNavbarItem
}

const ItemLink = ({ className, item }: IItemLink) => {
	const Icon = item.icon
	return (
		<Link
			className={cn(
				'flex gap-2 items-center rounded-lg p-2 border border-transparent bg-background/40 hover:bg-background/60 transition-colors group dark:text-muted-foreground dark:hover:text-foreground hover:bg-background/70 dark:hover:border-transparent',
				className
			)}
			href={item.href}
		>
			<div className="size-10 flex items-center justify-center shrink-0 p-2 rounded-lg border group-hover:border-transparent dark:group-hover:border-foreground/60 transition-colors">
				{<Icon size={16} />}
			</div>
			<div className="flex flex-col gap-2">
				<div className="capitalize group-hover:underline transition-all">{item.title}</div>
				<div className="text-xs font-light text-foreground/70 group-hover:text-foreground line-clamp-1">
					{item.description}
				</div>
			</div>
		</Link>
	)
}
