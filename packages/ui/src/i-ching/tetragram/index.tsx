import { cn } from '@repo/stephen-v2-utils'
import { nanoid } from 'nanoid'
import React, { useMemo } from 'react'

import { YinYang } from '../yin-yang'

interface ITetragram {
	/**
	 * 1..4
	 * 1: ⚌  (Tai Yang)   = [1,1]
	 * 2: ⚍  (Shao Yin)   = [0,1]
	 * 3: ⚎  (Shao Yang)  = [1,0]
	 * 4: ⚏  (Tai Yin)    = [0,0]
	 */
	index?: 1 | 2 | 3 | 4

	actives?: number[]

	className?: string
	showLabel?: boolean
	yinYangClassName?: string
}

function Tetragram({ index = 1, actives, className, yinYangClassName, showLabel }: ITetragram) {
	const tetragram: { value: (0 | 1)[]; label: string; symbol: string } = useMemo(() => {
		switch (index) {
			case 1:
				return { value: [1, 1], label: 'Thái Dương', symbol: '⚌' }
			case 2:
				return { value: [0, 1], label: 'Thiếu Âm', symbol: '⚍' }
			case 3:
				return { value: [1, 0], label: 'Thiếu Dương', symbol: '⚎' }
			case 4:
				return { value: [0, 0], label: 'Thái Âm', symbol: '⚏' }
			default:
				return { value: [1, 1], label: 'Thái Dương', symbol: '⚌' }
		}
	}, [index])

	return (
		<div className={cn('flex flex-col gap-2', className)}>
			{tetragram.value.map((item, i) => (
				<YinYang
					className={yinYangClassName}
					type={item}
					key={nanoid()}
					activated={actives?.includes(tetragram.value.length - i)}
				/>
			))}

			{showLabel && <span className="text-center text-xs">{tetragram.label}</span>}
		</div>
	)
}

export { Tetragram }
