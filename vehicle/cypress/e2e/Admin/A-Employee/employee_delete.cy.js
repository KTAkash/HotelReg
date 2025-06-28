describe('Admin - Delete Event Functionality', () => {
  it('logs in, navigates to rooms, deletes a room, and confirms deletion', () => {
    // Step 1: Login as admin
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('musfir@admin.com');
    cy.get('input[name="password"]').type('musfir');
    cy.get('button[type="submit"]').click();

    // Step 2: Navigate to Rooms page
    cy.contains('Employee').click();
    cy.url().should('include', '/Edash');

    // Step 3: Find the room to delete (e.g., "Test room 1") and click its Delete button
    cy.contains('Test Employee')
      .parent('tr') // Go to the row that contains the room
      .within(() => {
         cy.get('button').contains('Delete').click({ force: true }); // Add force:true to bypass visibility check
      });
     



    // Step 4: Confirm room no longer appears in list
    cy.contains('Test Employee').should('not.exist');

    // Step 5: Logout
    cy.contains('Logout').click();
    cy.url().should('include', '/');
  });
});
