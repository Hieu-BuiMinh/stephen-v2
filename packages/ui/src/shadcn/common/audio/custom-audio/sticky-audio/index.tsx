/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { cn } from '@repo/stephen-v2-utils'
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Label } from '../../../../label'
import { Switch } from '../../../../switch'
import {
	AudioPlayerButton,
	AudioPlayerDuration,
	AudioPlayerProgress,
	AudioPlayerProvider,
	AudioPlayerTime,
	useAudioPlayer,
} from '../../elevent-labs/audio-player/player'
import { Orb } from '../../elevent-labs/orb'
import { Waveform } from '../../elevent-labs/waveform'

const globalAudioState = {
	isPlaying: false,
	volume: 0.5,
	isDark: false,
}

const SPRING_LAYOUT = {
	type: 'spring',
	stiffness: 160,
	damping: 22,
	mass: 1.15,
}

const FADE = {
	duration: 0.2,
	ease: [0.16, 1, 0.3, 1],
} as const

const PlayButton = memo(({ className }: { className?: string }) => {
	const player = useAudioPlayer()

	return (
		<AudioPlayerButton<{ name: string }>
			variant="outline"
			size="icon"
			item={
				player.activeItem
					? {
							id: player?.activeItem?.id,
							src: player?.activeItem?.src || '',
						}
					: undefined
			}
			className={cn(
				'border-none transition-all duration-300',
				player.isPlaying
					? 'bg-foreground/10 hover:bg-foreground/15 border-foreground/30 dark:bg-primary/20 dark:hover:bg-primary/30 dark:border-primary/50'
					: 'bg-background hover:bg-muted',
				className
			)}
		/>
	)
})

PlayButton.displayName = 'PlayButton'

const TimeDisplay = memo(() => {
	return (
		<div className="flex flex-1 items-center gap-2">
			{/* <AudioPlayerTime className="text-xs" /> */}
			<AudioPlayerProgress className="flex-1" />
			{/* <AudioPlayerDuration className="text-xs" /> */}
		</div>
	)
})

TimeDisplay.displayName = 'TimeDisplay'

const SpeakerContextBridge = ({
	className,
	audioTrack,
}: {
	className?: string
	audioTrack: { id: string; name: string; url: string; artist: string }
}) => {
	const player = useAudioPlayer()
	const playerRefStatic = useRef(player)

	playerRefStatic.current = player

	return useMemo(
		() => <SpeakerControls audioTrack={audioTrack} className={className} playerRef={playerRefStatic} />,
		[className]
	)
}

const SpeakerOrb = memo(
	({
		seed,
		side,
		isDark,
		audioDataRef,
	}: {
		seed: number
		side: 'left' | 'right'
		isDark: boolean
		audioDataRef: React.RefObject<number[]>
	}) => {
		const player = useAudioPlayer()
		const getInputVolume = useCallback(() => {
			const audioData = audioDataRef?.current || []
			if (!globalAudioState.isPlaying || globalAudioState.volume === 0 || audioData.length === 0) return 0
			const lowFreqEnd = Math.floor(audioData.length * 0.25)
			let sum = 0
			for (let i = 0; i < lowFreqEnd; i++) {
				sum += audioData[i] || 0
			}
			const avgLow = sum / lowFreqEnd
			const amplified = Math.pow(avgLow, 0.5) * 3.5
			return Math.max(0.2, Math.min(1.0, amplified))
		}, [audioDataRef])

		const getOutputVolume = useCallback(() => {
			const audioData = audioDataRef?.current || []
			if (!globalAudioState.isPlaying || globalAudioState.volume === 0 || audioData.length === 0) return 0
			const midStart = Math.floor(audioData.length * 0.25)
			const midEnd = Math.floor(audioData.length * 0.5)
			let sum = 0
			for (let i = midStart; i < midEnd; i++) {
				sum += audioData[i] || 0
			}
			const avgMid = sum / (midEnd - midStart)
			const modifier = side === 'left' ? 0.9 : 1.1
			const amplified = Math.pow(avgMid, 0.5) * 4.0
			return Math.max(0.25, Math.min(1.0, amplified * modifier))
		}, [side, audioDataRef])

		const colors: [string, string] = useMemo(
			() => (isDark ? ['#CADCFC', '#A0B9D1'] : ['#F4F4F4', '#E0E0E0']),
			// () => (isDark ? ['#a5f3fc', '#cffafe'] : ['#67e8f9', '#a5f3fc']),
			[isDark]
		)

		return (
			<Orb
				colors={colors}
				seed={seed}
				volumeMode="auto"
				getInputVolume={getInputVolume}
				getOutputVolume={getOutputVolume}
				agentState={player?.isPlaying ? 'talking' : null}
			/>
		)
	},
	(prevProps, nextProps) => {
		return (
			prevProps.isDark === nextProps.isDark &&
			prevProps.seed === nextProps.seed &&
			prevProps.side === nextProps.side
		)
	}
)

