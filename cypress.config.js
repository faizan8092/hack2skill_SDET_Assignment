const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  on('file:preprocessor', cucumber())
  // implement node event listeners here
  return config;
}


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    //Provided path of your scripts

    //use this 'specPattern' for normal file
    specPattern:'cypress/Integration/**/*.js',

    // use this 'specPattern' when running BDD 
    // specPattern:'cypress/UAT/features/*.{js,feature}',

    // U AND U SE THIS BASE URL AS "/" AS A PATH ANYWHERE IN THIS PACKAGE
    baseUrl:"http://the-internet.herokuapp.com/"  
  },
  chromeWebSecurity:false
});
