const {Key} = require('selenium-webdriver')
const BasePage = require('../page/basepage')

class HomePage extends BasePage 
{
    async enterUrl(url){
        await this.goUrl(url)
    }

    async searchText(text){
        let searchFieldName = 'q'
        await this.writeTextByName(searchFieldName, text)
        await this.writeTextByName(searchFieldName, Key.RETURN)
    }

}

module.exports = new HomePage();
