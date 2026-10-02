'use client'

import { cn } from '@repo/stephen-v2-utils'
import { motion } from 'motion/react'
import Image from 'next/image'
import { type CSSProperties, type ReactNode, type RefObject, useRef, useState } from 'react'

import TextGradient from '@/components/texts/text-gradient'

interface DraggableMediaProps {
	children: ReactNode
	className?: string
	style?: CSSProperties
	constraintsRef: RefObject<HTMLDivElement | null>
	onFocus: () => void
}

function DraggableMedia({ children, className, style, constraintsRef, onFocus }: DraggableMediaProps) {
	return (
		<motion.div
			className={cn('absolute touch-none cursor-grab active:cursor-grabbing', className)}
			style={style}
			drag
			dragConstraints={constraintsRef}
			whileDrag={{ scale: 1.03 }}
			onPointerDown={onFocus}
		>
			{children}
		</motion.div>
	)
}

const polaroidPath = '/assets/images/avt/polaroids'

function CatDoodle() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 44" fill="none" aria-label="Cat doodle">
			<path
				d="M16.325 28.4909C11.775 25.4364 10.2583 20.8545 11.775 14.7455L9.5 1L20.875 12.4545C25.425 9.4 32.25 7.87273 41.35 7.87273C50.45 6.34545 59.55 6.34545 68.65 7.87273C77.75 7.87273 84.575 9.4 89.125 12.4545L100.5 1L98.225 14.7455C99.7417 20.8545 98.225 25.4364 93.675 28.4909C90.6417 34.6 86.0917 38.4182 80.025 39.9455C69.4083 43 58.7917 43.7636 48.175 42.2364C39.075 40.7091 32.25 39.1818 27.7 37.6545C23.15 36.1273 19.3583 33.0727 16.325 28.4909Z"
				stroke="#1A00FF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M93.5 30.5366C104.152 32.0813 111 29.7642 114.043 23.5854C115.565 17.4065 113.283 13.5447 107.196 12"
				stroke="#1A00FF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M38 22C39.3807 22 40.5 20.8807 40.5 19.5C40.5 18.1193 39.3807 17 38 17C36.6193 17 35.5 18.1193 35.5 19.5C35.5 20.8807 36.6193 22 38 22Z"
				fill="#1A00FF"
			/>
			<path
				d="M67 22C68.3807 22 69.5 20.8807 69.5 19.5C69.5 18.1193 68.3807 17 67 17C65.6193 17 64.5 18.1193 64.5 19.5C64.5 20.8807 65.6193 22 67 22Z"
				fill="#1A00FF"
			/>
			<path
				d="M50.5 24H55.5L53 27L50.5 24Z"
				fill="#1A00FF"
				stroke="#1A00FF"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M53 35C54.3807 35 55.5 33.6569 55.5 32C55.5 30.3431 54.3807 29 53 29C51.6193 29 50.5 30.3431 50.5 32C50.5 33.6569 51.6193 35 53 35Z"
				stroke="#1A00FF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M28.5 24C20.2101 21.037 11.5435 17.7037 2.5 14M27.5 27C19.25 27 10.25 26.6667 0.5 26M28.5 31C20.2101 33.963 11.5435 37.2963 2.5 41M76.5 24C84.7899 21.037 93.4565 17.7037 102.5 14M77.5 27C85.75 27 94.75 26.6667 104.5 26M76.5 31C84.7899 33.963 93.4565 37.2963 102.5 41"
				stroke="#1A00FF"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

