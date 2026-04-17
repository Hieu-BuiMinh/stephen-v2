import PostPageTitle from '@/components/post/post-page-title'
import { APP_CONFIG } from '@/configs/app-config'
import HexagramAnalyzerPageView from '@/view/tools/pages/hexagram-analyzer/hexagram-analyzer.page'

export async function generateMetadata() {
	return {
		title: 'Lập Quẻ Kinh Dịch Online | I Ching Hexagram Analyzer',
		description:
			'Công cụ lập quẻ Kinh Dịch (I Ching) online miễn phí. Tạo và phân tích quẻ 6 hào, khám phá ý nghĩa và lời giải quẻ chi tiết.',
		authors: { name: APP_CONFIG.author.name },
		openGraph: {
			title: 'Lập Quẻ Kinh Dịch Online | I Ching Hexagram Analyzer',
			description:
				'Công cụ lập quẻ Kinh Dịch (I Ching) online miễn phí. Tạo và phân tích quẻ 6 hào, khám phá ý nghĩa và lời giải quẻ chi tiết.',
			type: 'article',
			images: [
				{
					url: APP_CONFIG.og,
					width: 1200,
					height: 630,
					alt: 'Lập Quẻ Kinh Dịch Online',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Lập Quẻ Kinh Dịch Online | I Ching Hexagram Analyzer',
			description:
				'Công cụ lập quẻ Kinh Dịch (I Ching) online miễn phí. Tạo và phân tích quẻ 6 hào, khám phá ý nghĩa và lời giải quẻ chi tiết.',
			images: [APP_CONFIG.og],
		},
	}
}

function HexagramAnalyzer() {
	return (
		<div className="pb-44">
			<PostPageTitle
				title="I Ching Hexagram Tool"
				description="Explore and interpret I Ching hexagrams with an intuitive six-line hexagram analysis tool."
			/>

			<HexagramAnalyzerPageView />
		</div>
	)
}

export default HexagramAnalyzer
