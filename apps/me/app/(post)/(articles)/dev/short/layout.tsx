import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

const LightRaysComponent = dynamic(() => import('@/components/effects/light-rays'), {
	loading: () => <p>Loading...</p>,
})

function DevShortPostlayout({ children }: { children: ReactNode }) {
	return (
		<>
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
				className="absolute inset-0"
			/>
			{children}
		</>
	)
}

export default DevShortPostlayout
