
// Access http://the-internet.herokuapp.com/broken_images, validate
// if there are broken images.


describe('Validate broken images', () => {
    it('Checks for broken images', () => {
     
    const routes = "broken_images"
 // To Visit The Url
    cy.visit(`/${routes}`)
  
// To Find all elements on webpage
      cy.get('img').each((img) => {
// Load the image and verify if it is broken or not
        cy.request({
          url: img.prop('src'),
          failOnStatusCode: false,
        }).then((response) => {
// print image link if image loading is failed
          if (response.status >= 400) {
            cy.log(`Broken image url: ${img.prop('src')}`);
          }
        });
      });
    });
  });