'use client'

import { cn } from '@repo/stephen-v2-utils'
import { motion } from 'motion/react'
import { type ReactNode, useState } from 'react'

interface HTMLElements {
	a: HTMLAnchorElement
	abbr: HTMLElement
	address: HTMLElement
	area: HTMLAreaElement
	article: HTMLElement
	aside: HTMLElement
	audio: HTMLAudioElement
	b: HTMLElement
	base: HTMLBaseElement
	bdi: HTMLElement
	bdo: HTMLElement
	big: HTMLElement
	blockquote: HTMLQuoteElement
	body: HTMLBodyElement
	br: HTMLBRElement
	button: HTMLButtonElement
	canvas: HTMLCanvasElement
	caption: HTMLElement
	center: HTMLElement
	cite: HTMLElement
	code: HTMLElement
	col: HTMLTableColElement
	colgroup: HTMLTableColElement
	data: HTMLDataElement
	datalist: HTMLDataListElement
	dd: HTMLElement
	del: HTMLModElement
	details: HTMLDetailsElement
	dfn: HTMLElement
	dialog: HTMLDialogElement
	div: HTMLDivElement
	dl: HTMLDListElement
	dt: HTMLElement
	em: HTMLElement
	embed: HTMLEmbedElement
	fieldset: HTMLFieldSetElement
	figcaption: HTMLElement
	figure: HTMLElement
	footer: HTMLElement
	form: HTMLFormElement
	h1: HTMLHeadingElement
	h2: HTMLHeadingElement
	h3: HTMLHeadingElement
	h4: HTMLHeadingElement
	h5: HTMLHeadingElement
	h6: HTMLHeadingElement
	head: HTMLHeadElement
	header: HTMLElement
	hgroup: HTMLElement
	hr: HTMLHRElement
	html: HTMLHtmlElement
	i: HTMLElement
	iframe: HTMLIFrameElement
	img: HTMLImageElement
	input: HTMLInputElement
	ins: HTMLModElement
	kbd: HTMLElement
	keygen: HTMLElement
	label: HTMLLabelElement
	legend: HTMLLegendElement
	li: HTMLLIElement
	link: HTMLLinkElement
	main: HTMLElement
	map: HTMLMapElement
	mark: HTMLElement
	menu: HTMLElement
	menuitem: HTMLElement
	meta: HTMLMetaElement
	meter: HTMLMeterElement
	nav: HTMLElement
	noindex: HTMLElement
	noscript: HTMLElement
	object: HTMLObjectElement
	ol: HTMLOListElement
	optgroup: HTMLOptGroupElement
	option: HTMLOptionElement
	output: HTMLOutputElement
	p: HTMLParagraphElement
	param: HTMLParamElement
	picture: HTMLElement
	pre: HTMLPreElement
	progress: HTMLProgressElement
	q: HTMLQuoteElement
	rp: HTMLElement
	rt: HTMLElement
	ruby: HTMLElement
	s: HTMLElement
	samp: HTMLElement
	search: HTMLElement
	slot: HTMLSlotElement
	script: HTMLScriptElement
	section: HTMLElement
	select: HTMLSelectElement
	small: HTMLElement
	source: HTMLSourceElement
	span: HTMLSpanElement
	strong: HTMLElement
	style: HTMLStyleElement
	sub: HTMLElement
	summary: HTMLElement
	sup: HTMLElement
	table: HTMLTableElement
	template: HTMLTemplateElement
	tbody: HTMLTableSectionElement
	td: HTMLTableDataCellElement
	textarea: HTMLTextAreaElement
	tfoot: HTMLTableSectionElement
	th: HTMLTableHeaderCellElement
	thead: HTMLTableSectionElement
	time: HTMLTimeElement
	title: HTMLTitleElement
	tr: HTMLTableRowElement
	track: HTMLTrackElement
	u: HTMLElement
	ul: HTMLUListElement
	var: HTMLElement
	video: HTMLVideoElement
	wbr: HTMLElement
	webview: HTMLWebViewElement
}

type AnimatedBlockProps = {
	children: ReactNode
	delay?: number
	duration?: number
	className?: string
	as?: keyof HTMLElements
	type?: 'FADE_IN' | 'FADE_IN_FROM_BOTTOM' | 'BLUR_IN' | 'BOUNCE_IN'
	restartOnClick?: boolean
}

function AnimatedBlock({
	children,
	delay = 0,
	duration = 0.6,
	className = '',
	as = 'div',
	type = 'FADE_IN',
	restartOnClick = false,
}: AnimatedBlockProps) {
	const [triggerAnimation, setTriggerAnimation] = useState(false)

	const handleClick = () => {
		if (restartOnClick) {
			setTriggerAnimation(!triggerAnimation)
		}
	}

	const Component = motion[as]

	const animateProps = {
		initial: {},
		animate: {},
		whileInView: {},
		transition: {},
	}

	switch (type) {
		case 'FADE_IN':
			animateProps.initial = { opacity: 0, y: 20 }
			animateProps.whileInView = { opacity: 1, y: 0 }
			animateProps.transition = {
				duration,
				delay,
				ease: 'easeOut',
			}
			break
		case 'BLUR_IN':
			animateProps.initial = { filter: 'blur(20px)', opacity: 0 }
			animateProps.whileInView = { filter: 'blur(0px)', opacity: 1, y: 0 }
			animateProps.transition = {
				duration,
				delay,
				ease: 'easeOut',
			}
			break
		case 'FADE_IN_FROM_BOTTOM':
			animateProps.initial = { filter: 'blur(20px)', opacity: 0 }
			animateProps.whileInView = { filter: 'blur(0px)', opacity: 1 }
			animateProps.transition = { duration, delay, ease: 'easeOut' }
			break
		case 'BOUNCE_IN':
			animateProps.initial = { scale: 0, opacity: 0 }
			animateProps.whileInView = { scale: 1, opacity: 1 }
			animateProps.transition = {
				duration: 0.4,
				delay,
				scale: { type: 'spring', visualDuration: 0.4, bounce: 0.75 },
			}
			break
		default:
			break
	}

	return (
		<Component
			key={triggerAnimation ? 'triggered' : 'reset'}
			{...animateProps}
			className={cn(restartOnClick && 'cursor-pointer', className)}
			onClick={handleClick}
			whileTap={restartOnClick ? { scale: 0.9 } : {}}
			viewport={{ once: true }}
		>
			{children}
		</Component>
	)
}

export { AnimatedBlock }
