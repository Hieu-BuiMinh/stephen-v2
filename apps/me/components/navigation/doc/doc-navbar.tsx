import { SVGIcons } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import Image from 'next/image'
import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'
import { APP_CONFIG } from '@/configs/app-config'

function DocNavbar({ className }: { className?: string }) {
	return (
		<div className={cn('flex items-center justify-between bg-background', className)}>
			<Link href="/" className="w-70 h-full border-r flex items-center p-3 gap-3">
				<div className="size-[35px]">
					<Image
						src="/assets/images/logo/logo-dark.svg"
						width={35}
						height={35}
						alt="logo"
						className="hidden dark:block size-auto"
					/>
					<Image
						src="/assets/images/logo/logo-light.svg"
						width={35}
						height={35}
						alt="logo"
						className="block dark:hidden size-auto"
					/>
				</div>
				<span className="hidden text-base font-medium md:block">{APP_CONFIG.name}</span>
			</Link>

			<div className="h-full flex items-center">
				<Link
					className="h-full px-5 flex items-center justify-center border-l"
					href={APP_CONFIG.links.github}
					target="_blank"
				>
					<SVGIcons.gitHub className="size-5 m-2" />
				</Link>
				<div className="h-full px-5 flex items-center justify-center border-l">
					<ModeToggle />
				</div>
			</div>
		</div>
	)
}

export default DocNavbar
