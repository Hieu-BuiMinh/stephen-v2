'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<SignUp
				appearance={{
					elements: {
						formButtonPrimary: 'bg-purple-700 hover:bg-purple-800 text-sm normal-case',
					},
				}}
			/>
		</div>
	)
}
