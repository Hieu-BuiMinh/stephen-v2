import { useIsMobile } from '@repo/stephen-v2-ui/hooks'
import { BookV2, Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@repo/stephen-v2-ui/shadcn'
import { BugOff, CircleQuestionMark } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import BentoCard from '@/view/home/components/bento-card'

function CurrentlyReadingBento() {
	const isMobile = useIsMobile()

	const Books = [
		<Link href="https://labs42io.github.io/clean-code-typescript" target="_blank" className="z-10 flex">
			<BookV2
				width={isMobile ? 150 : 190}
				textured
				title="Typescript Clean Code Concepts"
				spineColor="#155798"
				textColor="#fff"
				variant="simple"
				icon={<BugOff size={24} />}
			/>
		</Link>,

		<Link
			href="https://malleable-credit-01d.notion.site/dc1532e6a7d94c6da69b961b25892773"
			target="_blank"
			className="z-10 flex"
		>
			<BookV2
				width={isMobile ? 150 : 190}
				textured
				title="30+ React Interview Questions and Answers"
				spineColor="#2A3653"
				textColor="#fff"
				variant="simple"
				icon={<CircleQuestionMark size={24} />}
			/>
		</Link>,
		<Link href="https://youtube.com/shorts/Sp0QmjcYLEU?si=iEEdyRPLVrrPRqq7" target="_blank" className="z-10 flex">
			<BookV2
				width={isMobile ? 150 : 190}
				title="48 Laws of Power"
				textured
				coverColor="#7f1d1d"
				spineColor="#333"
				textColor="#000"
				variant="stripe"
				icon={<span className="text-xs">Robert Greene</span>}
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
		</Link>,
		<Link href="/assets/videos/books/game-of-thrones-intro.mp4" target="_blank" className="z-10 flex">
			<BookV2
				width={isMobile ? 150 : 190}
				title="Game of Thrones"
				coverColor="#2A416B"
				spineColor="#4A6189"
				textColor="#ddd"
				variant="stripe"
				icon={<span className="text-xs">George R.R. Martin</span>}
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
		</Link>,
		<Link href="https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring" target="_blank" className="z-10 flex">
			<BookV2
				width={isMobile ? 150 : 190}
				title="The Lord of The Rings"
				spineColor="#706837"
				textColor="#333"
				textured
				variant="stripe"
				icon={<span className="text-xs">J.R.R.Tolkien</span>}
				illustration={
					<Image
						src="/assets/images/books/the-lord-of-the-rings.png"
						className="size-full object-cover"
						width={220}
						height={150}
						alt="the-lord-of-the-rings.png"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				}
			/>
		</Link>,
	]
	return (
		<BentoCard className="group overflow-hidden size-full bg-dots-sm p-0 min-h-[220px]">
			<Marquee className="h-full overflow-visible">
				<MarqueeFade side="left" className="pointer-events-none" />
				<MarqueeFade side="right" className="pointer-events-none" />
				<MarqueeContent direction="left" className="h-full">
					{Books.map((book, index) => (
						<MarqueeItem
							className="size-auto flex items-center justify-center mx-4 overflow-visible"
							key={index}
						>
							{book}
						</MarqueeItem>
					))}
				</MarqueeContent>
			</Marquee>
			<p className="absolute bottom-0 -left-1/2 -translate-y-1/2 hidden p-2 backdrop-blur-2xl rounded-2xl border text-foreground text-xl pointer-events-none group-hover:left-4 transition-all duration-300 lg:block z-10">
				Currently Reading & Watching
			</p>
		</BentoCard>
	)
}

export default CurrentlyReadingBento
