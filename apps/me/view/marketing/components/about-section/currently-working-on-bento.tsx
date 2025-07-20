import { TextEffect } from '@repo/stephen-v2-ui/motion'
import Link from 'next/link'
import type { SVGProps } from 'react'
import React from 'react'

import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from '@/view/marketing/components/about-section/glowing-background-stars-card'
import { SVGIcons } from '@/components/icons/svg-icons'

function CurrentlyWorkingOnBento() {
	return (
		<div className="flex items-center relative justify-center antialiased size-full">
			<GlowingStarsBackgroundCard>
				<Link href="https://turborepo.com/" target="_blank" className="absolute top-6 right-6 z-10">
					<GlowingStarsTitle>
						<TextEffect per="char" preset="fade" className="text-right">
							Turborepo
						</TextEffect>
					</GlowingStarsTitle>
					<div className="hidden justify-between items-end gap-2 md:flex">
						<GlowingStarsDescription className="text-right">
							<TextEffect>
								Optimizing my workflow with Turborepo for faster builds and scalable monorepos.
							</TextEffect>
						</GlowingStarsDescription>
						<div className="size-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
							<SVGIcons.Turborepo />
						</div>
					</div>
				</Link>
				<Link href="https://nextjs.org/" target="_blank" className="absolute bottom-6 left-6 z-10">
					<GlowingStarsTitle>
						<TextEffect per="char" preset="fade">
							Next.js 15
						</TextEffect>
					</GlowingStarsTitle>
					<div className="hidden justify-between items-end gap-2 md:flex">
						<GlowingStarsDescription>
							<TextEffect>Building my app with the power of Next.js. Check out the details.</TextEffect>
						</GlowingStarsDescription>
						<div className="size-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
							<ArrowIcon />
						</div>
					</div>
				</Link>
			</GlowingStarsBackgroundCard>
		</div>
	)
}

export default CurrentlyWorkingOnBento

const ArrowIcon = () => {
	return (
		<svg width="3em" height="3em" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask
				id="nextjs_icon_dark__mask0_408_139"
				style={{
					maskType: 'alpha',
				}}
				maskUnits="userSpaceOnUse"
				x={0}
				y={0}
				width={180}
				height={180}
			>
				<circle cx={90} cy={90} r={90} fill="black" />
			</mask>
			<g mask="url(#nextjs_icon_dark__mask0_408_139)">
				<circle cx={90} cy={90} r={87} fill="black" stroke="white" strokeWidth={6} />
				<path
					d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
					fill="url(#nextjs_icon_dark__paint0_linear_408_139)"
				/>
				<rect x={115} y={54} width={12} height={72} fill="url(#nextjs_icon_dark__paint1_linear_408_139)" />
			</g>
			<defs>
				<linearGradient
					id="nextjs_icon_dark__paint0_linear_408_139"
					x1={109}
					y1={116.5}
					x2={144.5}
					y2={160.5}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" />
					<stop offset={1} stopColor="white" stopOpacity={0} />
				</linearGradient>
				<linearGradient
					id="nextjs_icon_dark__paint1_linear_408_139"
					x1={121}
					y1={54}
					x2={120.799}
					y2={106.875}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" />
					<stop offset={1} stopColor="white" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	)
}
