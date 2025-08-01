'use client'

import { cn } from '@repo/stephen-v2-utils'
import Image from 'next/image'
import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'
import NavMenuDropdown from '@/components/navigation/menu-dropdown'
import type { TNavbarItem } from '@/constants/components/navbar.const'
import { navbarItems } from '@/constants/components/navbar.const'

function Navbar() {
	const navKeys = Object.keys(navbarItems)

	return (
		<nav className="fixed hidden h-16 w-full items-center justify-between px-4 bg-background left-1/2 -translate-x-1/2 md:max-w-7xl lg:mx-auto md:flex md:border-b lg:border-x md:border-primary/10 z-[51]">
			<div className="flex items-center justify-center gap-2 capitalize">
				<Link href="/" className="size-[35px]">
					<Image
						src="/assets/images/logo/logo-dark.svg"
						width={35}
						height={35}
						alt="logo"
						className="hidden dark:block size-auto"
					/>
					<Image
						src="/assets/images/logo/logo-light.svg"
						width={35}
						height={35}
						alt="logo"
						className="block dark:hidden size-auto"
					/>
				</Link>
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
							<NavMenuDropdown
								triggerText={key}
								dropDownContent={
									<div className="grid grid-cols-2 gap-2">
										{navItem.map((item) => {
											return <ItemLink item={item} className="col-span-1 w-60" key={item.href} />
										})}
									</div>
								}
							/>
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
				'flex gap-2 items-center rounded-lg p-2 border border-transparent bg-background/40 transition-colors group dark:text-muted-foreground dark:hover:text-foreground hover:bg-background/70 dark:hover:border-transparent',
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
