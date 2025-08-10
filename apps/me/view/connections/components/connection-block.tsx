import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'

// import * as dayjs from 'dayjs'
import type { Connection } from '@/view/connections/constants/connections'
function ConnectionBlock({ data }: { data: Connection }) {
	return (
		<div className="flex flex-col gap-2">
			<div className="group bento-shadow relative border size-28 m-auto rounded-lg p-1 overflow-hidden">
				<BlurImage
					src={data.profile_picture}
					className={cn(
						'group-hover:scale-[1.1] transition-all duration-500 size-full rounded-sm object-cover',
						!data?.connectedDate && 'grayscale-100'
					)}
					width={150}
					height={150}
					alt="my-connection"
					unoptimized={false}
				/>
				{data.connectedDate && (
					<div className="absolute w-full h-4 bottom-1 border line-clamp-1 rounded-xs bg-background/50 backdrop-blur-sm text-xs text-center left-1/2 -translate-x-1/2">
						{/* {dayjs(data.connectedDate).format('MM/DD/YYYY')} */}
					</div>
				)}
			</div>
			<div className="w-full border line-clamp-1 rounded-xs bg-background/50 backdrop-blur-sm text-xs text-center p-1">
				{data.name}
			</div>
		</div>
	)
}

export default ConnectionBlock
