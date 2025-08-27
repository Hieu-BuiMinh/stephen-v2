'use client'

import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { ChevronLeft, House } from 'lucide-react'
import { useRouter } from 'next/navigation'

import LightRaysClient from '@/components/effects/light-rays-client'
import MainLayout from '@/components/layouts/main-layout'
import { RetroGrid } from '@/components/retro-grid'

export default function NotFound() {
	const router = useRouter()

	const handleRedirect = (type: 'BACK' | 'HOME') => {
		if (type === 'BACK') router.back()
		else router.push('/')
	}

	return (
		<MainLayout>
			<div className="w-full h-screen flex items-center justify-center">
				{/* <Noise
					patternSize={200}
					patternScaleX={1}
					patternScaleY={1}
					patternRefreshInterval={3}
					patternAlpha={20}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full hidden dark:block"
				/> */}

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

					<AnimatedBlock
						type="FADE_IN"
						delay={0.4}
						className="flex items-center justify-center w-full gap-3 flex-col mt-10 md:flex-row sm:mt-0"
					>
						<Button
							onClick={() => handleRedirect('BACK')}
							variant="primary-matter"
							className="w-full sm:flex-1"
						>
							<ChevronLeft /> Back
						</Button>

						<Button
							onClick={() => handleRedirect('HOME')}
							variant="secondary-matter"
							className="w-full sm:flex-1"
						>
							<House /> Home
						</Button>
					</AnimatedBlock>
				</div>

				<RetroGrid lightLineColor="#333333" />
			</div>
		</MainLayout>
	)
}
