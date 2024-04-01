describe('User Management in TM Digital Website', () => {
    it ('Add new Admin', () => {
        //Login
        cy.visit('/login', {
            auth: {
                username: "wgs",
                password: "25K9v47BU52NpegG",
            }
        })
        cy.get('[name="email"]').type('superadmin@gmail.com');
        cy.get('[name="password"]').type('superadmin');
        cy.get('.btn.btn-primary.btn-user.px-5').click();
        cy.contains('Traceability Matrix').should('be.visible');

        //Add user
        cy.get('.icon-ic_user-thin.sz-24').click();
        cy.contains('User Management').should('be.visible');
        cy.get('.btn-add.btn-add-user.btn-primary.text-bold.text-white').click();
        cy.get('#staticBackdropLabel').should('be.visible');
        cy.get('#newUser_name').type('Mitha chekcing Cypress');
        cy.get('#newUser_username').type('mithaccc');
        cy.get('#newUser_email').type('mithaccc@mailinator.com');
    })
})