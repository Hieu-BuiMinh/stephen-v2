import type { SVGIconComponent } from '@repo/stephen-v2-ui/shadcn'
import { SVGIcons } from '@repo/stephen-v2-ui/shadcn'

type SoftwareDataItem = {
	title: string
	icon: SVGIconComponent
	link: string
}

export const softwareData: SoftwareDataItem[] = [
	{
		title: 'NextJS',
		icon: SVGIcons.NextJS,
		link: 'https://raycast.com/?via=braydon',
	},
	{
		title: 'NestJS',
		icon: SVGIcons.NestJS,
		link: 'https://arc.net/',
	},
	{
		title: 'TailwindCSS',
		icon: SVGIcons.TailwindCSS,
		link: 'https://code.visualstudio.com/',
	},
	{
		title: 'Tanstack',
		icon: SVGIcons.Tanstack,
		link: 'https://mymind.com/',
	},
	{
		title: 'React',
		icon: SVGIcons.React,
		link: 'https://obsidian.md/',
	},
	{
		title: 'TypeScript',
		icon: SVGIcons.TypeScript,
		link: 'https://www.notion.so/',
	},
	{
		title: 'Node',
		icon: SVGIcons.Node,
		link: 'https://try.tana.inc/66bqr1sp5wkb',
	},
	{
		title: 'Turborepo',
		icon: SVGIcons.Turborepo,
		link: 'https://www.spotify.com/',
	},
	{
		title: 'SWC',
		icon: SVGIcons.SWC,
		link: 'https://www.figma.com/',
	},
	{
		title: 'Vercel',
		icon: SVGIcons.Vercel,
		link: 'https://culturedcode.com/things/',
	},
	{
		title: 'Firebase',
		icon: SVGIcons.Firebase,
		link: 'https://flexibits.com/fantastical',
	},
	{
		title: 'Figma',
		icon: SVGIcons.Figma,
		link: 'https://1password.com/',
	},
	{
		title: 'Prisma',
		icon: SVGIcons.Prisma,
		link: 'https://www.framer.com/',
	},
	{
		title: 'gitHub',
		icon: SVGIcons.gitHub,
		link: 'https://www.framer.com/',
	},
	{
		title: 'Clerk',
		icon: SVGIcons.Clerk,
		link: 'https://getcleanshot.com/',
	},
	{
		title: 'Convex',
		icon: SVGIcons.Convex,
		link: 'https://getpixelsnap.com/',
	},
	// {
	// 	title: 'NextJS',
	// 	icon: SVGIcons.NextJS,
	// 	link: 'https://linear.app/',
	// },
]
