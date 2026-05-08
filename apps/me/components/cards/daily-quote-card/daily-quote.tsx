'use client'

import { useQuery, useQueryClient } from '@repo/stephen-v2-utils/tanstack-query'
import { AnimatePresence } from 'motion/react'
import React, { useState } from 'react'

import { DailyQuoteButton } from '@/components/buttons/daily-quote-button'
import ConfettiRain from '@/components/confetti/confetti-rain'
import { quoteService } from '@/services/common/quote'

import DailyQuoteCard from './daily-quote-card'

export default function DailyQuote() {
	const [isOpen, setIsOpen] = useState(false)
	const queryClient = useQueryClient()

	const { data, isLoading, isFetching } = useQuery({
		queryKey: quoteService.getRandomQuote.key(),
		queryFn: quoteService.getRandomQuote.get,
		enabled: isOpen,
	})

	const handleReload = () => {
		queryClient.invalidateQueries({ queryKey: quoteService.getRandomQuote.key() })
	}

	const loadingMessages = [
		"Let's see what message is waiting for you...",
		'Summoning your wisdom...',
		'Finding the perfect words for you...',
		'Whispering to the universe for your quote...',
		'Manifesting your inspiration...',
		'Aligning the stars for your message...',
		'Gathering pieces of wisdom for you...',
		'Seeking the words you need to hear...',
	]

	const randomLoadingMessage = React.useMemo(
		() => loadingMessages[Math.floor(Math.random() * loadingMessages.length)],
		[isFetching]
	)

	const currentQuote =
		isFetching || !data
			? { id: 0, text: randomLoadingMessage, author: 'The Universe' }
			: { id: 0, text: data.content, author: data.author }

	const handleOpen = () => {
		queryClient.invalidateQueries({ queryKey: quoteService.getRandomQuote.key() })
		setIsOpen(true)
	}

	return (
		<>
			<DailyQuoteButton onClick={handleOpen} />
			<AnimatePresence>
				{isOpen && (
					<>
						{data && !isFetching && <ConfettiRain />}
						<DailyQuoteCard
							quote={currentQuote}
							isLoading={isLoading || isFetching}
							onReload={handleReload}
							onClose={() => setIsOpen(false)}
						/>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
