class HomePage
{

getAZMenu()
{
    return cy.get('#toggle')
}

getDartsSport()
{
    return cy.get('#extendedMenu__listItem__darts')

}

getFirstBetSelection()
{
    return cy.get('.button__bet__odds:first')
}

getBetslipicon()
{
    return cy.get('.icon-betslip')
}

getBetslip()
{
    return cy.contains("Bet Slip (0)")
    //cy.get('[class="horizontalMenu__link__counter singleBetsCounter"]')
}

getBetslipDeleteButton()
{
    return cy.get('.remove > .icon-remove')
}

getBetslipSelection()
{
    return cy.get('[class="selection__name"]')
}


}

export default HomePage;