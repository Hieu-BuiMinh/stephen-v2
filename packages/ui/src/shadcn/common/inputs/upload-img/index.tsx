'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@ui/shadcn/avatar'
import { Input } from '@ui/shadcn/input'
import { Label } from '@ui/shadcn/label'
import { useEffect, useId, useState } from 'react'

interface UploadImgProps {
	imageUrl?: string | null
	onChange: (file: File | null) => void
	onProcessingChange?: (processing: boolean) => void
	disabled?: boolean
}

export function UploadImg({ imageUrl, onChange, onProcessingChange, disabled }: UploadImgProps) {
	const inputId = useId()
	const [previewUrl, setPreviewUrl] = useState<string | null>(null)
	const [isProcessing, setIsProcessing] = useState(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		return () => {
			if (previewUrl) URL.revokeObjectURL(previewUrl)
		}
	}, [previewUrl])

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		event.target.value = ''
		if (!file) return

		setIsProcessing(true)
		onProcessingChange?.(true)
		setError(null)
		setPreviewUrl(null)
		onChange(null)

		try {
			const bitmap = await createImageBitmap(file)
			try {
				const canvas = document.createElement('canvas')
				const context = canvas.getContext('2d')
				if (!context) throw new Error('Unable to process image')

				let blob: Blob | null = null
				for (const maxSize of [512, 384, 256]) {
					const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height))
					canvas.width = Math.round(bitmap.width * scale)
					canvas.height = Math.round(bitmap.height * scale)
					context.fillStyle = '#fff'
					context.fillRect(0, 0, canvas.width, canvas.height)
					context.drawImage(bitmap, 0, 0, canvas.width, canvas.height)

					for (const quality of [0.8, 0.65, 0.5]) {
						blob = await new Promise<Blob | null>((resolve) =>
							canvas.toBlob(resolve, 'image/jpeg', quality)
						)
						if (!blob || blob.size <= 256 * 1024) break
					}
					if (!blob || blob.size <= 256 * 1024) break
				}

				if (!blob || blob.size > 256 * 1024) throw new Error('Image is too large after resizing')

				const resizedFile = new File([blob], `${file.name.replace(/\.[^.]+$/, '')}.jpg`, {
					type: 'image/jpeg',
				})
				setPreviewUrl(URL.createObjectURL(resizedFile))
				onChange(resizedFile)
			} finally {
				bitmap.close()
			}
		} catch (error) {
			setError(error instanceof Error ? error.message : 'Unable to process image')
		} finally {
			setIsProcessing(false)
			onProcessingChange?.(false)
		}
	}

	return (
		<div className="flex items-center gap-4">
			<Avatar className="size-16">
				<AvatarImage src={previewUrl ?? imageUrl ?? undefined} alt="Profile photo preview" />
				<AvatarFallback>?</AvatarFallback>
			</Avatar>
			<div className="flex min-w-0 flex-1 flex-col gap-2">
				<Label htmlFor={inputId}>Profile photo</Label>
				<Input
					id={inputId}
					type="file"
					accept="image/jpeg,image/png,image/webp"
					disabled={disabled || isProcessing}
					onChange={handleChange}
				/>
				<p className="text-xs text-muted-foreground">
					{isProcessing ? 'Resizing image...' : 'Up to 512px and 256 KB'}
				</p>
				{error && (
					<p className="text-xs text-destructive" role="alert">
						{error}
					</p>
				)}
			</div>
		</div>
	)
}
