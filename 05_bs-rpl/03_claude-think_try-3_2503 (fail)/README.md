# SciFi-UI Framework

A futuristic Sci-Fi themed CSS framework designed to replace Bootstrap with a sleek, modern interface for dashboards and applications.

## Features

- No dependencies (pure CSS)
- Sci-Fi themed components and styles
- Responsive utility classes
- Flexible layout system
- Customizable through CSS variables

## Getting Started

1. Link the stylesheet in your HTML:

```html
<link rel="stylesheet" href="styles.css">
```

2. Add the Google Fonts for optimal appearance:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Mono&display=swap" rel="stylesheet">
```

3. Optional: Add Font Awesome for icons:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## Available Classes

### Tool Classes

#### Horizontal and Vertical Alignment

- Flexbox alignment: `.justify-start`, `.justify-end`, `.justify-center`, `.justify-between`, `.justify-around`, `.justify-evenly`
- Vertical alignment: `.align-start`, `.align-end`, `.align-center`, `.align-baseline`, `.align-stretch`
- Self alignment: `.self-start`, `.self-end`, `.self-center`, `.self-baseline`, `.self-stretch`
- Text alignment: `.text-left`, `.text-center`, `.text-right`, `.text-justify`

#### Spacing

- Margin: `.m-0`, `.m-xs`, `.m-sm`, `.m-md`, `.m-lg`, `.m-xl`, `.m-xxl`
- Margin X-axis: `.mx-0`, `.mx-xs`, `.mx-sm`, `.mx-md`, `.mx-lg`, `.mx-xl`, `.mx-xxl`
- Margin Y-axis: `.my-0`, `.my-xs`, `.my-sm`, `.my-md`, `.my-lg`, `.my-xl`, `.my-xxl`
- Margin sides: `.mt-*`, `.mr-*`, `.mb-*`, `.ml-*` (where * is size)
- Padding: `.p-0`, `.p-xs`, `.p-sm`, `.p-md`, `.p-lg`, `.p-xl`, `.p-xxl`
- Padding X-axis: `.px-0`, `.px-xs`, `.px-sm`, `.px-md`, `.px-lg`, `.px-xl`, `.px-xxl`
- Padding Y-axis: `.py-0`, `.py-xs`, `.py-sm`, `.py-md`, `.py-lg`, `.py-xl`, `.py-xxl`
- Padding sides: `.pt-*`, `.pr-*`, `.pb-*`, `.pl-*` (where * is size)

#### Borders

- Border: `.border`, `.border-top`, `.border-right`, `.border-bottom`, `.border-left`, `.border-0`
- Border size: `.border-sm`, `.border-md`, `.border-lg`
- Border color: `.border-primary`, `.border-secondary`, `.border-accent`, `.border-success`, `.border-warning`, `.border-error`, `.border-info`, `.border-light`, `.border-dark`, `.border-white`
- Border radius: `.rounded-none`, `.rounded-sm`, `.rounded-md`, `.rounded-lg`, `.rounded-xl`, `.rounded-full`

#### Colors

- Text color: `.text-primary`, `.text-secondary`, `.text-accent`, `.text-success`, `.text-warning`, `.text-error`, `.text-info`, `.text-light`, `.text-dark`, `.text-white` 
- Background color: `.bg-primary`, `.bg-primary-light`, `.bg-primary-dark`, `.bg-secondary`, `.bg-secondary-light`, `.bg-secondary-dark`, `.bg-accent`, `.bg-accent-light`, `.bg-accent-dark`, `.bg-success`, `.bg-warning`, `.bg-error`, `.bg-info`, `.bg-dark`, `.bg-dark-gray`, `.bg-medium-gray`, `.bg-light-gray`, `.bg-light`, `.bg-white`

#### Display

- Display types: `.d-none`, `.d-inline`, `.d-inline-block`, `.d-block`, `.d-flex`, `.d-inline-flex`, `.d-grid`
- Flex direction: `.flex-row`, `.flex-column`
- Flex wrap: `.flex-wrap`, `.flex-nowrap`
- Flex grow/shrink: `.flex-grow-0`, `.flex-grow-1`, `.flex-shrink-0`, `.flex-shrink-1`

### Sci-Fi Specific Elements

- Panels: `.sci-panel`, `.sci-panel-dark`
- Panel parts: `.sci-panel-header`, `.sci-panel-footer`
- Effects: `.glow-text`, `.glow-border`, `.sci-blink`, `.sci-pulse`

## Customization

The framework uses CSS variables that can be customized to match your brand's colors and preferences:

```css
:root {
  /* Modify these variables to customize the theme */
  --primary: #0d47a1;
  --accent: #00e5ff;
  /* And many more... */
}
```

## Examples

See the included `index.html` for examples of how to use the framework's classes and components.

## Browser Support

Compatible with all modern browsers (Chrome, Firefox, Safari, Edge).
