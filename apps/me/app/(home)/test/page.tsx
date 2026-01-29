import { Bagua, FiveElementsDiagram, Hexagram } from '@repo/stephen-v2-ui/i-ching'
import { StickyAudio } from '@repo/stephen-v2-ui/shadcn'

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

			<Hexagram upper={1} lower={5} actives={[1, 5]} />

			{/* <FiveElementsDiagram />

			<StickyAudio
				audioTrack={{
					id: '1',
					name: 'Kinh tăng chi - bài 95 chương bốn pháp , phẩm Kesi (tt) sư giác nguyên giảng 24/07/2018',
					artist: 'Sư Giác Nguyên',
					url: 'https://res.cloudinary.com/hieu-buiminh/video/upload/v1739693470/kinh-tang-chi-bai-95-chuong-bon-phap_pcsbao.mp3',
				}}
			/> */}
		</div>
	)
}

export default TestPage
