# Text Effect

Easily animate text content with various effects. You can apply animations per character or per word, and customize the animation effects using custom variants or preset animations.

## Examples

### Text Effect per character

```tsx
import { TextEffect } from '@/components/core/text-effect'

export function TextEffectPerChar() {
	return (
		<TextEffect per="char" preset="fade">
			Animate your ideas with motion-primitives
		</TextEffect>
	)
}
```

### Text Effect per word

```tsx
import { TextEffect } from '../../../components/core/text-effect'

export function TextEffectPerWord() {
	return (
		<TextEffect per="word" as="h3" preset="blur">
			Animate your ideas with motion-primitives
		</TextEffect>
	)
}
```

### Text Effect with preset

```tsx
import { TextEffect } from '@/components/core/text-effect'

export function TextEffectWithPreset() {
	return (
		<TextEffect per="word" as="h3" preset="slide">
			Animate your ideas with motion-primitives
		</TextEffect>
	)
}
```

### Text Effect with custom variants

```tsx
'use client'
import { TextEffect } from '@/components/core/text-effect'

export function TextEffectWithCustomVariants() {
	const getRandomColor = () => {
		const letters = '0123456789ABCDEF'
		let color = '#'
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)]
		}
		return color
	}

	const fancyVariants = {
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: 0.05,
				},
			},
		},
		item: {
			hidden: () => ({
				opacity: 0,
				y: Math.random() * 100 - 50,
				rotate: Math.random() * 90 - 45,
				scale: 0.3,
				color: getRandomColor(),
			}),
			visible: {
				opacity: 1,
				y: 0,
				rotate: 0,
				scale: 1,
				color: getRandomColor(),
				transition: {
					type: 'spring',
					damping: 12,
					stiffness: 200,
				},
			},
		},
	}

	return (
		<TextEffect per="word" variants={fancyVariants}>
			Animate your ideas with motion-primitives
		</TextEffect>
	)
}
```

### Text Effect with custom delay

```tsx
import { TextEffect } from '@/components/core/text-effect'

export function TextEffectWithCustomDelay() {
	return (
		<div className="flex flex-col space-y-0">
			<TextEffect
				per="char"
				delay={0.5}
				variants={{
					container: {
						hidden: {
							opacity: 0,
						},
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.05,
							},
						},
					},
					item: {
						hidden: {
							opacity: 0,
							rotateX: 90,
							y: 10,
						},
						visible: {
							opacity: 1,
							rotateX: 0,
							y: 0,
							transition: {
								duration: 0.2,
							},
						},
					},
				}}
			>
				Animate your ideas
			</TextEffect>
			<TextEffect per="char" delay={1.5}>
				with motion-primitives
			</TextEffect>
			<TextEffect per="char" delay={2.5} className="pt-12 text-xs" preset="blur">
				(and delay!)
			</TextEffect>
		</div>
	)
}
```

### Text Effect per line

```tsx
import { TextEffect } from '@/components/core/text-effect'

export function TextEffectPerLine() {
	return (
		<TextEffect
			per="line"
			as="p"
			segmentWrapperClassName="overflow-hidden block"
			variants={{
				container: {
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.2 },
					},
				},
				item: {
					hidden: {
						opacity: 0,
						y: 40,
					},
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.4,
						},
					},
				},
			}}
		>
			{`  
                now live on motion-primitives!
                now live on motion-primitives!
                now live on motion-primitives!
            `}
		</TextEffect>
	)
}
```

### Text Effect with exit animation

```tsx
'use client'
import { useState, useEffect } from 'react'
import { TextEffect } from '@/components/core/text-effect'

export function TextEffectWithExit() {
	const [trigger, setTrigger] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			setTrigger((prev) => !prev)
		}, 2000)

		return () => clearInterval(interval)
	}, [])
	const blurSlideVariants = {
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: { staggerChildren: 0.01 },
			},
			exit: {
				transition: { staggerChildren: 0.01, staggerDirection: 1 },
			},
		},
		item: {
			hidden: {
				opacity: 0,
				filter: 'blur(10px) brightness(0%)',
				y: 0,
			},
			visible: {
				opacity: 1,
				y: 0,
				filter: 'blur(0px) brightness(100%)',
				transition: {
					duration: 0.4,
				},
			},
			exit: {
				opacity: 0,
				y: -30,
				filter: 'blur(10px) brightness(0%)',
				transition: {
					duration: 0.4,
				},
			},
		},
	}

	return (
		<TextEffect className="inline-flex" per="char" variants={blurSlideVariants} trigger={trigger}>
			Animate your ideas with motion-primitives
		</TextEffect>
	)
}
```

### Text Effect with speed

You can control the speed of the animation by using the `speedReveal` and `speedSegment` props.

```tsx
import { TextEffect } from '@/components/core/text-effect'

export function TextEffectSpeed() {
	return (
		<TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}>
			Animate your ideas with motion-primitives.
		</TextEffect>
	)
}
```

### Component API

| Prop                    | Type                                                        | Default   | Description                                                     |
| :---------------------- | :---------------------------------------------------------- | :-------- | :-------------------------------------------------------------- |
| children                | string                                                      |           | The text content to be animated.                                |
| per                     | 'word' \| 'char' \| 'line'                                  | 'word'    | Defines whether animation applies per word, character, or line. |
| as                      | keyof JSX.IntrinsicElements                                 | 'p'       | The HTML tag to render, defaults to paragraph.                  |
| variants                | `{ container?: Variants; item?: Variants; }`                | undefined | Custom variants for container and item animations.              |
| className               | string                                                      | undefined | Optional CSS class for styling the component.                   |
| preset                  | 'blur-sm' \| 'fade-in-blur' \| 'scale' \| 'fade' \| 'slide' | 'fade'    | Preset animations to apply to the text.                         |
| delay                   | number                                                      | 0         | Delay before the animation starts.                              |
| trigger                 | boolean                                                     | true      | Controls whether the animation should be triggered.             |
| onAnimationComplete     | () => void                                                  | undefined | Callback function when the animation completes.                 |
| onAnimationStart        | () => void                                                  | undefined | Callback function when the animation starts.                    |
| segmentWrapperClassName | string                                                      | undefined | Optional CSS class for styling segment wrappers.                |
| style                   | CSSProperties                                               | undefined | Optional inline styles for the component.                       |
| containerTransition     | Transition                                                  | undefined | Optional transition for the container.                          |
| segmentTransition       | Transition                                                  | undefined | Optional transition for the segments.                           |
| speedReveal             | number                                                      | 1         | Controls the speed of the reveal animation.                     |
| speedSegment            | number                                                      | 1         | Controls the speed of the animation.                            |