const doodlePaths = [
	[
		'M296.866 173.197C308.257 135.546 348.262 117.46 352 165.157',
		'M305.288 173.197C319.016 168.686 332.901 164.278 346.638 160.179',
		'M313.711 134.637C308.172 122.768 295.301 122.094 283.378 121.253C253.998 119.176 250.438 145.242 243.666 170.343',
		'M316.43 179.322C320.348 208.648 312.82 252.127 310.65 274.274',
		'M244.825 195.649C257.412 99.7965 104.324 95.9345 83.3993 149.737C76.5702 167.284 108.695 174.295 119.57 173.761C131.035 173.19 138.725 166.755 149.264 164.149C151.424 163.615 157.318 164.103 155.744 162.547C151.764 158.612 123.731 178.405 133.069 187.639C152.225 206.582 193.535 176.062 193.535 178.562C193.535 185.863 174.518 214.158 212.97 198.314',
		'M171.284 217.609C160.61 231.82 149.19 256.508 157.039 272.743',
		'M252.451 230.627C252.123 247.26 230.583 258.903 217.089 264.453C211.274 266.842 168.345 283.795 162.982 273.041C158.266 263.597 291.485 277.337 219.769 277.337',
		'M304.802 139.113C301.284 138.051 298.139 139.809 294.848 140.356',
		'M144.483 279.911C132.915 281.761 121.618 284.576 109.754 284.193C92.5876 283.64 77.1303 274.303 64.336 263.319C10.5695 217.155 104.732 182.805 128.455 216.753C140.245 233.621 108.851 245.727 96.3931 237.092',
		'M97.7745 227.564C88.2049 232.395 90.5425 237.831 93.3244 245.942',
	],
	[
		'M149.835 140.985C239.056 -3.75744 352.557 184.662 269.349 262.165C222.457 305.842 93.3442 285.236 137.194 174.614',
		'M218.359 191.425C218.543 178.159 218.681 164.935 217.064 151.78',
		'M280.43 116.615C288.219 106.023 297.474 98.9874 308.194 95.5094C310.337 105.925 303.185 118.714 286.738 133.875',
		'M160.217 114.919C150.412 94.08 140.607 83.775 130.803 84.0037C132.5 107.43 137.685 124.054 146.358 133.876',
		'M125.688 217.671C89.9893 238.435 89.0469 221.821 63.0234 201.656',
		'M55.349 206.811C52.0297 210.09 48.8462 205.716 47.6758 205.516',
		'M298.334 218.281C324.447 213.4 333.023 199.92 353.325 201.842',
		'M223.12 287.34C220.984 314.598 218.707 317.443 234.39 314.598',
		'M191.169 288.619C191.409 320.947 205.239 314.418 176.841 316.754',
	],
	[
		'M134.238 99.2112C158.807 115.833 186.922 125.593 213.427 137.391',
		'M205.92 127.493C341.899 48.8819 177.083 79.2472 134.238 113.952',
		'M142.994 117.595C109.394 168.467 182.02 186.204 200.7 134.926',
		'M198.547 178.4C208.513 193.222 235.112 206.43 241.665 222.747C242.378 224.521 234.116 230.728 232.758 232.08C204.022 260.703 179.826 294.136 151.207 322.637',
		'M231.807 220.823C194.075 230.64 136.055 239.603 105.953 232.286',
		'M63.5352 281.628C132.945 262.764 203.659 243.714 271.406 219.408',
		'M318.169 178.4C286.118 203.489 274.366 214.003 277.574 218.93C283.302 227.728 328.937 215.962 336.456 217.954',
		'M278.475 219.408C296.659 211.865 315.968 199.301 335.038 198.196',
		'M196.176 178.4C199.296 210.776 176.225 220.849 165.354 247.691',
	],
	[
		'M208.966 110.117C254.405 154.438 251.905 240.684 230.919 288.101C201.051 355.593 209.978 250.359 184.602 277.117C177.704 284.391 181.81 317.719 156.516 320.269C138.085 322.126 154.096 266.606 141.635 277.117C127.283 289.224 121.293 331.099 103.61 320.269C96.98 288.749 95.6539 205.826 103.61 164.619',
		'M334.001 205.901C300.792 236.16 270.173 269.031 239.891 302.247C231.256 311.719 217.546 319.675 207.086 324.435',
		'M240.001 310.082C261.705 300.029 259.1 324.324 252.155 325.999C233.056 330.607 236.719 314.627 238.123 312.595',
		'M318.739 227.487C333.322 228.815 333.932 239.822 328.721 245.562C322.396 252.532 303.881 248.558 312.768 230.427',
		'M67 154.417C74.2958 151.934 94.2222 144.012 102.587 140.456M102.587 140.456C132.714 127.648 168.181 109.352 197.507 96.1835C186.549 83.4764 160.167 66.0223 132.221 75.9106C98.42 87.8702 101.97 124.204 102.587 140.456Z',
		'M212.18 168.071C211.362 164.294 211.429 160.869 210.359 156.308',
		'M189.816 170.532C190.383 167.512 189.063 162.444 188.656 159.594',
	],
	[
		'M169.562 158.468C172.723 143.863 188.522 134.417 202.42 131.439C278.386 115.161 314.412 201.317 267.078 242.734C225.658 278.977 150.298 244.532 166.912 178.077',
		'M180.504 265.903C158.81 277.858 129.811 297.195 105.777 304.062',
		'M214.719 281.677C246.965 293.888 278.57 299.822 311.937 308.832',
		'M180.503 265.903C82.5548 224.942 122.393 218.848 169.317 236.19',
		'M327.306 211.316C320.772 213.104 313.707 208.576 307.167 211.846C286.241 222.308 351.269 279.131 313.527 311.481C306.592 317.426 298.551 322.599 289.678 325.261C275.984 329.369 260.719 327.767 246.749 330.561C232.66 333.379 220.402 350.441 239.86 356',
		'M311.937 308.832C327.788 306.392 321.295 326.14 308.227 313.072',
		'M105.78 304.062C88.4488 311.249 82.9796 300.938 70.8008 290.282',
		'M139.03 342.308C123.46 352.398 109.624 355.167 92.5312 345.4',
		'M350.098 310.422C288.359 284.983 233.083 265.903 175.016 238.78',
		'M351.686 308.301C349.24 283.761 369.319 305.987 373.945 316.782',
		'M346.918 309.892C332.921 327.365 365.863 317.792 373.947 316.781',
		'M233.082 223.013C228.402 225.102 224.355 225.805 219.832 223.543',
		'M257.515 227.136C256.901 223.613 258.58 219.231 259.345 216.682',
		'M70.8005 290.282C65.5847 289.885 56.8604 289.236 53.8047 292.292',
		'M89.8894 344.321C85.1582 343.573 81.7853 345.017 78.1406 346.839',
		'M259.278 115.132C257.236 105.677 308.483 29.7598 317.182 47.158C330.315 73.4239 296.203 114.899 296.203 130.238C296.203 135.166 316.098 115.777 320.539 126.881C324.131 135.861 313.387 148.908 307.112 153.735C304.929 155.415 298.327 154.628 299.559 157.092C299.717 157.407 334.024 166.814 307.112 172.197C304.901 172.639 302.636 172.756 300.398 173.036',
		'M146.858 202.762C129.834 161.686 87.4826 88.7261 33.1626 88.7261C-4.25663 88.7261 49.8853 152.314 54.1424 155.861C66.6065 166.248 77.3107 177.351 88.5492 188.589C91.2026 191.243 81.5713 185.68 78.4787 183.554C73.6425 180.229 45.956 158.316 39.8765 168.449C31.0635 183.136 48.7612 200.078 59.1773 207.891C67.8583 214.402 76.9239 214.419 76.8004 214.604C72.4305 221.16 61.6979 212.639 57.499 223.835C52.2874 237.733 85.8143 257.403 97.7802 257.403',
		'M211.775 284.983C186.335 308.62 166.864 329.654 139.027 342.308',
		'M128.504 297.548C133.258 310.12 138.34 322.733 142.553 335.375',
	],
]

