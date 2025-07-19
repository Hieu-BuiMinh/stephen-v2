import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@repo/stephen-v2-ui/shadcn'
import { memo } from 'react'

import { softwareData } from '@/constants/bento/techs-stack'
import BentoCard from '@/view/marketing/components/bento-card'

interface ITechStackBento {
	linkTo?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = softwareData
	.map((item, index) => (
		<div key={item.title} className="group inline-block text-center">
			<div
				className={`rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 ${
					index === 2
						? 'delay-0 group-hover:-translate-y-3'
						: index === 1 || index === 3
							? 'delay-100 group-hover:-translate-y-3'
							: 'delay-200 group-hover:-translate-y-3'
				}`}
				style={{
					width: index === 2 ? 130 : 110,
					height: index === 2 ? 130 : 110,
				}}
			>
				<div
					className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
					style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
				>
					<img className="h-10 w-10" alt={item.title} src={item.imgSrc} />
				</div>
			</div>
		</div>
	))
	.slice(0, 5)

function TechStackBento({ linkTo }: ITechStackBento) {
	return (
		<BentoCard linkTo={linkTo} className="size-full overflow-hidden border-none p-0">
			<div className="flex flex-col gap-5 size-full items-center justify-center bg-background">
				<Marquee>
					<MarqueeFade side="left" />
					<MarqueeFade side="right" />
					<MarqueeContent direction="right">
						{new Array(1).fill(null).map((_, index) => (
							<MarqueeItem className="size-12" key={index}>
								<img
									alt={`Placeholder ${index}`}
									className="overflow-hidden rounded-full"
									src={`https://placehold.co/64x64?random=${index}`}
								/>
							</MarqueeItem>
						))}
					</MarqueeContent>
				</Marquee>
				<Marquee>
					<MarqueeFade side="left" />
					<MarqueeFade side="right" />
					<MarqueeContent direction="left">
						{new Array(10).fill(null).map((_, index) => (
							<MarqueeItem className="size-12" key={index}>
								<img
									alt={`Placeholder ${index}`}
									className="overflow-hidden rounded-full"
									src={`https://placehold.co/64x64?random=${index}`}
								/>
							</MarqueeItem>
						))}
					</MarqueeContent>
				</Marquee>
			</div>
		</BentoCard>
	)
}

export default memo(TechStackBento)
