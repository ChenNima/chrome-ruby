const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://stackoverflow.com/');
  console.log(page);
  // const content = await page.content();
  const title = await page.title();
  console.log(title);

  await browser.close();
})();