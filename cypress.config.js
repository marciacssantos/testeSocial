const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qateste1--lojamodess.myvtex.com/',
    experimentalModifyObstructiveThirdPartyCode: true
  },
  fixturesFolder: false,
});
