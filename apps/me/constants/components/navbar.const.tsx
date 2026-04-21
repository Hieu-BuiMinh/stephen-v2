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
	Pin,
	Sparkles,
	Tags,
} from 'lucide-react'

export type TNavbarItem = {
	title: string
	href: string
	description: string
	icon: LucideIcon
	featured?: boolean
	image?: string
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
		// {
		// 	title: 'Guestbook',
		// 	href: '/guestbook',
		// 	description: `Leave your say—message`,
		// 	icon: MessageCircleHeart,
		// },
		{
			title: 'Testimonial',
			href: '/testimonial',
			description: `Some words from people I've worked with`,
			icon: Pin,
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
			description: 'Looking back on my journey',
			icon: Notebook,
			featured: true,
			image: '/assets/images/bg/intro-retro-card.png',
		},
		{
			title: 'Year Recap',
			href: '/year-recap',
			description: 'A personal recap of the past year',
			icon: Pencil,
			featured: true,
			image: '/assets/images/bg/year-recap.png',
		},
		{
			title: 'Short Spark',
			href: '/short-sparks',
			description: `Some videos that I really enjoy`,
			icon: Sparkles,
		},
		{
			title: 'Overview',
			href: '/overview',
			description: `How this website came to be`,
			icon: Clover,
		},
	],
}
