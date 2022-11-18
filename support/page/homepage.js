const {Key} = require('selenium-webdriver')
const BasePage = require('./BasePage')

//Seletores
let searchFieldByName = 'q'


class HomePage extends BasePage 
{
    async enterUrl(url){
        await this.goUrl(url)
    }

    async searchText(text){
        await this.writeTextByName(searchFieldByName, text)
        await this.writeTextByName(searchFieldByName, Key.RETURN)
    }

}

module.exports = new HomePage();
