'use client'

import { testimonialsList } from '@/constants/testimonials'
import { TestimonialCard } from './testimonial-card'
import { TestimonialSlider } from './testimonial-slider'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { cn } from '@repo/stephen-v2-utils'

interface TestimonialBentoProps {
	isExpanded?: boolean
	className?: string
}

export function TestimonialBento({ isExpanded = false, className }: TestimonialBentoProps) {
	// Featured row (first 2 - usually used in collapsed mode)
	const featuredTestimonials = testimonialsList.slice(0, 2)

	// Slider row (everything else - used in collapsed mode)
	const sliderTestimonials = testimonialsList.slice(2)

	// Split slider testimonials into two strips for marquee
	const midPoint = Math.ceil(sliderTestimonials.length / 2)
	const strip1 = sliderTestimonials.slice(0, midPoint)
	const strip2 = sliderTestimonials.slice(midPoint)

	if (!isExpanded) {
		return (
			<div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-5', className)}>
				{featuredTestimonials.map((item, index) => (
					<TestimonialCard key={index} {...item} delay={0.1 * (index + 1)} />
				))}
				<AnimatedBlock className="col-span-1" type="FADE_IN" delay={0.4}>
					<TestimonialSlider testimonials={strip1} speed={15} direction="down" />
				</AnimatedBlock>
				<AnimatedBlock className="col-span-1" type="FADE_IN" delay={0.6}>
					<TestimonialSlider testimonials={strip2} speed={15} direction="up" />
				</AnimatedBlock>
			</div>
		)
	}

	return (
		<div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 grid-flow-dense', className)}>
			{testimonialsList.map((item, index) => (
				<TestimonialCard key={index} {...item} delay={0.05 * index} />
			))}
		</div>
	)
}
