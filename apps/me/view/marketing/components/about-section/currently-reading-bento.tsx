import { GlareHover } from '@repo/stephen-v2-ui/motion'
import { Book } from '@repo/stephen-v2-ui/shadcn'
import { BugOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import BentoCard from '@/view/marketing/components/bento-card'

function CurrentlyReadingBento() {
	return (
		<BentoCard className="group overflow-hidden size-full bg-dots-sm">
			<div className="flex items-center justify-center gap-8 w-full">
				<Link href="https://labs42io.github.io/clean-code-typescript" target="_blank">
					<Book
						width={190}
						texture
						title="Typescript Clean Code Concepts"
						color="#155798"
						textColor="#fff"
						variant="simple"
						icon={<BugOff size={24} />}
					/>
				</Link>
				<Link href="https://youtube.com/shorts/Sp0QmjcYLEU?si=iEEdyRPLVrrPRqq7" target="_blank">
					<Book
						width={190}
						title="48 Laws of Power"
						textColor="#fff"
						icon={<span className="text-xs">-Robert Greene-</span>}
						illustration={
							<Image
								src="/assets/images/books/48-laws-of-power-cover.png"
								className="size-full object-cover opacity-50"
								width={220}
								height={150}
								alt="48-laws-of-power-cover.png"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						}
					/>
				</Link>
				<Link href="/assets/videos/books/game-of-thrones-intro.mp4" target="_blank">
					<Book
						width={190}
						title="Game of Thrones"
						color="#4A6189"
						textColor="#fff"
						icon={<span className="text-xs">-George R.R. Martin-</span>}
						illustration={
							<Image
								src="/assets/images/books/game-of-thrones-book-cover.png"
								className="size-full object-cover"
								width={220}
								height={150}
								alt="game-of-thrones-book-cover.png"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						}
					/>
				</Link>
			</div>
			<p className="absolute bottom-0 -left-1/2 -translate-y-1/2 hidden p-2 backdrop-blur-2xl rounded-2xl border text-foreground text-xl pointer-events-none group-hover:left-4 transition-all duration-300 lg:block">
				Currently Reading & Watching
			</p>
		</BentoCard>
	)
}

export default CurrentlyReadingBento
