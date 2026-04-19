'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@repo/stephen-v2-ui/shadcn'
import { FolderTree } from './folder-tree'

interface FolderDrawerProps {
	selectedFolder: string
	onSelectFolder: (path: string) => void
}

export function FolderDrawer({ selectedFolder, onSelectFolder }: FolderDrawerProps) {
	const [open, setOpen] = useState(false)

	const handleSelect = (path: string) => {
		onSelectFolder(path)
		setOpen(false) // Close drawer on selection for better mobile UX
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-72 p-0">
				<SheetHeader className="border-b px-4 py-4">
					<SheetTitle className="text-sm font-semibold">Library</SheetTitle>
				</SheetHeader>
				<div className="p-4">
					<FolderTree selectedFolder={selectedFolder} onSelectFolder={handleSelect} />
				</div>
			</SheetContent>
		</Sheet>
	)
}
