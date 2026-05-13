'use client'

import { useAuth, useUser } from '@clerk/nextjs'

/**
 * Custom hook to manage and extract current user information from Clerk.
 * Provides a simplified interface for authentication state and user details.
 */
export function useCurrentUser() {
	const { isSignedIn, isLoaded: isAuthLoaded, userId, signOut } = useAuth()
	const { user, isLoaded: isUserLoaded } = useUser()

	// Loading state is true until both auth and user data are loaded
	const isLoading = !isAuthLoaded || !isUserLoaded

	return {
		// State
		user,
		isSignedIn: !!isSignedIn,
		isLoading,
		userId,

		// Extracted shortcuts
		userName: user?.fullName || user?.username || 'Guest',
		userEmail: user?.primaryEmailAddress?.emailAddress,
		userImageUrl: user?.imageUrl,

		// Actions
		signOut,
	}
}
