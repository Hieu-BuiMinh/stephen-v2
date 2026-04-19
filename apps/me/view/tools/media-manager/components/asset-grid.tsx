import { Skeleton } from '@repo/stephen-v2-ui/shadcn'
import type { CloudinaryResource } from '@/services/admin/cloudinary/cloudinary-res.dto'
import { AssetCard } from './asset-card'

interface AssetGridProps {
	assets: CloudinaryResource[] | undefined
	isLoading: boolean
}

export function AssetGrid({ assets, isLoading }: AssetGridProps) {
	if (isLoading) {
		return (
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{Array.from({ length: 8 }).map((_, i) => (
					<Skeleton key={i} className="aspect-[4/5] rounded-lg" />
				))}
			</div>
		)
	}

	if (!assets || assets.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center rounded-lg border border-dashed bg-muted/30 p-20">
				<p className="text-sm italic text-muted-foreground">No assets found in this folder.</p>
			</div>
		)
	}

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{assets.map((asset) => (
				<AssetCard key={asset.public_id} asset={asset} />
			))}
		</div>
	)
}
