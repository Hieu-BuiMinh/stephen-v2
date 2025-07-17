# Tilt

3D tilt effect that responds to mouse movement, enhancing UI elements with a dynamic depth effect, customizable rotation factors and spring options.

## Examples

### Basic Tilt Card

```tsx
import { Tilt } from '@/components/core/tilt'

export function TiltCard1() {
	return (
		<Tilt rotationFactor={8} isRevese>
			<div
				style={{
					borderRadius: '12px',
				}}
				className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
			>
				<img
					src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
					alt="Ghost in the shell - Kôkaku kidôtai"
					className="h-48 w-full object-cover"
				/>
				<div className="p-2">
					<h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">Ghost in the Shell</h1>
					<p className="text-zinc-700 dark:text-zinc-400">Kôkaku kidôtai</p>
				</div>
			</div>
		</Tilt>
	)
}
```

### Tilt with Spotlight

Example of the [Spotlight component](https://motion-primitives.com/docs/spotlight) used with the Tilt component.

```tsx
import { Spotlight } from '@/components/core/spotlight'
import { Tilt } from '@/components/core/tilt'

export function TiltSpotlight() {
	return (
		<div className="aspect-video max-w-sm">
			<Tilt
				rotationFactor={6}
				isRevese
				style={{
					transformOrigin: 'center center',
				}}
				springOptions={{
					stiffness: 26.7,
					damping: 4.1,
					mass: 0.2,
				}}
				className="group relative rounded-lg"
			>
				<Spotlight
					className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
					size={248}
					springOptions={{
						stiffness: 26.7,
						damping: 4.1,
						mass: 0.2,
					}}
				/>
				<img
					// src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
					src="https://images.beta.cosmos.so/40fbc749-6796-485b-9588-20204dd7c8f0?format=jpeg"
					alt="Ghost in the shell - Kôkaku kidôtai"
					className="h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0"
				/>
			</Tilt>
			<div className="flex flex-col space-y-0.5 pb-0 pt-3">
				<h3 className="font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400">
					2001: A Space Odyssey
				</h3>
				<p className="text-sm text-black dark:text-white">Stanley Kubrick</p>
			</div>
		</div>
	)
}
```

## Component API

### Border Trail

| Prop           | Type          | Default | Description                                     |
| :------------- | :------------ | :------ | :---------------------------------------------- |
| className      | string        |         | Additional CSS classes for styling the tilt.    |
| style          | MotionStyle   |         | Additional CSS classes for styling the tilt.    |
| rotationFactor | number        | 15      | Controls the maximum rotation angle in degrees. |
| isRevese       | boolean       | false   | Reverses the tilt effect's rotation direction.  |
| springOptions  | SpringOptions |         | Spring options for the tilt effect.             |

## Credits

Initiated by [@AFPedreros](https://github.com/AFPedreros)
