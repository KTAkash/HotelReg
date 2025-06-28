describe('Admin - Update Existing Car', () => {
    it('logs in, finds Test Car, edits and saves updated data', () => {
      // Step 1: Login
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="email"]').type('musfir@admin.com');
      cy.get('input[name="password"]').type('musfir');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Go to Car section
      cy.contains('Car').click();
      cy.url().should('include', '/dashboard');
  
      // Step 3: Find the Test Car and click its Edit button
      cy.contains('.car-card', 'Test Car')
        .within(() => {
          cy.contains('Update').click(); // Change selector if needed
        });
  
      // Step 4: Update form fields
      cy.get('input[name="name"]').clear().type('Test Car Updated');
      cy.get('input[name="price"]').clear().type('27000');
      cy.get('textarea[name="description"]').clear().type('Updated description for test');
  
      // Step 5: Submit the form
      cy.get('button[type="submit"]').click();
  
      // Step 6: Verify update on the listing
      cy.contains('Update').should('exist');
      cy.contains('27000').should('exist');
      cy.contains('Updated description for test').should('exist');
  
      // Step 7: Logout
      cy.contains('Logout').click();
      cy.url().should('include', '/');
    });
  });
  