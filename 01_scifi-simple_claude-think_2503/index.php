<?php
// Sci-Fi UI main interface
// This file serves as the entry point for our Sci-Fi UI application

require_once 'functions.php';

// Page title and metadata
$pageTitle = "Sci-Fi Control Interface";
$pageDescription = "Advanced control interface with futuristic design";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $pageTitle ?></title>
  <meta name="description" content="<?= $pageDescription ?>">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header class="main-header">
      <div class="logo">
        <div class="logo-shape"></div>
        <h1>NEXUS</h1>
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="#" class="active" data-section="dashboard">Dashboard</a></li>
          <li><a href="#" data-section="systems">Systems</a></li>
          <li><a href="#" data-section="diagnostics">Diagnostics</a></li>
          <li><a href="#" data-section="communications">Communications</a></li>
        </ul>
      </nav>
      <div class="user-controls">
        <div class="time-display"><?= date('H:i:s') ?></div>
        <div class="user-profile">
          <span class="user-indicator"></span>
          <span class="user-name">COMMANDER</span>
        </div>
      </div>
    </header>
    
    <main class="content">
      <section id="dashboard" class="section active">
        <div class="section-header">
          <h2>System Dashboard</h2>
          <div class="system-status">Status: <span class="status-indicator online">ONLINE</span></div>
        </div>
        
        <div class="grid-container">
          <div class="grid-item stats-display">
            <h3>System Metrics</h3>
            <div class="metrics-container">
              <div class="metric-item">
                <div class="metric-circle">
                  <svg viewBox="0 0 36 36">
                    <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-fill" stroke-dasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <text x="18" y="20.35" class="metric-value">85%</text>
                  </svg>
                  <span class="metric-label">Core Integrity</span>
                </div>
              </div>
              <div class="metric-item">
                <div class="metric-circle">
                  <svg viewBox="0 0 36 36">
                    <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-fill" stroke-dasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <text x="18" y="20.35" class="metric-value">65%</text>
                  </svg>
                  <span class="metric-label">Energy Levels</span>
                </div>
              </div>
              <div class="metric-item">
                <div class="metric-circle">
                  <svg viewBox="0 0 36 36">
                    <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-fill" stroke-dasharray="93, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <text x="18" y="20.35" class="metric-value">93%</text>
                  </svg>
                  <span class="metric-label">Shields</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid-item activity-log">
            <h3>System Log</h3>
            <div class="log-container">
              <?php
              $logs = [
                ['time' => '19:42:18', 'message' => 'Diagnostic scan completed', 'level' => 'info'],
                ['time' => '19:36:45', 'message' => 'Energy fluctuation detected in sector 7', 'level' => 'warning'],
                ['time' => '19:30:12', 'message' => 'Navigation systems calibrated', 'level' => 'info'],
                ['time' => '19:24:55', 'message' => 'Incoming transmission received', 'level' => 'info'],
                ['time' => '19:18:33', 'message' => 'Shield generator optimization completed', 'level' => 'success'],
              ];
              
              foreach($logs as $log) :
              ?>
                <div class="log-entry <?= $log['level'] ?>">
                  <span class="log-time"><?= $log['time'] ?></span>
                  <span class="log-message"><?= $log['message'] ?></span>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
          
          <div class="grid-item command-terminal">
            <h3>Command Terminal</h3>
            <div class="terminal-container">
              <div class="terminal-output" id="terminalOutput">
                <div class="line">// Initialize system diagnostics</div>
                <div class="line">// Running security protocols...</div>
                <div class="line">// All systems nominal</div>
              </div>
              <div class="terminal-input-container">
                <span class="prompt">&gt;</span>
                <input type="text" id="terminalInput" class="terminal-input" placeholder="Enter command...">
              </div>
            </div>
          </div>
          
          <div class="grid-item visual-display">
            <h3>Radar Display</h3>
            <div class="radar-container">
              <div class="radar-grid">
                <div class="radar-sweep"></div>
                <div class="radar-object" style="top: 30%; left: 45%"></div>
                <div class="radar-object" style="top: 65%; left: 75%"></div>
                <div class="radar-object large" style="top: 25%; left: 20%"></div>
              </div>
              <div class="radar-info">
                <div class="radar-data">Objects detected: <span>3</span></div>
                <div class="radar-data">Range: <span>750 units</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="systems" class="section">
        <div class="section-header">
          <h2>Systems Control</h2>
        </div>
        <div class="systems-content">
          <p>Systems control panel will appear here</p>
        </div>
      </section>
      
      <section id="diagnostics" class="section">
        <div class="section-header">
          <h2>Diagnostics</h2>
        </div>
        <div class="diagnostics-content">
          <p>Diagnostics panel will appear here</p>
        </div>
      </section>
      
      <section id="communications" class="section">
        <div class="section-header">
          <h2>Communications</h2>
        </div>
        <div class="communications-content">
          <p>Communications panel will appear here</p>
        </div>
      </section>
    </main>
    
    <footer class="main-footer">
      <div class="footer-item">Nexus Control System v2.5.03</div>
      <div class="footer-item blink">Secure Connection Active</div>
      <div class="footer-item"><?= date('Y-m-d') ?></div>
    </footer>
  </div>
  
  <div class="overlay-elements">
    <div class="corner-decoration top-left"></div>
    <div class="corner-decoration top-right"></div>
    <div class="corner-decoration bottom-left"></div>
    <div class="corner-decoration bottom-right"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
