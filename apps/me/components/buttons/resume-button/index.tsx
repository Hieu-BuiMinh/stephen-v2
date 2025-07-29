'use client'

import { RainbowButton, toast } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import confetti from 'canvas-confetti'
import { ArrowDownToLine, Loader } from 'lucide-react'
import { useState } from 'react'

interface IDownLoadResumeButton {
	innerText?: string
	className?: string
}

function DownLoadResumeButton({ innerText, className }: Readonly<IDownLoadResumeButton>) {
	const [loading, setLoading] = useState(false)

	const explodeConfetti = () => {
		const duration = 3 * 1000
		const animationEnd = Date.now() + duration
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

		function randomInRange(min: number, max: number) {
			return Math.random() * (max - min) + min
		}

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const interval: any = setInterval(function () {
			const timeLeft = animationEnd - Date.now()

			if (timeLeft <= 0) {
				return clearInterval(interval)
			}

			const particleCount = 50 * (timeLeft / duration)
			// since particles fall down, start a bit higher than random
			confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
			confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
		}, 250)
	}

	const handleloading = () => {
		setLoading(true)
		explodeConfetti()
		setTimeout(() => {
			setLoading(false)
			toast.success('Thanks for downloading 🔥', {
				duration: 3500,
			})
		}, 3000)
	}

	return (
		<a
			href="/assets/files/pdf/[Junior-Frontend]_[BuiMinhHieu]_[2025].pdf"
			className={cn('relative', className)}
			download
		>
			{/* <Button
				onClick={handleloading}
				disabled={loading}
				className="z-10 bg-background max-md:w-full"
				variant="secondary"
			>
				{innerText ?? 'know more about me!'}
				{loading ? (
					<Loader size={20} className="animate-spin" />
				) : (
					<ArrowDownToLine size={20} className="hidden animate-bounce md:block" />
				)}
			</Button> */}
			{/* <GlowEffect
				colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
				mode="colorShift"
				className="-z-10"
				blur="soft"
				duration={3}
				scale={1}
			/> */}

			<RainbowButton
				onClick={handleloading}
				disabled={loading}
				variant="outline"
				className="rounded-lg max-md:w-full"
			>
				{innerText ?? 'know more about me!'}
				{loading ? (
					<Loader size={20} className="animate-spin" />
				) : (
					<ArrowDownToLine size={20} className="hidden animate-bounce md:block" />
				)}
			</RainbowButton>
		</a>
	)
}

export default DownLoadResumeButton
