import HomePage from '../../../../support/pageObjects/HomePage'
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


const homePage = new HomePage()


Given('I navigate to Pokerstars Sports Homepage', ()=>
{
    //inserted as temporal solution
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit(Cypress.env('base_url'))
})

When('I click on the first bet selection under Popular',()=>
{
    homePage.getFirstBetSelection().click()

})

Then('the bet selection is added to the bet slip',()=>
{
    homePage.getBetslipicon().click()
    homePage.getBetslipSelection().should('be.visible')
    
})

When('I click on delete button',()=>
{
    homePage.getBetslipDeleteButton().click()
})

Then('the betslip is empty',()=>
{
    homePage.getBetslip().should('be.visible')

}) 