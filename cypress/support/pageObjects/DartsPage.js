class DartsPage
{
    
    

getFirstEvent()
{
    return cy.get('.event-schedule-participants-name').first()
}


}

export default DartsPage;