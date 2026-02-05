import { RoughMark } from '@repo/stephen-v2-ui/shadcn'
import React from 'react'

function UnderConstructionLayer() {
	return (
		<div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-xs text-foreground flex items-center justify-center">
			<RoughMark type="highlight" color="#ffe066" padding={4}>
				<span className="text-2xl text-black font-semibold capitalize">This page is under construction</span>
			</RoughMark>
		</div>
	)
}

export default UnderConstructionLayer
