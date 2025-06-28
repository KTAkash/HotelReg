describe('User Dashboard Interaction', () => {
    it('should login, view car, return, and logout', () => {
      // Step 1: Visit login and authenticate
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="email"]').type('john.clark@example.com');
      cy.get('input[name="password"]').type('Password123!');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Wait for dashboard to load and validate
      cy.url().should('not.include', '/login');
      cy.contains('Car').should('exist');
  
      // Step 3: Click on Car
      cy.contains('Employees').click();
      cy.url().should('include', '/empview'); // assumes /view is car listing
  
      // Optional: Assert something on the Car page
      cy.contains('Employee').should('exist');
  
      // Step 4: Simulate back navigation
      cy.go('back');
      cy.url().should('include', '/user-dashboard'); // or wherever the dashboard is
  
      // Step 5: Click Logout button (assuming it exists)
      cy.contains('Logout').click();
  
      // Final check: Ensure it returns to login or home page
      cy.url().should('include', '/');
    });
  });
  