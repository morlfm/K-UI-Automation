
class Commons { 
  page = 'https://sdet-challenge.herokuapp.com';
  
  visitPage(page) { 
    cy.visit(page);
    cy.url().should('include', page);
  }
} 

export default new Commons();