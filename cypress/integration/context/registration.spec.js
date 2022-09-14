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

  it('should delete my pet', () => {
    r.deletePet();
  });
});
