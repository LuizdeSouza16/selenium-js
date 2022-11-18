const HomePage = require('../support/page/homepage')

describe('Describe', function(){
    beforeEach(function(){

    })

    it('Search on google' , async function(){
        let searchString = "Automation testing with selenium and JS"

        await HomePage.goUrl("https://google.com.br")
        await HomePage.searchText(searchString)
    
    })

    afterEach(async function(){
        await HomePage.closeDriver();
    })
})
