describe('Login to TM Digital Website', () => {
    it('Login as SuperAdmin', () => {
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
    });

    it('Login as Admin', () => {
        cy.visit('/login', {
            auth: {
                username: "wgs",
                password: "25K9v47BU52NpegG",
            }
        })
        cy.get('[name="email"]').type('haris.abdullah@wgs-id.com');
        cy.get('[name="password"]').type('satuduatiga123');
        cy.get('.btn.btn-primary.btn-user.px-5').click();
        cy.contains('Traceability Matrix').should('be.visible');
    })
})