import { cn } from '@repo/stephen-v2-utils'

import type { AlbumMedia } from '@/view/album/data/album.data'

export default function AlbumNavigation({
	albums,
	activeYear,
}: {
	albums: { year: number; items: AlbumMedia[] }[]
	activeYear?: number
}) {
	return (
		<aside className="sticky top-24 hidden lg:block">
			<p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Years</p>
			<nav aria-label="Album years">
				{albums.map(({ year, items }) => (
					<a
						key={year}
						href={`#year-${year}`}
						aria-current={activeYear === year ? 'location' : undefined}
						className={cn(
							'flex items-center gap-2 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground',
							activeYear === year && 'text-foreground'
						)}
					>
						<span
							className={cn('size-1 rounded-full bg-transparent', activeYear === year && 'bg-orange-400')}
						/>
						<span>{year}</span>
						<span className="ml-auto text-[10px] text-muted-foreground/60">{items.length}</span>
					</a>
				))}
			</nav>
		</aside>
	)
}
