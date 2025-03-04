/**
 * SciFi-UI - A sci-fi themed UI framework
 * Version 1.0.0
 */

// Main SciFi-UI object
const SciFiUI = {
  // Initialize the UI components
  init: function() {
    console.log('SciFi-UI initialized');
    
    // Add event listeners for any interactive elements
    this._setupEventListeners();
    
    // Add sci-fi effects
    this._addSciFiEffects();
    
    return this;
  },
  
  // Set up event listeners for interactive components
  _setupEventListeners: function() {
    // This will be expanded as we add more interactive components
    document.addEventListener('DOMContentLoaded', function() {
      // Future component initialization will go here
    });
  },
  
  // Add sci-fi visual effects to elements
  _addSciFiEffects: function() {
    // Add subtle scanning line effect to the body
    const scanLines = document.createElement('div');
    scanLines.className = 'scifi-scan-lines';
    document.body.appendChild(scanLines);
    
    // Add subtle pulsing effect to elements with .scifi-pulse class
    setInterval(() => {
      document.querySelectorAll('.scifi-pulse').forEach(element => {
        element.classList.toggle('pulse-active');
      });
    }, 2000);
  },
  
  // Utility functions
  utils: {
    // Generate a random ID for elements
    generateId: function(prefix = 'scifi-') {
      return `${prefix}${Math.random().toString(36).substring(2, 9)}`;
    },
    
    // Add a class to an element
    addClass: function(element, className) {
      if (element) {
        element.classList.add(className);
      }
    },
    
    // Remove a class from an element
    removeClass: function(element, className) {
      if (element) {
        element.classList.remove(className);
      }
    },
    
    // Toggle a class on an element
    toggleClass: function(element, className) {
      if (element) {
        element.classList.toggle(className);
      }
    }
  }
};

// Auto-initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  SciFiUI.init();
});
