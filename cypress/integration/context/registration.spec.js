import r from '../../support/commons/elements';
import commons from '../../support/commons/utils';

describe('Registration', () => {
  beforeEach(() => {
    commons.visitPage('/');
  });

  it('should register a new dog within 3 services', () => {
    r.registerPet();
    r.validateRegisterPet();
  });

  it('should not register a new pet due to wrong input', () => {
    r.invalidRegisterPet();
    cy.contains('Pet name has already been taken');
    cy.contains('Pet description is too short (minimum is 10 characters)');
  });

  it('should delete my pet', () => {
    r.deletePet();
  });
});
