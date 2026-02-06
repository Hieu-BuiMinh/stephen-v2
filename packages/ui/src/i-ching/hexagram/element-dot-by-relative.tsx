import {
	converEarthlyBranchIndexToElement,
	type TEarthlyBranchIndex,
	type TElementType,
	type TRelativeIndex,
} from '@repo/stephen-v2-utils/i-ching'

type Props = {
	elementIndex?: TRelativeIndex
	earthlyBranchIndex?: TEarthlyBranchIndex
	size?: number // px, default 4
	title?: string
	className?: string
}

const RELATIVE_TO_ELEMENT: Record<number, TElementType | 'Unknown'> = {
	1: 'Water', // Phụ mẫu
	2: 'Fire', // Huynh đệ
	3: 'Wood', // Tử tôn
	4: 'Metal', // Thê tài
	5: 'Earth', // Quan quỷ
	'-1': 'Unknown',
}

const ELEMENT_COLOR: Record<string, string> = {
	Metal: '#a1a1aa', // Kim
	Wood: '#84cc16', // Mộc
	Water: '#38bdf8', // Thủy
	Fire: '#dc2626', // Hỏa
	Earth: '#eab308', // Thổ
	Unknown: '#D0D5DD',
}

export function ElementDotByRelative({ elementIndex, earthlyBranchIndex, size = 8, title, className }: Props) {
	const key = (elementIndex || converEarthlyBranchIndexToElement(earthlyBranchIndex) || -1) as unknown as number
	const element = RELATIVE_TO_ELEMENT[key] ?? 'Unknown'
	const bg = ELEMENT_COLOR[element] ?? ELEMENT_COLOR.Unknown

	return (
		<span
			title={title ?? (element === 'Unknown' ? 'Unknown' : element)}
			className={className}
			style={{
				width: size,
				height: size,
				borderRadius: 9999,
				backgroundColor: bg,
				display: 'inline-block',
				flex: '0 0 auto',
			}}
		/>
	)
}
