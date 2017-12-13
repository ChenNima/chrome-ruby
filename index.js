var puppeteer = require('puppeteer');
console.log('import puppeteer');

(async () => {
  console.log('start chrome');
  const browser = await puppeteer.launch();
  console.log('start getting page');
  const page = await browser.newPage();
  await page.goto('http://stackoverflow.com/');
  // const content = await page.content();
  const title = await page.title();
  console.log(title);

  await browser.close();
})();