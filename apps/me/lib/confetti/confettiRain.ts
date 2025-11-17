'use client'

import confetti from 'canvas-confetti'

let animationId: number | null = null
let confettiInstance: ReturnType<typeof confetti.create> | null = null

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

const PALETTE = ['#ff4081', '#ff80ab', '#ffab40', '#ffd740', '#69f0ae', '#40c4ff', '#7c4dff', '#ffffff']

/**
 * Starts a "paper snow" effect with multi-colored confetti.
 * @param duration      Total duration of the effect in milliseconds (default: 50_000).
 * @param spawnChance   Probability of spawning a particle on each animation frame (0–1).
 */
export const startPaperSnow = (duration = 50_000, spawnChance = 0.25) => {
	if (typeof window === 'undefined') return

	// Prevent starting a second animation if one is already running
	if (animationId !== null) return

	// Create a shared confetti instance
	if (!confettiInstance) {
		confettiInstance = confetti.create(undefined, {
			resize: true,
			useWorker: false,
		})
	}

	const animationEnd = Date.now() + duration
	let skew = 1

	const frame = () => {
		const timeLeft = animationEnd - Date.now()

		if (timeLeft <= 0) {
			animationId = null
			return
		}

		const ticks = Math.max(100, 500 * (timeLeft / duration))
		skew = Math.max(0.8, skew - 0.001)

		if (Math.random() < spawnChance && confettiInstance) {
			const color = PALETTE[Math.floor(Math.random() * PALETTE.length)]

			confettiInstance({
				particleCount: 1,
				startVelocity: 0,
				spread: 40,
				ticks,
				origin: {
					x: Math.random(),
					y: Math.random() * skew - 0.2,
				},
				colors: [color],
				shapes: ['square'],
				gravity: randomInRange(0.4, 0.6),
				scalar: randomInRange(0.4, 1),
				drift: randomInRange(-0.4, 0.4),
			})
		}

		animationId = requestAnimationFrame(frame)
	}

	frame()
}

/**
 * Stops the current paper snow animation loop (if running).
 */
export const stopPaperSnow = () => {
	if (animationId !== null) {
		cancelAnimationFrame(animationId)
		animationId = null
	}
}
