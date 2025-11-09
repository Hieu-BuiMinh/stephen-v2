import type { LucideIcon } from 'lucide-react'
import {
	Book,
	Clover,
	Library,
	MessageCircleHeart,
	Notebook,
	// NotebookPen,
	Pen,
	Sparkles,
	Tags,
	TextSelect,
} from 'lucide-react'

export type TNavbarItem = {
	title: string
	href: string
	description: string
	icon: LucideIcon
}
export type TNavbarItems = { [key: string]: TNavbarItem[] }

export const navbarItems: TNavbarItems = {
	// Home: [
	// 	{
	// 		title: 'Home',
	// 		href: '/',
	// 		description: 'Welcome to my corner of the internet',
	// 		icon: Library,
	// 	},
	// ],
	about: [
		{
			title: 'About',
			href: '/about',
			description: `A story of growth and discovery`,
			icon: Library,
		},
	],
	projects: [
		{
			title: 'Projects',
			href: '/projects',
			description: `Showcase of my projects that I'm proud of`,
			icon: Library,
		},
	],
	blog: [
		{
			title: 'Posts',
			href: '/topics/dev/post',
			description: 'Thoughts, mental models, and tutorials about development',
			icon: Pen,
		},
		{
			title: 'Shorts',
			href: '/topics/dev/short',
			description: `My personal notes that's not long enough to be a blog post`,
			icon: TextSelect,
		},
		{
			title: 'Documents',
			href: '/doc',
			description: 'Welcome to my corner of the internet',
			icon: Library,
		},
		{
			title: 'Books',
			href: '/topics/books',
			description: 'Some personal book recommendations',
			icon: Book,
		},
	],
	more: [
		{
			title: 'Guestbook',
			href: '/guestbook',
			description: `Leave your say—message`,
			icon: MessageCircleHeart,
		},
		{
			title: 'Other Topics',
			href: '/topics/others',
			description: `Explore articles on topics beyond development`,
			icon: Tags,
		},
		{
			title: 'Retrospective',
			href: '/retrospective',
			description: 'Reflecting on my journey',
			icon: Notebook,
		},
		{
			title: 'Overview',
			href: '/overview',
			description: `How this website came to be`,
			icon: Clover,
		},
		{
			title: 'Short Spark',
			href: '/short-sparks',
			description: `Some videos that I really enjoy`,
			icon: Sparkles,
		},
	],
}
