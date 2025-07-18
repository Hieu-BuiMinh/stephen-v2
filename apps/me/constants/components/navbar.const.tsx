import type { LucideIcon } from 'lucide-react'
import { Clover, Library, MessageCircleHeart, Notebook, NotebookPen, Pen, Sparkles, Tags } from 'lucide-react'

export type TNavbarItem = {
	title: string
	href: string
	description: string
	icon: LucideIcon
}
export type TNavbarItems = { [key: string]: TNavbarItem[] }

export const navbarItems: TNavbarItems = {
	Home: [
		{
			title: 'Home',
			href: '/',
			description: 'Welcome to my corner of the internet',
			icon: Library,
		},
	],
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
			title: 'Documents',
			href: '/docs',
			description: 'Welcome to my corner of the internet',
			icon: Library,
		},
		{
			title: 'Posts',
			href: '/posts',
			description: 'Thoughts, mental models, and tutorials about front-end development',
			icon: Pen,
		},
		{
			title: 'Notes',
			href: '/notes',
			description: `My personal notes that's not long enough to be a blog post`,
			icon: NotebookPen,
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
			href: '/other-topics',
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
