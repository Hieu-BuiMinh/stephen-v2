'use client'

import { useSignIn } from '@clerk/nextjs'
import { useState } from 'react'
import { toast } from '@repo/stephen-v2-ui/shadcn'
import { OAuthStrategy, PasskeyStrategy, TicketStrategy } from '@clerk/nextjs/types'
import { usePathname } from 'next/navigation'

export function useSocialAuth() {
	const pathname = usePathname()
	const { signIn } = useSignIn()
	const [isLoading, setIsLoading] = useState<string | null>(null)

	const signInWith = async (strategy: OAuthStrategy | 'enterprise_sso' | PasskeyStrategy | TicketStrategy) => {
		if (!signIn) return

		setIsLoading(strategy)

		try {
			const { error } = await signIn.create({
				strategy,
				actionCompleteRedirectUrl: pathname || '/',
				redirectUrl: window.location.origin + '/sso-callback',
			})

			if (error) {
				console.error('Auth Error:', error)
				toast.error(error.message || 'Authentication failed')
				setIsLoading(null)
				return
			}

			// Manual redirect for social auth
			const externalUrl = signIn.firstFactorVerification?.externalVerificationRedirectURL
			if (externalUrl) {
				window.location.href = externalUrl.toString()
				return
			}
		} catch (error: any) {
			console.error('Unexpected Auth Error:', error)
			toast.error('An unexpected error occurred')
			setIsLoading(null)
		}
	}

	return {
		signInWith,
		isLoading,
	}
}
