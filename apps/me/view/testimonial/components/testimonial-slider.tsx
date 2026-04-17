'use client'

import { cn } from '@repo/stephen-v2-utils'
import { TestimonialCard, type TestimonialCardProps } from './testimonial-card'
import './testimonial-slider.css'

interface TestimonialSliderProps {
	testimonials: TestimonialCardProps[]
	speed?: number
	direction?: 'up' | 'down'
	className?: string
}

export function TestimonialSlider({ testimonials, speed = 20, direction = 'up', className }: TestimonialSliderProps) {
	const doubledTestimonials = [...testimonials, ...testimonials]

	const isUp = direction === 'up'

	return (
		<div
			className={cn(
				'relative h-[300px] overflow-hidden rounded-2xl bg-secondary/5 group marquee-group',
				className
			)}
		>
			<div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
			<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

			<div className="flex flex-col gap-4 h-full">
				<div
					className={cn(
						'flex flex-col gap-4 shrink-0',
						isUp ? 'animate-marquee-vertical-up' : 'animate-marquee-vertical-down'
					)}
					style={{
						animationDuration: `${speed}s`,
						animationTimingFunction: 'linear',
						animationIterationCount: 'infinite',
					}}
				>
					{doubledTestimonials.map((testimonial, index) => (
						<div key={index} className="w-full">
							<TestimonialCard {...testimonial} delay={0} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
