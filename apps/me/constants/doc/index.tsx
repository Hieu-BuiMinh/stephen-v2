import { SVGIcons } from '@/components/icons/svg-icons'
import { iChingCollection } from '@/constants/doc/i-ching'
import type { IDocCollection } from '@/types/doc/doc-collection'

export const docCollections: IDocCollection[] = [
	{
		icon: <SVGIcons.Clerk className="size-32 opacity-10 group-hover:opacity-50 transition-all duration-500" />,
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		description:
			'Minus iste aliquam ipsa minima fuga fugit qui eligendi officiis hic, distinctio ducimus. In commodi ad, quos, rerum officia aliquam eveniet cum quasi voluptas repellendus quibusdam praesentium veniam, minus sed impedit totam placeat? Dignissimos architecto recusandae fuga molestiae minima quis voluptas sint',
		collectionName: 'i-ching',
		collections: iChingCollection,
		status: 'published',
	},
	{
		icon: <SVGIcons.Clerk className="size-32 opacity-10 group-hover:opacity-50 transition-all duration-500" />,
		title: 'Buddhism ipsum dolor sit amet consectetur adipisicing elit 2',
		description:
			'Minus iste aliquam ipsa minima fuga fugit qui eligendi officiis hic, distinctio ducimus. In commodi ad, quos, rerum officia aliquam eveniet cum quasi voluptas repellendus quibusdam praesentium veniam, minus sed impedit totam placeat? Dignissimos architecto recusandae fuga molestiae minima quis voluptas sint',
		collectionName: 'buddhism',
		collections: [],
		status: 'draft',
	},
]
