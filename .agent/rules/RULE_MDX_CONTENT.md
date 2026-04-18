---
trigger: always_on
description: Guidelines for using specialized media components (Image, VideoZoom) and layout patterns within MDX content files.
---

# MDX Content Components Rule

## 1. Purpose

To ensure a consistent and high-quality UI across all content pages by standardizing how media items are implemented in MDX.

---

## 2. Image Component (`<Image />`)

Use the standard `<Image />` component for all static images instead of raw HTML or markdown syntax.

### 2.1 Standard Styling

- **Grid Layout**: Always use `className="aspect-square w-full border"`.
- **Inner Image Control**: Use `imgClassName` for specific image behavior (e.g., `object-contain`, `object-cover`).

### 2.2 Strict Sizing

When Tailwind classes are insufficient or cause layout issues, use the `style` prop for precise overrides.

✅ Example:

```tsx
<Image
	className="border"
	src="/path/to/image.png"
	style={{ width: '300px', height: '300px', margin: 'auto' }}
	imgClassName="object-contain"
/>
```

---

## 3. Video Component (`<VideoZoom />`)

Use `<VideoZoom />` for all video content to provide a consistent interactive viewing experience.

### 3.1 Features

- **Auto-Thumbnail**: If `previewImage` is not provided, the system automatically generates a thumbnail from the video at **1.5s**.
- **Zoom Support**: Integrates with the site-wide modal system.

### 3.2 Standard Styling

- **Grid Layout**: Always use `className="aspect-square w-full object-cover rounded-md border"`.

✅ Example:

```tsx
<VideoZoom
	src="/path/to/video.mp4"
	width={400}
	height={400}
	className="aspect-square w-full object-cover rounded-md border"
/>
```

---

## 4. Layout Patterns

### 4.1 Media Grids

When grouping related media (images or videos), use a CSS Grid structure with consistent gaps.

✅ Example (3-column grid):

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
  <Image ... />
  <VideoZoom ... />
  <Image ... />
</div>
```

---

## 5. What is NOT Allowed

❌ Using raw `<img>` tags or standard markdown image syntax `![alt](src)`.
❌ Using `<video>` tags directly (use `<VideoZoom />`).
❌ Hardcoding complex inline styles for grids (prefer standardized patterns).
