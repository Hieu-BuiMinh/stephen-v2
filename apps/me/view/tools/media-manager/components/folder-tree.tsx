import { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FolderOpen, Home } from 'lucide-react'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { useCloudinaryQuery } from '@/queries/use-cloudinary-query'
import type { CloudinaryFolder } from '@/services/cloudinary.service'

interface FolderTreeProps {
	selectedFolder: string
	onSelectFolder: (path: string) => void
}

export function FolderTree({ selectedFolder, onSelectFolder }: FolderTreeProps) {
	return (
		<div className="space-y-0.5">
			<Button
				variant={selectedFolder === '' ? 'secondary' : 'ghost'}
				className="h-7 w-full justify-start gap-1.5 px-2 text-[11px]"
				onClick={() => onSelectFolder('')}
			>
				<Home className="size-3.5" />
				Root
			</Button>
			<div className="ml-2.5 mt-0.5 space-y-0.5 border-l pl-1.5">
				<FolderNode path="" onSelectFolder={onSelectFolder} selectedFolder={selectedFolder} />
			</div>
		</div>
	)
}

function FolderNode({
	path,
	onSelectFolder,
	selectedFolder,
}: {
	path: string
	onSelectFolder: (p: string) => void
	selectedFolder: string
}) {
	const [isOpen, setIsOpen] = useState(true)
	const { useFolders } = useCloudinaryQuery()
	const { data: subfolders, isLoading } = useFolders(path)

	if (isLoading && path === '') return <div className="p-2 text-[10px] italic opacity-50">Loading...</div>

	return (
		<>
			{subfolders?.map((folder: CloudinaryFolder) => {
				const isSelected = selectedFolder === folder.path

				return (
					<div key={folder.path} className="space-y-0.5">
						<div className="group flex items-center">
							<Button
								variant="ghost"
								size="icon"
								className="size-5 p-0 hover:bg-transparent"
								onClick={() => setIsOpen(!isOpen)}
							>
								{isOpen ? <ChevronDown className="size-2.5" /> : <ChevronRight className="size-2.5" />}
							</Button>
							<Button
								variant={isSelected ? 'secondary' : 'ghost'}
								className={cn(
									'h-7 flex-1 justify-start gap-1.5 px-1.5 text-[11px]',
									isSelected && 'font-bold'
								)}
								onClick={() => onSelectFolder(folder.path)}
							>
								{isSelected ? <FolderOpen className="size-3" /> : <Folder className="size-3" />}
								<span className="truncate">{folder.name}</span>
							</Button>
						</div>

						{isOpen && (
							<div className="ml-2.5 space-y-0.5 border-l pl-2.5">
								<FolderNode
									path={folder.path}
									onSelectFolder={onSelectFolder}
									selectedFolder={selectedFolder}
								/>
							</div>
						)}
					</div>
				)
			})}
		</>
	)
}
