'use client'

import { cn } from '@repo/stephen-v2-utils'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { ModeToggle } from '@/components/mode-toggle'
import NavMenuDropdown from '@/components/navigation/menu-dropdown'
import type { TNavbarItem } from '@/constants/components/navbar.const'
import { navbarItems } from '@/constants/components/navbar.const'
import { buttonVariants } from '@repo/stephen-v2-ui/shadcn'

function Navbar() {
	const navKeys = Object.keys(navbarItems)
	const { scrollY } = useScroll()

	const [isVisible, setIsVisible] = useState(true)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious() ?? 0
		if (latest > previous && latest > 150) {
			setIsVisible(false)
		} else {
			setIsVisible(true)
		}
	})

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{
				opacity: 1,
				y: isVisible ? 0 : -100,
			}}
			transition={{
				duration: 0.6,
				ease: 'easeOut',
				y: { duration: 0.3, ease: 'easeInOut' },
			}}
			className="fixed hidden h-16 w-full items-center justify-between px-4 bg-background left-1/2 -translate-x-1/2 md:max-w-7xl lg:mx-auto md:flex md:border-b lg:border-x md:border-primary/10 z-[51]"
		>
			<div className="flex items-center justify-between gap-2 capitalize">
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
			</div>
			<div className="flex items-center justify-center gap-5">
				{navKeys.map((key) => {
					const navItem = navbarItems[key as keyof typeof navbarItems]
					if (navItem?.length === 1) {
						return (
							<Link key={navItem[0].href} href={navItem[0].href}>
								<div className="p-2 text-muted-foreground hover:text-foreground transition-colors">
									{navItem[0].title}
								</div>
							</Link>
						)
					}
					return (
						<div key={navItem[0].href} className="flex gap-1 items-center">
							<div className="flex-1 h-5 w-[1px] border-r" />
							<NavMenuDropdown
								triggerText={key}
								triggerClass="text-muted-foreground hover:text-foreground transition-colors"
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
		</motion.nav>
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
				'bg-radial-[at_52%_-52%] **:[text-shadow:0_1px_0_var(--color-secondary)] border-secondary from-secondary/20 to-secondary/50 text-secondary-foreground inset-shadow-2xs inset-shadow-background/50 dark:inset-shadow-background/25 dark:from-secondary dark:to-secondary/70 dark:hover:to-secondary border text-sm shadow-md shadow-zinc-950/30 ring-0 transition-[filter] duration-200 dark:border-0',
				className
			)}
			href={item.href}
		>
			<div className="flex flex-col gap-2">
				<div className="flex gap-3 font-semibold items-center capitalize group-hover:underline transition-all">
					{<Icon size={14} />} {item.title}
				</div>
				<div className="text-xs font-light text-foreground/70 group-hover:text-foreground line-clamp-1">
					{item.description}
				</div>
			</div>
		</Link>
	)
}
