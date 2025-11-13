import { cn } from '@repo/stephen-v2-utils'
import { nanoid } from 'nanoid'
import React, { useMemo } from 'react'

import { YinYang } from '../yin-yang'

interface IBagua {
	index?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
	actives?: number[]
	className?: string
	showLabel?: boolean
	yinYangClassName?: string
}

function Bagua({ index = 1, actives, className, yinYangClassName, showLabel }: IBagua) {
	const bagua: { value: (0 | 1)[]; label: string } = useMemo(() => {
		switch (index) {
			case 0 || 8:
				return { value: [0, 0, 0], label: 'Khôn' }
			case 1 || 9:
				return { value: [1, 1, 1], label: 'Càn' }
			case 2:
				return { value: [0, 1, 1], label: 'Đoài' }
			case 3:
				return { value: [1, 0, 1], label: 'Ly' }
			case 4:
				return { value: [0, 0, 1], label: 'Chấn' }
			case 5:
				return { value: [1, 1, 0], label: 'Tốn' }
			case 6:
				return { value: [0, 1, 0], label: 'Khảm' }
			case 7:
				return { value: [1, 0, 0], label: 'Cấn' }

			default:
				return { value: [1, 1, 1], label: 'Càn' }
		}
	}, [])

	return (
		<div className={cn('flex flex-col gap-2', className)}>
			{bagua.value.map((item, i) => (
				<YinYang
					className={yinYangClassName}
					type={item}
					key={nanoid()}
					activated={actives?.includes(bagua.value.length - i)}
				/>
			))}
			{showLabel && <span className="text-center text-xs">{bagua.label}</span>}
		</div>
	)
}

export { Bagua }
