require 'selenium-webdriver'
require 'pry'
require 'os'

# binding.pry
base = Dir.pwd + '/chrome-driver'
if OS.mac?
  ENV['PATH'] += "#{File::PATH_SEPARATOR}#{base}/mac"
  Selenium::WebDriver::Chrome.path = "#{Dir.pwd}/chrome/Chromium.app/Contents/MacOS/Chromium"
elsif OS.linux?
  ENV['PATH'] += "#{File::PATH_SEPARATOR}#{base}/linux"
  Selenium::WebDriver::Chrome.path = "#{Dir.pwd}/chrome/chrome"
elsif OS.windows?
  ENV['PATH'] += "#{File::PATH_SEPARATOR}#{base}/windows"
end

# options = Selenium::WebDriver::Chrome::Options.new()
options = Selenium::WebDriver::Chrome::Options.new(args: ['headless'])

driver = Selenium::WebDriver.for(:chrome, options: options)

driver.get('http://stackoverflow.com/')

puts driver.title

driver.quit