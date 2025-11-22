import { Bagua, FiveElementsDiagram } from '@repo/stephen-v2-ui/i-ching'

function TestPage() {
	return (
		<div>
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

			<FiveElementsDiagram />
		</div>
	)
}

export default TestPage
