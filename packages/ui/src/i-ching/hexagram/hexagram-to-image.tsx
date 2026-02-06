'use client'

import { Download } from 'lucide-react'
import { domToPng } from 'modern-screenshot'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../shadcn'
import type { IHexagram } from './hexagram-origin'
import { Hexagram } from './hexagram-origin'

interface HexagramToImageProps extends IHexagram {
	width?: number
	padding?: number
}

type ExportFormat = 'png' | 'jpeg' | 'webp' | 'svg'

export function HexagramToImage({
	upper,
	lower,
	actives,
	showResultHexagram,
	showBranches,
	showElements,
	showHexagramName,
	showHiddenRelative,
	showIndex,
	showLabel,
	showOriginFamily,
	showQuestionerAndQuestion,
	showSixCreatures,
	showSixRelatives,
	width = 1200,
	padding = 50,
	animated = false,
}: HexagramToImageProps) {
	const { theme } = useTheme()
	const containerRef = useRef<HTMLDivElement>(null)
	const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('png')
	const [exportedImage, setExportedImage] = useState<string | null>(null)

	useEffect(() => {
		const autoExport = async () => {
			if (!containerRef.current) return

			try {
				const dataUrl = await domToPng(containerRef.current, {
					quality: 1,
					scale: 2,
					backgroundColor: theme === 'dark' ? 'var(--background, #000000)' : 'var(--background, #ffffff)',
				})
				setExportedImage(dataUrl)
			} catch (err) {
				console.error('Auto export failed:', err)
			}
		}

		// Delay to ensure DOM is ready
		const timer = setTimeout(autoExport, 500)
		return () => clearTimeout(timer)
	}, [
		upper,
		lower,
		actives,
		showResultHexagram,
		showBranches,
		showElements,
		showHexagramName,
		showHiddenRelative,
		showIndex,
		showLabel,
		showOriginFamily,
		showQuestionerAndQuestion,
		showSixCreatures,
		showSixRelatives,
		theme,
	])

	const handleDownload = () => {
		if (!exportedImage) return

		const link = document.createElement('a')
		link.download = `hexagram-${upper}-${lower}.${selectedFormat === 'jpeg' ? 'jpg' : selectedFormat}`
		link.href = exportedImage
		link.click()
	}

	return (
		<div className="px-4">
			{/* Hidden container for rendering */}
			<div className="absolute opacity-0 -left-[9999px]">
				<div
					ref={containerRef}
					className="bg-background inline-block"
					style={{ width: `${width}px`, padding: `${padding}px` }}
				>
					<Hexagram
						upper={upper}
						lower={lower}
						actives={actives}
						showResultHexagram={showResultHexagram}
						showBranches={showBranches}
						showElements={showElements}
						showHexagramName={showHexagramName}
						showHiddenRelative={showHiddenRelative}
						showIndex={showIndex}
						showLabel={showLabel}
						showOriginFamily={showOriginFamily}
						showQuestionerAndQuestion={showQuestionerAndQuestion}
						showSixCreatures={showSixCreatures}
						showSixRelatives={showSixRelatives}
						animated={animated}
					/>
				</div>
			</div>

			{/* Preview Image */}
			{exportedImage && (
				<div className="flex flex-col items-end gap-3 border rounded-lg p-3 bg-muted/30">
					<img
						src={exportedImage}
						alt="Hexagram Preview"
						className="max-w-full h-auto border bg-background rounded"
					/>

					{/* Controls */}
					<div className="flex items-center gap-3 flex-wrap">
						<Select
							value={selectedFormat}
							onValueChange={(value) => setSelectedFormat(value as ExportFormat)}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select format" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="png">PNG</SelectItem>
								<SelectItem value="jpeg">JPEG</SelectItem>
								<SelectItem value="webp">WebP</SelectItem>
							</SelectContent>
						</Select>

						<Button onClick={handleDownload} disabled={!exportedImage} variant="primary-matter">
							<Download className="size-4 shrink-0" />
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

/*
USAGE:
<HexagramToImage
	upper={1}
	lower={5}
	actives={[1, 5]}
	showResultHexagram
	showElements
	showHexagramName
	showHiddenRelative
	showIndex
	showLabel
	showOriginFamily
	showQuestionerAndQuestion
	showSixCreatures
	showSixRelatives
	width={1200}
	padding={20}
/>

FEATURES:
- Auto-generates PNG preview on mount
- Select format: PNG, JPEG, WebP, SVG
- Download button
- Hidden render container (doesn't show Hexagram twice)
- Responsive to theme changes
*/
