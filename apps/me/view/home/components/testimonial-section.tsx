'use client'

import { TextEffect } from '@repo/stephen-v2-ui/motion'
import TextGradient from '@/components/texts/text-gradient'
import { TestimonialBento } from '@/view/testimonial/components/testimonial-bento'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function TestimonialSection() {
	return (
		<section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
			<TextGradient as="div" className="text-center font-semibold text-3xl md:text-4xl max-w-xl mx-auto">
				<TextEffect preset="slide" per="char">
					Kind words from people I've worked with
				</TextEffect>
			</TextGradient>

			<Link href="/testimonial" className="group block relative cursor-pointer">
				<div className="transition-all duration-500 group-hover:scale-[1.01] group-hover:opacity-90">
					<TestimonialBento />
				</div>

				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pointer-events-none z-20">
					<div className="bg-background/80 backdrop-blur-md px-8 py-4 rounded-full border shadow-2xl flex items-center gap-3 font-bold text-sm tracking-tight transform outline outline-1 outline-border">
						View full wall of love
						<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
					</div>
				</div>
			</Link>
		</section>
	)
}
