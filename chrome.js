const ncp = require('ncp').ncp;
const removeRecursive = require('rimraf');

removeRecursive('./chrome', function() {
  const revision = require('./node_modules/puppeteer/package').puppeteer.chromium_revision;
  const Downloader = require('./node_modules/puppeteer/utils/ChromiumDownloader');
  const platform = Downloader.currentPlatform();
  
  ncp(`./node_modules/puppeteer/.local-chromium/${platform}-${revision}/chrome-${platform}`, './chrome', function (err) {
   if (err) { 
     return console.error(err);
   }
   console.log('done!');
  });
});