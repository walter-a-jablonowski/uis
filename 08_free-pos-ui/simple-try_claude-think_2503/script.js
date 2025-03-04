document.addEventListener('DOMContentLoaded', () => {
  // References to UI elements
  const elements = {
    commandModule: document.getElementById('commandModule'),
    statusDisplay: document.getElementById('statusDisplay'),
    dataConsole: document.getElementById('dataConsole'),
    navPanel: document.getElementById('navPanel'),
    commPanel: document.getElementById('commPanel'),
    alertSystem: document.getElementById('alertSystem')
  };

  // Initial positioning settings (percentage-based)
  const initialPositions = {
    commandModule: { top: 10, left: 10 },
    statusDisplay: { top: 20, right: 15 },
    dataConsole: { bottom: 15, left: 5 },
    navPanel: { top: 50, left: 50, centered: true },
    commPanel: { bottom: 20, right: 10 },
    alertSystem: { top: 15, left: 40 }
  };

  // Initial size settings (percentage-based for width, aspect ratio for height)
  const initialSizes = {
    commandModule: { width: 20, aspectRatio: 0.87 },  // hexagon
    statusDisplay: { width: 15, aspectRatio: 1 },     // circle
    dataConsole: { width: 25, aspectRatio: 0.67 },    // angled console
    navPanel: { width: 18, aspectRatio: 1 },          // triangular
    commPanel: { width: 20, aspectRatio: 0.8 },       // curved panel
    alertSystem: { width: 15, aspectRatio: 1 }        // star
  };

  // Minimum sizes in pixels to ensure readability
  const minSizes = {
    commandModule: { width: 200, height: 180 },
    statusDisplay: { width: 160, height: 160 },
    dataConsole: { width: 200, height: 150 },
    navPanel: { width: 180, height: 180 },
    commPanel: { width: 200, height: 160 },
    alertSystem: { width: 160, height: 160 }
  };

  // Function to update UI element positions and sizes
  function updateUIElements() {
    const container = document.querySelector('.sci-fi-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    Object.keys(elements).forEach(key => {
      const element = elements[key];
      const position = initialPositions[key];
      const size = initialSizes[key];
      const minSize = minSizes[key];

      // Calculate width based on container size and minimum width
      const width = Math.max(containerWidth * (size.width / 100), minSize.width);
      
      // Calculate height based on width and aspect ratio or minimum height
      const height = Math.max(width * size.aspectRatio, minSize.height);

      // Apply size
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;

      // Apply position
      if (position.centered) {
        // For centered elements
        element.style.top = `${position.top}%`;
        element.style.left = `${position.left}%`;
        element.style.transform = 'translate(-50%, -50%)';
      } else {
        // For corner-anchored elements
        if (position.top !== undefined) {
          element.style.top = `${position.top}%`;
        }
        if (position.bottom !== undefined) {
          element.style.bottom = `${position.bottom}%`;
        }
        if (position.left !== undefined) {
          element.style.left = `${position.left}%`;
        }
        if (position.right !== undefined) {
          element.style.right = `${position.right}%`;
        }
      }
    });
  }

  // Add futuristic animations and effects
  function addFuturisticEffects() {
    // Console typewriter effect
    const consoleOutput = document.querySelector('.console-output');
    if (consoleOutput) {
      Array.from(consoleOutput.children).forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
          let charIndex = 0;
          const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
              line.textContent += text.charAt(charIndex);
              charIndex++;
            } else {
              clearInterval(typeInterval);
            }
          }, 50);
        }, index * 800);
      });
    }

    // Random flickering lights effect
    setInterval(() => {
      const elements = document.querySelectorAll('.ui-element');
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      
      randomElement.style.boxShadow = '0 0 20px var(--accent-color)';
      setTimeout(() => {
        randomElement.style.boxShadow = '';
      }, 200);
    }, 3000);

    // Data stream update effect
    setInterval(() => {
      const statuses = ['Online', 'Calibrating', 'Optimizing', 'Scanning', 'Online'];
      const statusElem = document.querySelector('.status');
      if (statusElem) {
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        statusElem.textContent = randomStatus;
        
        if (randomStatus !== 'Online') {
          statusElem.style.color = 'var(--status-yellow)';
        } else {
          statusElem.style.color = 'var(--status-green)';
        }
      }
    }, 5000);
  }

  // Make UI elements draggable for positioning
  function makeElementsDraggable() {
    Object.values(elements).forEach(element => {
      let isDragging = false;
      let offsetX, offsetY;

      // Make sure we grab by the header area
      const header = element.querySelector('h3');
      if (!header) return;
      
      header.addEventListener('mousedown', startDrag);
      
      function startDrag(e) {
        isDragging = true;
        
        // Calculate offset from the element's position
        const rect = element.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        // Add events for drag and end
        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', stopDrag);
        
        // Add grabbing cursor and z-index
        header.style.cursor = 'grabbing';
        element.style.zIndex = '100';
        
        // Prevent default to avoid text selection
        e.preventDefault();
      }
      
      function dragElement(e) {
        if (!isDragging) return;
        
        const container = document.querySelector('.sci-fi-container');
        const containerRect = container.getBoundingClientRect();
        
        // Calculate new position relative to container
        const x = e.clientX - containerRect.left - offsetX;
        const y = e.clientY - containerRect.top - offsetY;
        
        // Apply new position
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        
        // Remove other position properties
        element.style.right = '';
        element.style.bottom = '';
        element.style.transform = '';
      }
      
      function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDrag);
        header.style.cursor = 'grab';
        element.style.zIndex = '';
      }
      
      // Set initial cursor
      header.style.cursor = 'grab';
    });
  }

  // Initialize everything
  function init() {
    updateUIElements();
    addFuturisticEffects();
    makeElementsDraggable();
    
    // Update on resize
    window.addEventListener('resize', updateUIElements);
  }

  // Start the sci-fi interface
  init();
});
