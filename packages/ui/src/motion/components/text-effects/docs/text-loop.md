# Text Loop

Text animation that transitions between multiple items, creating an engaging looping effect

## Examples

### Text Loop Basic

```tsx
import { TextLoop } from '@/components/core/text-loop'

export function TextLoopBasic() {
	return (
		<TextLoop className="font-mono text-sm">
			<span>How can I assist you today?</span>
			<span>Generate a logo</span>
			<span>Create a component</span>
			<span>Draw a diagram</span>
		</TextLoop>
	)
}
```

Text Loop with custom variants and transition

```tsx
import { TextLoop } from '@/components/core/text-loop'

export function TextLoopCustomVariantsTransition() {
	return (
		<p className="inline-flex whitespace-pre-wrap text-sm">
			Beautiful templates for{' '}
			<TextLoop
				className="overflow-y-clip"
				transition={{
					type: 'spring',
					stiffness: 900,
					damping: 80,
					mass: 10,
				}}
				variants={{
					initial: {
						y: 20,
						rotateX: 90,
						opacity: 0,
						filter: 'blur(4px)',
					},
					animate: {
						y: 0,
						rotateX: 0,
						opacity: 1,
						filter: 'blur(0px)',
					},
					exit: {
						y: -20,
						rotateX: -90,
						opacity: 0,
						filter: 'blur(4px)',
					},
				}}
			>
				<span>Founders</span>
				<span>Developers</span>
				<span>Designers</span>
				<span>Design Engineers</span>
			</TextLoop>
		</p>
	)
}
```

### Text Loop with onIndexChange

You can use the `onIndexChange` prop to trigger a callback function when the index changes. In this example, we use it to create alternating animation directions.

```tsx
'use client'
import { TextLoop } from '@/components/core/text-loop'
import { Music } from 'lucide-react'
import { useState } from 'react'

export function TextLoopOnIndexChange() {
	const [direction, setDirection] = useState(-1)

	const onIndexChange = (index: number) => {
		setDirection(index === 0 ? -1 : 1)
	}

	return (
		<TextLoop
			className="text-sm"
			transition={{
				type: 'spring',
				stiffness: 150,
				damping: 19,
				mass: 1.2,
			}}
			interval={2.5}
			onIndexChange={onIndexChange}
			variants={{
				initial: {
					y: -direction * 20,
					rotateX: -direction * 90,
					opacity: 0,
					filter: 'blur(4px)',
				},
				animate: {
					y: 0,
					rotateX: 0,
					opacity: 1,
					filter: 'blur(0px)',
				},
				exit: {
					y: -direction * 20,
					rotateX: -direction * 90,
					opacity: 0,
					filter: 'blur(4px)',
				},
			}}
		>
			<span>
				<Music size={12} className="mr-1 inline-block" />A Little Lost・Arthur Russell
			</span>
			<span>La Trinité, Martinique</span>
		</TextLoop>
	)
}
```

## Component API

### Text Loop

| Prop          | Type                         | Default   | Description                                                     |
| :------------ | :--------------------------- | :-------- | :-------------------------------------------------------------- |
| children      | React.ReactNode[]            |           | The text content to be animated.                                |
| className     | string                       |           | Additional CSS classes for styling.                             |
| interval      | number                       | 2         | Time interval between text changes in seconds.                  |
| transition    | Transition                   |           | Animation transition settings. Can't be more than the interval. |
| variants      | Variants                     |           | Custom animation variants.                                      |
| onIndexChange | (index: number) => void      |           | Callback function that triggers when the index changes.         |
| trigger       | boolean                      | true      | Whether to trigger the animation.                               |
| mode          | AnimatePresenceProps['mode'] | popLayout | Mode of for the AnimatePresence component.                      |
