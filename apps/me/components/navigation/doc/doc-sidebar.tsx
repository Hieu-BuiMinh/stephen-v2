import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@repo/stephen-v2-ui/shadcn'

import type { ITableOfContent } from '@/types/doc/doc-collection'

function DocSidebar({
	className,
	docId,
	tableOfContent,
}: {
	className?: string
	docId: string
	tableOfContent: ITableOfContent[] | undefined
}) {
	if (!tableOfContent) return null

	const renderTableOfContent = (items: ITableOfContent[]) => {
		return items.map((item) => {
			const randomId = Math.random().toString(36).substr(2, 9)
			if (!item.id) {
				return (
					<AccordionItem key={randomId} value={randomId}>
						<AccordionTrigger>{item.title}</AccordionTrigger>
						{item?.children && (
							<AccordionContent className="pl-3">
								<Accordion type="single" collapsible>
									{renderTableOfContent(item.children)}
								</Accordion>
							</AccordionContent>
						)}
					</AccordionItem>
				)
			}

			if (!item?.children) {
				return (
					<div key={randomId} className="pl-3 py-3">
						{item?.title}
					</div>
				)
			}

			return (
				<AccordionItem key={item.id} value={item.id}>
					<AccordionTrigger>{item.title}</AccordionTrigger>

					{item?.children && (
						<AccordionContent className="pl-3">
							<Accordion type="single" collapsible>
								{renderTableOfContent(item.children)}
							</Accordion>
						</AccordionContent>
					)}
				</AccordionItem>
			)
		})
	}

	return (
		<div className={className}>
			<Accordion type="single" collapsible>
				{renderTableOfContent(tableOfContent)}
			</Accordion>
		</div>
	)
}

export default DocSidebar
