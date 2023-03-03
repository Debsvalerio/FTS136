import { Given, When, Then, Before } from "@cucumber/cucumber"
import {Builder} from "selenium-webdriver"
require("chromedriver")
import { assert } from "chai"
import HomePage = require("../../pages/HomePage")

Before(async function () {
    this.driver = await new Builder().forBrowser('chrome').build()
    this.driver.manage().setTimeouts({ implicit: 60000})
    this.driver.manage().window().maximize()
})

         Given('acesso o site BlazeDemo', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         When('seleciono origem como {string} e destino como {string}', function (string, string2) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Then('exibe o titulo da guia como {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Then('exibe', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });