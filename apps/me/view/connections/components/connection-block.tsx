import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { cn, formatDate } from '@repo/stephen-v2-utils'
import Link from 'next/link'
import type { ReactNode } from 'react'

import type { Connection } from '@/view/connections/constants/connections'
function ConnectionBlock({ data }: { data: Connection }) {
	return (
		<div className="flex flex-col gap-2">
			<RenderLink
				data={data}
				className={cn(
					'group bento-shadow relative border size-28 m-auto rounded-lg p-1 overflow-hidden',
					data?.connectedDate && 'drop-shadow-2xl'
				)}
			>
				<BlurImage
					src={data.profile_picture}
					className={cn(
						'group-hover:scale-[1.1] transition-all duration-500 size-full rounded-sm object-cover'
					)}
					width={150}
					height={150}
					alt="my-connection"
					unoptimized={false}
				/>
				{data.connectedDate && (
					<div className="absolute w-[calc(100%+20px)] h-4 -bottom-px line-clamp-1 rounded-xs bg-background/50 backdrop-blur-sm text-xs text-center left-1/2 -translate-x-1/2">
						{formatDate(data.connectedDate, 'Do MMM YYYY')}
					</div>
				)}
			</RenderLink>
			<div
				className={cn(
					'w-full border line-clamp-1 rounded-sm bg-transparent text-xs text-center p-1',
					data?.connectedDate &&
						'bg-linear-to-b from-white/10 to-white/20 to-70% shadow-md ring inset-shadow-2xs ring-background/20 inset-shadow-foreground/10'
				)}
			>
				{data.name}
			</div>
		</div>
	)
}

export default ConnectionBlock

const RenderLink = ({ children, data, className }: { children: ReactNode; data: Connection; className?: string }) => {
	if (data?.socialLink) {
		return (
			<Link href={data.socialLink} className={className} target="_blank">
				{children}
			</Link>
		)
	}
	return <div className={className}>{children}</div>
}
