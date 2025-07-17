# Text Shimmer

Shimmer effect on text. Easily adjust the duration and the spread of the shimmer effect.

## Examples

### Text Shimmer Basic

```tsx
import { TextShimmer } from '@/components/core/text-shimmer'

export function TextShimmerBasic() {
	return (
		<TextShimmer className="font-mono text-sm" duration={1}>
			Generating code...
		</TextShimmer>
	)
}
```

### Text Shimmer Color

You can use the [--base-color] and [--base-gradient-color] CSS variables to customize the color of the shimmer effect.

```tsx
import { TextShimmer } from '@/components/core/text-shimmer'

export function TextShimmerColor() {
	return (
		<TextShimmer
			duration={1.2}
			className="text-xl font-medium [--base-color:var(--color-blue-600)] [--base-gradient-color:var(--color-blue-200)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]"
		>
			Hi, how are you?
		</TextShimmer>
	)
}
```

## Component API

| Prop            | Type       | Default | Description                               |
| :-------------- | :--------- | :------ | :---------------------------------------- |
| children        | string     |         | The text content.                         |
| as              | string     | 'p'     | The HTML element to render.               |
| className       | string     |         | The class name to apply to the component. |
| duration        | number     | 1       | The duration of the wave effect.          |
| zDistance       | number     | 10      | The distance of the wave effect.          |
| xDistance       | number     | 2       | The distance of the wave effect.          |
| yDistance       | number     | -2      | The distance of the wave effect.          |
| spread          | number     | 1       | The spread of the wave effect.            |
| scaleDistance   | number     | 1.1     | The scale distance of the wave effect.    |
| rotateYDistance | number     | 10      | The rotateY distance of the wave effect.  |
| transition      | Transition |         | The transition of the wave effect.        |
