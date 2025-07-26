'use client'

import { cn } from '@repo/stephen-v2-utils'
import React from 'react'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../form'
import { Input } from '../../../input'

type TRHFTextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
	name: string
	description?: string
	showMessage?: boolean
	label?: string
	placeholder?: string
	className?: string
	inputClassName?: string
	autoComplete?: string
}

function RHFTextField({
	name,
	description,
	showMessage = true,
	label,
	placeholder,
	className,
	inputClassName,
	autoComplete,
}: TRHFTextFieldProps) {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn('w-full', className)}>
					{label && <FormLabel className="text-xs">{label}</FormLabel>}
					<FormControl>
						<Input
							className={cn('', inputClassName)}
							placeholder={placeholder}
							autoComplete={autoComplete}
							{...field}
						/>
					</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					{showMessage && <FormMessage className="text-red-500" />}
				</FormItem>
			)}
		/>
	)
}

export { RHFTextField }
