import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { cn } from '@repo/stephen-v2-utils'

import LightRaysClient from '@/components/effects/light-rays-client'
import MainLayout from '@/components/layouts/main-layout'
import { RetroGrid } from '@/components/retro-grid'

export default function NotFound() {
	return (
		<MainLayout>
			<div className="w-full h-screen flex items-center justify-center">
				<LightRaysClient />

				<div className="capitalize text-center flex items-center justify-center flex-col gap-5 text-5xl sm:text-6xl lg:text-8xl font-black z-10">
					<AnimatedBlock
						type="FADE_IN"
						className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-background lg:leading-[8rem]"
					>
						Oops
					</AnimatedBlock>
					<AnimatedBlock
						type="FADE_IN"
						delay={0.2}
						className={cn(
							'bg-clip-text text-transparent bg-gradient-to-b from-foreground to-background lg:leading-[8rem]'
						)}
					>
						Page not found
					</AnimatedBlock>
				</div>

				<RetroGrid lightLineColor="#333333" />
			</div>
		</MainLayout>
	)
}
