const {By, Key, Builder} = require('selenium-webdriver')
require('chromedriver')

let driver = new Builder().forBrowser("chrome").build()
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver
    }

    async goUrl(url) {
        await driver.get(url)
    }

    async writeTextById(id, text){
        await driver.findElement(By.id(id)).sendKeys(text)
    }

    async clickById(id){
        await driver.findElement(By.id(id)).click()
    }

    async writeTextByName(name, text){
        await driver.findElement(By.name(name)).sendKeys(text)
    }

    async closeDriver(){
        await driver.quit()
    }
}

module.exports = BasePage