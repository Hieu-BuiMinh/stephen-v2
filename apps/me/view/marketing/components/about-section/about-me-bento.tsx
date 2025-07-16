import Image from 'next/image'

import BentoCard from '@/view/marketing/components/bento-card'
import { ImageZoom } from '@repo/stephen-v2-ui/shadcn'

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
		<BentoCard className="group overflow-hidden size-full bg-dots-sm">
			<div className="flex flex-col gap-0 justify-end text-muted-foreground group-hover:text-foreground transition-colors">
				<h2 className="mb-4 font-medium">Learn more about me</h2>
				<p className="mb-2 pr-1 text-text-secondary md:pr-4">
					{timeOfDayGreeting} <br />
					I&apos;m Stephen, <br /> a Front-End Engineer in Vietnam.
				</p>
			</div>

			<div className="absolute z-10 right-0">
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
