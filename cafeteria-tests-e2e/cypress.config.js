const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    baseUrl: 'http://localhost:8080',
    supportFile: 'cypress/support/e2e.js',
    screenshotOnRunFailure: true,
    video: true,
  },
});