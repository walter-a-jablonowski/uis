<?php
/**
 * Helper functions for Sci-Fi UI
 */

// Function to load system data from YAML file
function loadSystemData() : array
{
  // Check if we have the required YAML library
  if( ! class_exists('Symfony\Component\Yaml\Yaml') ) {
    return [
      'core' => [
        'status' => 'ONLINE',
        'version' => '2.5.03',
        'integrity' => 85
      ],
      'energy' => [
        'level' => 65,
        'status' => 'NOMINAL'
      ],
      'shields' => [
        'integrity' => 93,
        'status' => 'ACTIVE'
      ]
    ];
  }
  
  // If we have Symfony YAML, try to load from file
  $dataFile = __DIR__ . '/data/system_status.yaml';
  
  if( file_exists($dataFile) ) {
    try {
      return Symfony\Component\Yaml\Yaml::parseFile($dataFile);
    } catch( Exception $e ) {
      // If there's an error, return default data
      return getDefaultSystemData();
    }
  }
  
  return getDefaultSystemData();
}

// Function to get default system data
function getDefaultSystemData() : array
{
  return [
    'core' => [
      'status' => 'ONLINE',
      'version' => '2.5.03',
      'integrity' => 85
    ],
    'energy' => [
      'level' => 65,
      'status' => 'NOMINAL'
    ],
    'shields' => [
      'integrity' => 93,
      'status' => 'ACTIVE'
    ]
  ];
}

// Function to get system logs
function getSystemLogs( int $count = 5 ) : array
{
  // Check if we have log file
  $logFile = __DIR__ . '/data/system_logs.yaml';
  
  if( file_exists($logFile) && class_exists('Symfony\Component\Yaml\Yaml') ) {
    try {
      $logs = Symfony\Component\Yaml\Yaml::parseFile($logFile);
      return array_slice($logs, 0, $count);
    } catch( Exception $e ) {
      // If there's an error, return default logs
      return getDefaultLogs($count);
    }
  }
  
  return getDefaultLogs($count);
}

// Function to get default system logs
function getDefaultLogs( int $count = 5 ) : array
{
  $defaultLogs = [
    ['time' => date('H:i:s', strtotime('-1 minute')), 'message' => 'Diagnostic scan completed', 'level' => 'info'],
    ['time' => date('H:i:s', strtotime('-6 minutes')), 'message' => 'Energy fluctuation detected in sector 7', 'level' => 'warning'],
    ['time' => date('H:i:s', strtotime('-12 minutes')), 'message' => 'Navigation systems calibrated', 'level' => 'info'],
    ['time' => date('H:i:s', strtotime('-18 minutes')), 'message' => 'Incoming transmission received', 'level' => 'info'],
    ['time' => date('H:i:s', strtotime('-25 minutes')), 'message' => 'Shield generator optimization completed', 'level' => 'success'],
  ];
  
  return array_slice($defaultLogs, 0, $count);
}

// Function to create folder structure if it doesn't exist
function ensureDataFolder() : void
{
  $dataFolder = __DIR__ . '/data';
  
  if( ! is_dir($dataFolder) ) {
    mkdir($dataFolder, 0755, true);
  }
}

// Function to add a new log entry
function addLogEntry( string $message, string $level = 'info' ) : bool
{
  ensureDataFolder();
  
  $logFile = __DIR__ . '/data/system_logs.yaml';
  $currentTime = date('H:i:s');
  
  $newEntry = [
    'time' => $currentTime,
    'message' => $message,
    'level' => $level
  ];
  
  // Get existing logs or create new array
  if( file_exists($logFile) && class_exists('Symfony\Component\Yaml\Yaml') ) {
    try {
      $logs = Symfony\Component\Yaml\Yaml::parseFile($logFile);
      if( ! is_array($logs) ) {
        $logs = [];
      }
    } catch( Exception $e ) {
      $logs = [];
    }
  } else {
    $logs = [];
  }
  
  // Add new entry at the beginning
  array_unshift($logs, $newEntry);
  
  // Keep only the last 20 entries
  if( count($logs) > 20 ) {
    $logs = array_slice($logs, 0, 20);
  }
  
  // If we have Symfony YAML, save to file
  if( class_exists('Symfony\Component\Yaml\Yaml') ) {
    try {
      $yaml = Symfony\Component\Yaml\Yaml::dump($logs);
      file_put_contents($logFile, $yaml);
      return true;
    } catch( Exception $e ) {
      return false;
    }
  }
  
  return false;
}

// Create a YAML system status file if it doesn't exist
function initializeSystemData() : void
{
  ensureDataFolder();
  
  $statusFile = __DIR__ . '/data/system_status.yaml';
  
  if( ! file_exists($statusFile) && class_exists('Symfony\Component\Yaml\Yaml') ) {
    $defaultData = getDefaultSystemData();
    
    try {
      $yaml = Symfony\Component\Yaml\Yaml::dump($defaultData);
      file_put_contents($statusFile, $yaml);
    } catch( Exception $e ) {
      // Silently fail
    }
  }
}

// Initialize system on first load
initializeSystemData();
