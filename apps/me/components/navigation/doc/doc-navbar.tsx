import { cn } from '@repo/stephen-v2-utils'
import Image from 'next/image'
import Link from 'next/link'

function DocNavbar({ className }: { className?: string }) {
	return (
		<div className={cn('flex items-center', className)}>
			<div className="w-70 h-full border-r flex items-center p-3">
				<Link href="/" className="size-[35px]">
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
				</Link>
			</div>
		</div>
	)
}

export default DocNavbar
