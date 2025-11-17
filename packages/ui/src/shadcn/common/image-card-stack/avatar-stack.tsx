/**
 * image-card-stack
 * Copyright (c) github.com/kianbazza: https://github.com/mirayatech
 * Source:
 *  - https://github.com/mirayatech/image-card-stack
 *
 * Modified by: Stephen
 */
import Image from 'next/image'

import { CardStack } from './core/card-stack'

interface StackableItem {
	id: number | string
	[key: string]: unknown
}

interface ImageCard extends StackableItem {
	img: string
	name?: string
	date?: string
}

export function AvatarCardStack() {
	const items: ImageCard[] = [
		{ id: 1, img: '/assets/images/avt/me_01.png', name: 'Vung Tau', date: '07/30/2024' },
		{ id: 2, img: '/assets/images/avt/me_02.png', name: 'Vung Tau', date: '07/30/2024' },
		{ id: 3, img: '/assets/images/avt/me_03.png', name: 'Ben Tre', date: '04/28/2024' },
		{ id: 5, img: '/assets/images/avt/me_05.png', name: 'Binh Hung Island', date: '05/18/2025' },
		{ id: 6, img: '/assets/images/avt/me_06.png', name: 'Binh Hung Island', date: '05/18/2025' },
		{ id: 7, img: '/assets/images/avt/me_07.png', name: 'Binh Hung Island', date: '05/18/2025' },
		{ id: 8, img: '/assets/images/avt/me_08.png', name: 'Binh Hung Island', date: '05/18/2025' },
		{ id: 9, img: '/assets/images/avt/me_09.png', name: 'Binh Hung Island', date: '05/18/2025' },
		{ id: 4, img: '/assets/images/avt/me_04.png', name: 'Home Land', date: '09/02/2025' },
	]

	return (
		<CardStack items={items} containerClassName="size-[300px]">
			{(card) => (
				<div className="flex flex-col gap-3 justify-between pointer-events-none p-2 h-[270px] bg-white shadow-lg rounded-sm border dark:border-none">
					<div className="flex items-center justify-center w-full h-[200px] overflow-hidden rounded-sm">
						<Image src={card.img as string} alt="card" className="object-cover" width={800} height={800} />
					</div>
					<div className="flex flex-col">
						{card.name && <span className="text-neutral-900/70">{card.name}</span>}
						{card.date && <span className="text-neutral-900/70">{card.date}</span>}
					</div>
				</div>
			)}
		</CardStack>
	)
}
