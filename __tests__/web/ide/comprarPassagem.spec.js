// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
require('chromedriver') // Não foi gerado automaticamente

describe('Comprar_Passagem', function() {
  //this.timeout(30000)     // espera implicita 
  let driver              // objeto do Selenium WebDriver
  let vars                // lista para guardar variáveis e informações

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build() // Instancia objeto Selenium WebDriver para controlar o Chrome Driver
    driver.manage().setTimeouts({implicit: 60000}) // Define a espera
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();  // Destroi o objeto do Selenium WebDriver
  })
  it('Comprar_Passagem', async function() {
    await driver.get("https://www.blazedemo.com/")  // abre o site alvo - SUT: Software Under Test
    await driver.manage().window().setRect({ width: 1936, height: 1056 })
    await driver.findElement(By.name("fromPort")).click()
    {
      const dropdown = await driver.findElement(By.name("fromPort"))
      await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
    }
    await driver.findElement(By.name("toPort")).click()
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'Dublin']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click()
    await driver.findElement(By.id("inputName")).click()
    await driver.findElement(By.id("inputName")).sendKeys("Juca Pato")
    await driver.findElement(By.id("state")).click()
    await driver.findElement(By.id("state")).sendKeys("SP")
    await driver.findElement(By.id("zipCode")).click()
    await driver.findElement(By.id("zipCode")).sendKeys("12345")
    await driver.findElement(By.id("cardType")).click()
    {
      const dropdown = await driver.findElement(By.id("cardType"))
      await dropdown.findElement(By.xpath("//option[. = 'American Express']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click() // Clica no botão comprar
    assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!") // Valida a mensagem de agradecimento
    assert(await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).getText() == "555 USD")  // Valida o preço da passagem
  })
})
