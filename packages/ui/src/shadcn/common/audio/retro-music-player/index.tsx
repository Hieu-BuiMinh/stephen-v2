// https://useplanes.com/components/retro-music-player

'use client'

import { cn } from '@repo/stephen-v2-utils'
import { Pause, Play, Volume, Volume1, Volume2, VolumeX } from 'lucide-react'
import Image from 'next/image'

import { useAudioPlayer } from '../../../../hooks/use-audio-player'
import { useWaveformData } from '../../../../hooks/use-waveform-data'
import { formatTime } from '../../../../lib/audiocn-mixer/time'
import { Button } from '../../../button'
import { Separator } from '../../../separator'
import {
	VolumeControl,
	VolumeControlMute,
	VolumeControlSlider,
	VolumeControlValue,
} from '../../audiocn-mixer/volume-control'
import { Waveform, WaveformCanvas, WaveformCursor, WaveformHover } from '../../audiocn-mixer/waveform'

function RetroMusicPlayer({ source, cover, className }: { source?: string; cover?: string; className?: string }) {
	const player = useAudioPlayer({ src: source, volume: 0.5 })
	const waveform = useWaveformData(source ?? null)

	return (
		<div className={cn('min-w-0 w-full', className)}>
			<div className="relative flex flex-col w-full min-w-0 border rounded-lg p-3 bg-card gap-3">
				<div className="relative flex items-center justify-center shrink-0 rounded-md overflow-hidden lg:h-[200px] lg:p-3 lg:bg-card-foreground/90 lg:dark:bg-background lg:shadow-[inset_0_8px_20px_rgba(0,0,0,0.98),inset_0_3px_8px_rgba(0,0,0,0.92),inset_4px_0_12px_rgba(0,0,0,0.75),inset_-4px_0_12px_rgba(0,0,0,0.65),inset_0_-4px_12px_rgba(0,0,0,0.6)]">
					<Image
						className="hidden lg:block size-full object-cover rounded-sm brightness-[0.84] contrast-[1.09] saturate-[1.07]"
						src={cover || '/assets/images/bg/wall-02.png'}
						width={370}
						height={370}
						alt="retro-img"
					/>
					<div
						aria-hidden="true"
						className="absolute inset-0 z-[5] hidden pointer-events-none lg:block"
						style={{
							background:
								'linear-gradient(90deg, rgba(255, 0, 60, 0.024) 0%, transparent 8%, transparent 92%, rgba(0, 180, 255, 0.024) 100%), radial-gradient(transparent 45%, rgba(0, 0, 0, 0.6) 100%), repeating-linear-gradient(rgba(0, 0, 0, 0.04) 0px, rgba(0, 0, 0, 0.04) 1px, transparent 1px, transparent 4px)',
						}}
					/>

					<div className="w-full flex items-center justify-between text-xs lg:absolute lg:z-[6] lg:bottom-0 lg:left-0 lg:p-4 lg:text-white/90 lg:font-mono lg:bg-[linear-gradient(0deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.3)_70%,transparent_100%)]">
						<button
							type="button"
							className="flex items-center gap-1.5 backdrop-blur-md p-0.5 bg-card/30 text-foreground"
						>
							<span className="relative flex size-1.5 shrink-0">
								{player.playing && (
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
								)}
								<span
									className={cn(
										'relative inline-flex size-full rounded-full',
										player.playing ? 'bg-green-500' : 'bg-red-500'
									)}
								/>
							</span>
							{player.playing ? 'Playing' : 'Paused'}
						</button>
						<div className="backdrop-blur-md p-0.5 bg-card/30 text-foreground">
							{formatTime(player.currentTime)}
						</div>
					</div>
				</div>
				<Separator />

				<Waveform
					peaks={waveform.peaks}
					duration={waveform.duration}
					loading={waveform.status === 'loading'}
					time={player.time}
					onSeekCommitted={(value) => player.seek(value)}
					aria-label="Audio waveform"
					className="h-12 min-w-0 sm:h-10"
				>
					<WaveformCanvas />
					<WaveformCursor />
					<WaveformHover />
				</Waveform>

				<Separator />

				<div
					aria-hidden="true"
					className="relative z-[1] grid grid-cols-[repeat(30,4px)] justify-center gap-[4px] overflow-hidden"
				>
					{Array.from({ length: 90 }, (_, index) => (
						<div
							key={index}
							className="aspect-square rounded-full bg-[#070707]"
							style={{
								boxShadow: '0 -0.5px 0 rgba(255, 255, 255, 0.07), 0 0 0 0.5px rgba(40, 40, 40, 0.5)',
							}}
						/>
					))}
				</div>

				<div className="flex items-center gap-2 lg:gap-5">
					<Button
						type="button"
						variant="primary-matter"
						size="icon"
						className="size-11 touch-manipulation lg:size-9"
						aria-label={player.playing ? 'Pause' : 'Play'}
						disabled={!source}
						onClick={() => player.toggle()}
					>
						{player.playing ? <Pause /> : <Play />}
					</Button>
					<VolumeControl
						curve="linear"
						className="min-w-0 flex-1 gap-0"
						value={player.volume}
						muted={player.muted}
						onValueChange={player.setVolume}
						onMutedChange={player.setMuted}
					>
						<VolumeControlMute className="group/mute size-11 touch-manipulation lg:size-7">
							<VolumeX className="hidden group-data-[level=muted]/mute:block" />
							<Volume className="hidden group-data-[level=low]/mute:block" />
							<Volume1 className="hidden group-data-[level=medium]/mute:block" />
							<Volume2 className="hidden group-data-[level=high]/mute:block" />
						</VolumeControlMute>
						<VolumeControlSlider className="min-h-11 lg:min-h-7" />
						<VolumeControlValue />
					</VolumeControl>
				</div>

				<svg
					aria-hidden="true"
					className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-5 rounded-md"
				>
					<filter id="g-_r_7e_">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.72"
							numOctaves="4"
							stitchTiles="stitch"
						></feTurbulence>
						<feColorMatrix type="saturate" values="0"></feColorMatrix>
					</filter>
					<rect width="100%" height="100%" filter="url(#g-_r_7e_)"></rect>
				</svg>
			</div>
		</div>
	)
}

export { RetroMusicPlayer }
