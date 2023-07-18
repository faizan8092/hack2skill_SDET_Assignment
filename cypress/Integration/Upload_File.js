
// Uploading a flie from fixture

describe('Try to upload a file', () => {
    const routes = "upload"
   
    it('Trying to upload a file', () => {
        // visiting to url
        cy.visit(`/${routes}`);
        // uploading file from fixture
        cy.fixture('sample.pdf', { encoding: null }).as('myFixture')
        cy.get("#file-upload").selectFile('@myFixture');
        // // Click on upload button
        cy.get("#file-submit").click();
        // // Asserting name of file is avlaible after uploading file
        cy.get("#uploaded-files").contains("sample.pdf")
    });
});