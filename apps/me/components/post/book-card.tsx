'use client'

import type { TPost } from '@repo/stephen-v2-contents'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { BookV2 } from '@repo/stephen-v2-ui/shadcn'
import { useIsMobile } from '@repo/stephen-v2-utils/hooks'
import { CircleQuestionMarkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState, useMemo } from 'react'

const BOOK_COLORS = [
	{ spineColor: '#1e2939', textColor: '#f8fafc' }, // Dark slate & light gray
	{ spineColor: '#fcd34d', textColor: '#111827' }, // Mustard & dark slate
	{ spineColor: '#5c2b29', textColor: '#fef3c7' }, // Rust & cream
	{ spineColor: '#f0fdf4', textColor: '#14532d' }, // Light mint & dark green
	{ spineColor: '#1e3a2b', textColor: '#e2e8f0' }, // Forest green & light gray
	{ spineColor: '#ffedd5', textColor: '#451a03' }, // Peach & dark brown
	{ spineColor: '#4A6189', textColor: '#f1f5f9' }, // Muted blue & off-white
	{ spineColor: '#fef08a', textColor: '#713f12' }, // Pale yellow & dark olive
	{ spineColor: '#581c87', textColor: '#f3e8ff' }, // Dark purple & light purple
	{ spineColor: '#e0e7ff', textColor: '#312e81' }, // Light indigo & dark indigo
]
interface BookCardProps {
	post: TPost & { bookCover: string }
	url?: string
}

export const BookCard = ({ post, url }: BookCardProps) => {
	const [loaded, setLoaded] = useState<boolean>(false)
	const isMobile = useIsMobile()
	const { theme } = useTheme()

	const { title, description, bookCover } = post

	const { spineColor, textColor } = useMemo(() => {
		const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
		return BOOK_COLORS[hash % BOOK_COLORS.length]
	}, [title])

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded) {
		return null
	}

	return (
		<AnimatedBlock as="div" type="FADE_IN_FROM_BOTTOM" className="flex">
			<Link href={url || '#'} className="m-auto flex">
				<BookV2
					width={isMobile ? 150 : 190}
					title={title}
					textColor={textColor}
					spineColor={spineColor}
					coverColor={spineColor}
					variant={bookCover ? 'stripe' : 'simple'}
					illustration={
						bookCover ? (
							<Image
								src={bookCover}
								className="size-full object-cover"
								width={220}
								height={150}
								alt={description || ''}
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						) : (
							<CircleQuestionMarkIcon size={24} />
						)
					}
				/>
			</Link>
		</AnimatedBlock>
	)
}
