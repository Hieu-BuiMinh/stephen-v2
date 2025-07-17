# Text Scramble

Text animation that transforms text by randomly cycling through characters before settling on the final content, creating an engaging cryptographic effect.

## Examples

### Text Scramble Basic

```tsx
import { TextScramble } from '@/components/core/text-scramble'

export function TextScrambleBasic() {
	return <TextScramble className="font-mono text-sm uppercase">Text Scramble</TextScramble>
}
```

### Text Scramble with custom trigger

```tsx
'use client'
import { TextScramble } from '@/components/core/text-scramble'
import { useState } from 'react'

export function TextScrambleCustomTrigger() {
	const [isTrigger, setIsTrigger] = useState(false)

	const onHoverStart = () => setIsTrigger(true)
	const onScrambleComplete = () => setIsTrigger(false)

	return (
		<a href="#" className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white">
			<TextScramble
				className="text-sm"
				as="span"
				speed={0.01}
				trigger={isTrigger}
				onHoverStart={onHoverStart}
				onScrambleComplete={onScrambleComplete}
			>
				Tyler, The Creator - I Hope You Fin Your Way Home
			</TextScramble>
		</a>
	)
}
```

### Text Scramble with custom character and duration

```tsx
import { TextScramble } from '@/components/core/text-scramble'

export function TextScrambleCustomCharacterDuration() {
	return (
		<TextScramble className="font-mono text-sm" duration={1.2} characterSet=". ">
			Generating the interface...
		</TextScramble>
	)
}
```

## Component API

### TextScramble

| Prop               | Type                        | Default              | Description                                         |
| :----------------- | :-------------------------- | :------------------- | :-------------------------------------------------- |
| children           | string                      |                      | The text content to be animated.                    |
| as                 | keyof JSX.IntrinsicElements | 'p'                  | The HTML tag to render, defaults to paragraph.      |
| duration           | number                      | 0.8                  | Duration of the effect.                             |
| speed              | number                      | 0.04                 | Speed of the effect.                                |
| characterSet       | string                      | ABCDEF...z0123456789 | Set of characters for the scramble effect           |
| className          | string                      | undefined            | Optional CSS class for styling the component.       |
| trigger            | boolean                     | undefined            | Controls whether the animation should be triggered. |
| onScrambleComplete | () => void                  | undefined            | Callback function when the animation completes.     |
