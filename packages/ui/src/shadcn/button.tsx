'use client'

import { Slot } from '@radix-ui/react-slot'
import { cn } from '@repo/stephen-v2-utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
				destructive:
					'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				outline:
					'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
				secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
				link: 'text-primary underline-offset-4 hover:underline',
				'default-matter':
					'from-sky-600 to-sky-600/85 text-white border border-sky-300/25 bg-gradient-to-t shadow-md shadow-sky-300/20 ring-1 ring-inset ring-sky-600 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-sky-600 dark:ring-transparent',
				'primary-matter':
					'bg-radial-[at_52%_-52%] **:[text-shadow:0_1px_0_var(--color-primary)] border-primary from-primary/70 to-primary/95 text-primary-foreground inset-shadow-2xs inset-shadow-white/25 dark:inset-shadow-white dark:from-primary dark:to-primary/70 dark:hover:to-primary border text-sm shadow-md shadow-zinc-950/30 ring-0 transition-[filter] duration-200 hover:brightness-125 active:brightness-95 dark:border-0',
				'secondary-matter':
					'shadow-xs bg-linear-to-t hover:to-muted to-background from-muted dark:from-muted/50 dark:border-border border border-zinc-300 shadow-zinc-950/10 transition-colors duration-200',
				'destructive-matter':
					'from-destructive to-destructive/85 text-destructive-foreground border border-zinc-950/25 bg-gradient-to-t shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-white/15 dark:ring-transparent',
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }), 'cursor-pointer')}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
