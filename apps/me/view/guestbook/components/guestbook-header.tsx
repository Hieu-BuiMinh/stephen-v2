import { CircularText } from '@repo/stephen-v2-ui/motion'
import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import React from 'react'

function GuestbookHeader() {
	return (
		<>
			<div className="flex items-center justify-center relative">
				<BlurImage
					src="/assets/images/bg/guestbook-bg-cloud-light.png"
					width={1400}
					height={900}
					alt="A headshot"
					className="w-full h-[270px] rounded-md"
				/>
				<div className="absolute shadow-md traslate-y-1/2 -bottom-[75px] right-3 flex items-center justify-center rounded-full bg-black">
					<CircularText
						text="STEPHEN-BLOG * GUESTBOOK * "
						onHover="speedUp"
						spinDuration={20}
						className="size-[150px] text-base text-white"
					/>
				</div>

				<div className="absolute flex flex-col gap-3 items-center text-black text-2xl font-black font-serif">
					<span>Every message is a memory</span>
					<span>Reading this made me think about you ❤️</span>
				</div>
			</div>
		</>
	)
}

export default GuestbookHeader
