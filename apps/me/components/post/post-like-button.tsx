'use client'

import NumberFlow from '@number-flow/react'
import { Button, Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import confetti from 'canvas-confetti'
import { Heart, PartyPopper } from 'lucide-react'
import { useRef } from 'react'

interface PostLikeButtonProps {
	likes?: number
	className?: string
	onLike: () => void
	isLoading?: boolean
	hasLiked: boolean
}

function PostLikeButton({ likes = 0, className, onLike, isLoading = false, hasLiked }: PostLikeButtonProps) {
	const buttonRef = useRef<HTMLButtonElement>(null)

	const playConfetti = () => {
		const buttonBounds = buttonRef.current?.getBoundingClientRect()

		if (!buttonBounds) return
		const heartEmoji = confetti.shapeFromText({ text: '❤️', scalar: 2 })
		const partyEmoji = confetti.shapeFromText({ text: '🎉', scalar: 2 })
		const origin = {
			x: (buttonBounds.left + buttonBounds.width / 2) / window.innerWidth,
			y: buttonBounds.top / window.innerHeight,
		}

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 100,
			origin,
			shapes: [heartEmoji, partyEmoji],
		})
	}

	const handleLike = () => {
		onLike()

		if (!hasLiked) playConfetti()
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						ref={buttonRef}
						type="button"
						variant="outline"
						className={cn('gap-2 w-fit', className)}
						aria-label={`${hasLiked ? 'Unlike' : 'Like'} this post. ${likes} likes`}
						onClick={handleLike}
						disabled={isLoading}
					>
						<Heart
							className={cn('size-4 stroke-red-500 text-red-500', hasLiked && 'fill-red-500')}
							aria-hidden="true"
						/>
						<Separator orientation="vertical" className="hidden h-4 lg:block" />
						<span className="hidden items-center gap-2 lg:flex">
							<NumberFlow value={likes} format={{ trailingZeroDisplay: 'stripIfInteger' }} />
							<PartyPopper className="size-4" aria-hidden="true" />
						</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>{hasLiked ? `🥺 Don't` : 'Give it a ❤️ and watch the magic!'}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default PostLikeButton
