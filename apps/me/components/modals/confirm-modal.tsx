import { useEffect, useRef, useState } from 'react'
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@repo/stephen-v2-ui/shadcn'

interface ConfirmModalProps {
	children: React.ReactNode
	onConfirm: () => void
	title?: string
	description?: string
	confirmText?: string
	cancelText?: string
	variant?: 'default' | 'destructive'
	isLoading?: boolean
}

export const ConfirmModal = ({
	children,
	onConfirm,
	title = 'Are you sure?',
	description = 'This action cannot be undone.',
	confirmText = 'Confirm',
	cancelText = 'Cancel',
	variant = 'default',
	isLoading = false,
}: ConfirmModalProps) => {
	const [open, setOpen] = useState(false)
	const prevLoadingRef = useRef(isLoading)

	useEffect(() => {
		// If loading just finished (was true, now false), close the modal
		if (prevLoadingRef.current && !isLoading) {
			setOpen(false)
		}
		prevLoadingRef.current = isLoading
	}, [isLoading])

	const handleConfirm = (e: React.MouseEvent) => {
		e.stopPropagation()
		onConfirm()
		// If it's already not loading (fast sync action), close immediately
		if (!isLoading) {
			setOpen(false)
		}
	}

	return (
		<Dialog
			open={open}
			onOpenChange={(val) => {
				if (!isLoading) {
					setOpen(val)
				}
			}}
		>
			<DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
				{children}
			</DialogTrigger>
			<DialogContent
				onClick={(e) => e.stopPropagation()}
				onPointerDownOutside={(e) => {
					if (isLoading) {
						e.preventDefault()
					}
				}}
				onEscapeKeyDown={(e) => {
					if (isLoading) {
						e.preventDefault()
					}
				}}
			>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button
						variant="outline"
						disabled={isLoading}
						onClick={(e) => {
							e.stopPropagation()
							setOpen(false)
						}}
					>
						{cancelText}
					</Button>
					<Button
						onClick={handleConfirm}
						variant={variant === 'destructive' ? 'destructive' : 'default'}
						disabled={isLoading}
					>
						{confirmText}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
