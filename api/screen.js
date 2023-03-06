import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export default async function screenshot(url) {
  const options = {
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  };

  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 2000, height: 1000 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  return await page.screenshot({ type: 'png' });
}
