// https://www.svgrepo.com/collection/doodle-library-hand-drawn-vectors/1
import { cn } from '@repo/stephen-v2-utils'
import type { SVGProps } from 'react'

type DoodleProps = SVGProps<SVGSVGElement>

function Sparkle(props: DoodleProps) {
	return (
		<svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
			<path
				d="M14 2.8C14.6 8.4 16.7 11.2 24.4 14C17.2 15.8 14.9 18.8 14 25.2C13.1 18.9 10.8 15.8 3.6 14C10.8 11.8 13.1 8.8 14 2.8Z"
				stroke="var(--muted-foreground)"
				strokeWidth="2.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function Smiley(props: DoodleProps) {
	return (
		<svg viewBox="0 0 36 36" fill="none" aria-hidden="true" {...props}>
			<circle cx="18" cy="18" r="14" stroke="var(--muted-foreground)" strokeWidth="2.2" />
			<path
				d="M13.2 14.2h.1M22.6 14.2h.1"
				stroke="var(--muted-foreground)"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M12.8 21.2C14.6 23.3 17.2 24.2 20 24C22.2 23.8 24.1 22.9 25.3 21.3"
				stroke="var(--muted-foreground)"
				strokeWidth="2.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function FilmSmiley(props: DoodleProps) {
	return (
		<svg viewBox="0 0 91 91" fill="none" aria-hidden="true" {...props}>
			<path
				fill="currentColor"
				d="M71.9 24.8c-5.7-.5-11.6 0-17.2 1.2-3.1.6-2.2 5.1.7 5.2 5.5.4 11 .6 16.5.7 4.6 0 4.5-6.7 0-7.1ZM33.5 24.2c-5.7-.5-11.6 0-17.2 1.2-3.1.6-2.2 5.1.7 5.2 5.5.4 11 .6 16.5.7 4.6 0 4.4-6.7 0-7.1ZM62.9 48.9c-1.3 1.1-1.4 2-1.8 3.5-.3 1.5-1.1 2.8-1.9 4.1-1.7 2.7-3.9 5.1-6.6 6.9-5.3 3.5-11.7 4.1-17.8 5.1-.8.1-.8 1.3-.2 1.7 6.7 3.8 15.2 1.8 21.3-2.2 3.1-2 5.8-4.7 8-7.7 1.8-2.6 4.9-6.9 3.8-10.1-.7-2.2-3.1-2.7-4.8-1.3Z"
			/>
		</svg>
	)
}

function FlowerSmiley(props: DoodleProps) {
	return (
		<svg viewBox="0 0 91 91" fill="none" aria-hidden="true" {...props}>
			<path
				fill="currentColor"
				d="M55.4 53.6c2.1-2.1 3.2-4.8 1.7-8-2.3-4.7-10.3-5.5-13.3-1.3-.6.8.1 1.8.8 2.1 2.3.8 5.3-1 7.4.4 3.6 2.3-.8 5.2-3.2 5.9-2.7.8-1.6 4.9 1.2 4.2 3.7-.9 6.1 2.8 4.4 6-1.7 3-5.3 3.2-8 1.7-3.7-2-8.1 3.1-4.6 6 2.8 2.4 7.6 1.7 10.8.3 3.1-1.4 5.7-4 6.6-7.4.9-3.9-.8-7.9-3.8-9.9ZM33.2 20.9c-2.8 1.5-5.1 3.9-7.1 6.4-2.4-3.1-5.6-6.2-9.3-6.3-1.7 0-2.5 2.1-1.3 3.2 2.9 3 6 5.3 8.3 8.9 1.1 1.8 3.4 1.6 4.6 0 2.3-3.1 5.3-5.3 8.3-7.8 2.4-2.1-.8-5.9-3.5-4.4ZM71.9 21.7c-2.8 1.5-5.1 3.9-7.1 6.4-2.4-3.1-5.6-6.2-9.3-6.3-1.7 0-2.5 2.1-1.3 3.2 2.9 3 6 5.3 8.3 8.9 1.1 1.8 3.4 1.6 4.6 0 2.3-3.1 5.3-5.3 8.3-7.8 2.5-2.1-.7-5.9-3.5-4.4Z"
			/>
			<path
				className="fill-destructive/70"
				d="M10.4 52.1c1.4-1.4 2.8-2.7 4.2-4.1 1.4-1.4 3.4-2.7 3.4-4.8 0-1.2-1-2.2-2.2-2.2-2.3.1-3.5 2.2-4.8 3.8-1.2 1.6-2.2 3.5-3.2 5.3-.7 1.6 1.3 3.4 2.6 2ZM21.2 52.8c1.4-1.1 2.8-2.2 4.2-3.3 1.3-1.1 3.1-2.2 3.8-3.8 1-2.2-1.1-4.9-3.5-3.5-1.7.9-2.6 2.9-3.6 4.4-1 1.5-2 3.1-2.9 4.7-.9 1.2.9 2.3 2 1.5ZM65.6 52.1c1.4-1.4 2.8-2.7 4.2-4.1 1.4-1.4 3.4-2.7 3.4-4.8 0-1.2-1-2.2-2.2-2.2-2.3.1-3.5 2.2-4.8 3.8-1.2 1.6-2.2 3.5-3.2 5.3-.7 1.6 1.3 3.4 2.6 2ZM76.4 52.8c1.4-1.1 2.8-2.2 4.2-3.3 1.3-1.1 3.1-2.2 3.8-3.8 1-2.2-1.1-4.9-3.5-3.5-1.7.9-2.6 2.9-3.6 4.4-1 1.5-2 3.1-2.9 4.7-.9 1.2.9 2.3 2 1.5Z"
			/>
		</svg>
	)
}

function Heart(props: DoodleProps) {
	return (
		<svg viewBox="54 45 31 30" fill="none" aria-hidden="true" {...props}>
			<path
				// fill="currentColor"
				d="M80.3 51.8c-1.3-2.7-4.1-3.6-6.9-3.3-1.5.2-3 .8-4.2 1.8-.5.4-1 1.1-1.4 1.8-.4-.7-.9-1.5-1.6-2-1.1-.8-2.4-1.4-3.8-1.4-3.2 0-5.1 2.8-5.3 5.7-.5 6.6 4.7 12.3 10.1 15.2.9 1 2.5 1.3 3.7.1 4-4.2 12.6-11.2 9.4-17.9Zm-4.4 4.8c-1.6 3.5-5.9 6.5-8.6 9.2-1.9-2.2-3.2-4.8-4-7.6-.1-.3-.9-3.6-.5-3.8.2-.1 3 3.5 3.5 3.9.7.5 2 .5 2.7 0 1.5-.9 1.9-2.4 3-3.6 2-2.2 5.5-1.5 3.9 1.9Z"
				className="fill-destructive/70"
			/>
		</svg>
	)
}

function ArrowCurve(props: DoodleProps) {
	return (
		<svg viewBox="0 0 88 88" fill="none" aria-hidden="true" {...props}>
			<path
				d="M10 12C35 8 58 18 67 39C72 50 71 61 61 71"
				stroke="var(--muted-foreground)"
				strokeWidth="2.2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="6 7"
			/>
			<path
				d="M54 68L61 71L58 79"
				stroke="var(--muted-foreground)"
				strokeWidth="2.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function TinyJoyArrow(props: DoodleProps) {
	return (
		<svg viewBox="0 0 400 400" fill="none" aria-hidden="true" {...props}>
			<g
				stroke="var(--muted-foreground)"
				strokeOpacity="0.9"
				strokeWidth="16"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M208.966 110.117C254.405 154.438 251.905 240.684 230.919 288.101C201.051 355.593 209.978 250.359 184.602 277.117C177.704 284.391 181.81 317.719 156.516 320.269C138.085 322.126 154.096 266.606 141.635 277.117C127.283 289.224 121.293 331.099 103.61 320.269C96.98 288.749 95.654 205.826 103.61 164.619" />
				<path d="M334.001 205.901C300.792 236.16 270.173 269.031 239.891 302.247C231.256 311.719 217.546 319.675 207.086 324.435" />
				<path d="M240.001 310.082C261.705 300.029 259.1 324.324 252.155 325.999C233.056 330.607 236.719 314.627 238.123 312.595" />
				<path d="M318.739 227.487C333.322 228.815 333.932 239.822 328.721 245.562C322.396 252.532 303.881 248.558 312.768 230.427" />
				<path d="M67 154.417C74.296 151.934 94.222 144.012 102.587 140.456M102.587 140.456C132.714 127.648 168.181 109.352 197.507 96.184C186.549 83.476 160.167 66.022 132.221 75.911C98.42 87.87 101.97 124.204 102.587 140.456Z" />
				<path d="M212.18 168.071C211.362 164.294 211.429 160.869 210.359 156.308M189.816 170.532C190.383 167.512 189.063 162.444 188.656 159.594" />
			</g>
		</svg>
	)
}

function StrongDoodle(props: DoodleProps) {
	return (
		<svg viewBox="0 0 400 400" fill="none" aria-hidden="true" {...props}>
			<g
				stroke="var(--muted-foreground)"
				strokeOpacity="0.9"
				strokeWidth="16"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M163.142 89.956C176.467 72.733 193.422 60.056 216.662 65.13C282.155 79.426 269.557 180.344 204.77 184.889C152.311 188.572 132.684 99.517 175.034 87.035" />
				<path d="M150 210C152.97 237.009 155.808 260.269 158.515 279.781C161.222 299.293 163.384 320.366 165 343M248.235 216.822C245.811 230.515 239.568 259.88 234.87 286.947C229.675 316.88 226.117 344 226.117 344" />
				<path d="M149.83 208.816C142.124 209.354 74.168 225.283 71.335 225.115C70.664 225.072 70.008 225.031 69.34 224.977C68.035 224.872 65.858 224.809 64.845 224.428C62.713 223.603 60.793 222.959 59.112 221.312C58.413 220.63 60.931 202.275 68.174 172.505C74.869 144.991 85.05 120.92 87.104 119.195C89.132 117.504 103.116 106.233 103.985 106.233C105.467 106.233 106.937 106.544 108.433 106.765C110.662 107.103 116.396 111.668 117.378 112.885C119.425 115.441 117.985 118.799 114.324 124.188C110.662 129.577 102.428 129.577 99.487 132.006" />
				<path d="M250.235 211.219C265.262 211.219 336.816 239.868 338.172 241.884C339.593 244.006 341 245.917 341 248.358C341 252.658 337.853 256.598 334.121 259.782C328.918 264.216 323.011 268.174 317.383 272.315C314.063 274.752 310.732 277.2 307.411 279.637C302.181 283.479 258.811 314.848 253.101 318.249C249.094 320.64 244.989 322.987 241.308 325.643C241.233 326.191 241.087 326.742 240.876 327.285C240.397 328.489 234.561 341.928 233.647 343" />
			</g>
		</svg>
	)
}

function UnderlineScribble(props: DoodleProps) {
	return (
		<svg viewBox="0 0 86 22" fill="none" aria-hidden="true" {...props}>
			<path
				d="M5 13C14 12 23 14 32 12C42 10 51 14 61 12C68 10 74 11 81 9"
				stroke="var(--muted-foreground)"
				strokeWidth="2.4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function DoodleNote({
	children,
	className,
	size = 'default',
}: {
	children: React.ReactNode
	className?: string
	size?: 'default' | 'sm'
}) {
	return (
		<span
			aria-hidden="true"
			className={cn(
				'font-caveat pointer-events-none block select-none whitespace-nowrap font-medium leading-[0.85]',
				size === 'sm' ? 'text-[clamp(1rem,1.5vw,1.25rem)]' : 'text-[clamp(1.25rem,2.2vw,1.75rem)]',
				className
			)}
		>
			{children}
		</span>
	)
}

export {
	ArrowCurve,
	DoodleNote,
	FilmSmiley,
	FlowerSmiley,
	Heart,
	Smiley,
	Sparkle,
	StrongDoodle,
	TinyJoyArrow,
	UnderlineScribble,
}
