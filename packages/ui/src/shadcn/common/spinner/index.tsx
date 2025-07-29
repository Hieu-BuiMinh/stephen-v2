import { cn } from '@repo/stephen-v2-utils'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Loader } from 'lucide-react'

const spinnerVariants = cva('text-muted-foreground animate-spin', {
	variants: {
		size: {
			default: 'size-4',
			sm: 'size-2',
			lg: 'size-6',
			icon: 'size-10',
		},
	},
	defaultVariants: {
		size: 'default',
	},
})

type ISpinnerProps = { className?: string; color?: string } & VariantProps<typeof spinnerVariants>

function Spinner(props: ISpinnerProps) {
	return <Loader color={props.color} className={cn(spinnerVariants({ size: props.size }), props.className)} />
}

export { Spinner }
