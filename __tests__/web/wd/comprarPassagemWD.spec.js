// Bibliotecas
const{Builder, By} = require('selenium-webdriver')
require('chromedriver')
const assert = require('assert')

// Suite de Testes
describe("Comprar Passagem WD", () => {
    let driver
// Inicialização
    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build()
        driver.manage().setTimeouts({implicit: 60000})
        driver.manage().window().maximize()
    })

// Finalização
    afterEach(async () => {
        await driver.quit()
    })

// Teste
    it("Comprar Passagem SP - Dublin", async () => {
        await driver.get('https://blazedemo.com')
        {
            const dropdown = await driver.findElement(By.name('fromPort'))
            await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
        }
        {
            const dropdown = await driver.findElement(By.name('toPort'))
            await dropdown.findElement(By.xpath("//option[. = 'Dublin']")).click()
        }
        // Clicar no botão Find Flights (Procurar Voos)
        await driver.findElement(By.css('input.btn.btn-primary')).click()

        // Validar o título da guia e a frase de titulo da seleção de voos
        
        assert(await driver.getTitle() == 'BlazeDemo - reserve')
        assert(await driver.findElement(By.xpath('//h3')).getText() == 'Flights from São Paolo to Dublin:')
    })
})