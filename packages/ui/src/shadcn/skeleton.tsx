import { cn } from '@repo/stephen-v2-utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="skeleton" className={cn('bg-accent animate-pulse rounded-md', className)} {...props} />
}

export { Skeleton }