function Doodle({ paths }: { paths: string[] }) {
	return (
		<svg viewBox="0 0 400 400" fill="none" aria-hidden="true">
			{paths.map((path) => (
				<path
					key={path}
					d={path}
					stroke="currentColor"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			))}
		</svg>
	)
}

function FloatingMediaCollage() {
	const [activeItem, setActiveItem] = useState<string | null>(null)
	const collageRef = useRef<HTMLDivElement>(null)

	const bringToFront = (id: string) => () => setActiveItem(id)
	const zIndex = (id: string, index: number) => (activeItem === id ? 20 : index)

	return (
		<section className="py-20 mb-8 overflow-hidden bg-dots-md">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
				<div className="text-center">
					<TextGradient as="h2" className="font-caveat text-3xl font-semibold md:text-4xl">
						Memory Board
					</TextGradient>
					<p className="text-muted-foreground mt-2 text-sm">Drag each piece to rearrange the moments.</p>
				</div>

				<div ref={collageRef} className="relative h-[420px] w-full max-w-full select-none sm:h-[520px]">
					{/* polaroid-01.png */}
					<DraggableMedia
						className="left-[24%] top-[16%] w-[20%] -rotate-6"
						constraintsRef={collageRef}
						onFocus={bringToFront('photo')}
						style={{ zIndex: zIndex('photo', 4) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-01.png`}
							alt="Stephen taking a mirror selfie"
							width={1581}
							height={1841}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* doodle-01 */}
					<DraggableMedia
						className="bottom-[7%] left-[32%] w-[7%] rotate-6 text-foreground/80"
						constraintsRef={collageRef}
						onFocus={bringToFront('doodle-01')}
						style={{ zIndex: zIndex('doodle-01', 5) }}
					>
						<Doodle paths={doodlePaths[0]} />
					</DraggableMedia>

					{/* doodle-02 */}
					<DraggableMedia
						className="left-[13%] top-[14%] w-[6%] -rotate-12 text-foreground/80"
						constraintsRef={collageRef}
						onFocus={bringToFront('doodle-02')}
						style={{ zIndex: zIndex('doodle-02', 5) }}
					>
						<Doodle paths={doodlePaths[1]} />
					</DraggableMedia>

					{/* doodle-03 */}
					<DraggableMedia
						className="right-[15%] top-[13%] w-[6%] rotate-12 text-foreground/80"
						constraintsRef={collageRef}
						onFocus={bringToFront('doodle-03')}
						style={{ zIndex: zIndex('doodle-03', 5) }}
					>
						<Doodle paths={doodlePaths[2]} />
					</DraggableMedia>

					{/* doodle-04 */}
					<DraggableMedia
						className="bottom-[13%] right-[18%] w-[6%] -rotate-6 text-foreground/80"
						constraintsRef={collageRef}
						onFocus={bringToFront('doodle-04')}
						style={{ zIndex: zIndex('doodle-04', 5) }}
					>
						<Doodle paths={doodlePaths[3]} />
					</DraggableMedia>

					{/* doodle-05 */}
					<DraggableMedia
						className="left-[-1%] top-[30%] w-[8%] rotate-3 text-foreground/80"
						constraintsRef={collageRef}
						onFocus={bringToFront('doodle-05')}
						style={{ zIndex: zIndex('doodle-05', 5) }}
					>
						<Doodle paths={doodlePaths[4]} />
					</DraggableMedia>

					{/* polaroid-02.png */}
					<DraggableMedia
						className="right-[25%] top-[18%] w-[24%] rotate-6"
						constraintsRef={collageRef}
						onFocus={bringToFront('video')}
						style={{ zIndex: zIndex('video', 3) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-02.png`}
							alt="Stephen's gym progress"
							width={1647}
							height={1319}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-04.png */}
					<DraggableMedia
						className="bottom-[12%] right-[11%] w-[14%] -rotate-6"
						constraintsRef={collageRef}
						onFocus={bringToFront('svg')}
						style={{ zIndex: zIndex('svg', 1) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-04.png`}
							alt="Film portrait of Stephen"
							width={941}
							height={1672}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-05.png */}
					<DraggableMedia
						className="bottom-[17%] left-[42%] w-[16%] rotate-6"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-05')}
						style={{ zIndex: zIndex('polaroid-05', 6) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-05.png`}
							alt="Polaroid memory five"
							width={1254}
							height={1254}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-06.png */}
					<DraggableMedia
						className="bottom-[9%] right-[32%] w-[13%] -rotate-6"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-06')}
						style={{ zIndex: zIndex('polaroid-06', 7) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-06.png`}
							alt="Polaroid memory six"
							width={1122}
							height={1402}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-07.png */}
					<DraggableMedia
						className="right-[5%] top-[42%] w-[11%] -rotate-6"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-07')}
						style={{ zIndex: zIndex('polaroid-07', 8) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-07.png`}
							alt="Polaroid memory seven"
							width={941}
							height={1672}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-08.png */}
					<DraggableMedia
						className="left-[5%] top-[9%] w-[7%] -rotate-12"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-08')}
						style={{ zIndex: zIndex('polaroid-08', 9) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-08.png`}
							alt="Polaroid memory eight"
							width={1280}
							height={960}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-09.png */}
					<DraggableMedia
						className="left-[47%] top-[10%] w-[6%] rotate-6"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-09')}
						style={{ zIndex: zIndex('polaroid-09', 10) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-09.png`}
							alt="Polaroid memory nine"
							width={1000}
							height={1000}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-10.png */}
					<DraggableMedia
						className="right-[7%] top-[10%] w-[6%] -rotate-3"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-10')}
						style={{ zIndex: zIndex('polaroid-10', 11) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-10.png`}
							alt="Polaroid memory ten"
							width={1000}
							height={1000}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-11.png */}
					<DraggableMedia
						className="bottom-[7%] left-[7%] w-[7%] rotate-12"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-11')}
						style={{ zIndex: zIndex('polaroid-11', 12) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-11.png`}
							alt="Polaroid memory eleven"
							width={1000}
							height={1000}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-12.png */}
					<DraggableMedia
						className="bottom-[5%] right-[23%] w-[7%] -rotate-6"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-12')}
						style={{ zIndex: zIndex('polaroid-12', 13) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-12.png`}
							alt="Polaroid memory twelve"
							width={1000}
							height={1000}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* polaroid-13.png */}
					<DraggableMedia
						className="bottom-[27%] right-[2%] w-[6%] rotate-3"
						constraintsRef={collageRef}
						onFocus={bringToFront('polaroid-13')}
						style={{ zIndex: zIndex('polaroid-13', 14) }}
					>
						<Image
							src={`${polaroidPath}/polaroid-13.png`}
							alt="Polaroid memory thirteen"
							width={1024}
							height={1024}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>

					{/* 1.a-trip-to-da-lat/13.png */}
					<DraggableMedia
						className="left-[7%] top-[39%] w-[12%] rotate-3"
						constraintsRef={collageRef}
						onFocus={bringToFront('da-lat-13')}
						style={{ zIndex: zIndex('da-lat-13', 15) }}
					>
						<Image
							src="/assets/articles/other-topic/journaling/2026/1.a-trip-to-da-lat/13.png"
							alt="A trip to Da Lat"
							width={2304}
							height={4096}
							className="h-auto w-full"
							draggable={false}
						/>
					</DraggableMedia>
				</div>
			</div>
		</section>
	)
}

export { DraggableMedia }
export default FloatingMediaCollage
