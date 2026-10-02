'use client'

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import React, { useEffect } from 'react'

import { setHttpTokenGetter } from '@/lib/https'
import { userService } from '@/services/common/user'

function HttpTokenProvider() {
	const { getToken, isLoaded, isSignedIn } = useAuth()

	useEffect(() => {
		setHttpTokenGetter(getToken)

		return () => setHttpTokenGetter(undefined)
	}, [getToken])

	useEffect(() => {
		if (!isLoaded || !isSignedIn) return

		userService.sync.post().catch((error) => {
			console.error('[USER SYNC ERROR]', error)
		})
	}, [isLoaded, isSignedIn])

	return null
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<HttpTokenProvider />
			{children}
		</ClerkProvider>
	)
}
