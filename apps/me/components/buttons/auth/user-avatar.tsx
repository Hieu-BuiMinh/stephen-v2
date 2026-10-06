'use client'

import { useUser } from '@clerk/nextjs'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	RHFTextField,
	RHFUploadImg,
	toast,
} from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { Camera, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { userService } from '@/services/common/user'

interface UserAvatarProps {
	userId: string
	imageUrl?: string | null
	firstName?: string | null
	lastName?: string | null
	className?: string
	avatarClassName?: string
}

interface ProfileFormValues {
	avatarFile: File | null
	firstName: string
	lastName: string
}

function getClerkAvatarUrl(imageUrl: string) {
	const url = new URL(imageUrl)
	url.searchParams.set('width', '64')
	url.searchParams.set('height', '64')
	url.searchParams.set('fit', 'crop')
	url.searchParams.set('quality', '80')

	return url.toString()
}

export function UserAvatar({ userId, imageUrl, firstName, lastName, className, avatarClassName }: UserAvatarProps) {
	const { user } = useUser()
	const form = useForm<ProfileFormValues>({ defaultValues: { avatarFile: null, firstName: '', lastName: '' } })
	const [open, setOpen] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [isProcessingImage, setIsProcessingImage] = useState(false)
	const isOwner = user?.id === userId
	const displayFirstName = isOwner ? user.firstName : firstName
	const displayLastName = isOwner ? user.lastName : lastName
	const displayName = [displayFirstName, displayLastName].filter(Boolean).join(' ') || userId
	const displayImageUrl = isOwner ? user.imageUrl : imageUrl
	const avatarImageUrl = isOwner && displayImageUrl ? getClerkAvatarUrl(displayImageUrl) : displayImageUrl

	const handleOpenChange = (nextOpen: boolean) => {
		if (isSaving || isProcessingImage) return

		if (nextOpen && user) {
			form.reset({ avatarFile: null, firstName: user.firstName ?? '', lastName: user.lastName ?? '' })
		}

		setOpen(nextOpen)
	}

	const handleSave = async ({ avatarFile, firstName, lastName }: ProfileFormValues) => {
		if (!user || isProcessingImage) return

		const hasNameChanges = firstName !== (user.firstName ?? '') || lastName !== (user.lastName ?? '')
		if (!avatarFile && !hasNameChanges) {
			setOpen(false)
			return
		}

		setIsSaving(true)

		try {
			if (avatarFile) await userService.profileImage.update(user, avatarFile)
			if (hasNameChanges) await user.update({ firstName, lastName })
			await userService.sync.post()

			toast.success('Profile updated')
			setOpen(false)
		} catch {
			toast.error('Failed to update profile')
		} finally {
			setIsSaving(false)
		}
	}

	const avatar = (
		<Avatar className={cn('size-8', avatarClassName)}>
			<AvatarImage src={avatarImageUrl ?? undefined} alt={displayName} />
			<AvatarFallback>{displayName.slice(0, 1)}</AvatarFallback>
		</Avatar>
	)

	if (!isOwner) {
		return (
			<div
				className={cn(
					'flex items-center justify-center rounded-full border-2 border-muted-foreground p-1',
					className
				)}
			>
				{avatar}
			</div>
		)
	}

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<button
					type="button"
					aria-label="Edit profile"
					className={cn(
						'group relative flex items-center justify-center rounded-full border-2 border-green-500 p-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none cursor-pointer',
						className
					)}
				>
					{avatar}
					<span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
						<Camera className="size-4 text-white" />
					</span>
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>Update your profile photo and name.</DialogDescription>
				</DialogHeader>
				<FormProvider {...form}>
					<form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSave)}>
						<RHFUploadImg
							name="avatarFile"
							imageUrl={avatarImageUrl}
							disabled={isSaving}
							onProcessingChange={setIsProcessingImage}
						/>
						<div className="grid gap-4 sm:grid-cols-2">
							<RHFTextField name="firstName" label="First name" disabled={isSaving} />
							<RHFTextField name="lastName" label="Last name" disabled={isSaving} />
						</div>
						<div className="flex justify-end gap-2">
							<Button type="button" variant="outline" disabled={isSaving} onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button type="submit" disabled={isSaving || isProcessingImage}>
								{isSaving && <Loader2 className="size-4 animate-spin" />}
								Save changes
							</Button>
						</div>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	)
}
