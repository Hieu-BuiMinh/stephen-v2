import React from 'react'

import Hello from '@/components/hello'
import BProgressProvider from '@/components/providers/bprogress-provider'
import { ThemeProvider } from '@/components/providers/shadcn-provider'
import { Toaster } from '@/components/toaster'

function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
				<BProgressProvider>{children}</BProgressProvider>
				<Hello />
				{/* <ConvexClientProvider>
				<NuqsAdapter>
					<BProgressProvider>{children}</BProgressProvider>
				</NuqsAdapter>
				<ConfirmModal />
				<LoginModal />
			</ConvexClientProvider> */}

				{/* <Script
				defer
				src="https://cloud.umami.is/script.js"
				data-website-id="e33a48b3-c890-4ba6-9430-947be1127fc0"
			/> */}
				<Toaster />
			</ThemeProvider>
		</>
	)
}

export default AppProvider
