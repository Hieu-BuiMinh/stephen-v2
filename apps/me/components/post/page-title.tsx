import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface IPageTitleProps {
	title: string
	description: string
	animate?: boolean
	gradientOn?: boolean
	blurImageSrc?: string
	icon?: LucideIcon
}

function PageTitle({ description, title, blurImageSrc, icon: Icon, gradientOn = true }: IPageTitleProps) {
	return (
		<div className="relative flex w-full flex-col items-center justify-center gap-5 border-b p-5 pb-12 text-center md:pb-20 md:pt-5">
			{Icon && (
				<div className="gradient-box_gradientBorder__H_SK6 relative flex size-11 items-center justify-center rounded-xl bg-foreground/10 backdrop-blur-sm">
					{<Icon size={18} className="text-foreground/50" />}
				</div>
			)}
			<h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
			<h2 className="bg-gradient-to-r from-foreground/65 via-foreground/90 to-foreground/65 bg-clip-text text-transparent transition-colors dark:from-neutral-300/[35%] dark:via-neutral-300/90 dark:to-neutral-300/[35%]">
				{description}
			</h2>

			{gradientOn && (
				<div
					aria-hidden="true"
					className="absolute left-0 top-0 z-[-2] hidden h-[400px] w-[650px] origin-left -translate-y-full rotate-45 rounded-full bg-gradient-to-r from-[#2E996C]/30 to-[#0F3324]/30 blur-[150px] sm:block md:left-[15%]"
				/>
			)}
			{blurImageSrc && (
				<Image
					width={1080}
					height={500}
					src={blurImageSrc}
					alt="about-header-blur-bg"
					className="absolute -bottom-12 z-[-2] opacity-50"
				/>
			)}
		</div>
	)
}

export default PageTitle
