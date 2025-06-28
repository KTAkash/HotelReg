describe('Admin - Food Update Flow', () => {
  it('logs in, updates a food item, and verifies the update', () => {
    // Step 1: Login as Admin
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('musfir@admin.com');
    cy.get('input[name="password"]').type('musfir');
    cy.get('button[type="submit"]').click();

    // Step 2: Navigate to Manage Food page
    cy.contains('Food').click();
    cy.url().should('include', '/manage-food');
    cy.contains('Manage Food').should('exist');

    // Step 3: Click on the first "Update" button (ensure there's at least one food)
    cy.get('button.update').first().click();

    // Step 4: On the Update page, edit name and price
    cy.url().should('include', '/update');
    cy.get('input[name="name"]')
      .clear()
      .type('Updated Food Name');
    cy.get('input[name="price"]')
      .clear()
      .type('123.45');
          cy.get('input[type="file"]').selectFile('cypress/fixtures/OIP.jpg'); // Ensure the file exists

      // Simulate image upload if required (assuming file input exists)
      const imagePath = 'OIP.jpg'; // Put this file inside /cypress/fixtures/
      cy.get('input[type="file"]').attachFile(imagePath);


    // Step 5: Click Save button
      cy.get('button[type="button"]').click();

    // Step 6: Verify update was successful
    cy.url().should('include', '/manage-food');
    cy.contains('Updated Food Name').should('exist');
    cy.contains('123.45').should('exist');

    // Step 7: Logout
    cy.contains('Logout').click();
    cy.url().should('include', '/');
  });
});
