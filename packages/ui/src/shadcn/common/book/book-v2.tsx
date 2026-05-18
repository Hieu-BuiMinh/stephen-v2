/**
 * primitives (MIT License)
 * Source:
 *  - https://21st.dev/community/components/shugar/book/textured
 *
 * Modified by: Stephen
 */

'use client'

import '@ui/shadcn/common/book/style.css'

import { cn } from '@repo/stephen-v2-utils'
import { type ResponsiveProp, useResponsive } from '@repo/stephen-v2-utils/hooks'
import { GlareHover } from '@ui/motion/components/glare-hover'
import React from 'react'

import BookTexture from '../../../assets/imges/bg/book-texture.avif'

const DefaultIllustration = (
	<svg
		width="272"
		height="241"
		viewBox="0 0 272 241"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="h-10 w-10 opacity-50"
	>
		<g filter="url(#filter0_i_dark)">
			<path
				d="M268.246 109.378C272.176 116.185 272.176 124.571 268.246 131.378L211.447 229.756C207.518 236.562 200.254 240.756 192.395 240.756H78.7981C70.9386 240.756 63.6762 236.562 59.7463 229.756L2.94747 131.378C-0.9824 124.571 -0.9824 116.185 2.94747 109.378L59.7463 11C63.6762 4.19361 70.9386 0.000151244 78.7981 0H192.395C200.254 5.80834e-05 207.518 4.19344 211.447 11L268.246 109.378ZM193.121 37.6484C190.167 32.5312 184.707 29.3781 178.798 29.3779H93.3957C87.4868 29.378 82.027 32.5312 79.0725 37.6484L36.3713 111.608C33.4169 116.726 33.4169 123.03 36.3713 128.147L43.6986 140.838C44.2345 141.766 45.2249 142.338 46.2967 142.338H91.9729C94.7353 142.338 98.2269 140.482 99.7717 138.191L123.744 102.651C125.285 100.367 124.307 98.5125 121.558 98.5039L87.5803 98.3975C84.831 98.3888 83.8531 96.5351 85.3938 94.251L102.746 68.5244C104.291 66.2344 107.783 64.3779 110.545 64.3779H203.358C205.667 64.3779 207.11 61.8779 205.956 59.8779L193.121 37.6484ZM235.822 128.147C238.777 123.03 238.777 116.726 235.822 111.608L229.313 100.334C228.779 99.4082 227.793 98.8368 226.725 98.8335L172.471 98.6641C169.707 98.6554 166.201 100.515 164.653 102.812L140.788 138.191C139.244 140.482 140.231 142.338 142.993 142.338H183.01C185.772 142.338 186.759 144.195 185.215 146.485L167.873 172.195C166.329 174.485 162.836 176.343 160.073 176.343H69.3936C67.0842 176.343 65.6408 178.843 66.7955 180.843L79.0725 202.107C82.027 207.225 87.4868 210.378 93.3957 210.378H178.798C184.707 210.378 190.167 207.225 193.121 202.107L235.822 128.147Z"
				fill="white"
			/>
		</g>
		<defs>
			<filter
				id="filter0_i_dark"
				x="0"
				y="0"
				width="271.193"
				height="244.756"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="4" />
				<feGaussianBlur stdDeviation="2" />
				<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.58 0" />
				<feBlend mode="normal" in2="shape" result="effect1_innerShadow_dark" />
			</filter>
		</defs>
	</svg>
)

export interface BookV2Props {
	title: string
	variant?: 'simple' | 'stripe'
	width?: number | ResponsiveProp<number>
	spineColor?: string
	coverColor?: string
	textColor?: string
	debossedTitle?: boolean
	illustration?: React.ReactNode
	textured?: boolean
	icon?: React.ReactNode
	onClick?: () => void
}

