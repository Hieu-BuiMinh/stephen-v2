// eslint-disable react/display-name
'use client'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../form'
import { Textarea } from '../../../textarea'
import { cn } from '@repo/stephen-v2-utils'
import React, { forwardRef, useEffect, useRef } from 'react'
import { useFormContext } from 'react-hook-form'

type TRHFTextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
	name: string
	description?: string
	label?: string
	placeholder?: string
	errorMessage?: string
	className?: string
	textAreaClassName?: string
	maxHeight?: number
	minHeight?: number
	onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

interface UseAutosizeTextAreaProps {
	textAreaRef: React.ForwardedRef<HTMLTextAreaElement>
	minHeight?: number
	maxHeight?: number
	triggerAutoSize: string
}

export const useAutosizeTextArea = ({
	textAreaRef,
	triggerAutoSize,
	maxHeight = Number.MAX_SAFE_INTEGER,
	minHeight = 0,
}: UseAutosizeTextAreaProps) => {
	// textarea auto size
	// https://shadcnui-expansions.typeart.cc/docs/autosize-textarea
	const [init, setInit] = React.useState(true)

	React.useEffect(() => {
		const offsetBorder = 25

		if (textAreaRef && 'current' in textAreaRef) {
			const textAreaElement = textAreaRef.current
			if (textAreaElement) {
				if (init) {
					textAreaElement.style.minHeight = `${minHeight + offsetBorder}px`
					if (maxHeight > minHeight) {
						textAreaElement.style.maxHeight = `${maxHeight}px`
					}
					setInit(false)
				}
				textAreaElement.style.height = `${minHeight + offsetBorder}px`
				const scrollHeight = textAreaElement.scrollHeight

				if (scrollHeight > maxHeight) {
					textAreaElement.style.height = `${maxHeight}px`
				} else {
					textAreaElement.style.height = `${scrollHeight + offsetBorder}px`
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textAreaRef, triggerAutoSize])
}

const RHFTextArea = forwardRef<HTMLTextAreaElement | null, TRHFTextAreaProps>(
	(
		{
			name,
			description,
			label,
			placeholder,
			errorMessage,
			className,
			minHeight,
			maxHeight,
			onKeyDown,
			textAreaClassName,
		},
		ref
	) => {
		const { control, watch } = useFormContext()
		const [triggerAutoSize, setTriggerAutoSize] = React.useState('')
		const textareaRegisterName = watch(name)

		const textareaRef = useRef<HTMLTextAreaElement | null>(null)

		useAutosizeTextArea({
			textAreaRef: ref || textareaRef,
			triggerAutoSize: triggerAutoSize,
			minHeight,
			maxHeight,
		})

		useEffect(() => {
			if (ref && 'current' in ref) {
				setTriggerAutoSize(textareaRegisterName)
			}
			if (textareaRef && 'current' in textareaRef) {
				setTriggerAutoSize(textareaRegisterName)
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [textareaRegisterName])

		return (
			<FormField
				control={control}
				name={name}
				render={({ field }) => (
					<FormItem className={cn('w-full', className)}>
						{label && <FormLabel className="text-xs">{label}</FormLabel>}
						<FormControl>
							<Textarea
								autoComplete="off"
								autoCorrect="off"
								autoCapitalize="off"
								spellCheck="false"
								className={cn(textAreaClassName)}
								placeholder={placeholder}
								{...field}
								onKeyDown={onKeyDown}
								ref={ref || textareaRef}
							/>
						</FormControl>
						{description && <FormDescription>{description}</FormDescription>}
						{errorMessage && control._formState.errors[name]?.message && (
							<FormMessage className="pl-2 text-red-500">
								{control._formState.errors[name].message as string}
							</FormMessage>
						)}
					</FormItem>
				)}
			/>
		)
	}
)

RHFTextArea.displayName = 'RHFTextArea'

export { RHFTextArea }
