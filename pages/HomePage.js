const { By } = require('selenium-webdriver')
const BasePage = require('./BasePage')

class HomePage extends BasePage {
    constructor(driver) {
        super(driver)
        this.byDropDownOrigem = By.name('fromPort')
        this.byDropDownDestino = By.name('toPort')
        this.btnBuscar = By.css('input.btn.btn-primary')
    }
    async selecionarOrigemDestinoVoo(origem, destino) {
        // Selecionar a cidade de Origem
        let dropDownOrigem = await this.driver.findElement(this.byDropDownOrigem)
        await dropDownOrigem.findElement(By.css('[value=`${origem}`]')).click()
        
        // Selecionar a cidade de Destino
        let dropDownDestino = await this.driver.findElement(this.byDropDownDestino)
        await dropDownDestino.findElement(By.css('[value=`${destino}`]')).click()

        // Clicar no botão Find Flights
        await this.driver.findElement(this.btnBuscar).click()
    }
}

module.exports = HomePage