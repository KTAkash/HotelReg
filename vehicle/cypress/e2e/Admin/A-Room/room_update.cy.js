describe('Admin - Update Existing Car', () => {
    it('logs in, finds Test Car, edits and saves updated data', () => {
      // Step 1: Login
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="email"]').type('musfir@admin.com');
      cy.get('input[name="password"]').type('musfir');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Go to Car section
      cy.contains('Rooms').click();
      cy.url().should('include', '/view-rooms');
  
      // Step 3: Find the Test Car and click its Edit button
      cy.contains( 'td','Test room')
      .parent('tr')
        .within(() => {
          cy.contains('Update').click(); // Change selector if needed
        });
  
      // Step 4: Update form fields
      cy.get('input[name="name"]').clear().type('Test room 1');
      cy.get('input[name="capacity"]').clear().type('3');
      cy.get('input[name="price"]').clear().type('1500');
  
      // Step 5: Submit the form
      cy.get('button[type="submit"]').click();
  
      // Step 6: Verify update on the listing
      cy.contains('Update').should('exist');
      cy.contains('1000').should('exist');
  
      // Step 7: Logout
      cy.contains('Logout').click();
      cy.url().should('include', '/');
    });
  });
  