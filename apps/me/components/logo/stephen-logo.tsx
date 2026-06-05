import * as React from 'react'

import { cn } from '@repo/stephen-v2-utils'

export type StephenLogoVariant = 'negative' | 'positive' | 'neutral'

type StephenLogoProps = {
	variant?: StephenLogoVariant
} & React.SVGProps<SVGSVGElement>

export default function StephenLogo({ variant = 'negative', className, ...props }: StephenLogoProps) {
	switch (variant) {
		case 'neutral':
			return (
				<svg
					width="272"
					height="241"
					viewBox="0 0 272 241"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={cn('h-full w-full', className)}
					{...props}
				>
					<g filter="url(#filter0_i_neutral)">
						<path
							d="M268.246 109.378C272.176 116.185 272.176 124.571 268.246 131.378L211.447 229.756C207.518 236.562 200.254 240.756 192.395 240.756H78.7981C70.9386 240.756 63.6762 236.562 59.7463 229.756L2.94747 131.378C-0.9824 124.571 -0.9824 116.185 2.94747 109.378L59.7463 11C63.6762 4.19361 70.9386 0.000151244 78.7981 0H192.395C200.254 5.80834e-05 207.518 4.19344 211.447 11L268.246 109.378ZM193.121 37.6484C190.167 32.5312 184.707 29.3781 178.798 29.3779H93.3957C87.4868 29.378 82.027 32.5312 79.0725 37.6484L36.3713 111.608C33.4169 116.726 33.4169 123.03 36.3713 128.147L43.6986 140.838C44.2345 141.766 45.2249 142.338 46.2967 142.338H91.9729C94.7353 142.338 98.2269 140.482 99.7717 138.191L123.744 102.651C125.285 100.367 124.307 98.5125 121.558 98.5039L87.5803 98.3975C84.831 98.3888 83.8531 96.5351 85.3938 94.251L102.746 68.5244C104.291 66.2344 107.783 64.3779 110.545 64.3779H203.358C205.667 64.3779 207.11 61.8779 205.956 59.8779L193.121 37.6484ZM235.822 128.147C238.777 123.03 238.777 116.726 235.822 111.608L229.313 100.334C228.779 99.4082 227.793 98.8368 226.725 98.8335L172.471 98.6641C169.707 98.6554 166.201 100.515 164.653 102.812L140.788 138.191C139.244 140.482 140.231 142.338 142.993 142.338H183.01C185.772 142.338 186.759 144.195 185.215 146.485L167.873 172.195C166.329 174.485 162.836 176.343 160.073 176.343H69.3936C67.0842 176.343 65.6408 178.843 66.7955 180.843L79.0725 202.107C82.027 207.225 87.4868 210.378 93.3957 210.378H178.798C184.707 210.378 190.167 207.225 193.121 202.107L235.822 128.147Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<filter
							id="filter0_i_neutral"
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
							<feBlend mode="normal" in2="shape" result="effect1_innerShadow_neutral" />
						</filter>
					</defs>
				</svg>
			)
		case 'negative':
			return (
				<svg
					width="272"
					height="241"
					viewBox="0 0 272 241"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={cn('h-full w-full', className)}
					{...props}
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
		case 'positive':
			return (
				<svg
					width="272"
					height="241"
					viewBox="0 0 272 241"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={cn('h-full w-full', className)}
					{...props}
				>
					<g filter="url(#filter0_i_light)">
						<path
							d="M2.94733 131.378C-0.982443 124.571 -0.982442 116.185 2.94733 109.378L59.7462 11C63.6761 4.19342 70.9392 2.90425e-05 78.7989 0H192.396C200.255 0.000150505 207.517 4.19359 211.447 11L268.246 109.378C272.176 116.185 272.176 124.571 268.246 131.378L211.447 229.756C207.517 236.562 200.255 240.756 192.396 240.756H78.7989C70.9392 240.756 63.6761 236.562 59.7462 229.756L2.94733 131.378ZM78.0723 203.107C81.0268 208.225 86.4867 211.378 92.3956 211.378H177.798C183.707 211.378 189.167 208.225 192.121 203.107L234.822 129.147C237.777 124.03 237.777 117.726 234.822 112.608L227.495 99.9179C226.959 98.9897 225.969 98.418 224.897 98.418H179.221C176.458 98.418 172.967 100.274 171.422 102.564L147.449 138.104C145.909 140.389 146.886 142.243 149.636 142.252L183.613 142.358C186.363 142.367 187.34 144.221 185.8 146.505L168.447 172.231C166.902 174.521 163.411 176.378 160.648 176.378H67.8359C65.5265 176.378 64.0831 178.878 65.2379 180.878L78.0723 203.107ZM35.3712 112.608C32.4169 117.726 32.4169 124.03 35.3712 129.147L41.8803 140.422C42.4145 141.348 43.4006 141.919 44.4691 141.922L98.7227 142.092C101.487 142.1 104.992 140.241 106.541 137.944L130.405 102.564C131.95 100.274 130.963 98.418 128.2 98.418H88.1837C85.4215 98.4178 84.4342 96.5605 85.9786 94.2705L103.32 68.5605C104.865 66.2704 108.358 64.4132 111.12 64.4131H201.8C204.109 64.4131 205.553 61.9131 204.398 59.9131L192.121 38.6484C189.167 33.5312 183.707 30.378 177.798 30.3779H92.3956C86.4867 30.3781 81.0268 33.5312 78.0723 38.6484L35.3712 112.608Z"
							fill="#111111"
						/>
					</g>
					<defs>
						<filter
							id="filter0_i_light"
							x="0"
							y="0"
							width="271.194"
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
							<feBlend mode="normal" in2="shape" result="effect1_innerShadow_light" />
						</filter>
					</defs>
				</svg>
			)
	}
}