SpeakerOrb.displayName = 'SpeakerOrb'

const SpeakerOrbsSection = memo(
	({
		isDark,
		audioDataRef,
		className,
	}: {
		isDark: boolean
		audioDataRef: React.RefObject<number[]>
		className?: string
	}) => {
		return (
			<div className={cn('relative aspect-square size-16 group/Orb', className)}>
				<PlayButton className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/audio:opacity-100" />
				<div className="bg-muted relative h-full w-full rounded-full p-1 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
					<div className="bg-background h-full w-full overflow-hidden rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]">
						<SpeakerOrb
							key={`right-${isDark}`}
							seed={100}
							side="right"
							isDark={isDark}
							audioDataRef={audioDataRef}
						/>
					</div>
				</div>
			</div>
		)
	}
	// ,(prevProps, nextProps) => {
	// 	return prevProps.isDark === nextProps.isDark
	// }
)

SpeakerOrbsSection.displayName = 'SpeakerOrbsSection'

const VolumeSlider = memo(
	({ volume, setVolume }: { volume: number; setVolume: (value: number | ((prev: number) => number)) => void }) => {
		const [isDragging, setIsDragging] = useState(false)

		const getVolumeIcon = () => {
			if (volume === 0) return VolumeX
			if (volume <= 0.33) return Volume
			if (volume <= 0.66) return Volume1
			return Volume2
		}

		const VolumeIcon = getVolumeIcon()

		return (
			<div className="flex items-center gap-2">
				<button
					onClick={() => setVolume((prev: number) => (prev > 0 ? 0 : 0.5))}
					className="text-muted-foreground hover:text-foreground transition-colors"
				>
					<VolumeIcon className={cn('h-4 w-4 transition-all', volume === 0 && 'text-muted-foreground/50')} />
				</button>
				<div
					className="volume-slider bg-foreground/10 group relative h-1 w-20 md:w-32 cursor-pointer rounded-full"
					onClick={(e) => {
						if (isDragging) return
						const rect = e.currentTarget.getBoundingClientRect()
						const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
						setVolume(x)
					}}
					onMouseDown={(e) => {
						e.preventDefault()
						setIsDragging(true)
						const sliderRect = e.currentTarget.getBoundingClientRect()

						// Set initial volume immediately
						const initialX = Math.max(0, Math.min(1, (e.clientX - sliderRect.left) / sliderRect.width))
						setVolume(initialX)

						const handleMove = (e: MouseEvent) => {
							const x = Math.max(0, Math.min(1, (e.clientX - sliderRect.left) / sliderRect.width))
							setVolume(x)
						}
						const handleUp = () => {
							setIsDragging(false)
							document.removeEventListener('mousemove', handleMove)
							document.removeEventListener('mouseup', handleUp)
						}
						document.addEventListener('mousemove', handleMove)
						document.addEventListener('mouseup', handleUp)
					}}
				>
					<div
						className={cn(
							'bg-primary absolute top-0 left-0 h-full rounded-full',
							!isDragging && 'transition-all duration-150'
						)}
						style={{ width: `${volume * 100}%` }}
					/>
				</div>
			</div>
		)
	}
)

VolumeSlider.displayName = 'VolumeSlider'

