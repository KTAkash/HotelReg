describe('Admin - Update Existing Car', () => {
    it('logs in, finds Test Car, edits and saves updated data', () => {
      // Step 1: Login
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="email"]').type('musfir@admin.com');
      cy.get('input[name="password"]').type('musfir');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Go to Car section
      cy.contains('Event').click();
      cy.url().should('include', '/admin');
  
      // Step 3: Find the Test Car and click its Edit button
      cy.contains( 'td','Test Event')
      .parent('tr')
        .within(() => {
          cy.contains('Update').click(); // Change selector if needed
        });
  
      // Step 4: Update form fields
      cy.get('input[name="eventName"]').clear().type('Test Event');
      cy.get('input[name="price"]').clear().type('2000');
  
      // Step 5: Submit the form
      cy.get('button[type="submit"]').click();
  
      // Step 6: Verify update on the listing
      cy.contains('Update').should('exist');
      cy.contains('2000').should('exist');
  
      // Step 7: Logout
      cy.contains('Logout').click();
      cy.url().should('include', '/');
    });
  });
  