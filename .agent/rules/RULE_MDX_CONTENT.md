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

## 5. Code Tabs Component (`<CodeBlockTabs />`)

Use `<CodeBlockTabs />` to display multiple related code snippets in a tabbed interface.

### 5.1 Standard Usage

- **Options**: Use the `options` prop with an array of strings for tab titles.
- **Strict Syntax**: You **MUST** include an empty line after the opening tag and before the closing tag. Each code block should also be separated by an empty line.

✅ Example:

````md
<CodeBlockTabs options={["App Router", "Pages Router"]}>

<Dòng trống ở đây>

```tsx
// code for App Router
```
````

<Dòng trống ở đây>

```tsx
// code for Pages Router
```

<Dòng trống ở đây>
</CodeBlockTabs>

```

---

## 7. Thumbnail Aesthetics & Prompts

To maintain a premium and consistent visual identity for all articles, follow the **Vercel & Apple inspired** minimalist aesthetic.

### 7.1 Aesthetic Guidelines

- **Background**: Deep black or dark gray with subtle grid lines.
- **Composition**: Centered or rule-of-thirds balance with immense negative space.
- **Color Palette**: Monochromatic (Black & White) with a single high-quality glow/accent (e.g., light path, glass frosting).
- **Typography**: Clean, professional sans-serif fonts (e.g., Geist, Inter).

### 7.2 Standard AI Prompt Template (Dynamic)

Use the following template to generate professional cover images. Replace the placeholders with content relevant to your article:

> **Prompt**: *Sleek wide landscape digital background with subtle minimalist grid lines. {VISUAL_CONCEPT}: abstract and professional technical representation. Large, clean typography overlaid on the composition: "{TITLE}". Smaller text below: "{SUBTITLE}". The style is ultra-minimalist, monochromatic black and white, inspired by Vercel and Apple design. Immense negative space, perfect text rendering, professional graphic design layout. --ar 16:9*

**Placeholder Guide:**
- `{VISUAL_CONCEPT}`: Describe the core tech (e.g., "bidirectional light beams", "curved glass paths", "geometric binary patterns").
- `{TITLE}`: The main headline of your article.
- `{SUBTITLE}`: A short descriptive sub-headline.

---

## 8. What is NOT Allowed

❌ Using raw `<img>` tags or standard markdown image syntax `![alt](src)`.
❌ Using `<video>` tags directly (use `<VideoZoom />`).
❌ Hardcoding complex inline styles for grids (prefer standardized patterns).
❌ Using `<CodeBlockTabs />` without empty lines (causes parsing errors in Velite).
❌ Using low-contrast or cluttered images for article covers.
```
