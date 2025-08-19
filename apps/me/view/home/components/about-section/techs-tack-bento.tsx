import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@repo/stephen-v2-ui/shadcn'
import Link from 'next/link'
import { memo } from 'react'

import { softwareData } from '@/constants/bento/techs-stack'

interface ITechStackBento {
	linkTo?: string
}

const items = softwareData.map((item) => {
	return (
		<div key={item.title} className="size-7 flex items-center justify-center md:size-10">
			<item.icon />
		</div>
	)
})
// .slice(0, 5)

function TechStackBento({ linkTo }: ITechStackBento) {
	return (
		<Link href={linkTo || '/'} className="size-full overflow-hidden border-none p-0 rounded-none">
			<div className="flex flex-col gap-5 size-full items-center justify-center bg-background">
				<Marquee>
					<MarqueeFade side="left" />
					<MarqueeFade side="right" />
					<MarqueeContent direction="right">
						{/* {new Array(1).fill(null).map((_, index) => (
							<MarqueeItem className="size-12" key={index}>
								<img
									alt={`Placeholder ${index}`}
									className="overflow-hidden rounded-full"
									src={`https://placehold.co/64x64?random=${index}`}
								/>
							</MarqueeItem>
						))} */}
						{items.map((item, index) => (
							<MarqueeItem className="size-12" key={index}>
								{item}
							</MarqueeItem>
						))}
					</MarqueeContent>
				</Marquee>
				<Marquee>
					<MarqueeFade side="left" />
					<MarqueeFade side="right" />
					<MarqueeContent direction="left">
						{/* {new Array(10).fill(null).map((_, index) => (
							<MarqueeItem className="size-12" key={index}>
								<img
									alt={`Placeholder ${index}`}
									className="overflow-hidden rounded-full"
									src={`https://placehold.co/64x64?random=${index}`}
								/>
							</MarqueeItem>
						))} */}
						{items.map((item, index) => (
							<MarqueeItem className="size-12" key={index}>
								{item}
							</MarqueeItem>
						))}
					</MarqueeContent>
				</Marquee>
			</div>
		</Link>
	)
}

export default memo(TechStackBento)
