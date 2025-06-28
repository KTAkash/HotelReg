describe('Post New Event', () => {
    it('It should allow admin to post a new event', () => {
      // Step 1: Login as Admin
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="email"]').type('musfir@admin.com');
      cy.get('input[name="password"]').type('musfir');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Navigate to Car listing (assuming link text is 'Car')
      cy.contains('Employee').click();
      cy.url().should('include', '/Edash');
  
      // Step 3: Verify car listing exists
      cy.contains('Employee').should('exist'); // Adjust as needed
  
      // Step 4: Click hamburger menu in header
      cy.get('[data-testid="hamburger-menu"]').click(); // Replace with actual selector if different
  
      // Step 5: Click "Post Car" button
      cy.contains('Post New Employee').click(); // Or use data-testid if you use one
  
      // Step 6: Fill mock data and submit form
      cy.get('input[name="name"]').type('Test Employee');
      cy.get('input[name="email"]').type('test@email.com');
    cy.get('input[name="phone"]').type('0123456789');
          cy.get('input[name="department"]').type('test department');


      // Simulate image upload if required (assuming file input exists)
      
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Step 7: Confirm new car is added to list (use actual car name if available after submission)
      cy.contains('Test Employee').should('exist');
        cy.get('[data-testid="hamburger-menu"]').click(); // Replace with actual selector if different

      // Step 8: Logout
      cy.contains('Logout').click();
      cy.url().should('include', '/'); // or '/' depending on redirect
    });
  });
  