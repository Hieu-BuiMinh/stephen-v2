'use client'

import { useTheme } from 'next-themes'
import React, { Suspense, useEffect, useState } from 'react'

import LightRaysComponent from '@/components/effects/light-rays'

function LightRaysClient() {
	const { theme } = useTheme()

	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded) return null

	return (
		<Suspense fallback={null}>
			{theme === 'dark' && (
				<LightRaysComponent
					raysOrigin="top-center"
					raysColor="#ffffff"
					raysSpeed={0.5}
					lightSpread={2}
					rayLength={1.2}
					fadeDistance={0.5}
					saturation={0.9}
					followMouse={true}
					mouseInfluence={0}
					noiseAmount={0.1}
					distortion={0}
					pulsating={false}
					className="absolute inset-0 hidden md:block"
				/>
			)}
		</Suspense>
	)
}

export default LightRaysClient
