/// <reference types="Cypress" />

import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pageObjects/HomePage'
import DartsPage from '../../../../support/pageObjects/DartsPage'


const homePage = new HomePage()
var dartsPage = new DartsPage()


Given('I navigate to Pokerstars Sports Homepage',()=>
{
    //inserted as temporal solution
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit(Cypress.env('base_url'))

})


And('I navigate to Darts',()=>
{
    homePage.getAZMenu().click()
    homePage.getDartsSport().click()

})


When('I click on first event',()=>
{

    //Listening to getEvent call.
    cy.intercept('GET', '**/sportsbook/v1/api/*').as('getEvent')

    dartsPage.getFirstEvent().click()

})

Then('a get request is made to the request URL',()=>
{    

cy.wait('@getEvent').its('response.statusCode').should('eq', 200)

})

