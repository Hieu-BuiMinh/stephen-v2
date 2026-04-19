'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Lock, Search } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { cn } from '@repo/stephen-v2-utils'
import { useIsMobile } from '@repo/stephen-v2-ui/hooks'
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Input,
	ScrollArea,
} from '@repo/stephen-v2-ui/shadcn'
import { useLocalStorage } from '@repo/stephen-v2-utils/hooks'
import { useCloudinaryQuery } from '@/queries/use-cloudinary-query'
import { AssetGrid } from '../components/asset-grid'
import { FolderTree } from '../components/folder-tree'
import { FolderDrawer } from '../components/folder-drawer'
import { UploadDialog } from '../components/upload-dialog'

export default function MediaManagerPage() {
	const [isMounted, setIsMounted] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useLocalStorage('media-manager-auth', false)
	const [password, setPassword] = useState('')
	const [selectedFolder, setSelectedFolder] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const isMobile = useIsMobile()

	const { scrollY } = useScroll()
	const [isHeaderVisible, setIsHeaderVisible] = useState(true)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious() ?? 0
		if (latest > previous && latest > 150) {
			setIsHeaderVisible(false)
		} else {
			setIsHeaderVisible(true)
		}
	})

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const { useResources } = useCloudinaryQuery()
	const { data: assets, isLoading } = useResources(selectedFolder)

	const handleAuth = (e: React.FormEvent) => {
		e.preventDefault()
		if (password === process.env.ADMIN_PASSWORD) {
			setIsAuthenticated(true)
		} else {
			alert('Invalid password')
		}
	}

	const filteredAssets = assets?.filter((a: any) => a.public_id.toLowerCase().includes(searchQuery.toLowerCase()))

	// Prevent hydration mismatch by not rendering anything until mounted
	if (!isMounted) return null

	if (!isAuthenticated) {
		return (
			<div className="flex min-h-screen items-center justify-center p-4">
				<Card className="w-full max-w-md">
					<CardHeader className="text-center">
						<div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
							<Lock className="size-6" />
						</div>
						<CardTitle>Media Manager Access</CardTitle>
						<CardDescription>Enter your admin password to manage Cloudinary assets.</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleAuth} className="space-y-4">
							<Input
								type="password"
								placeholder="Admin password..."
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								autoFocus
							/>
							<Button type="submit" className="w-full gap-2">
								Unlock <ArrowRight className="size-4" />
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		)
	}

	return (
		<div className="flex min-h-[calc(100vh+4rem)] flex-col bg-background md:-mt-16 md:flex-row pb-36">
			{/* Sidebar - Sticky and fixed height on desktop */}
			<motion.aside
				initial={false}
				animate={{
					top: isMobile ? 0 : isHeaderVisible ? 64 : 0,
				}}
				transition={{ duration: 0.2, ease: 'easeInOut' }}
				className={cn(
					'sticky z-20 hidden h-fit w-full flex-col border-r bg-muted/5 md:flex md:w-64 md:self-start lg:w-72'
				)}
			>
				<div className="flex h-14 items-center border-b px-4">
					<h2 className="font-semibold tracking-tight">Library</h2>
				</div>
				<motion.div
					initial={false}
					animate={{
						height: isMobile
							? 'calc(100vh - 56px)'
							: isHeaderVisible
								? 'calc(100vh - 120px)'
								: 'calc(100vh - 56px)',
					}}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
					className="w-full overflow-hidden"
				>
					<ScrollArea className="size-full">
						<div className="p-3 pb-20">
							<FolderTree selectedFolder={selectedFolder} onSelectFolder={setSelectedFolder} />
						</div>
					</ScrollArea>
				</motion.div>
			</motion.aside>

			{/* Main Content Arena */}
			<main className="relative flex min-w-0 flex-1 flex-col">
				{/* Sticky Header Group: Actions + Search */}
				<motion.div
					initial={false}
					animate={{
						top: isMobile ? 0 : isHeaderVisible ? 64 : 0,
					}}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
					className="sticky z-10 w-full"
				>
					<div className="flex h-14 shrink-0 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-md">
						<div className="flex min-w-0 flex-1 items-center gap-2">
							<FolderDrawer selectedFolder={selectedFolder} onSelectFolder={setSelectedFolder} />
							<h1 className="truncate text-sm font-bold tracking-tight">
								{selectedFolder ? selectedFolder.split('/').pop() : 'Root Folder'}
							</h1>
						</div>
						<div className="flex items-center gap-2">
							<UploadDialog currentFolder={selectedFolder} />
						</div>
					</div>

					{/* Search & Breadcrumb Bar */}
					<div className="flex shrink-0 flex-col gap-4 border-b bg-background/80 px-6 py-3 backdrop-blur-md">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
							<Input
								placeholder="Search assets in this folder..."
								className="h-9 pl-9 text-xs"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>
						<p
							className="truncate font-mono text-[10px] text-muted-foreground opacity-60"
							title={`/api/cloudinary/resources/${selectedFolder || 'root'}`}
						>
							PATH: /api/cloudinary/resources/{selectedFolder || 'root'}
						</p>
					</div>
				</motion.div>

				{/* Asset Viewport - Normal scrolling content */}
				<div className="p-6 pt-20">
					<AssetGrid assets={filteredAssets} isLoading={isLoading} />
				</div>
			</main>
		</div>
	)
}
