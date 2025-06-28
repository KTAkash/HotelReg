describe('Admin - Car Post and Listing Flow', () => {
    it('logs in, views cars, posts a new car, and logs out', () => {
      // Step 1: Login as Admin
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="email"]').type('musfir@admin.com');
      cy.get('input[name="password"]').type('musfir');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Navigate to Car listing (assuming link text is 'Car')
      cy.contains('Car').click();
      cy.url().should('include', '/dashboard');
  
      // Step 3: Verify car listing exists
      cy.contains('Color').should('exist'); // Adjust as needed
      cy.get('.car-card').should('exist');
  
      // Step 4: Click hamburger menu in header
      cy.get('[data-testid="hamburger-menu"]').click(); // Replace with actual selector if different
  
      // Step 5: Click "Post Car" button
      cy.contains('Post New Car').click(); // Or use data-testid if you use one
  
      // Step 6: Fill mock data and submit form
      cy.get('input[name="name"]').type('Test Car');
cy.get('select[name="brandname"]').select('Toyota');
cy.get('select[name="color"]').select('Black');
cy.get('select[name="type"]').select('Hybrid');
cy.get('select[name="transmission"]').select('Automatic');
cy.get('input[name="modelyear"]').type('2024');
cy.get('input[name="price"]').type('25000');
cy.get('textarea[name="description"]').type('A great SUV for testing');
cy.get('input[type="file"]').selectFile('cypress/fixtures/test_image.jpeg'); // Ensure the file exists

      // Simulate image upload if required (assuming file input exists)
      const imagePath = 'test_image.jpeg'; // Put this file inside /cypress/fixtures/
      cy.get('input[type="file"]').attachFile(imagePath);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Step 7: Confirm new car is added to list (use actual car name if available after submission)
      cy.contains('Test Car').should('exist');
  
      // Step 8: Logout
      cy.contains('Logout').click();
      cy.url().should('include', '/'); // or '/' depending on redirect
    });
  });
  