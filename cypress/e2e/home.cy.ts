// cypress/e2e/form.spec.ts
describe('Form Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render all elements correctly', () => {
    cy.visit('/');
    cy.wait(2000);
  
    cy.get('h2').should('contain.text', 'Inscreva-se em nossa newsletter.');
    cy.get('input#name').should('be.visible');
    cy.get('input#email').should('be.visible');
    cy.get('input#phone').should('be.visible');
    cy.get('input#company').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should show success message and redirect on valid form submission', () => {
    cy.get('input#name').type('João Silva');
    cy.get('input#email').type('joao.silva@example.com');
    cy.get('input#phone').type('(11) 9 1234-5678');
    cy.get('input#company').type('Empresa XYZ');
    cy.get('button[type="submit"]').click();
    cy.get('.text-white').should('contain.text', 'Inscrição realizada com sucesso!');
    cy.wait(2000);
    cy.url().should('include', '/finish');
  });

});
