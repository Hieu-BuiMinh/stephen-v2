'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, RHFTextField, Spinner } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const postCommentFormSchema = z.object({
	email: z.email().min(1, {
		message: 'Message cannot be empty',
	}),
})
export type TPostCommentFromSchemaType = z.infer<typeof postCommentFormSchema>

function NewsletterSignUp() {
	const { theme } = useTheme()
	const [loading, setLoading] = useState(true)
	const methods = useForm<TPostCommentFromSchemaType>({
		resolver: zodResolver(postCommentFormSchema),
		defaultValues: {
			email: '',
		},
	})

	const onSubmit = (data: TPostCommentFromSchemaType) => {
		console.log('data', data)
	}

	useEffect(() => {
		setLoading(false)
	}, [])

	if (loading) {
		return (
			<div className="border-t flex items-center justify-center p-5">
				<Spinner />
			</div>
		)
	}

	return (
		<div className="relative">
			<div className="relative overflow-x-clip">
				<div className="drama-shadow rounded-2xl bg-dark-primary p-14 md:p-[100px]">
					{/* Lines */}
					<div className="absolute left-0 right-0 top-0 z-10 h-px w-full border-b border-dashed" />
					<div className="absolute bottom-0 right-0 top-0 z-10 h-full w-8 bg-dashed dark:opacity-10" />
					<div className="absolute bottom-0 left-0 top-0 z-10 h-full w-8 bg-dashed dark:opacity-10" />
					{/* <div className="absolute bottom-0 left-0 right-0 z-10 h-px w-full border-b border-dashed" /> */}

					{/* Top Right Cross */}
					<CrossIcon className="absolute -top-[calc(0.5rem-0.5px)] right-[calc(2rem-0.5rem)]" />
					{/* Top Left Cross */}
					<CrossIcon className="absolute -top-[calc(0.5rem-0.5px)] left-[calc(2rem-0.5rem)]" />
					{/* Bottom Left Cross */}
					<CrossIcon className="absolute -bottom-[calc(0.52rem)] left-[calc(2rem-0.5rem)]" />
					{/* Bottom Right Cross */}
					<CrossIcon className="absolute -bottom-[calc(0.52rem)] right-[calc(2rem-0.5rem)]" />

					{theme === 'dark' ? (
						<Image
							width={400}
							height={400}
							className="w-[514px] h-[540px] hidden absolute bottom-0 right-0 z-20 lg:block"
							src="/assets/images/logo/logo-light-rotate.svg"
							alt="Stephen's Logo"
						/>
					) : (
						<Image
							width={400}
							height={400}
							className="w-[514px] h-[540px] hidden absolute bottom-0 right-0 z-20 lg:block"
							src="/assets/images/logo/logo-dark-rotate.svg"
							alt="Stephen's Logo"
						/>
					)}

					<h2 className="mb-4 text-3xl font-medium">Subscribe to my newsletter</h2>
					<p className="z-50 mb-8 max-w-[336px] text-base leading-8 md:mb-12">
						Keep up to date about my life, recent blog posts, how-tos, and discoveries.
					</p>
					<div className="flex flex-col gap-3">
						<FormProvider {...methods}>
							<form
								onSubmit={methods.handleSubmit(onSubmit)}
								className="flex flex-col items-end gap-3 md:w-80 md:flex-row"
							>
								<RHFTextField
									placeholder="example@email.com"
									className="w-full"
									name="email"
									type="email"
									autoComplete="email"
									showMessage={false}
								/>

								<Button type="submit" className="w-full md:w-auto" variant="secondary-matter">
									Subscribe
								</Button>
							</form>
						</FormProvider>
						<span className="text-xs text-muted-foreground">
							Don&apos;t miss out 😉. Get an email whenever I post,{' '}
							<b className="text-foreground">no spam</b>.
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsletterSignUp

const CrossIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			aria-hidden="true"
			data-slot="icon"
			className={cn('size-4 z-20 opacity-50 dark:opacity-100', className)}
		>
			<path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path>
		</svg>
	)
}
