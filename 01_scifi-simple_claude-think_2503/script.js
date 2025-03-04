// Sci-Fi UI Script

document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const navLinks = document.querySelectorAll('.main-nav a');
  const sections = document.querySelectorAll('.section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Update active nav link
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding section
      const targetSection = this.getAttribute('data-section');
      sections.forEach(section => {
        section.classList.remove('active');
        if(section.id === targetSection) {
          section.classList.add('active');
        }
      });
    });
  });
  
  // Terminal functionality
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  
  terminalInput.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
      const command = this.value.trim();
      
      if(command) {
        // Add command to terminal output
        appendToTerminal(`> ${command}`);
        
        // Process command
        processCommand(command);
        
        // Clear input
        this.value = '';
      }
    }
  });
  
  function appendToTerminal(text) {
    const line = document.createElement('div');
    line.className = 'line';
    line.textContent = text;
    terminalOutput.appendChild(line);
    
    // Auto scroll to bottom
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
  
  function processCommand(command) {
    const cmd = command.toLowerCase();
    
    if(cmd === 'help') {
      appendToTerminal('Available commands:');
      appendToTerminal('- help: Display this help message');
      appendToTerminal('- status: Display system status');
      appendToTerminal('- scan: Perform a system scan');
      appendToTerminal('- clear: Clear terminal');
    } 
    else if(cmd === 'status') {
      appendToTerminal('System Status:');
      appendToTerminal('- Core Systems: Online');
      appendToTerminal('- Navigation: Optimal');
      appendToTerminal('- Life Support: Nominal');
      appendToTerminal('- Shields: 93% Integrity');
    }
    else if(cmd === 'scan') {
      appendToTerminal('Initiating system scan...');
      
      // Simulate scanning with delayed responses
      setTimeout(() => appendToTerminal('Scanning subsystems...'), 500);
      setTimeout(() => appendToTerminal('Checking for anomalies...'), 1200);
      setTimeout(() => appendToTerminal('Scan complete. No issues detected.'), 2500);
    }
    else if(cmd === 'clear') {
      terminalOutput.innerHTML = '';
    }
    else {
      appendToTerminal(`Unknown command: ${command}`);
    }
  }
  
  // Update time display
  function updateTime() {
    const timeDisplay = document.querySelector('.time-display');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  updateTime(); // Initial update
  
  // Random activity for radar objects
  function animateRadarObjects() {
    const radarObjects = document.querySelectorAll('.radar-object');
    
    radarObjects.forEach(obj => {
      // Get current position
      const currentTop = parseFloat(obj.style.top);
      const currentLeft = parseFloat(obj.style.left);
      
      // Add small random movement
      const newTop = Math.max(5, Math.min(95, currentTop + (Math.random() - 0.5) * 3));
      const newLeft = Math.max(5, Math.min(95, currentLeft + (Math.random() - 0.5) * 3));
      
      // Apply new position
      obj.style.top = `${newTop}%`;
      obj.style.left = `${newLeft}%`;
    });
  }
  
  // Update radar objects every 3 seconds
  setInterval(animateRadarObjects, 3000);
  
  // Simulate periodic system activity
  function simulateSystemActivity() {
    const logContainer = document.querySelector('.log-container');
    const messages = [
      { message: 'System check completed', level: 'info' },
      { message: 'Environment sensors calibrated', level: 'info' },
      { message: 'Minor power fluctuation detected', level: 'warning' },
      { message: 'Communication array synchronized', level: 'success' },
      { message: 'Security scan completed', level: 'info' },
      { message: 'Life support systems optimal', level: 'info' },
      { message: 'Propulsion system check initiated', level: 'info' },
      { message: 'External sensors detecting anomaly', level: 'warning' },
      { message: 'System optimization complete', level: 'success' }
    ];
    
    // Pick a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Get current time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Create new log entry
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${randomMessage.level}`;
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'log-time';
    timeSpan.textContent = timeString;
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'log-message';
    messageSpan.textContent = randomMessage.message;
    
    logEntry.appendChild(timeSpan);
    logEntry.appendChild(messageSpan);
    
    // Add to log container
    logContainer.insertBefore(logEntry, logContainer.firstChild);
    
    // Remove oldest entries if more than 5
    const entries = logContainer.querySelectorAll('.log-entry');
    if(entries.length > 5) {
      for(let i = 5; i < entries.length; i++) {
        logContainer.removeChild(entries[i]);
      }
    }
  }
  
  // Simulate system activity every 8-15 seconds
  function scheduleNextActivity() {
    const delay = Math.floor(Math.random() * 7000) + 8000; // 8-15 seconds
    setTimeout(() => {
      simulateSystemActivity();
      scheduleNextActivity();
    }, delay);
  }
  
  scheduleNextActivity();
});
