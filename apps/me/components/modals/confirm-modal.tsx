'use client'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@repo/stephen-v2-ui/shadcn'

interface ConfirmModalProps {
	children: React.ReactNode
	onConfirm: () => void
	title?: string
	description?: string
	confirmText?: string
	cancelText?: string
	variant?: 'default' | 'destructive'
}

export const ConfirmModal = ({
	children,
	onConfirm,
	title = 'Are you sure?',
	description = 'This action cannot be undone.',
	confirmText = 'Confirm',
	cancelText = 'Cancel',
	variant = 'default',
}: ConfirmModalProps) => {
	const handleConfirm = (e: React.MouseEvent) => {
		e.stopPropagation()
		onConfirm()
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild onClick={(e) => e.stopPropagation()}>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent onClick={(e) => e.stopPropagation()}>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={(e) => e.stopPropagation()}>{cancelText}</AlertDialogCancel>
					<AlertDialogAction
						onClick={handleConfirm}
						className={
							variant === 'destructive'
								? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
								: ''
						}
					>
						{confirmText}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
