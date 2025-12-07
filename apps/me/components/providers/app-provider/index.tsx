import Script from 'next/script'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import React from 'react'

import Hello from '@/components/hello'
import BProgressProvider from '@/components/providers/bprogress-provider'
import { ThemeProvider } from '@/components/providers/shadcn-provider'
import { Toaster } from '@/components/toaster'

function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
				<NuqsAdapter>
					<BProgressProvider>{children}</BProgressProvider>
				</NuqsAdapter>
				<Hello />
				{/* <ConvexClientProvider>
				<NuqsAdapter>
					<BProgressProvider>{children}</BProgressProvider>
				</NuqsAdapter>
				<ConfirmModal />
				<LoginModal />
			</ConvexClientProvider> */}

				<Script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id="ad21eae3-e27c-491b-bf26-217b9c3f4d9b"
				/>
				<Toaster />
			</ThemeProvider>
		</>
	)
}

export default AppProvider
