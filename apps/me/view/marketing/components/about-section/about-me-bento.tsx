import { ImageZoom } from '@repo/stephen-v2-ui/shadcn'

import BentoCard from '@/view/marketing/components/bento-card'

export const getTimeOfDayGreeting = () => {
	const now = new Date()
	const hours = now.getHours()

	if (hours < 12) {
		return 'Good morning!'
	} else if (hours < 17) {
		return 'Good afternoon!'
	} else {
		return 'Good evening!'
	}
}

export function AboutMeBento({ linkTo }: { linkTo?: string }) {
	const timeOfDayGreeting = getTimeOfDayGreeting()

	return (
		<BentoCard className="group overflow-hidden size-full bg-dots-sm h-[260px] sm:h-full">
			<div className="hidden flex-col gap-0 justify-end text-foreground transition-colors sm:flex z-20">
				<h2 className="mb-4 font-medium text-base md:text-2xl backdrop-blur-md px-2">Learn more about me</h2>
				<p className="mb-2 pr-1 text-text-secondary md:pr-4 px-2">
					{timeOfDayGreeting} <br />
					I&apos;m Stephen, <br /> a Front-End Engineer in Vietnam.
				</p>
			</div>

			<div className="absolute z-10 max-sm:right-0 max-sm:-translate-x-1/2 sm:right-0">
				<div className="relative">
					<div className="text-center">
						<div
							className="rounded-[20px] border p-2 transition-all duration-500 ease-out group-hover:border-foreground"
							style={{ width: 188, height: 278 }}
						>
							<div
								className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-dashed"
								style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
							/>
						</div>
					</div>
					<ImageZoom
						className="absolute -top-1 left-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105 cursor-pointer"
						src="/assets/images/avt/me_09.png"
						alt="A headshot"
						width={180}
						height={270}
						unoptimized={false}
					/>
				</div>
			</div>
		</BentoCard>
	)
}
