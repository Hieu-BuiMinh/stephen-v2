import type { AlbumMedia } from '@/view/album/data/album.data'

import PhotoPaper from './photo-paper'

export default function AlbumYearSection({
	year,
	items,
	onOpen,
}: {
	year: number
	items: AlbumMedia[]
	onOpen: (media: AlbumMedia, trigger: HTMLButtonElement) => void
}) {
	return (
		<section
			id={`year-${year}`}
			data-album-year={year}
			className="scroll-mt-24 border-b border-dashed border-foreground/10 pb-20 not-last:mb-20 sm:pb-28 sm:not-last:mb-28 lg:grid lg:grid-cols-[112px_minmax(0,1fr)] lg:gap-8"
		>
			<div className="sticky top-14 z-20 -mx-4 mb-12 flex items-baseline justify-between border-b border-dashed border-foreground/10 bg-background/95 px-4 py-3 backdrop-blur-md lg:top-24 lg:z-0 lg:mx-0 lg:mb-0 lg:block lg:self-start lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
				<h2 className="text-2xl font-medium tracking-[-0.03em] lg:text-3xl">{year}</h2>
				<p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
					{items.length} {items.length === 1 ? 'moment' : 'moments'}
				</p>
			</div>

			<div className="columns-1 gap-5 md:columns-2">
				{items.map((media, index) => (
					<PhotoPaper key={media.id} media={media} index={index} total={items.length} onOpen={onOpen} />
				))}
			</div>
		</section>
	)
}
