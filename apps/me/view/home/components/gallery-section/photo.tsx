'use client'

import { BlurImage } from '@repo/stephen-v2-ui/shadcn'
import { cn, getRandomNumberInRange } from '@repo/stephen-v2-utils'
import type { Direction } from 'motion/react'
import { motion, useMotionValue } from 'motion/react'
import type { ImageProps } from 'next/image'
import type { MouseEventHandler, Ref } from 'react'
import { forwardRef, useEffect, useState } from 'react'

const MotionImage = motion.create(
	forwardRef(function MotionImage(props: ImageProps, ref: Ref<HTMLImageElement>) {
		return <BlurImage ref={ref} {...props} unoptimized={false} />
	})
)

export const Photo = ({
	src,
	alt,
	className,
	direction,
	width,
	height,
	onMouseMove,
	...props
}: {
	src: string
	alt: string
	className?: string
	direction: Direction
	width: number
	height: number
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onMouseMove?: (even: any) => void
}) => {
	const [rotation, setRotation] = useState<number>(0)
	const x = useMotionValue(200)
	const y = useMotionValue(200)

	useEffect(() => {
		const randomRotation = getRandomNumberInRange(1, 4) * (direction === 'start' ? -1 : 1)
		setRotation(randomRotation)
	}, [])

	const handleMouse: MouseEventHandler<HTMLDivElement> = (event) => {
		const rect = event.currentTarget.getBoundingClientRect()
		x.set(event.clientX - rect.left)
		y.set(event.clientY - rect.top)
	}

	const resetMouse = () => {
		x.set(200)
		y.set(200)
	}

	return (
		<motion.div
			drag
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
			whileTap={{ scale: 1.2, zIndex: 50 }}
			whileHover={{
				scale: 1.1,
				rotateZ: 2 * (direction === 'start' ? -1 : 1),
				zIndex: 50,
			}}
			whileDrag={{
				scale: 1.1,
				zIndex: 50,
			}}
			initial={{ rotate: 0 }}
			animate={{ rotate: rotation }}
			style={{
				width,
				height,
				perspective: 400,
				transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
				zIndex: 1,
				WebkitTouchCallout: 'none',
				WebkitUserSelect: 'none',
				userSelect: 'none',
				touchAction: 'none',
			}}
			className={cn(className, 'relative mx-auto shrink-0 cursor-grab active:cursor-grabbing')}
			onMouseMove={handleMouse}
			onMouseLeave={resetMouse}
			draggable={false}
			tabIndex={0}
		>
			<div
				onMouseMove={onMouseMove}
				className="relative h-full w-full overflow-hidden rounded-lg shadow-sm shadow-slate-900/30"
			>
				<MotionImage
					className={cn('rounded-lg object-cover size-full')}
					fill
					src={src}
					alt={alt}
					{...props}
					draggable={false}
					sizes="228px"
				/>
			</div>
		</motion.div>
	)
}
