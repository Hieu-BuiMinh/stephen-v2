import { useState } from 'react'
import { Loader2, Upload, X } from 'lucide-react'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	toast,
} from '@repo/stephen-v2-ui/shadcn'
import { useCloudinaryQuery } from '@/queries/use-cloudinary-query'

interface UploadDialogProps {
	currentFolder: string
}

export function UploadDialog({ currentFolder }: UploadDialogProps) {
	const [open, setOpen] = useState(false)
	const [files, setFiles] = useState<File[]>([])
	const { useUpload } = useCloudinaryQuery()
	const uploadMutation = useUpload(currentFolder)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFiles(Array.from(e.target.files))
		}
	}

	const handleUpload = async () => {
		if (files.length === 0) return

		try {
			for (const file of files) {
				await uploadMutation.mutateAsync({ file })
			}
			toast.success(`Uploaded ${files.length} file(s) to ${currentFolder || 'root'}`)
			setOpen(false)
			setFiles([])
		} catch (error: any) {
			toast.error(`Upload failed: ${error.message}`)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="sm" className="gap-2">
					<Upload className="size-4" />
					Upload
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Upload Assets</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-4 py-4">
					<div
						className="relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-10 transition-colors hover:bg-muted/50"
						onDragOver={(e) => e.preventDefault()}
						onDrop={(e) => {
							e.preventDefault()
							if (e.dataTransfer.files) {
								setFiles(Array.from(e.dataTransfer.files))
							}
						}}
					>
						<input
							type="file"
							multiple
							className="absolute inset-0 cursor-pointer opacity-0"
							onChange={handleFileChange}
						/>
						<Upload className="size-8 text-muted-foreground" />
						<p className="text-sm font-medium text-muted-foreground">
							Click or drag and drop to select files
						</p>
					</div>

					{files.length > 0 && (
						<div className="space-y-2">
							<p className="text-xs font-semibold uppercase opacity-50">Files to upload:</p>
							<div className="max-h-40 overflow-y-auto space-y-1">
								{files.map((file, i) => (
									<div
										key={i}
										className="flex items-center justify-between rounded bg-muted p-2 text-xs"
									>
										<span className="flex-1 truncate">{file.name}</span>
										<Button
											size="icon"
											variant="ghost"
											className="size-5"
											onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
										>
											<X className="size-3" />
										</Button>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				<div className="flex justify-end gap-2">
					<Button variant="outline" onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<Button
						onClick={handleUpload}
						disabled={files.length === 0 || uploadMutation.isPending}
						className="min-w-[100px]"
					>
						{uploadMutation.isPending ? <Loader2 className="size-4 animate-spin" /> : 'Upload'}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
