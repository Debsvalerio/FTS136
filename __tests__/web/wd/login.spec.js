const { Builder, By } = require('selenium-webdriver')
require('chromedriver')
const assert = require('assert')

describe('Login', async function () {
    let driver

    beforeEach(async function () {
        driver = await new Builder()            // Instancia o Selenium WebDriver (faz ele ligar)
             .forBrowser('chrome')              // seleciona o driver para Chrome
             .build()                           // executa operação
        driver.manage().setTimeouts({implicit: 60000})
        driver.manage().window().maximize()
    })

    afterEach(async function() {
        await driver.quit()
    })

    it('Testando Login', async function() {
        await driver.get('https://www.blazedemo.com')
        await driver.findElement(By.LinkText('home')).click()
        
        //Validar pra ver se entrou realmente na pagina de login
        assert(await driver.findElement(By.css('div.panel-heading')).getText() == 'Login')

        await driver.findElement(By.id('email')).sendKeys('test@teste.com.br')
       
    })
})