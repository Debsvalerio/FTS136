const { Builder, By, Key } = require('selenium-webdriver')
require('chromedriver')
const assert = require('assert')
const fsp = require('fs').promises

// Funções de apoio
async function takeScreenshot(driver, file) {
    let image = await driver.takeScreenshot()
    await fsp.writeFile(file, image, 'base64')
}

describe('Login', function () {
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

        takeScreenshot(driver, 'print1 - home.png')

        await driver.findElement(By.linkText('home')).click()
        
        //Validar pra ver se entrou realmente na pagina de login
        assert(await driver.findElement(By.css('div.panel-heading')).getText() == 'Login')

        // Escreve no campo 'email'
        await driver.findElement(By.id('email')).sendKeys('test@teste.com.br')

        // escreve no campo 'senha'
        await driver.findElement(By.id('password')).sendKeys('12345678')

        // clica no botão 'login'
        await driver.findElement(By.css('button.btn.btn-primary')).click()

        // valida o texto da guia
        assert(await driver.getTitle() == 'Page Expired')

        // valida o texto da pagina
        assert(await driver.findElement(By.css('div.flex-center.position-ref.full-height')).getText() == '419\nPage Expired')
       
    })
})