export default function AlbumIntro({
	firstYear,
	lastYear,
	total,
}: {
	firstYear?: number
	lastYear?: number
	total: number
}) {
	return (
		<header className="border-b border-dashed border-foreground/10 pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24">
			<p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Photo archive</p>
			<div className="mt-7 grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
				<div>
					<h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
						Somewhere between then and now.
					</h2>
					<p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
						I don&apos;t take many photos. These are the ones that survived.
					</p>
				</div>
				<div className="font-mono text-xs uppercase leading-6 tracking-[0.12em] text-muted-foreground sm:text-right">
					<p>
						{firstYear} — {lastYear}
					</p>
					<p>{total} moments</p>
				</div>
			</div>
		</header>
	)
}
