import { useState } from 'react'
import { Check, Copy, ExternalLink, Image as ImageIcon, Video as VideoIcon } from 'lucide-react'
import { BlurImage, Button, Card, CardContent, CardFooter, toast } from '@repo/stephen-v2-ui/shadcn'
import type { CloudinaryResource } from '@/services/cloudinary.service'

interface AssetCardProps {
	asset: CloudinaryResource
}

export function AssetCard({ asset }: AssetCardProps) {
	const [copied, setCopied] = useState<string | null>(null)

	const isVideo = asset.resource_type === 'video'
	const url = asset.secure_url

	const copyToClipboard = async (text: string, type: string) => {
		await navigator.clipboard.writeText(text)
		setCopied(type)
		toast.success(`Copied ${type}`)
		setTimeout(() => setCopied(null), 2000)
	}

	const mdxSnippet = isVideo
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
		<Card className="group flex h-full flex-col overflow-hidden">
			<CardContent className="relative overflow-hidden flex aspect-square w-full items-center justify-center bg-muted p-0">
				{isVideo ? (
					<div className="flex flex-col items-center gap-2">
						<VideoIcon className="size-10 text-muted-foreground" />
						<span className="max-w-[150px] truncate font-mono text-xs text-muted-foreground">
							{asset.public_id}
						</span>
					</div>
				) : (
					<BlurImage
						src={url}
						alt={asset.public_id}
						className="size-full object-cover transition-transform group-hover:scale-105"
						width={asset.width > 300 ? 300 : asset.width}
						height={asset.height > 300 ? 300 : asset.height}
					/>
				)}
				<div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
					<Button size="icon" variant="secondary" asChild title="Open original">
						<a href={url} target="_blank" rel="noreferrer">
							<ExternalLink className="size-4" />
						</a>
					</Button>
				</div>
			</CardContent>
			<CardFooter className="flex flex-1 flex-col justify-between p-2 pt-1.5">
				<div className="flex w-full items-center justify-between gap-1 overflow-hidden pb-1">
					<span className="flex-1 truncate font-mono text-[10px] opacity-60">
						{asset.public_id.split('/').pop()}
					</span>
					<span className="text-[10px] uppercase opacity-40">{asset.format}</span>
				</div>
				<div className="grid w-full grid-cols-2 gap-1">
					<Button
						variant="outline"
						size="sm"
						className="h-7 gap-1 text-[10px]"
						onClick={() => copyToClipboard(url, 'URL')}
					>
						{copied === 'URL' ? <Check className="size-3" /> : <Copy className="size-3" />}
						URL
					</Button>
					<Button
						variant="outline"
						size="sm"
						className="h-7 gap-1 text-[10px]"
						onClick={() => copyToClipboard(mdxSnippet, 'MDX')}
					>
						{copied === 'MDX' ? <Check className="size-3" /> : <ImageIcon className="size-3" />}
						MDX
					</Button>
				</div>
			</CardFooter>
		</Card>
	)
}