function SpeakerControls({
	className,
	playerRef,
	audioTrack,
}: {
	className?: string
	playerRef: React.RefObject<ReturnType<typeof useAudioPlayer>>
	audioTrack: { id: string; name: string; url: string; artist: string }
}) {
	const playerApiRef = playerRef
	const isPlayingRef = useRef(false)
	const isHoveredRef = useRef(false)
	const closeTimerRef = useRef<number | null>(null)

	const [volume, setVolume] = useState(0.5)
	const [expanded, setExpanded] = useState(true)
	const [pinned, setPinned] = useState(true)

	const audioDataRef = useRef<number[]>([])
	const [isDark, setIsDark] = useState(false)
	const [isScrubbing, setIsScrubbing] = useState(false)
	const [isMomentumActive, setIsMomentumActive] = useState(false)
	const [precomputedWaveform, setPrecomputedWaveform] = useState<number[]>([])
	const waveformOffset = useRef(0)
	const waveformElementRef = useRef<HTMLDivElement>(null)
	const containerWidthRef = useRef(300)
	const analyserRef = useRef<AnalyserNode | null>(null)
	const audioContextRef = useRef<AudioContext | null>(null)
	const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
	const audioBufferRef = useRef<AudioBuffer | null>(null)
	const scratchBufferRef = useRef<AudioBufferSourceNode | null>(null)
	const totalBarsRef = useRef(600)
	const convolverRef = useRef<ConvolverNode | null>(null)
	const delayRef = useRef<DelayNode | null>(null)
	const feedbackRef = useRef<GainNode | null>(null)
	const wetGainRef = useRef<GainNode | null>(null)
	const dryGainRef = useRef<GainNode | null>(null)
	const masterGainRef = useRef<GainNode | null>(null)
	const lowPassFilterRef = useRef<BiquadFilterNode | null>(null)
	const highPassFilterRef = useRef<BiquadFilterNode | null>(null)

	useEffect(() => {
		const checkTheme = () => {
			const isDarkMode = document.documentElement.classList.contains('dark')
			setIsDark(isDarkMode)
		}

		checkTheme()

		const observer = new MutationObserver(checkTheme)
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		})

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		const container = document.querySelector('.waveform-container')
		if (container) {
			const rect = container.getBoundingClientRect()
			containerWidthRef.current = rect.width
			waveformOffset.current = rect.width
			if (waveformElementRef.current) {
				waveformElementRef.current.style.transform = `translateX(${rect.width}px)`
			}
		}
	}, [])

	useEffect(() => {
		if (precomputedWaveform.length > 0 && containerWidthRef.current > 0) {
			waveformOffset.current = containerWidthRef.current
			if (waveformElementRef.current) {
				waveformElementRef.current.style.transform = `translateX(${containerWidthRef.current}px)`
			}
			if (playerApiRef.current.ref.current) {
				playerApiRef.current.ref.current.currentTime = 0
			}
		}
	}, [precomputedWaveform])

	const precomputeWaveform = useCallback(async (audioUrl: string) => {
		try {
			const response = await fetch(audioUrl)
			const arrayBuffer = await response.arrayBuffer()

			const offlineContext = new OfflineAudioContext(1, 44100 * 5, 44100)
			const audioBuffer = await offlineContext.decodeAudioData(arrayBuffer.slice(0))

			if (!audioContextRef.current) {
				const audioContext = new (window.AudioContext ||
					(window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
				audioContextRef.current = audioContext
			}

			audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer)

			const channelData = audioBuffer.getChannelData(0)
			const samplesPerBar = Math.floor(channelData.length / totalBarsRef.current)
			const waveformData: number[] = []

			for (let i = 0; i < totalBarsRef.current; i++) {
				const start = i * samplesPerBar
				const end = start + samplesPerBar
				let sum = 0
				let count = 0

				for (let j = start; j < end && j < channelData.length; j += 100) {
					sum += Math.abs(channelData[j] || 0)
					count++
				}

				const average = count > 0 ? sum / count : 0
				waveformData.push(Math.min(1, average * 3))
			}

			setPrecomputedWaveform(waveformData)
		} catch (error) {
			console.error('Error precomputing waveform:', error)
		}
	}, [])

	useEffect(() => {
		const track = {
			id: audioTrack.id,
			src: audioTrack.url,
			data: {
				name: audioTrack.name,
			},
		}
		playerApiRef.current.setActiveItem(track)
		precomputeWaveform(track.src)
	}, [precomputeWaveform])

	const createImpulseResponse = (audioContext: AudioContext, duration: number, decay: number) => {
		const sampleRate = audioContext.sampleRate
		const length = sampleRate * duration
		const impulse = audioContext.createBuffer(2, length, sampleRate)

		for (let channel = 0; channel < 2; channel++) {
			const channelData = impulse.getChannelData(channel)
			for (let i = 0; i < length; i++) {
				const envelope = Math.pow(1 - i / length, decay)
				const earlyReflections = i < length * 0.1 ? Math.random() * 0.5 : 0
				const diffusion = (Math.random() * 2 - 1) * envelope
				const stereoWidth = channel === 0 ? 0.9 : 1.1

				channelData[i] = (diffusion + earlyReflections) * stereoWidth * 0.8
			}
		}
		return impulse
	}

	const setupAudioContext = useCallback((ambience: boolean) => {
		if (!playerApiRef.current.ref.current) {
			return
		}

		if (audioContextRef.current && sourceRef.current && wetGainRef.current && dryGainRef.current) {
			return
		}

		try {
			let audioContext = audioContextRef.current
			let source = sourceRef.current
			let analyser = analyserRef.current

			if (!audioContext) {
				audioContext = new (window.AudioContext ||
					(window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
				audioContextRef.current = audioContext
			}

			if (audioContext.state === 'suspended') {
				audioContext.resume()
			}

			if (!source) {
				source = audioContext.createMediaElementSource(playerApiRef.current.ref.current)
				sourceRef.current = source
			}

			if (!analyser) {
				analyser = audioContext.createAnalyser()
				analyser.fftSize = 512
				analyser.smoothingTimeConstant = 0.7
				analyserRef.current = analyser
			}

			const convolver = audioContext.createConvolver()
			convolver.buffer = createImpulseResponse(audioContext, 6, 1.5)

			const delay = audioContext.createDelay(2)
			delay.delayTime.value = 0.001

			const feedback = audioContext.createGain()
			feedback.gain.value = 0.05

			const lowPassFilter = audioContext.createBiquadFilter()
			lowPassFilter.type = 'lowpass'
			lowPassFilter.frequency.value = 1500
			lowPassFilter.Q.value = 0.5

			const highPassFilter = audioContext.createBiquadFilter()
			highPassFilter.type = 'highpass'
			highPassFilter.frequency.value = 100
			highPassFilter.Q.value = 0.7

			const wetGain = audioContext.createGain()
			wetGain.gain.value = ambience ? 0.85 : 0

			const dryGain = audioContext.createGain()
			dryGain.gain.value = ambience ? 0.4 : 1

			const masterGain = audioContext.createGain()
			masterGain.gain.value = 1

			const compressor = audioContext.createDynamicsCompressor()
			compressor.threshold.value = -12
			compressor.knee.value = 2
			compressor.ratio.value = 8
			compressor.attack.value = 0.003
			compressor.release.value = 0.1

			try {
				source.disconnect()
				if (analyserRef.current) analyserRef.current.disconnect()
			} catch (e) {}

			source.connect(dryGain)
			dryGain.connect(masterGain)

			source.connect(highPassFilter)
			highPassFilter.connect(convolver)
			convolver.connect(delay)

			delay.connect(feedback)
			feedback.connect(lowPassFilter)
			lowPassFilter.connect(delay)

			delay.connect(wetGain)
			wetGain.connect(masterGain)

			masterGain.connect(compressor)
			compressor.connect(analyser)
			analyser.connect(audioContext.destination)

			convolverRef.current = convolver
			delayRef.current = delay
			feedbackRef.current = feedback
			wetGainRef.current = wetGain
			dryGainRef.current = dryGain
			masterGainRef.current = masterGain
			lowPassFilterRef.current = lowPassFilter
			highPassFilterRef.current = highPassFilter
		} catch (error) {
			console.error('Error setting up audio context:', error)
		}
	}, [])

	useEffect(() => {
		const handlePlay = () => {
			isPlayingRef.current = true
			globalAudioState.isPlaying = true
		}
		const handlePause = () => {
			isPlayingRef.current = false
			globalAudioState.isPlaying = false
		}

		const checkInterval = setInterval(() => {
			const audioEl = playerApiRef.current.ref.current
			if (audioEl) {
				clearInterval(checkInterval)

				audioEl.addEventListener('play', handlePlay)
				audioEl.addEventListener('pause', handlePause)
				audioEl.addEventListener('ended', handlePause)

				if (!audioEl.paused) {
					handlePlay()
				}
			}
		}, 100)

		return () => {
			clearInterval(checkInterval)
			const audioEl = playerApiRef.current.ref.current
			if (audioEl) {
				audioEl.removeEventListener('play', handlePlay)
				audioEl.removeEventListener('pause', handlePause)
				audioEl.removeEventListener('ended', handlePause)
			}
		}
	}, [setupAudioContext])

	useEffect(() => {
		globalAudioState.isDark = isDark
	}, [isDark])

	useEffect(() => {
		if (playerApiRef.current.ref.current) {
			playerApiRef.current.ref.current.volume = volume
		}
		globalAudioState.volume = volume
	}, [volume])

	useEffect(() => {
		if (!isScrubbing && !isMomentumActive && playerApiRef.current.ref.current) {
			let animationId: number

			const updatePosition = () => {
				const audioEl = playerApiRef.current.ref.current
				if (audioEl && !isScrubbing && !isMomentumActive && waveformElementRef.current) {
					const duration = audioEl.duration
					const currentTime = audioEl.currentTime
					if (!isNaN(duration) && duration > 0) {
						const position = currentTime / duration
						const containerWidth = containerWidthRef.current
						const totalWidth = totalBarsRef.current * 5
						const newOffset = containerWidth - position * totalWidth
						waveformOffset.current = newOffset
						waveformElementRef.current.style.transform = `translateX(${newOffset}px)`
					}
				}
				animationId = requestAnimationFrame(updatePosition)
			}

			animationId = requestAnimationFrame(updatePosition)
			return () => cancelAnimationFrame(animationId)
		}
	}, [isScrubbing, isMomentumActive])

	useEffect(() => {
		let animationId: number

		const updateWaveform = () => {
			if (analyserRef.current && isPlayingRef.current) {
				const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
				analyserRef.current.getByteFrequencyData(dataArray)

				const normalizedData = Array.from(dataArray).map((value) => {
					const normalized = value / 255
					return normalized
				})

				audioDataRef.current = normalizedData
			} else if (!isPlayingRef.current && audioDataRef.current.length > 0) {
				audioDataRef.current = audioDataRef.current.map((v) => v * 0.9)
			}

			animationId = requestAnimationFrame(updateWaveform)
		}

		animationId = requestAnimationFrame(updateWaveform)

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId)
			}
		}
	}, [])

	const playScratchSound = (position: number, speed: number = 1) => {
		if (!audioContextRef.current) {
			const audioContext = new (window.AudioContext ||
				(window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
			audioContextRef.current = audioContext
		}

		if (audioContextRef.current.state === 'suspended') {
			audioContextRef.current.resume()
		}

		if (!audioBufferRef.current) {
			return
		}

		stopScratchSound()

		try {
			const source = audioContextRef.current.createBufferSource()
			source.buffer = audioBufferRef.current

			const startTime = Math.max(
				0,
				Math.min(audioBufferRef.current.duration - 0.1, position * audioBufferRef.current.duration)
			)

			const filter = audioContextRef.current.createBiquadFilter()
			filter.type = 'lowpass'
			filter.frequency.value = Math.max(800, 2500 - speed * 1500)
			filter.Q.value = 3

			source.playbackRate.value = Math.max(0.4, Math.min(2.5, 1 + speed * 0.5))

			const gainNode = audioContextRef.current.createGain()
			gainNode.gain.value = 1.0

			source.connect(filter)
			filter.connect(gainNode)
			gainNode.connect(audioContextRef.current.destination)

			source.start(0, startTime, 0.06)

			scratchBufferRef.current = source
		} catch (error) {
			console.error('Error playing scratch sound:', error)
		}
	}

	const stopScratchSound = () => {
		if (scratchBufferRef.current) {
			try {
				scratchBufferRef.current.stop()
			} catch {}
			scratchBufferRef.current = null
		}
	}

	const currentTrack = audioTrack

	const open = useCallback(() => {
		if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
		setExpanded(true)
	}, [])

	const close = useCallback(() => {
		if (pinned) return // <-- 핵심: pin thì không đóng
		if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
		closeTimerRef.current = window.setTimeout(() => setExpanded(false), 120)
	}, [pinned])

	const onEnter = useCallback(() => {
		isHoveredRef.current = true
		open()
	}, [open])

	const onLeave = useCallback(() => {
		isHoveredRef.current = false
		close()
	}, [close])

	useEffect(() => {
		return () => {
			if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
		}
	}, [])

	return (
		<>
			<div className={cn('relative min-h-[150px] flex space-y-6 group/audio', className)}>
				<motion.div
					layout
					transition={SPRING_LAYOUT}
					onPointerEnter={onEnter}
					onPointerLeave={onLeave}
					className={cn(
						'p-4 noisy backdrop-blur-lg overflow-hidden rounded-lg bg-black/5 dark:bg-black/50',
						expanded ? 'w-full h-[150px]' : 'size-[80px]',
						!expanded && 'flex items-center justify-center'
					)}
				>
					<div className="space-y-2">
						<div className="flex gap-3 items-center justify-start">
							<motion.div
								initial={{ x: 0, y: 0 }}
								layout
								transition={SPRING_LAYOUT}
								className={cn(
									'absolute shrink-0 will-change-transform',
									!expanded && 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
									expanded && 'top-2 left-2'
								)}
							>
								<SpeakerOrbsSection isDark={isDark} audioDataRef={audioDataRef} />
							</motion.div>
							{expanded && <span className="size-14"></span>}
							<AnimatePresence initial={false}>
								{expanded && (
									<motion.div
										key="meta"
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0 }}
										transition={FADE}
										className="min-w-0 flex-1"
									>
										<div className="flex items-center justify-between">
											<div className="flex flex-col">
												<h3 className="text-foreground truncate text-sm font-medium">
													{currentTrack?.name}
												</h3>
												<span className="text-muted-foreground truncate text-xs">
													{currentTrack?.artist}
												</span>
											</div>

											<div className="flex items-center space-x-2">
												<Switch
													checked={pinned}
													onCheckedChange={(checked) => {
														setPinned(checked)
														if (checked) {
															open()
														} else {
															if (!isHoveredRef.current) close()
														}
													}}
													id="pinned-audio"
												/>
												<Label htmlFor="pinned-audio">Pin</Label>
											</div>
										</div>
										<div className="flex gap-3">
											<TimeDisplay />
											<VolumeSlider volume={volume} setVolume={setVolume} />
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<AnimatePresence initial={false}>
							{expanded && (
								<motion.div
									key="wave"
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={FADE}
									className="flex items-center gap-3"
								>
									<div
										className="waveform-container border flex-1 bg-foreground/10 relative h-12 cursor-grab overflow-hidden rounded-lg p-2 active:cursor-grabbing dark:bg-black/10"
										onTouchStart={(e) => {
											e.preventDefault()
											setIsScrubbing(true)

											const wasPlaying = isPlayingRef.current

											if (isPlayingRef.current) {
												playerApiRef.current.pause()
											}

											const rect = e.currentTarget.getBoundingClientRect()
											const startX = e.touches[0] ? e.touches[0].clientX : 0
											const containerWidth = rect.width
											containerWidthRef.current = containerWidth
											const totalWidth = totalBarsRef.current * 5
											const currentOffset = waveformOffset.current
											let lastTouchX = startX
											let lastScratchTime = 0
											const scratchThrottle = 10

											let velocity = 0
											let lastTime = Date.now()
											let lastClientX = e.touches[0] ? e.touches[0].clientX : 0

											const handleMove = (e: TouchEvent) => {
												const touch = e.touches[0]
												const deltaX = touch ? touch.clientX - startX : 0
												const newOffset = currentOffset + deltaX

												const minOffset = containerWidth - totalWidth
												const maxOffset = containerWidth
												const clampedOffset = Math.max(
													minOffset,
													Math.min(maxOffset, newOffset)
												)
												waveformOffset.current = clampedOffset
												if (waveformElementRef.current) {
													waveformElementRef.current.style.transform = `translateX(${clampedOffset}px)`
												}

												const position = Math.max(
													0,
													Math.min(1, (containerWidth - clampedOffset) / totalWidth)
												)

												const audioEl = playerApiRef.current.ref.current
												if (audioEl && !isNaN(audioEl.duration)) {
													audioEl.currentTime = position * audioEl.duration
												}

												const now = Date.now()
												const touchDelta = touch ? touch.clientX - lastTouchX : 0

												const timeDelta = now - lastTime
												if (timeDelta > 0) {
													const instantVelocity =
														(touch ? touch.clientX : 0 - lastClientX) / timeDelta
													velocity = velocity * 0.6 + instantVelocity * 0.4
												}
												lastTime = now
												lastClientX = touch ? touch.clientX : 0

												if (Math.abs(touchDelta) > 0) {
													if (now - lastScratchTime >= scratchThrottle) {
														const speed = Math.min(3, Math.abs(touchDelta) / 3)
														playScratchSound(position, speed)
														lastScratchTime = now
													}
												}
												lastTouchX = touch ? touch.clientX : 0
											}

											const handleEnd = () => {
												setIsScrubbing(false)
												stopScratchSound()

												if (Math.abs(velocity) > 0.1) {
													setIsMomentumActive(true)
													let momentumOffset = waveformOffset.current
													let currentVelocity = velocity * 15
													const friction = 0.92
													const minVelocity = 0.5
													let lastScratchFrame = 0
													const scratchFrameInterval = 50

													const animateMomentum = () => {
														if (Math.abs(currentVelocity) > minVelocity) {
															momentumOffset += currentVelocity
															currentVelocity *= friction

															const minOffset = containerWidth - totalWidth
															const maxOffset = containerWidth
															const clampedOffset = Math.max(
																minOffset,
																Math.min(maxOffset, momentumOffset)
															)

															if (clampedOffset !== momentumOffset) {
																currentVelocity = 0
															}

															momentumOffset = clampedOffset
															waveformOffset.current = clampedOffset
															if (waveformElementRef.current) {
																waveformElementRef.current.style.transform = `translateX(${clampedOffset}px)`
															}

															const position = Math.max(
																0,
																Math.min(
																	1,
																	(containerWidth - clampedOffset) / totalWidth
																)
															)

															const audioEl2 = playerApiRef.current.ref.current
															if (audioEl2 && !isNaN(audioEl2.duration)) {
																audioEl2.currentTime = position * audioEl2.duration
															}

															const now = Date.now()
															if (now - lastScratchFrame >= scratchFrameInterval) {
																const speed = Math.min(
																	2.5,
																	Math.abs(currentVelocity) / 10
																)
																if (speed > 0.1) {
																	playScratchSound(position, speed)
																}
																lastScratchFrame = now
															}

															requestAnimationFrame(animateMomentum)
														} else {
															stopScratchSound()
															setIsMomentumActive(false)
															if (wasPlaying) {
																setTimeout(() => {
																	playerApiRef.current.play()
																}, 10)
															}
														}
													}

													requestAnimationFrame(animateMomentum)
												} else {
													if (wasPlaying) {
														playerApiRef.current.play()
													}
												}

												document.removeEventListener('touchmove', handleMove)
												document.removeEventListener('touchend', handleEnd)
											}

											document.addEventListener('touchmove', handleMove)
											document.addEventListener('touchend', handleEnd)
										}}
										onMouseDown={(e) => {
											e.preventDefault()
											setIsScrubbing(true)

											const wasPlaying = isPlayingRef.current

											if (isPlayingRef.current) {
												playerApiRef.current.pause()
											}

											const rect = e.currentTarget.getBoundingClientRect()
											const startX = e.clientX
											const containerWidth = rect.width
											containerWidthRef.current = containerWidth
											const totalWidth = totalBarsRef.current * 5
											const currentOffset = waveformOffset.current
											let lastMouseX = startX
											let lastScratchTime = 0
											const scratchThrottle = 10

											let velocity = 0
											let lastTime = Date.now()
											let lastClientX = e.clientX

											const handleMove = (e: MouseEvent) => {
												const deltaX = e.clientX - startX
												const newOffset = currentOffset + deltaX

												const minOffset = containerWidth - totalWidth
												const maxOffset = containerWidth
												const clampedOffset = Math.max(
													minOffset,
													Math.min(maxOffset, newOffset)
												)
												waveformOffset.current = clampedOffset
												if (waveformElementRef.current) {
													waveformElementRef.current.style.transform = `translateX(${clampedOffset}px)`
												}

												const position = Math.max(
													0,
													Math.min(1, (containerWidth - clampedOffset) / totalWidth)
												)

												const audioEl = playerApiRef.current.ref.current
												if (audioEl && !isNaN(audioEl.duration)) {
													audioEl.currentTime = position * audioEl.duration
												}

												const now = Date.now()
												const mouseDelta = e.clientX - lastMouseX

												const timeDelta = now - lastTime
												if (timeDelta > 0) {
													const instantVelocity = (e.clientX - lastClientX) / timeDelta
													velocity = velocity * 0.6 + instantVelocity * 0.4
												}
												lastTime = now
												lastClientX = e.clientX

												if (Math.abs(mouseDelta) > 0) {
													if (now - lastScratchTime >= scratchThrottle) {
														const speed = Math.min(3, Math.abs(mouseDelta) / 3)
														playScratchSound(position, speed)
														lastScratchTime = now
													}
												}
												lastMouseX = e.clientX
											}

											const handleUp = () => {
												setIsScrubbing(false)
												stopScratchSound()

												if (Math.abs(velocity) > 0.1) {
													setIsMomentumActive(true)
													let momentumOffset = waveformOffset.current
													let currentVelocity = velocity * 15
													const friction = 0.92
													const minVelocity = 0.5
													let lastScratchFrame = 0
													const scratchFrameInterval = 50

													const animateMomentum = () => {
														if (Math.abs(currentVelocity) > minVelocity) {
															momentumOffset += currentVelocity
															currentVelocity *= friction

															const minOffset = containerWidth - totalWidth
															const maxOffset = containerWidth
															const clampedOffset = Math.max(
																minOffset,
																Math.min(maxOffset, momentumOffset)
															)

															if (clampedOffset !== momentumOffset) {
																currentVelocity = 0
															}

															momentumOffset = clampedOffset
															waveformOffset.current = clampedOffset
															if (waveformElementRef.current) {
																waveformElementRef.current.style.transform = `translateX(${clampedOffset}px)`
															}

															const position = Math.max(
																0,
																Math.min(
																	1,
																	(containerWidth - clampedOffset) / totalWidth
																)
															)

															const audioEl2 = playerApiRef.current.ref.current
															if (audioEl2 && !isNaN(audioEl2.duration)) {
																audioEl2.currentTime = position * audioEl2.duration
															}

															const now = Date.now()
															if (now - lastScratchFrame >= scratchFrameInterval) {
																const speed = Math.min(
																	2.5,
																	Math.abs(currentVelocity) / 10
																)
																if (speed > 0.1) {
																	playScratchSound(position, speed)
																}
																lastScratchFrame = now
															}

															requestAnimationFrame(animateMomentum)
														} else {
															stopScratchSound()
															setIsMomentumActive(false)
															if (wasPlaying) {
																setTimeout(() => {
																	playerApiRef.current.play()
																}, 10)
															}
														}
													}

													requestAnimationFrame(animateMomentum)
												} else {
													if (wasPlaying) {
														playerApiRef.current.play()
													}
												}

												document.removeEventListener('mousemove', handleMove)
												document.removeEventListener('mouseup', handleUp)
											}

											document.addEventListener('mousemove', handleMove)
											document.addEventListener('mouseup', handleUp)
										}}
									>
										<div className="relative h-full w-full overflow-">
											<div
												ref={waveformElementRef}
												style={{
													transform: `translateX(${waveformOffset.current}px)`,
													transition:
														isScrubbing || isMomentumActive
															? 'none'
															: 'transform 0.016s linear',
													width: `${totalBarsRef.current * 5}px`,
													position: 'absolute',
													right: 0,
												}}
											>
												<Waveform
													key={isDark ? 'dark' : 'light'}
													data={
														precomputedWaveform.length > 0
															? precomputedWaveform
															: audioDataRef.current
													}
													height={32}
													barWidth={3}
													barGap={2}
													fadeEdges={true}
													fadeWidth={24}
													barRadius={10}
													barColor={isDark ? '#a1a1aa' : '#71717a'}
												/>
											</div>
										</div>
									</div>
									<div className="">
										<AudioPlayerTime className="text-xs" />
										<span> / </span>
										<AudioPlayerDuration className="text-xs" />
									</div>
								</motion.div>
							)}
						</AnimatePresence>

						{/* <div className="flex items-center gap-3">
							<TimeDisplay />
						</div> */}
					</div>
				</motion.div>
			</div>
		</>
	)
}

function StickyAudio({
	className,
	audioTrack,
}: {
	className?: string
	audioTrack: { id: string; name: string; url: string; artist: string }
}) {
	return (
		<AudioPlayerProvider>
			<SpeakerContextBridge className={className} audioTrack={audioTrack} />
		</AudioPlayerProvider>
	)
}

export { StickyAudio }
