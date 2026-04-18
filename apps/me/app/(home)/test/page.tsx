import { Bagua, Hexagram, HexagramToImage } from '@repo/stephen-v2-ui/i-ching'
import { ImageZoomV3 } from '@repo/stephen-v2-ui/shadcn'

function TestPage() {
	return (
		<div className="pb-32">
			<div className="flex items-center gap-3">
				<Bagua index={1} showLabel />
				<Bagua index={2} showLabel />
				<Bagua index={3} showLabel />
				<Bagua index={4} showLabel />
				<Bagua index={5} showLabel />
				<Bagua index={6} showLabel />
				<Bagua index={7} showLabel />
				<Bagua index={8} showLabel actives={[1]} />
			</div>

			<br />
			<br />
			<br />

			<Hexagram
				upper={1}
				lower={5}
				actives={[1, 5]}
				showResultHexagram
				showBranches
				showElements
				showHexagramName
				showHiddenRelative
				showIndex
				showLabel
				showOriginFamily
				showQuestionerAndQuestion
				showSixCreatures
				showSixRelatives
			/>
			<br />
			<br />
			<br />
			<HexagramToImage
				upper={1}
				lower={5}
				actives={[1, 5]}
				showResultHexagram
				showBranches
				showElements
				showHexagramName
				showHiddenRelative
				showIndex
				showLabel
				showOriginFamily
				showQuestionerAndQuestion
				showSixCreatures
				showSixRelatives
			/>

			{/* <FiveElementsDiagram />

			<StickyAudio
				audioTrack={{
					id: '1',
					name: 'Kinh tăng chi - bài 95 chương bốn pháp , phẩm Kesi (tt) sư giác nguyên giảng 24/07/2018',
					artist: 'Sư Giác Nguyên',
					url: 'https://res.cloudinary.com/hieu-buiminh/video/upload/v1739693470/kinh-tang-chi-bai-95-chuong-bon-phap_pcsbao.mp3',
				}}
			/> */}

			<ImageZoomV3
				src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
				alt="Forest"
				caption={
					<>
						That Wanaka Tree, also known as the Wanaka Willow, is a willow tree located at the southern end
						of Lake Wānaka in the Otago region of New Zealand.
						<cite className="ml-2 italic text-muted-foreground">Wikipedia</cite>
					</>
				}
			/>
			<ImageZoomV3
				src="https://images.unsplash.com/photo-1558197412-fa5106d40c17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Forest"
				caption={
					<>
						That Wanaka Tree, also known as the Wanaka Willow, is a willow tree located at the southern end
						of Lake Wānaka in the Otago region of New Zealand.
						<cite className="ml-2 italic text-muted-foreground">Wikipedia</cite>
					</>
				}
				className="size-40"
				width={150}
				height={150}
			/>
		</div>
	)
}

export default TestPage
