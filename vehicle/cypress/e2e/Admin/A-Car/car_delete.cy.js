describe('Admin - Car Delete Flow', () => {
  it('logs in, deletes a car, and confirms deletion', () => {
    // Step 1: Login
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('musfir@admin.com');
    cy.get('input[name="password"]').type('musfir');
    cy.get('button[type="submit"]').click();

    // Step 2: Navigate to Car Dashboard
    cy.contains('Car').click();
    cy.url().should('include', '/dashboard');

    // Step 3: Confirm at least one car exists before deletion
    cy.get('.car-card').should('exist');

    // Step 4: Get the first car name for confirmation
    cy.get('.car-card').first().within(() => {
      cy.get('h3').invoke('text').as('carNameToDelete'); // Store name for verification
      cy.contains('Delete').click();
    });

    // Step 5: Wait for deletion to complete and confirm car is removed
    cy.get('@carNameToDelete').then((carName) => {
      cy.contains(carName).should('not.exist');
    });

    // Optional: Logout
    cy.contains('Logout').click();
    cy.url().should('include', '/');
  });
});
