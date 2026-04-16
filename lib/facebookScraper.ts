import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export async function scrapeFacebookOrganis(url: string) {
  console.log(`Iniciando scrape en: ${url}`);
  let browser = null;
  
  // Detectamos si estamos en local o en Vercel
  const isLocal = process.env.NODE_ENV === 'development' || !process.env.VERCEL;

  try {
    const launchOptions = isLocal ? {
      // RUTA LOCAL: Ajusta esta ruta a tu Chrome o Edge
      executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      headless: true,
      args: ['--no-sandbox']
    } : {
      // RUTA VERCEL (Producción)
      args: chromium.args,
      defaultViewport: (chromium as any).defaultViewport || { width: 1280, height: 720 },
      executablePath: await chromium.executablePath(),
      headless: (chromium as any).headless ?? true,
    };

    console.log(`🌐 Iniciando navegador en modo ${isLocal ? 'LOCAL' : 'PRODUCCIÓN'}...`);
    browser = await puppeteer.launch(launchOptions);

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');

    await page.goto("https://www.facebook.com/organisnoticiasss", {
      waitUntil: "networkidle2",
      timeout: 60000
    });

    // Extraer posts
    const posts = await page.evaluate(() => {
      const elements = document.querySelectorAll('div[data-ad-preview="message"]');
      return Array.from(elements).slice(0, 5).map(el => el.textContent);
    });

    return posts;
  } catch (error) {
    console.error("❌ Error en Scraper Integrado:", error);
    return [];
  } finally {
    if (browser) await browser.close();
  }
}