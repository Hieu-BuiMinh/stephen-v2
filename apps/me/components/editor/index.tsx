'use client'

import {
	Button,
	RHFTextArea,
	toast,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@repo/stephen-v2-ui/shadcn'
import { Bold, Info, Italic, Send, Strikethrough, X } from 'lucide-react'
import { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

interface CommentEditorProps {
	placeholder: string
	onSubmit: (content: string) => Promise<unknown>
	contentName?: 'comment' | 'message'
	successMessage?: string
	errorMessage?: string
	showErrorToast?: boolean
	onCancel?: () => void
	onSubmitted?: () => void
	disabled?: boolean
}

type Decoration = 'bold' | 'italic' | 'strikethrough'

function CommentEditor({
	placeholder,
	onSubmit,
	contentName = 'comment',
	successMessage = 'Comment posted',
	errorMessage = 'Failed to post comment',
	showErrorToast = true,
	onCancel,
	onSubmitted,
	disabled = false,
}: CommentEditorProps) {
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const methods = useForm<{ message: string }>({ defaultValues: { message: '' } })
	const message = methods.watch('message')

	const decorateText = (decoration: Decoration) => {
		const textarea = textareaRef.current

		if (!textarea) return

		const markers = {
			bold: '**',
			italic: '*',
			strikethrough: '~~',
		}
		const marker = markers[decoration]
		const { selectionStart, selectionEnd } = textarea
		const selectedText = message.slice(selectionStart, selectionEnd)
		const nextMessage = `${message.slice(0, selectionStart)}${marker}${selectedText}${marker}${message.slice(selectionEnd)}`

		methods.setValue('message', nextMessage, { shouldDirty: true })
		requestAnimationFrame(() => {
			const cursor = selectionStart + marker.length + selectedText.length
			textarea.focus()
			textarea.setSelectionRange(cursor, cursor)
		})
	}

	const handleSubmit = methods.handleSubmit(async ({ message }) => {
		const content = message.trim()

		if (!content || disabled) return

		try {
			await onSubmit(content)
			methods.reset()
			toast.success(successMessage)
			onSubmitted?.()
		} catch {
			if (showErrorToast) {
				toast.error(errorMessage)
			}
		}
	})

	return (
		<FormProvider {...methods}>
			<form
				className="relative rounded-lg border bg-background p-2 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50"
				onSubmit={handleSubmit}
			>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="absolute right-2 top-2 size-7 text-muted-foreground"
								aria-label={`${contentName === 'comment' ? 'Comment' : 'Message'} formatting help`}
							>
								<Info className="size-4" />
							</Button>
						</TooltipTrigger>
						<TooltipContent>Use Markdown to format your {contentName}.</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<RHFTextArea
					ref={textareaRef}
					name="message"
					placeholder={placeholder}
					minHeight={71}
					textAreaClassName="min-h-24 resize-none border-0 pr-10 shadow-none focus-visible:ring-0"
				/>

				<div className="flex items-center gap-1 px-1.5 mt-2">
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="size-7"
						onClick={() => decorateText('bold')}
						aria-label="Bold"
					>
						<Bold className="size-4" />
					</Button>
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="size-7"
						onClick={() => decorateText('italic')}
						aria-label="Italic"
					>
						<Italic className="size-4" />
					</Button>
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="size-7"
						onClick={() => decorateText('strikethrough')}
						aria-label="Strikethrough"
					>
						<Strikethrough className="size-4" />
					</Button>
					{onCancel && (
						<Button
							type="button"
							variant="destructive-matter"
							size="sm"
							className="size-7 gap-1"
							onClick={onCancel}
						>
							<X className="size-4" />
						</Button>
					)}
				</div>

				<Button
					type="submit"
					variant="ghost"
					size="icon"
					className="absolute bottom-1.5 right-2 size-7"
					aria-label={`Send ${contentName}`}
					disabled={!message.trim() || disabled || methods.formState.isSubmitting}
				>
					<Send className="size-4" />
				</Button>
			</form>
		</FormProvider>
	)
}

export default CommentEditor
