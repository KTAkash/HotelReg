describe('Login Page', () => {
    it('should login successfully with valid credentials', () => {
      cy.visit('http://localhost:3000/login');
  
      // Fill in login credentials
      cy.get('input[name="email"]').type('musfir@admin.com');
      cy.get('input[name="password"]').type('musfir');
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Confirm login success — check for a route change, a welcome message, or dashboard element
      cy.url().should('not.include', '/admin-dashboard'); // assuming it navigates elsewhere on success
      cy.contains('Logout').should('exist');   // or replace with any expected text
    });
  });
  