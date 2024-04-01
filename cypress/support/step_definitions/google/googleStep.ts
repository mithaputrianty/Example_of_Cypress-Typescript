import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('User open Google page', () => {
    cy.visit(url)
})

Then('User see {string} in the title', (title) => {
    cy.title().should('include', title)
})