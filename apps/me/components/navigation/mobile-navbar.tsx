'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@repo/stephen-v2-ui/shadcn'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { APP_CONFIG, SOCIAL_LINKS } from '@/configs/app-config'
import { navbarItems } from '@/constants/components/navbar.const'

function MobileNavbar() {
	const [loaded, setLoaded] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded) {
		return null
	}

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild className="md:hidden">
				<Button
					variant="ghost"
					size="sm"
					className="size-8 sticky top-0 right-0 p-0 z-[99]"
					aria-label="Toggle menu"
				>
					{isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="w-full sm:w-80 gap-0 z-[999]">
				<SheetHeader>
					<SheetTitle className="text-left">{APP_CONFIG.name}</SheetTitle>
				</SheetHeader>

				<div className="size-full flex flex-col justify-between">
					<div className="flex flex-col p-4 pt-0 border-t">
						{Object.entries(navbarItems)?.map(([key, items]) => {
							if (items?.length > 1) {
								return (
									<Accordion key={key} type="single" collapsible>
										<AccordionItem value={`item-${key}}`}>
											<AccordionTrigger className="capitalize">{key}</AccordionTrigger>
											<AccordionContent>
												<div className="flex flex-col gap-4">
													{items.map((item) => {
														return (
															<Link className="pl-4" href={item?.href} key={item.title}>
																{item?.title}
															</Link>
														)
													})}
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								)
							}
							return (
								<Link href={items[0]?.href} className="capitalize py-4" key={key}>
									{key}
								</Link>
							)
						})}
					</div>

					<div className="flex flex-col gap-3 p-4 border-t">
						<div className="flex items-center justify-center gap-3">
							{SOCIAL_LINKS.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									target="_blank"
									className="p-2 text-muted-foreground hover:text-foreground"
								>
									<link.icon className="size-[18px]" />
								</Link>
							))}
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNavbar
