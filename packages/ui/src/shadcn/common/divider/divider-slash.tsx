import { cn } from '@repo/stephen-v2-utils'

function DividerSlash({ className }: { className?: string }) {
	return (
		<div className={cn('relative my-8 h-4', className)}>
			<section
				id="divider-slash"
				className="absolute inset-0
				before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-px before:w-[calc(100vw-1.5rem)] before:max-w-screen before:bg-muted-foreground/20 dark:before:bg-muted-foreground
				after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:w-[calc(100vw-1.5rem)] after:max-w-screen after:bg-muted-foreground/20 dark:after:bg-muted-foreground bg-dashed dark:opacity-10"
			/>
			<div
				style={{ top: '-3.5px', left: '-4.5px' }}
				className="hidden lg:block lg:absolute z-10 size-2 rotate-45 rounded-[1px] border border-muted-foreground/20 bg-background"
			/>
			<div
				style={{ top: '-3.5px', right: '-4.5px' }}
				className="hidden lg:block lg:absolute z-10 size-2 rotate-45 rounded-[1px] border border-muted-foreground/20 bg-background"
			/>
			<div
				style={{ bottom: '-3.5px', left: '-4.5px' }}
				className="hidden lg:block lg:absolute z-10 size-2 rotate-45 rounded-[1px] border border-muted-foreground/20 bg-background"
			/>
			<div
				style={{ bottom: '-3.5px', right: '-4.5px' }}
				className="hidden lg:block lg:absolute z-10 size-2 rotate-45 rounded-[1px] border border-muted-foreground/20 bg-background"
			/>
		</div>
	)
}

export { DividerSlash }
