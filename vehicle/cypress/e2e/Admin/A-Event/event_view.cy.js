describe('User Dashboard Interaction', () => {
    it('should login, view car, return, and logout', () => {
      // Step 1: Visit login and authenticate
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="email"]').type('musfir@admin.com');
      cy.get('input[name="password"]').type('musfir');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Wait for dashboard to load and validate
      cy.url().should('not.include', '/admin-dashboard');
      cy.contains('Car').should('exist');

  
      // Step 3: Click on Car
      cy.contains('Event').click();
      cy.url().should('include', '/admin'); // assumes /view is car listing
  
      // Optional: Assert something on the Car page
      cy.contains('Event').should('exist');
  
      // Step 4: Simulate back navigation
      cy.go('back');
      cy.url().should('include', '/admin-dashboard'); // or wherever the dashboard is
  
      // Step 5: Click Logout button (assuming it exists)
      cy.contains('Logout').click();
  
      // Final check: Ensure it returns to login or home page
      cy.url().should('include', '/');
    });
  });
  