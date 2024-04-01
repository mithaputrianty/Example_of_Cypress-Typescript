import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User access Cura Healthcare website', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
})

When('User enter valid username and password', () => {
    cy.get('[id="txt-username"]').type('John Doe');
    cy.get('[id="txt-password"]').type('ThisIsNotAPassword');
})

And('User click Login button on Cura Login page', () => {
    cy.get('[id="btn-login"]').click();
})

Then('User redirect to Appointment page', () => {
    cy.contains('Make Appointment').should('be.visible');
    cy.contains('Book Appointment').should('be.visible');
})