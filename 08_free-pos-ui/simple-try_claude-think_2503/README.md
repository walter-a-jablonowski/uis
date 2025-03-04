# Sci-Fi UI Framework

A futuristic, freely-positionable UI framework with non-rectangular elements that respond dynamically to viewport changes.

## Features

- **Non-Rectangular UI Elements**: Includes hexagonal, circular, triangular, star-shaped, and angled components
- **Free Positioning**: UI elements can be positioned anywhere on the screen
- **Responsive Design**: Elements automatically resize while maintaining minimum dimensions for usability
- **Draggable Components**: Click and drag elements by their headers to reposition them
- **Sci-Fi Aesthetics**: Futuristic styling with glowing effects, animated UI elements, and dynamic content
- **Adaptive Layout**: Elements adjust position and size based on screen dimensions

## Components

The demo includes several custom-shaped UI elements:

1. **Hexagonal Command Module**: A six-sided control panel
2. **Circular Status Display**: A round progress indicator
3. **Angled Data Console**: A parallelogram-shaped console with animated text
4. **Triangular Navigation Panel**: A six-pointed star navigation system
5. **Curved Communication Panel**: A rounded rectangle panel for communication
6. **Star-shaped Alert System**: A star-shaped status indicator

## Usage

Simply open `index.html` in a web browser to see the UI in action.

- Elements will automatically position and resize based on the viewport
- Drag elements by their headers to reposition them
- Interact with buttons and UI controls (functionality is simulated in this demo)

## Customization

- Edit `styles.css` to modify the appearance, colors, and shapes
- Adjust positioning in `script.js` under the `initialPositions` object
- Modify minimum sizes in the `minSizes` object to ensure readability
- Add new UI elements by creating new HTML elements with the `ui-element` class

## Technical Implementation

- Pure HTML, CSS, and JavaScript with no external dependencies
- Uses CSS clip-path for complex shapes
- Responsive positioning based on container percentages
- JavaScript handles dynamic resizing and maintains minimum dimensions
- Draggable functionality allows for custom layouts
