import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const outDir = resolve(root, 'screenshots');
mkdirSync(outDir, { recursive: true });

const nodeExe = 'C:\\Program Files\\nodejs\\node.exe';
const chromeExe = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'http://127.0.0.1:3000';

const shots = [
  { file: 'home-header-en.png', url: `${baseUrl}/en`, width: 1440, height: 360 },
  { file: 'home-hero-en.png', url: `${baseUrl}/en`, width: 1440, height: 1180 },
  { file: 'home-services-en.png', url: `${baseUrl}/en#services`, width: 1440, height: 1100 },
  { file: 'home-footer-en.png', url: `${baseUrl}/en#footer`, width: 1440, height: 980 },
  { file: 'contact-en.png', url: `${baseUrl}/en/contact`, width: 1440, height: 1160 },
  { file: 'about-en.png', url: `${baseUrl}/en/about`, width: 1440, height: 1160 },
  { file: 'technology-en.png', url: `${baseUrl}/en/technology`, width: 1440, height: 1160 },
  { file: 'home-hero-ar.png', url: `${baseUrl}/ar`, width: 1440, height: 1180 },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let i = 0; i < 90; i += 1) {
    try {
      const res = await fetch(`${baseUrl}/en`);
      if (res.ok) return;
    } catch {
      // keep polling until Next is ready
    }
    await wait(1000);
  }
  throw new Error('Timed out waiting for Next.js to start');
}

function runProcess(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      env: { ...process.env, ...options.env },
      stdio: options.stdio ?? 'inherit',
      windowsHide: true,
    });

    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with code ${code ?? 'null'}${signal ? ` signal ${signal}` : ''}`));
      }
    });
  });
}

const server = spawn(nodeExe, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', '3000'], {
  cwd: root,
  env: { ...process.env, PORT: '3000', HOSTNAME: '127.0.0.1' },
  stdio: ['ignore', 'pipe', 'pipe'],
  windowsHide: true,
});

server.stdout.on('data', (chunk) => process.stdout.write(`[server] ${chunk}`));
server.stderr.on('data', (chunk) => process.stderr.write(`[server-err] ${chunk}`));

try {
  await waitForServer();
  for (const shot of shots) {
    const outputPath = resolve(outDir, shot.file);
    const args = [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--no-first-run',
      '--no-default-browser-check',
      '--force-device-scale-factor=1',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=4000',
      `--window-size=${shot.width},${shot.height}`,
      `--screenshot=${outputPath}`,
      shot.url,
    ];

    console.log(`Capturing ${shot.file}`);
    await runProcess(chromeExe, args, { stdio: 'inherit' });
  }
  console.log(`Screenshots saved to ${outDir}`);
} finally {
  if (!server.killed) {
    server.kill('SIGTERM');
    await wait(1000);
    if (!server.killed) {
      server.kill('SIGKILL');
    }
  }
}
