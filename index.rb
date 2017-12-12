require 'selenium-webdriver'
require 'pry'
require 'os'

# binding.pry
base = Dir.pwd + '/chrome-driver'
if OS.mac?
  ENV['PATH'] += "#{File::PATH_SEPARATOR}#{base}/mac"
elsif OS.linux?
  ENV['PATH'] += "#{File::PATH_SEPARATOR}#{base}/linux"
elsif OS.windows?
  ENV['PATH'] += "#{File::PATH_SEPARATOR}#{base}/windows"
end

binding.pry

options = Selenium::WebDriver::Chrome::Options.new()
# options = Selenium::WebDriver::Chrome::Options.new(args: ['headless'])

driver = Selenium::WebDriver.for(:chrome, options: options)

driver.get('http://stackoverflow.com/')

puts driver.title

driver.quit