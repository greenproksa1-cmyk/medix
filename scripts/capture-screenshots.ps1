$ErrorActionPreference = 'Stop'

$root = 'C:\Medix'
$node = 'C:\Program Files\nodejs\node.exe'
$chrome = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$outDir = Join-Path $root 'screenshots'
$profileDir = Join-Path $root '.chrome-profile-capture'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Remove-Item -Recurse -Force $profileDir -ErrorAction SilentlyContinue

function Start-DetachedProcess {
  param(
    [string]$FileName,
    [string]$Arguments,
    [string]$WorkingDirectory
  )

  $psi = New-Object System.Diagnostics.ProcessStartInfo
  $psi.FileName = $FileName
  $psi.Arguments = $Arguments
  $psi.WorkingDirectory = $WorkingDirectory
  $psi.UseShellExecute = $false
  $psi.CreateNoWindow = $true

  return [System.Diagnostics.Process]::Start($psi)
}

function Wait-ForServer {
  param([string]$Url)

  for ($i = 0; $i -lt 90; $i++) {
    try {
      $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 3
      if ($response.StatusCode -eq 200) {
        return
      }
    } catch {
      Start-Sleep -Seconds 1
    }
  }

  throw "Timed out waiting for $Url"
}

function Run-ChromeShot {
  param(
    [string]$OutputPath,
    [string]$Url,
    [int]$Width,
    [int]$Height
  )

  $args = @(
    '--headless=new',
    '--disable-gpu',
    '--disable-breakpad',
    '--disable-crash-reporter',    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--force-device-scale-factor=1',
    "--user-data-dir=$profileDir",
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=4000',
    "--window-size=$Width,$Height",
    "--screenshot=$OutputPath",
    $Url
  ) -join ' '

  $p = Start-DetachedProcess -FileName $chrome -Arguments $args -WorkingDirectory $root
  $p.WaitForExit() | Out-Null
  if ($p.ExitCode -ne 0) {
    throw "Chrome screenshot failed for $Url with exit code $($p.ExitCode)"
  }
}

$server = Start-DetachedProcess -FileName $node -Arguments 'C:\Medix\node_modules\next\dist\bin\next start -H 0.0.0.0 -p 3000' -WorkingDirectory $root
try {
  Wait-ForServer -Url 'http://localhost:3000/en'

  $shots = @(
    @{ File = 'home-header-en.png'; Url = 'http://localhost:3000/en'; Width = 1440; Height = 360 },
    @{ File = 'home-hero-en.png'; Url = 'http://localhost:3000/en'; Width = 1440; Height = 1180 },
    @{ File = 'home-full-en.png'; Url = 'http://localhost:3000/en'; Width = 1440; Height = 9000 },
    @{ File = 'home-services-en.png'; Url = 'http://localhost:3000/en#services'; Width = 1440; Height = 1100 },
    @{ File = 'home-footer-en.png'; Url = 'http://localhost:3000/en#footer'; Width = 1440; Height = 980 },
    @{ File = 'contact-en.png'; Url = 'http://localhost:3000/en/contact'; Width = 1440; Height = 1160 },
    @{ File = 'about-en.png'; Url = 'http://localhost:3000/en/about'; Width = 1440; Height = 1160 },
    @{ File = 'technology-en.png'; Url = 'http://localhost:3000/en/technology'; Width = 1440; Height = 1160 },
    @{ File = 'home-hero-ar.png'; Url = 'http://localhost:3000/ar'; Width = 1440; Height = 1180 }
  )

  foreach ($shot in $shots) {
    $outputPath = Join-Path $outDir $shot.File
    Write-Host "Capturing $($shot.File)"
    Run-ChromeShot -OutputPath $outputPath -Url $shot.Url -Width $shot.Width -Height $shot.Height
  }

  Write-Host "Screenshots saved to $outDir"
} finally {
  if ($server -and -not $server.HasExited) {
    $server.Kill()
    Start-Sleep -Seconds 1
  }
}




