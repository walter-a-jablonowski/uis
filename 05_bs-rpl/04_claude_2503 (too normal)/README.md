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

## Grid System

The SciFi-UI framework includes a powerful and flexible grid system based on a 12-column layout. It supports both flexbox-based rows and columns as well as CSS Grid for more complex layouts.

### Flexbox Grid

The flexbox grid uses a row-based approach similar to Bootstrap:

```html
<div class="row">
  <div class="col-6">Half width</div>
  <div class="col-6">Half width</div>
</div>
```

#### Available Column Classes

- Basic columns: `col-1` through `col-12` (spanning 1 to 12 columns)
- Responsive columns:
  - Small devices: `col-sm-1` through `col-sm-12` (≥576px)
  - Medium devices: `col-md-1` through `col-md-12` (≥768px)
  - Large devices: `col-lg-1` through `col-lg-12` (≥992px)
  - Extra large devices: `col-xl-1` through `col-xl-12` (≥1200px)
- Auto-width columns: `col` (takes up equal space)
- Auto-width sized columns: `col-auto` (takes up only needed space)

#### Column Offsets

You can offset columns using the `offset-*` classes:

```html
<div class="row">
  <div class="col-4 offset-4">Centered 4-column width</div>
</div>
```

### CSS Grid

For more complex layouts, you can use the CSS Grid implementation:

```html
<div class="grid-container">
  <div class="grid-item" style="grid-column: span 4;">Item spanning 4 columns</div>
  <div class="grid-item" style="grid-column: span 8;">Item spanning 8 columns</div>
</div>
```

The grid-container is set up with 12 columns by default and includes sci-fi themed styling for grid items.

## Future Components

The framework will be expanded to include:

- Navigation bars and status bars
- Sidebars
- Tabs, modals, popovers, and toasts
- Form controls (inputs, selects, switches, etc.)
- Buttons and button groups
- And more!

## License

MIT License
