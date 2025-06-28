// cypress/e2e/vehicle_spec.cy.js
/// <reference types="cypress" />

describe('Vehicle Management Page', () => {
    it('should load the Vehicle page successfully', () => {
      cy.visit('http://localhost:3000/signup'); // replace with your actual local URL
      cy.contains('Signup').should('exist');    // update this to match a label/text on your page
    });
  });
  
  