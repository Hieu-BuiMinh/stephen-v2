'use client'

import { UploadImg } from '@ui/shadcn/common/inputs/upload-img'
import { FormField, FormItem, FormMessage } from '@ui/shadcn/form'
import { useFormContext } from 'react-hook-form'

interface RHFUploadImgProps {
	name: string
	imageUrl?: string | null
	disabled?: boolean
	onProcessingChange?: (processing: boolean) => void
}

export function RHFUploadImg({ name, imageUrl, disabled, onProcessingChange }: RHFUploadImgProps) {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<UploadImg
						imageUrl={imageUrl}
						disabled={disabled}
						onChange={field.onChange}
						onProcessingChange={onProcessingChange}
					/>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
