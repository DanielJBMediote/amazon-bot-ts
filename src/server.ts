import webdriver from 'selenium-webdriver';

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://google.com/')