export const BookV2 = ({
	title,
	variant = 'stripe',
	width = 196,
	spineColor,
	coverColor,
	textColor = 'var(--ds-gray-1000)',
	debossedTitle = false,
	illustration,
	textured = false,
	icon,
	onClick,
}: BookV2Props) => {
	const _width = useResponsive(width)
	const _color = spineColor ? spineColor : 'transparent'
	const _illustration = illustration ? illustration : DefaultIllustration

	return (
		<div className="inline-block w-fit group/book cursor-pointer" style={{ perspective: 900 }} onClick={onClick}>
			{/* 2. 3D CONTAINER: Applies hover rotation and holds all 3D faces */}
			<div
				className="aspect-[49/60] w-fit relative rotate-0 duration-300 book-rotate transition-transform ease-out group-hover/book:[transform:rotateY(-20deg)_scale(1.066)translateX(-8px)]"
				style={{ transformStyle: 'preserve-3d', minWidth: _width, containerType: 'inline-size' }}
			>
				{/* 3. FRONT COVER: The face pointing towards the user */}
				<div
					className="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative after:absolute after:border after:border-gray-400/20 after:w-full after:h-full after:shadow-book-border after:rounded-l-md after:rounded-r"
					style={{ width: _width }}
				>
					{/* 3a. LEFT SECTION: Colored spine edge or full background (depending on variant) */}
					<div
						className={cn('w-full relative overflow-hidden', variant === 'stripe' && 'flex-1')}
						style={{ background: _color }}
					>
						{/* Render illustration behind the spine shadow if variant is stripe */}
						{variant === 'stripe' && illustration && (
							<div className="absolute h-full w-full">{_illustration}</div>
						)}
						{/* Spine shadow/binding crease */}
						<div
							className="absolute h-full w-[8.2%] mix-blend-overlay"
							style={{ background: 'var(--ds-book-bind)' }}
						/>
					</div>

					{/* 3b. RIGHT SECTION: Front cover surface (stripe variant) or transparent overlay (simple variant) */}
					<div
						className={cn(
							'relative flex-1',
							(variant === 'stripe' || (variant === 'simple' && spineColor === undefined)) &&
								!coverColor &&
								'bg-book-gradient'
						)}
						style={{ background: variant === 'simple' && spineColor !== undefined ? _color : coverColor }}
					>
						{/* Additional spine shadow bleeding into the right section */}
						<div
							className="absolute h-full w-[8.2%] opacity-20"
							style={{ background: 'var(--ds-book-bind)' }}
						/>
						{/* 3c. TEXT & CONTENT WRAPPER: Holds the Title and Logo/Illustration */}
						<div
							className={cn(
								'flex flex-col w-full p-[4%] pl-[12%] pr-[2.5%]',
								variant === 'simple' ? 'gap-4' : 'h-full'
							)}
							style={{ containerType: 'inline-size', gap: `calc((12px / 196) * ${_width})` }}
						>
							<span
								className={cn(
									'leading-[1.25em] tracking-[-.02em] text-balance font-semibold',
									variant === 'simple' ? 'text-[12cqw]' : 'text-[10.5cqw]',
									debossedTitle && 'opacity-90'
								)}
								style={{
									color: textColor,
									textShadow: debossedTitle
										? '1px 1px 1px rgba(255, 255, 255, 0.4), 0px 0px 2px rgba(0, 0, 0, 0.5)'
										: undefined,
								}}
							>
								{title}
							</span>
							{icon ? (
								<div style={{ color: textColor }}>{icon}</div>
							) : variant === 'stripe' ? (
								DefaultIllustration
							) : (
								_illustration
							)}
						</div>
					</div>

					{/* 3d. TEXTURE OVERLAY: Adds realistic paper/foil texture over the entire front cover */}
					{textured && (
						<div
							className="absolute top-0 left-0 inset-0 rotate-180 rounded-l-md rounded-r mix-blend-hard-light pointer-events-none bg-cover bg-no-repeat opacity-70 brightness-110"
							style={{ backgroundImage: `url(${BookTexture.src || BookTexture})` }}
						/>
					)}
				</div>

				{/* 4. SIDE PAGES (Book Depth): The white paper thickness shown on the right edge */}
				<div
					className="h-[calc(100%_-_2_*_3px)] w-[calc(29cqw_-_2px)] absolute top-[3px]"
					style={{
						background: 'linear-gradient(90deg, #eaeaea, transparent 70%), linear-gradient(#fff, #fafafa)',
						transform: `translateX(calc(${_width} * 1px - 29cqw / 2 - 3px)) rotateY(90deg) translateX(calc(29cqw / 2))`,
					}}
				/>

				{/* 5. BACK COVER: The rear cover pushed backwards in 3D space */}
				<div
					className="bg-gray-200 absolute left-0 top-0 rounded-l-md rounded-r h-full"
					style={{ width: _width, transform: 'translateZ(calc(-1 * 29cqw))' }}
				/>
			</div>
			{/* 6. GLARE EFFECT: The shiny interactive highlight triggered on hover */}
			<GlareHover className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-300 ease-out group-hover/book:[transform:rotateY(-20deg)_scale(1.066)translateX(-8px)] rounded-[6px_4px_4px_6px]" />
		</div>
	)
}
