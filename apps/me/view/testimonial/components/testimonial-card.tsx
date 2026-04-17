import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { Quote } from 'lucide-react'
import React from 'react'

import FoldedCornerCard from '@/components/cards/folded-corner-card'

export interface TestimonialUser {
	name: string
	position: string
	avatar: string
	company?: string
	companyLogo?: string | React.ReactNode
}

export interface TestimonialCardProps {
	title: string
	subtitle?: string
	content: string
	user: TestimonialUser
	className?: string
	delay?: number
	variant?: 'primary' | 'secondary'
}

export function TestimonialCard({
	title,
	subtitle,
	content,
	user,
	className,
	delay,
	variant = 'secondary',
}: TestimonialCardProps) {
	const isPrimary = variant === 'primary'

	return (
		<AnimatedBlock type="FADE_IN" delay={delay} className={className}>
			<FoldedCornerCard
				className={cn(
					'size-full rounded-xl border-none shadow-sm transition-all duration-300 relative overflow-hidden',
					isPrimary ? 'bg-foreground dark:bg-white' : 'bg-muted'
				)}
			>
				<div className="p-4 flex flex-col h-full justify-between">
					<div className="flex flex-col gap-1">
						<h2
							className={cn(
								'text-5xl font-bold tracking-tighter sm:text-6xl truncate transition-colors duration-300',
								isPrimary ? 'text-background' : 'text-foreground'
							)}
						>
							{title}
						</h2>
						{subtitle && (
							<p
								className={cn(
									'text-sm font-medium leading-tight transition-colors duration-300',
									isPrimary ? 'text-background/80' : 'text-muted-foreground/80'
								)}
							>
								{subtitle}
							</p>
						)}
					</div>

					<div className="flex flex-col mt-6">
						<Quote className={cn('size-5 fill-red-500', isPrimary ? 'text-red-400' : 'text-red-500')} />
						<p
							className={cn(
								'text-xs md:text-sm font-medium leading-relaxed italic transition-colors duration-300',
								isPrimary ? 'text-background/90' : 'text-muted-foreground'
							)}
						>
							&ldquo;{content}&rdquo;
						</p>
					</div>

					<div className="flex items-center justify-between mt-auto pt-8">
						<div className="flex items-center gap-3">
							<div
								className={cn(
									'size-10 rounded-full overflow-hidden border-2 shadow-sm transition-colors duration-300',
									isPrimary ? 'border-background/20' : 'border-background'
								)}
							>
								<BlurImage
									src={user.avatar}
									alt={user.name}
									width={40}
									height={40}
									className="object-cover size-full"
								/>
							</div>
							<div className="flex flex-col">
								<h4
									className={cn(
										'font-bold text-[13px] leading-none transition-colors duration-300',
										isPrimary ? 'text-background' : 'text-foreground'
									)}
								>
									{user.name}
								</h4>
								<p
									className={cn(
										'text-[11px] mt-1 transition-colors duration-300',
										isPrimary ? 'text-background/70' : 'text-muted-foreground'
									)}
								>
									{user.position}
									{user.company && `, ${user.company}`}
								</p>
							</div>
						</div>

						{user.companyLogo && (
							<div className={cn('h-6 w-auto flex items-center justify-end transition-all')}>
								{typeof user.companyLogo === 'string' ? (
									<BlurImage
										src={user.companyLogo}
										alt={user.company || 'Company logo'}
										width={32}
										height={32}
										className="object-contain size-full"
									/>
								) : (
									user.companyLogo
								)}
							</div>
						)}
					</div>
				</div>
			</FoldedCornerCard>
		</AnimatedBlock>
	)
}
