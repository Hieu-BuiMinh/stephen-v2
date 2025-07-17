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

### TextShimmer

| Prop      | Type                        | Default   | Description                                    |
| :-------- | :-------------------------- | :-------- | :--------------------------------------------- |
| children  | string                      |           | The text content.                              |
| as        | keyof JSX.IntrinsicElements | 'p'       | The HTML tag to render, defaults to paragraph. |
| className | string                      | undefined | Optional CSS class for styling the component.  |
| duration  | number                      | 2         | The duration of the shimmer effect.            |
| spread    | number                      | 2         | The spread of the shimmer effect.              |

## Credits

Inspired by [JohnPhamous](https://x.com/JohnPhamous/status/1846963157027508504) for the idea of the shimmer effect that scales with the content length.
