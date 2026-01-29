import type { TEarthlyBranchIndex, TElementType, TRelativeIndex } from '@repo/stephen-v2-utils/i-ching'

type Props = {
	relative?: TRelativeIndex | TEarthlyBranchIndex | null
	size?: number // px, default 4
	title?: string
	className?: string
}

const RELATIVE_TO_ELEMENT: Record<number, TElementType | 'Unknown'> = {
	1: 'Metal', // Phụ mẫu
	2: 'Wood', // Huynh đệ
	3: 'Water', // Tử tôn
	4: 'Fire', // Thê tài
	5: 'Earth', // Quan quỷ
	'-1': 'Unknown',
}

const ELEMENT_COLOR: Record<string, string> = {
	Metal: '#A8B0B8', // Kim
	Wood: '#2F80ED', // Mộc
	Water: '#2EAD5D', // Thủy
	Fire: '#EB5757', // Hỏa
	Earth: '#C2A24A', // Thổ
	Unknown: '#D0D5DD',
}

export function ElementDotByRelative({ relative, size = 8, title, className }: Props) {
	const key = (relative ?? -1) as unknown as number
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
