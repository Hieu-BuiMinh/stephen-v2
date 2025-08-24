'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { type ReactNode, useEffect, useState } from 'react'

interface INavMenuDropdown {
	triggerText?: string | ReactNode
	dropDownContent?: ReactNode
	triggerClass?: string
}

function NavMenuDropdown({ triggerText, dropDownContent, triggerClass }: INavMenuDropdown) {
	const pathName = usePathname()
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	useEffect(() => {
		handleClose()
	}, [pathName])

	return (
		<DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
			{/*  modal={false} This will prevent the dropdown menu from being a modal */}
			<DropdownMenuTrigger
				onMouseEnter={handleOpen}
				onMouseLeave={handleClose}
				className={cn(
					'capitalize p-2 cursor-pointer group focus:outline-0 flex items-center gap-1',
					triggerClass
				)}
			>
				{triggerText}

				<ChevronDown
					size={12}
					className="transition duration-300 group-data-[state=open]:rotate-180 pointer-events-none"
				/>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				onMouseEnter={handleOpen}
				onMouseLeave={handleClose}
				className="p-2 mt-1 rounded-xl bg-foreground/10 shadow-xl/30 outline-none backdrop-blur-sm border dark:border-none border-background z-[60] before:absolute before:-inset-1 before:-top-4 overflow-visible before:-z-10"
				align="center"
			>
				{dropDownContent}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default NavMenuDropdown
