'use client'

import { AppProgressProvider as ProgressProvider } from '@bprogress/next'

function BProgressProvider({ children }: { children: React.ReactNode }) {
	return (
		<ProgressProvider height="3.5px" color="#fffd00" options={{ showSpinner: false }} shallowRouting>
			{children}
		</ProgressProvider>
	)
}

export default BProgressProvider
