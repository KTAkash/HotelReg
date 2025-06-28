describe('Admin - Delete Room Functionality', () => {
  it('logs in, navigates to rooms, deletes a room, and confirms deletion', () => {
    // Step 1: Login as admin
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('musfir@admin.com');
    cy.get('input[name="password"]').type('musfir');
    cy.get('button[type="submit"]').click();

    // Step 2: Navigate to Rooms page
    cy.contains('Rooms').click();
    cy.url().should('include', '/view-rooms');

    // Step 3: Find the room to delete (e.g., "Test room 1") and click its Delete button
    cy.contains('Test room 1')
      .parent('tr') // Go to the row that contains the room
      .within(() => {
        cy.contains('Delete').click();
      });

    // Step 4: Confirm room no longer appears in list
    cy.contains('Test room 1').should('not.exist');

    // Step 5: Logout
    cy.contains('Logout').click();
    cy.url().should('include', '/');
  });
});
