import { TestimonialBento } from '@/view/testimonial/components/testimonial-bento'
import React from 'react'

function TestimonialPageView() {
	return (
		<div className="pt-24 pb-36 px-6">
			<div className="max-w-7xl mx-auto space-y-16">
				{/* Testimonial Bento Grid - Expanded for full view */}
				<TestimonialBento isExpanded={true} />
			</div>
		</div>
	)
}

export default TestimonialPageView
