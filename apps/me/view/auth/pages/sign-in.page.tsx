'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<SignIn
				appearance={{
					elements: {
						formButtonPrimary: 'bg-purple-700 hover:bg-purple-800 text-sm normal-case',
					},
				}}
			/>
		</div>
	)
}
