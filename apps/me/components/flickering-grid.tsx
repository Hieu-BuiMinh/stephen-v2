/*
 * primitives (MIT License)
 * Copyright (c) inspira-ui: https://inspira-ui.com
 * Source:
 *  - https://inspira-ui.com/docs/components/backgrounds/flickering-grid
 *
 * Modified by: Stephen
 */

'use client'

import { cn } from '@repo/stephen-v2-utils'
import React, { useEffect, useMemo, useRef, useState } from 'react'

export interface FlickeringGridProps {
	squareSize?: number
	gridGap?: number
	flickerChance?: number // per-second probability factor
	color?: string // expects hex string like "#000000" (same logic as Vue version)
	width?: number
	height?: number
	className?: string
	maxOpacity?: number
}

type GridParams = {
	cols: number
	rows: number
	squares: Float32Array
	dpr: number
}

function hexToRgbaPrefix(hexColor: string): string {
	const hex = hexColor.replace(/^#/, '')
	if (!/^[0-9a-fA-F]{6}$/.test(hex)) return 'rgba(255, 0, 0,'

	const bigint = Number.parseInt(hex, 16)
	const r = (bigint >> 16) & 255
	const g = (bigint >> 8) & 255
	const b = bigint & 255
	return `rgba(${r}, ${g}, ${b},`
}

export default function FlickeringGrid({
	squareSize = 4,
	gridGap = 6,
	flickerChance = 0.3,
	color = '#000000',
	maxOpacity = 0.3,
	width,
	height,
	className,
}: FlickeringGridProps) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

	const [isInView, setIsInView] = useState(false)
	const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
		width: 0,
		height: 0,
	})

	const gridParamsRef = useRef<GridParams | null>(null)
	const rafRef = useRef<number | null>(null)
	const lastTimeRef = useRef<number>(0)

	const rgbaPrefix = useMemo(() => hexToRgbaPrefix(color), [color])

	function setupCanvas(canvas: HTMLCanvasElement, w: number, h: number): GridParams {
		const dpr = window.devicePixelRatio || 1

		canvas.width = Math.max(1, Math.floor(w * dpr))
		canvas.height = Math.max(1, Math.floor(h * dpr))
		canvas.style.width = `${w}px`
		canvas.style.height = `${h}px`

		const step = squareSize + gridGap
		const cols = Math.max(1, Math.floor(w / step))
		const rows = Math.max(1, Math.floor(h / step))

		const squares = new Float32Array(cols * rows)
		for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * maxOpacity

		return { cols, rows, squares, dpr }
	}

	function updateSquares(squares: Float32Array, deltaTime: number) {
		// Same semantics as Vue: flickerChance * deltaTime
		const chance = flickerChance * deltaTime
		for (let i = 0; i < squares.length; i++) {
			if (Math.random() < chance) squares[i] = Math.random() * maxOpacity
		}
	}

	function drawGrid(
		ctx: CanvasRenderingContext2D,
		canvasW: number,
		canvasH: number,
		cols: number,
		rows: number,
		squares: Float32Array,
		dpr: number
	) {
		ctx.clearRect(0, 0, canvasW, canvasH)

		// Optional background fill (kept from Vue version, effectively no-op)
		ctx.fillStyle = 'transparent'
		ctx.fillRect(0, 0, canvasW, canvasH)

		const step = (squareSize + gridGap) * dpr
		const s = squareSize * dpr

		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				const opacity = squares[i * rows + j]
				ctx.fillStyle = `${rgbaPrefix}${opacity})`
				ctx.fillRect(i * step, j * step, s, s)
			}
		}
	}

	function updateCanvasSize() {
		const container = containerRef.current
		const canvas = canvasRef.current
		if (!container || !canvas) return

		const newWidth = width ?? container.clientWidth
		const newHeight = height ?? container.clientHeight

		setCanvasSize({ width: newWidth, height: newHeight })
		gridParamsRef.current = setupCanvas(canvas, newWidth, newHeight)
	}

	function animate(time: number) {
		if (!isInView) return

		const ctx = ctxRef.current
		const canvas = canvasRef.current
		const grid = gridParamsRef.current
		if (!ctx || !canvas || !grid) return

		const last = lastTimeRef.current || time
		const deltaTime = (time - last) / 1000
		lastTimeRef.current = time

		updateSquares(grid.squares, deltaTime)
		drawGrid(ctx, canvas.width, canvas.height, grid.cols, grid.rows, grid.squares, grid.dpr)

		rafRef.current = requestAnimationFrame(animate)
	}

	// init context + observers
	useEffect(() => {
		const canvas = canvasRef.current
		const container = containerRef.current
		if (!canvas || !container) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return
		ctxRef.current = ctx

		updateCanvasSize()

		const resizeObserver = new ResizeObserver(() => {
			updateCanvasSize()
		})

		const intersectionObserver = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting)
			},
			{ threshold: 0 }
		)

		resizeObserver.observe(container)
		intersectionObserver.observe(canvas)

		return () => {
			resizeObserver.disconnect()
			intersectionObserver.disconnect()
		}
	}, [width, height, squareSize, gridGap, flickerChance, maxOpacity, color])

	// start/stop RAF when in view changes
	useEffect(() => {
		if (!isInView) {
			if (rafRef.current) cancelAnimationFrame(rafRef.current)
			rafRef.current = null
			lastTimeRef.current = 0
			return
		}

		rafRef.current = requestAnimationFrame(animate)

		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current)
			rafRef.current = null
		}
	}, [isInView, rgbaPrefix, squareSize, gridGap, flickerChance, maxOpacity])

	return (
		<div ref={containerRef} className={cn('size-full', className)}>
			<canvas
				ref={canvasRef}
				className="pointer-events-none"
				width={canvasSize.width}
				height={canvasSize.height}
			/>
		</div>
	)
}
