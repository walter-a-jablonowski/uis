# SciFi-UI Framework

A modern, sci-fi themed UI framework designed as a replacement for Bootstrap. SciFi-UI provides a futuristic look and feel for web applications with a clean, dark theme and glowing accents.

## Features

- **Sci-Fi Aesthetic**: Dark themes with glowing accents and futuristic design elements
- **Utility-First**: Comprehensive utility classes for spacing, display, flex, borders, and more
- **Responsive**: Built with modern responsive design principles
- **Lightweight**: Focused on essential components without bloat
- **Customizable**: Easy to customize with CSS variables

## Getting Started

1. Include the CSS and JS files in your HTML:

```html
<!-- Google Fonts for sci-fi look -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- SciFi-UI CSS -->
<link rel="stylesheet" href="css/scifi-ui.css">

<!-- SciFi-UI JavaScript (at the end of body) -->
<script src="js/scifi-ui.js"></script>
```

2. Use the utility classes and components in your HTML:

```html
<div class="container">
  <div class="d-flex justify-content-between align-items-center">
    <h1 class="text-primary">My Sci-Fi App</h1>
    <div class="border border-primary border-glow p-3 rounded">
      Glowing Element
    </div>
  </div>
</div>
```

## Available Utilities

### Display
- `d-none`, `d-inline`, `d-inline-block`, `d-block`, `d-flex`, `d-inline-flex`, `d-grid`

### Flex
- Direction: `flex-row`, `flex-column`
- Wrap: `flex-wrap`, `flex-nowrap`
- Justify Content: `justify-content-start`, `justify-content-end`, `justify-content-center`, `justify-content-between`, `justify-content-around`
- Align Items: `align-items-start`, `align-items-end`, `align-items-center`, `align-items-baseline`, `align-items-stretch`

### Spacing
- Margin: `m-0` through `m-5`, `mt-*`, `mb-*`, `ml-*`, `mr-*`, `mx-*`, `my-*`
- Padding: `p-0` through `p-5`, `pt-*`, `pb-*`, `pl-*`, `pr-*`, `px-*`, `py-*`

### Borders
- `border`, `border-top`, `border-right`, `border-bottom`, `border-left`
- `border-0`, `border-top-0`, `border-right-0`, `border-bottom-0`, `border-left-0`
- `border-primary`, `border-secondary`, `border-success`, `border-danger`, `border-warning`, `border-info`
- `border-glow`
- `rounded`, `rounded-sm`, `rounded-lg`, `rounded-0`

### Text
- Colors: `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-muted`
- Alignment: `text-center`, `text-left`, `text-right`, `text-justify`

### Background
- `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-dark`, `bg-medium`, `bg-light`

## Future Components

The framework will be expanded to include:

- Navigation bars and status bars
- Sidebars
- Grid system
- Tabs, modals, popovers, and toasts
- Form controls (inputs, selects, switches, etc.)
- Buttons and button groups
- And more!

## License

MIT License
