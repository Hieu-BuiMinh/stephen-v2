'use client'

import type { TPost } from '@repo/stephen-v2-contents'
import { AnimatedBlock } from '@repo/stephen-v2-ui/motion'
import { Book } from '@repo/stephen-v2-ui/shadcn'
import { useIsMobile } from '@repo/stephen-v2-utils/hooks'
import { CircleQuestionMarkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface BookCardProps {
	post: TPost & { bookCover: string }
}

export const BookCard = ({ post }: BookCardProps) => {
	const [loaded, setLoaded] = useState<boolean>(false)
	const isMobile = useIsMobile()
	const { theme } = useTheme()
	const { collection } = useParams<{ collection: string }>()

	const pathName = usePathname()
	const articles = pathName.split('/')
	const { title, description, bookCover, id } = post

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded) {
		return null
	}

	return (
		<AnimatedBlock as="div" type="FADE_IN_FROM_BOTTOM" className="flex">
			<Link href={`/${articles[1]}/${collection}/${id}`} className="m-auto flex">
				<Book
					width={isMobile ? 150 : 190}
					title={title}
					textColor="#fff"
					color={theme === 'dark' ? '#1e2939' : '#4a5565'}
					icon={<span className="text-xs line-clamp-2">{description}</span>}
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
