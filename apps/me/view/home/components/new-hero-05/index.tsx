'use client'

import { Button, toast } from '@repo/stephen-v2-ui/shadcn'
import confetti from 'canvas-confetti'
import { Loader, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { APP_CONFIG } from '@/configs/app-config'
import SocialContact from '@/view/home/components/new-hero-05/social-contact'

function HeroSection05() {
	const [loading, setLoading] = useState(false)

	const explodeConfetti = () => {
		const duration = 3 * 1000
		const animationEnd = Date.now() + duration
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

		function randomInRange(min: number, max: number) {
			return Math.random() * (max - min) + min
		}

		const interval = setInterval(() => {
			const timeLeft = animationEnd - Date.now()

			if (timeLeft <= 0) {
				clearInterval(interval)
				return
			}

			const particleCount = 50 * (timeLeft / duration)
			confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
			confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
		}, 250)
	}

	const handleDownloadResume = () => {
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
		<div className="flex flex-col gap-3 sm:pb-[150px]">
			<div className="relative">
				<Image
					src="/assets/images/bg/wall-02.png"
					alt="background illustration"
					width={1800}
					height={1800}
					className="h-[650px] w-full object-cover"
				/>
				<div className="absolute -bottom-[150px] left-0 h-[300px] px-[50px] w-full flex items-end justify-between">
					<div className="flex gap-2">
						<div className="relative z-10 flex items-center justify-center p-1 border bg-background rounded-md size-[300px]">
							<Image
								src="/assets/images/avt/me_12.png"
								width={300}
								height={300}
								alt="logo"
								className="size-full object-cover rounded-sm"
							/>
						</div>

						<div className="items-end gap-3 hidden sm:flex">
							<div className="flex flex-col">
								<div className="text-xl font-bold flex items-center gap-1">
									<span>{APP_CONFIG.author.name}</span>
									<svg
										viewBox="0 0 24 24"
										className="size-4.5 sm:size-5 shrink-0 select-none"
										fill="none"
										aria-label="Verified Profile"
									>
										<path
											d="M 9.72 3.5 Q 12 1, 14.28 3.5 Q 17.5 2.47, 18.22 5.78 Q 21.53 6.5, 20.5 9.72 Q 23 12, 20.5 14.28 Q 21.53 17.5, 18.22 18.22 Q 17.5 21.53, 14.28 20.5 Q 12 23, 9.72 20.5 Q 6.5 21.53, 5.78 18.22 Q 2.47 17.5, 3.5 14.28 Q 1 12, 3.5 9.72 Q 2.47 6.5, 5.78 5.78 Q 6.5 2.47, 9.72 3.5 Z"
											fill="#1d9bf0"
										></path>
										<polyline
											points="8 12 10.8 14.8 16 9.5"
											fill="none"
											stroke="#ffffff"
											strokeWidth="2.3"
											strokeLinecap="round"
											strokeLinejoin="round"
										></polyline>
									</svg>
								</div>
								<div className="text-sm text-muted-foreground">{APP_CONFIG.title}</div>
								<div className="text-sm text-muted-foreground flex gap-1">
									<span>{APP_CONFIG.location}</span>
									<MapPin size={16} />
								</div>

								<SocialContact />
							</div>
						</div>
					</div>

					<div className="hidden gap-2 sm:flex">
						<a href="/assets/files/pdf/[Junior-Frontend]_[BuiMinhHieu]_[2025].pdf" download>
							<Button variant="primary-matter" onClick={handleDownloadResume} disabled={loading}>
								Resume
								{loading && <Loader size={20} className="animate-spin" />}
							</Button>
						</a>
						<Button variant="secondary-matter">More</Button>
					</div>
				</div>
			</div>
			<div className="items-end gap-3 px-[50px] pt-[145px] flex sm:hidden">
				<div className="flex flex-col">
					<div className="text-xl font-bold flex items-center gap-1">
						<span>{APP_CONFIG.author.name}</span>
						<svg
							viewBox="0 0 24 24"
							className="size-4.5 sm:size-5 shrink-0 select-none"
							fill="none"
							aria-label="Verified Profile"
						>
							<path
								d="M 9.72 3.5 Q 12 1, 14.28 3.5 Q 17.5 2.47, 18.22 5.78 Q 21.53 6.5, 20.5 9.72 Q 23 12, 20.5 14.28 Q 21.53 17.5, 18.22 18.22 Q 17.5 21.53, 14.28 20.5 Q 12 23, 9.72 20.5 Q 6.5 21.53, 5.78 18.22 Q 2.47 17.5, 3.5 14.28 Q 1 12, 3.5 9.72 Q 2.47 6.5, 5.78 5.78 Q 6.5 2.47, 9.72 3.5 Z"
								fill="#1d9bf0"
							></path>
							<polyline
								points="8 12 10.8 14.8 16 9.5"
								fill="none"
								stroke="#ffffff"
								strokeWidth="2.3"
								strokeLinecap="round"
								strokeLinejoin="round"
							></polyline>
						</svg>
					</div>
					<div className="text-sm text-muted-foreground">{APP_CONFIG.title}</div>
					<div className="text-sm text-muted-foreground flex gap-1">
						<span>{APP_CONFIG.location}</span>
						<MapPin size={16} />
					</div>
					<div className="flex gap-2 pt-3">
						<a href="/assets/files/pdf/[Junior-Frontend]_[BuiMinhHieu]_[2025].pdf" download>
							<Button variant="primary-matter" onClick={handleDownloadResume} disabled={loading}>
								Resume
								{loading && <Loader size={20} className="animate-spin" />}
							</Button>
						</a>
						<Button variant="secondary-matter">More</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection05
