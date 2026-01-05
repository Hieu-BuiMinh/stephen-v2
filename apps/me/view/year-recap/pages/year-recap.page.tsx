import type { RecapGridItemProps } from '@/view/year-recap/components/recap-gird-item'
import RecapGridItem from '@/view/year-recap/components/recap-gird-item'

const recapData: RecapGridItemProps[] = [
	{
		year: 2025,
		title: 'Focus on myself',
		backgroundImage: '/assets/images/bg/retro-bg.png',
		url: '/year-recap/2025',
		highlights: {
			primary: 'A year of rebuilding',
			secondary: ['Foundations before scale', 'Quiet progress'],
		},
	},
	{
		year: 2024,
		title: 'Build and ship',
		url: '/year-recap/2024',
		highlights: {
			primary: 'Depth over noise',
			secondary: ['Consistency > motivation', 'Systems > willpower'],
		},
	},
] as const

function YearRecapPageView() {
	return (
		<div className="grid grid-cols-1 pt-6 px-6 pb-28 md:grid-cols-3">
			<div className="col-span-1 h-[350px] border md:col-span-2">
				<RecapGridItem {...recapData[0]} />
			</div>

			{recapData.slice(1).map((data) => (
				<div key={data.year} className="col-span-1 h-[350px] border">
					<RecapGridItem {...data} />
				</div>
			))}
		</div>
	)
}

export default YearRecapPageView
