### Text Roll

A text roll component that rotates each character, fully customizable for nice text animations.

## Examples

### Text Roll basic

```tsx
import { TextRoll } from '@/components/core/text-roll'

export function TextRollBasic() {
	return <TextRoll className="text-4xl text-black dark:text-white">motion-primitives</TextRoll>
}
```

### Text Roll custom variants

```tsx
import { TextRoll } from '@/components/core/text-roll'

export function TextRollCustomVariants() {
	return (
		<TextRoll
			className="text-4xl text-black dark:text-white"
			variants={{
				enter: {
					initial: { rotateX: 0, filter: 'blur(0px)' },
					animate: { rotateX: 90, filter: 'blur(2px)' },
				},
				exit: {
					initial: { rotateX: 90, filter: 'blur(2px)' },
					animate: { rotateX: 0, filter: 'blur(0px)' },
				},
			}}
		>
			motion-primitives
		</TextRoll>
	)
}
```

### Text Roll custom transition delay

```tsx
'use client'
import { TextRoll } from '@/components/core/text-roll'

export function TextRollCustomTransitionDelay() {
	const getEnterDelay = (i: number) => i * 0.05
	const getExitDelay = (i: number) => i * 0.05 + 0.05

	return (
		<TextRoll
			className="overflow-clip text-4xl text-black dark:text-white"
			variants={{
				enter: {
					initial: { y: 0 },
					animate: { y: 40 },
				},
				exit: {
					initial: { y: -40 },
					animate: { y: 0 },
				},
			}}
			duration={0.3}
			getEnterDelay={getEnterDelay}
			getExitDelay={getExitDelay}
			transition={{
				ease: [0.175, 0.885, 0.32, 1.1],
			}}
		>
			motion-primitives
		</TextRoll>
	)
}
```

## Component API

### Text Roll

| Prop                | Type                  | Default               | Description                                                   |
| :------------------ | :-------------------- | :-------------------- | :------------------------------------------------------------ |
| children            | React.ReactNode       | -                     | The text to roll.                                             |
| className           | string                | -                     | The class name to apply to the component.                     |
| duration            | number                | 0.5                   | The duration of the animation.                                |
| getEnterDelay       | (i: number) => number | (i) => i \* 0.1       | The delay of the animation for each character.                |
| getExitDelay        | (i: number) => number | (i) => i \* 0.1 + 0.2 | The delay of the animation for each character.                |
| transition          | Transition            | `{ ease: 'easeIn' }`  | The transition of the animation.                              |
| variants            | Object                | -                     | The variants of the animation.                                |
| onAnimationComplete | () => void            | -                     | The callback function to call when the animation is complete. |
