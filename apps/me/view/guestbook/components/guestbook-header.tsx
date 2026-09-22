import { CircularText } from '@repo/stephen-v2-ui/motion'
import { BlurImage } from '@repo/stephen-v2-ui/shadcn'

function GuestbookHeader() {
	return (
		<header className="pb-9 md:pb-10">
			<h1 className="sr-only">Guestbook</h1>
			<div className="relative flex items-center justify-center">
				<BlurImage
					src="/assets/images/bg/guestbook-bg-cloud-light.png"
					width={1400}
					height={900}
					alt="Guestbook cloud cover"
					className="h-[370px] w-full rounded-md"
				/>
				<div className="absolute -bottom-[75px] right-3 flex items-center justify-center rounded-full bg-black shadow-md">
					<CircularText
						text="STEPHEN-BLOG * GUESTBOOK * "
						onHover="speedUp"
						spinDuration={20}
						className="size-[150px] text-base text-white"
					/>
				</div>
				<div className="absolute flex flex-col items-center gap-3 px-4 text-center font-caveat text-4xl font-black text-black">
					<span>Every message is a memory</span>
					<span>Reading this made me think about you ❤️</span>
				</div>
			</div>
		</header>
	)
}

export default GuestbookHeader
