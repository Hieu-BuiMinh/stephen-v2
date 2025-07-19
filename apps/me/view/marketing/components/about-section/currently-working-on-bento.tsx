import { TextEffect } from '@repo/stephen-v2-ui/motion'
import Link from 'next/link'
import type { SVGProps } from 'react'
import React from 'react'

import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from '@/view/marketing/components/about-section/glowing-background-stars-card'

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
					<div className="flex justify-between items-end gap-2">
						<GlowingStarsDescription className="text-right">
							<TextEffect>
								Optimizing my workflow with Turborepo for faster builds and scalable monorepos.
							</TextEffect>
						</GlowingStarsDescription>
						<div className="size-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
							<TurborepoIcon />
						</div>
					</div>
				</Link>
				<Link href="https://nextjs.org/" target="_blank" className="absolute bottom-6 left-6 z-10">
					<GlowingStarsTitle>
						<TextEffect per="char" preset="fade">
							Next.js 15
						</TextEffect>
					</GlowingStarsTitle>
					<div className="flex justify-between items-end gap-2">
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

const TurborepoIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 256 293"
		xmlns="http://www.w3.org/2000/svg"
		width="3em"
		height="3em"
		preserveAspectRatio="xMidYMid"
		{...props}
	>
		<defs>
			<linearGradient id="turbopack__a" x1="50%" x2="49.855%" y1="7.896%" y2="93.343%">
				<stop offset="0%" stopColor="#0096FF" />
				<stop offset="100%" stopColor="#FF1E56" />
			</linearGradient>
		</defs>
		<path
			fill="url(#turbopack__a)"
			d="M128 0 46.16 46.768l.16 36.752L128 36.848l96 54.864L256 110V73.136L128 0Zm-14.4 247.488L32 200.864V91.792l-.032-.016-.176-36.8L0 73.136v146.288l81.68 46.672 31.92-18.608ZM224 200.864v-92.56l32 18.288v92.832l-128 73.152-31.888-18.224L128 255.76v-.048l96-54.848Z"
		/>
		<path d="M46.4 108.369v84.128l81.6 46.64v-84.144zM128 53.441l-74.352 42.48 81.616 46.64 74.336-42.496z" />
	</svg>
)
