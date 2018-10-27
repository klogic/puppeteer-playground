const puppeteer = require('puppeteer');

// // take screenshort from google.
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

// watch clip in youtube auto
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 926 });
  await page.goto('https://www.youtube.com');
  await page
    .waitForSelector('#search')
    .then((selector)=> selector.type('cat vs cucumber'))
    .then(()=> page.click('#search-icon-legacy'));
  await page.waitFor(1000);
  const search = await page.url();

  await page.goto(search);
  await page
    .waitForSelector('#video-title')
    .then(() => page.click('#video-title'))

  // browser.close();
})();