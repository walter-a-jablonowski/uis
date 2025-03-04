# Sci-Fi UI Control Interface

A modern, futuristic user interface with sci-fi aesthetics. This project creates a visually appealing control panel interface that mimics those seen in science fiction movies and games.

## Features

- **Interactive Dashboard**: Main control panel with system metrics, logs, and interactive elements
- **Command Terminal**: Functional command line interface with various commands
- **Radar Display**: Visual representation of objects with animation
- **System Logs**: Real-time logging system with different severity levels
- **Navigation**: Tab-based navigation between different interface sections

## Technologies Used

- PHP for backend functionality
- HTML5 for structure
- CSS3 for styling (with custom animations and effects)
- Vanilla JavaScript for interactivity
- Optional: Symfony YAML component for data storage

## Setup Instructions

1. Clone or download this repository
2. If you want to use the YAML functionality, run `composer install` to install dependencies
3. Serve the project using a PHP-capable web server (Apache, Nginx, or PHP's built-in server)

### Using PHP's built-in server

```
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Usage

- Navigate between different sections using the top navigation menu
- Try different commands in the terminal (type 'help' to see available commands)
- Watch the system logs and radar for simulated activity

## Terminal Commands

- `help` - Display available commands
- `status` - Show system status
- `scan` - Run a simulated system scan
- `clear` - Clear the terminal output

## Customization

You can customize the UI by modifying the following:

- `style.css` - Change colors, animations, and layout
- `script.js` - Modify behavior and add new interactive features
- `functions.php` - Extend backend functionality

## License

This project is available for open use.

## Credits

Created for educational and demonstration purposes.
