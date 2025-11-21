import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const pages = [
  { path: '/', name: 'landing' },
  { path: '/dashboard', name: 'dashboard' },
  { path: '/blog', name: 'blog' },
  { path: '/portfolio', name: 'portfolio' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
];

async function takeScreenshots() {
  const screenshotsDir = './screenshots';
  
  if (!existsSync(screenshotsDir)) {
    await mkdir(screenshotsDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const page of pages) {
      const pageInstance = await browser.newPage();
      await pageInstance.setViewport({ width: 1920, height: 1080 });
      
      console.log(`Taking screenshot of ${page.path}...`);
      await pageInstance.goto(`http://localhost:3000${page.path}`, {
        waitUntil: 'networkidle0',
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await pageInstance.screenshot({
        path: `${screenshotsDir}/${page.name}.png`,
        fullPage: true,
      });
      
      await pageInstance.close();
      console.log(`✓ Screenshot saved: ${screenshotsDir}/${page.name}.png`);
    }
  } finally {
    await browser.close();
  }
  
  console.log('\nAll screenshots captured!');
}

takeScreenshots().catch(console.error);

