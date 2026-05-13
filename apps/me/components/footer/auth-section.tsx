'use client'

import { SignOutButton, SingInButton } from '@/components/buttons/auth'
import { useCurrentUser } from '@/hooks/use-current-user'
import { Show } from '@clerk/nextjs'

export function FooterAuthSection() {
	const data = useCurrentUser()

	console.log(data)

	return (
		<div className="flex flex-col items-center gap-3">
			<Show when="signed-out">
				<SingInButton />
			</Show>
			<Show when="signed-in">
				<SignOutButton />
			</Show>
		</div>
	)
}
