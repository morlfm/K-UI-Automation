
class RegisterPet {

  CommonElements= {
    registerBtn:() => cy.get('[href="/my_pet_registrations"]').eq(1),
    newPetBtn:()  => cy.get('[href="/my_pet_registrations/new"]'),
    registerMessage:() => cy.get('.text-center.pt-2'),
    petName:() => cy.get('#my_pet_registration_pet_name'),
    petOwner:() => cy.get('#my_pet_registration_pet_owner'),
    petColor:() => cy.get('#my_pet_registration_color'),
    petAge:() => cy.get('#my_pet_registration_age'),
    petDescription:() => cy.get('#my_pet_registration_description'),
    specieDog:() => cy.get('#my_pet_registration_species_dog'),
    petVaccinationStatus:() => cy.get('[name="my_pet_registration[vaccination_status]"]'),
    petMembership:() => cy.get('#my_pet_registration_membership'),
    service:() => cy.get('[type="checkbox"]'),
    serviceWalk:() => cy.get('#my_pet_registration_services_walk'),
    serviceSpa:() => cy.get('#my_pet_registration_services_spa'),
    register:() => cy.get('[value=Register]'),
    table:() => cy.get('.table'),
    delete:() => cy.get('.btn-danger'),
    deleteMessage:() => cy.get('Delete registration'),
    deleteMessageConfirmation:() => cy.get('Are you sure?')
  };

  registerPet() {
    cy.fixture('../fixtures/env/prod/general_data.json').then((data) => {
      this.CommonElements.registerBtn().click();
      this.CommonElements.newPetBtn().click();
      this.CommonElements.registerMessage().should('contain', 'New Pet registration');
      this.CommonElements.petOwner().type(data.users.name[0]+Math.floor(Math.random() * 1000));
      this.CommonElements.petName().type(data.pets.name[0]+Math.floor(Math.random() * 1000));
      this.CommonElements.petColor().select('brown');
      this.CommonElements.petAge().type('2');
      this.CommonElements.petDescription().type(
        'Lili is a very sweet dog please take of her!');
      this.CommonElements.specieDog().click();
      this.CommonElements.petVaccinationStatus().select('true');
      this.CommonElements.petMembership().select('false');
      this.CommonElements.service().check('bath');
      this.CommonElements.service().check('walk');
      this.CommonElements.service().check('spa');
      this.CommonElements.register().click();
    });
  }
  validateRegisterPet() {
    cy.contains('My pet registration was successfully created.');
    cy.visit('/my_pet_registrations');
    this.CommonElements.table().should('contain', 'Fido'); 
  }

  invalidRegisterPet() {
    cy.fixture('../fixtures/env/prod/general_data.json').then((data) => {
      this.CommonElements.registerBtn().click();
      this.CommonElements.newPetBtn().click();
      this.CommonElements.registerMessage().should('contain', 'New Pet registration');
      this.CommonElements.petOwner().type(data.users.name[0]+Math.floor(Math.random() * 100));
      this.CommonElements.petName().type('Niko Spencer');
      this.CommonElements.petColor().select('brown');
      this.CommonElements.petAge().type('2');
      this.CommonElements.petDescription().type('...');
      this.CommonElements.specieDog().click();
      this.CommonElements.petVaccinationStatus().select('true');
      this.CommonElements.petMembership().select('false');
      this.CommonElements.service().check('bath');
      this.CommonElements.service().check('walk');
      this.CommonElements.service().check('spa');
      this.CommonElements.register().click();
    });
  }
  
  deletePet() {
    cy.visit('/my_pet_registrations');
    this.CommonElements.table().should('contain', 'Fido');
    cy.get("tr")
      .eq(2)
      .find("a")
      .then(($link) => {
        cy.visit($link.attr("href"));
        this.CommonElements.delete().click();
        cy.on('window:alert', (str) => {
          expect(str).to.equal('Are you sure?');
        });
        cy.contains('My pet registration was successfully destroyed.');
      }); 
  }
}

module.exports = new RegisterPet();

