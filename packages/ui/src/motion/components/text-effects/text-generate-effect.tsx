'use client'

import { cn } from '@repo/stephen-v2-utils'
import { motion, stagger, useAnimate } from 'motion/react'
import * as React from 'react'

type TextGenerateEffectProps = Omit<React.ComponentProps<'div'>, 'children'> & {
	words: string
	filter?: boolean
	duration?: number
	staggerDelay?: number
}

function TextGenerateEffect({
	ref,
	words,
	className,
	filter = true,
	duration = 0.5,
	staggerDelay = 0.2,
	...props
}: TextGenerateEffectProps) {
	const localRef = React.useRef<HTMLDivElement>(null)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	React.useImperativeHandle(ref as any, () => localRef.current as HTMLDivElement)

	const [scope, animate] = useAnimate()
	const wordsArray = React.useMemo(() => words.split(' '), [words])

	React.useEffect(() => {
		if (scope.current) {
			animate(
				'span',
				{
					opacity: 1,
					filter: filter ? 'blur(0px)' : 'none',
				},
				{
					duration,
					delay: stagger(staggerDelay),
				}
			)
		}
	}, [animate, duration, filter, scope, staggerDelay])

	return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		<div className={cn('font-bold', className)} data-slot="text-generate-effect" ref={localRef} {...(props as any)}>
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => (
					<motion.span
						className="opacity-0 will-change-transform will-change-opacity will-change-filter"
						key={`${word}-${idx}`}
						style={{
							filter: filter ? 'blur(10px)' : 'none',
						}}
					>
						{word}{' '}
					</motion.span>
				))}
			</motion.div>
		</div>
	)
}

export { TextGenerateEffect, type TextGenerateEffectProps }
export default TextGenerateEffect
