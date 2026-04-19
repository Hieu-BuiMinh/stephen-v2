import { useState } from 'react'
import {
	Check,
	Code,
	Copy,
	ExternalLink,
	Image as ImageIcon,
	Link,
	Music,
	Play,
	Video as VideoIcon,
	Trash2,
	Loader2,
} from 'lucide-react'
import { BlurImage, Button, Card, CardContent, CardFooter, toast } from '@repo/stephen-v2-ui/shadcn'
import { useVideoThumbnail } from '@repo/stephen-v2-ui/hooks'
import { useCloudinaryQuery } from '@/queries/use-cloudinary-query'
import { ConfirmModal } from '@/components/modals/confirm-modal'
import type { CloudinaryResource } from '@/services/admin/cloudinary/cloudinary-res.dto'

interface AssetCardProps {
	asset: CloudinaryResource
}

export function AssetCard({ asset }: AssetCardProps) {
	const assetName = asset.public_id.split('/').pop() || asset.public_id
	const [copied, setCopied] = useState<string | null>(null)

	const { useDelete } = useCloudinaryQuery()
	const { mutate: deleteAsset, isPending: isDeleting } = useDelete(asset.folder)

	const handleDelete = () => {
		deleteAsset({ publicId: asset.public_id, resourceType: asset.resource_type })
	}

	const isAudio = ['mp3', 'wav', 'm4a', 'ogg'].includes(asset.format.toLowerCase())
	const isVideo = asset.resource_type === 'video' && !isAudio
	const url = asset.secure_url

	const { thumbnailUrl } = useVideoThumbnail(isVideo ? url : '')

	const copyToClipboard = async (text: string, type: string) => {
		await navigator.clipboard.writeText(text)
		setCopied(type)
		toast.success(`Copied ${type}`)
		setTimeout(() => setCopied(null), 2000)
	}

	const mdxSnippet = isAudio
		? `<StickyAudio
  audioTrack={{
    id: "${asset.public_id}",
    name: "${asset.public_id.split('/').pop()}",
    url: "${url}",
    artist: "Stephen",
  }}
/>`
		: isVideo
			? `<VideoZoom
  src="${url}"
  width={${asset.width}}
  height={${asset.height}}
  className="aspect-square w-full object-cover rounded-md border"
/>`
			: `<Image
  src="${url}"
  width={${asset.width}}
  height={${asset.height}}
  className="aspect-square w-full border"
  imgClassName="object-contain"
/>`

	return (
		<Card className="group rounded-md flex h-full flex-col overflow-hidden py-0 gap-0">
			<CardContent className="relative aspect-square w-full overflow-hidden p-2">
				<a href={url} target="_blank" rel="noreferrer" className="group/asset block size-full overflow-hidden">
					{isAudio ? (
						<div className="flex size-full items-center justify-center bg-muted/40 transition-colors group-hover/asset:bg-muted/60">
							<Music className="size-12 text-muted-foreground/50 transition-transform duration-500 group-hover/asset:scale-110" />
						</div>
					) : (
						<BlurImage
							src={isVideo ? thumbnailUrl || '' : url}
							alt={asset.public_id}
							className="size-full object-cover transition-transform duration-500 group-hover/asset:scale-105 rounded-sm"
							width={asset.width > 300 ? 300 : asset.width}
							height={asset.height > 300 ? 300 : asset.height}
						/>
					)}
					<div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover/asset:opacity-100">
						<div className="flex flex-col items-center gap-1 text-white">
							<span className="rounded-lg bg-background/50 p-2">
								<ExternalLink className="size-5" />
							</span>
							<span className="text-[10px] font-medium uppercase tracking-wider">Open Original</span>
						</div>
					</div>
				</a>
			</CardContent>
			<CardFooter className="flex flex-1 flex-col justify-between p-2 pt-1.5">
				<div className="flex w-full items-center justify-between gap-1 overflow-hidden pb-1">
					<span className="flex-1 truncate font-mono text-[10px] text-muted-foreground">
						{asset.public_id.split('/').pop()}
					</span>
					<span className="text-[10px] uppercase text-muted-foreground">{asset.format}</span>
				</div>
				<div className="flex w-full items-center gap-2">
					<Button
						variant="outline"
						size="icon"
						className="size-7 gap-1 text-[10px]"
						onClick={() => copyToClipboard(url, 'URL')}
					>
						{copied === 'URL' ? <Check className="size-3" /> : <Link className="size-3" />}
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="size-7 gap-1 text-[10px]"
						onClick={() => copyToClipboard(mdxSnippet, 'MDX')}
					>
						{copied === 'MDX' ? <Check className="size-3" /> : <Code className="size-3" />}
					</Button>

					<ConfirmModal
						title="Delete Asset"
						description={`Are you sure you want to delete "${assetName}"? This action cannot be undone.`}
						onConfirm={handleDelete}
						variant="destructive"
						isLoading={isDeleting}
					>
						<Button
							variant="outline"
							size="icon"
							className="size-7 border-red-200 text-red-500 hover:border-red-500 hover:bg-red-50 hover:text-red-600 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-950/30"
							disabled={isDeleting}
						>
							{isDeleting ? <Loader2 className="size-3 animate-spin" /> : <Trash2 className="size-3" />}
						</Button>
					</ConfirmModal>
				</div>
			</CardFooter>
		</Card>
	)
}
