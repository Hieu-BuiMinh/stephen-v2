import type { LucideIcon } from 'lucide-react'
import {
	Book,
	Bookmark,
	Clover,
	Library,
	MessageCircleHeart,
	Notebook,
	// NotebookPen,
	Pen,
	Pencil,
	Sparkles,
	Tags,
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
			href: '/topics/dev',
			description: 'Thoughts, mental models, and tutorials about development',
			icon: Pen,
		},
		{
			title: 'Tags',
			href: '/tags',
			description: `Find your favorite topics here`,
			icon: Bookmark,
		},
		{
			title: 'Documents',
			href: '/document',
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
			title: 'Year Recap',
			href: '/year-recap',
			description: 'A personal recap of the past year',
			icon: Pencil,
		},
		{
			title: 'Short Spark',
			href: '/short-sparks',
			description: `Some videos that I really enjoy`,
			icon: Sparkles,
		},
	],
}
