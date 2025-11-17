'use client'

import { useEffect } from 'react'

import { startPaperSnow, stopPaperSnow } from '@/lib/confetti/confettiRain'

function ConfettiRain() {
	useEffect(() => {
		startPaperSnow()

		return () => {
			stopPaperSnow()
		}
	}, [])
	return null
}

export default ConfettiRain
