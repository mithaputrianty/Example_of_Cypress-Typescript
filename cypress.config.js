const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
          ...browserify.defaultOptions,
          typescript: require.resolve('typescript'),
      };
      on('file:preprocessor', cucumber(options));
    },
    //baseUrl: "https://tmdigital.stagingapps.net",
    baseUrl: "https://google.com",
    "specPattern": "**/*.feature",
    "excludeSpecPattern": ["namadirektori_tempat_file_stepdefinition/*.ts"]
  },
});
