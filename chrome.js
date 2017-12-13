const ncp = require('ncp').ncp;
const removeRecursive = require('rimraf');
const fs = require('fs');
const path = require('path');

removeRecursive('./chrome', function() {
  const revision = require('./node_modules/puppeteer/package').puppeteer.chromium_revision;
  const Downloader = require('./node_modules/puppeteer/utils/ChromiumDownloader');
  const platform = Downloader.currentPlatform();
  
  ncp(`./node_modules/puppeteer/.local-chromium/${platform}-${revision}/chrome-${platform}`, './chrome', function (err) {
   if (err) { 
     return console.error(err);
   }
   if (platform === 'linux') {
     fs.symlink(path.join(__dirname, 'chrome', 'chrome'), path.join('/usr/bin', 'google-chrome'), function() {});
   }
   console.log('done');
  });
});