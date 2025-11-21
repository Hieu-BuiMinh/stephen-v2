'use client'

import Link from 'next/link'

import { SOCIAL_LINKS } from '@/configs/app-config'

export function Socials({ className }: { className?: string }) {
	return (
		<div className={`flex gap-3 ${className || ''}`}>
			{SOCIAL_LINKS.map((social) => (
				<Link
					href={social.href}
					key={social.label}
					target="_blank"
					className="h-8 w-8 relative group grid place-items-center hover:text-fd-foreground"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						className="absolute -top-[0.5px] -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"
					>
						<path d="M21 8V5a2 2 0 0 0-2-2h-3" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="absolute -bottom-[0.5px] -left-0.25 duration-300 group-hover:translate-y-0.5 group-hover:-translate-x-0.5 z-10 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"
					>
						<path d="M3 16v3a2 2 0 0 0 2 2h3" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="absolute -bottom-[0.5px] -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"
					>
						<path d="M16 21h3a2 2 0 0 0 2-2v-3" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="absolute -top-[0.5px] -left-0.25 z-10 duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"
					>
						<path d="M8 3H5a2 2 0 0 0-2 2v3" />
					</svg>
					<div className="bg-grid-lines absolute inset-0 ease-out duration-300 group-hover:opacity-50 opacity-0 ![background-position:-15px_-15px]" />
					<social.icon className="w-4 h-4 fill-current transform-3d perspective-distant backface-hidden group-hover:rotate-x-180 group-hover:rotate-z-180 group-hover:-rotate-y-180 duration-1000" />
				</Link>
			))}
		</div>
	)
}
