describe('Signup Page', () => {
    it('should fill and submit the signup form with mock data', () => {
      cy.visit('http://localhost:3000/signup');
  
      // Fill in form fields with mock data
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john.clark@example.com');
      cy.get('input[name="password"]').type('Password123!');
      cy.get('input[name="confirmPassword"]').type('Password123!');
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Confirm that a success toast appears (optional)
      cy.contains('Signup successful!').should('exist');
    });
  });
  