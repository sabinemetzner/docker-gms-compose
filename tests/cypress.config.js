const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.CYPRESS_baseUrl || 'http://localhost:8080',
    chromeWebSecurity: false,
    video: true,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: true,
  },
});
