'use client'

import { useAuth } from '@clerk/nextjs'
import { Button } from '@repo/stephen-v2-ui/shadcn'
import { LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function SignOutButton() {
	const pathname = usePathname()
	const { signOut } = useAuth()

	return (
		<Button
			variant="secondary-matter"
			className="h-9 px-4 text-xs"
			onClick={() => signOut({ redirectUrl: pathname || '/' })}
		>
			Sign Out
		</Button>
	)
}
