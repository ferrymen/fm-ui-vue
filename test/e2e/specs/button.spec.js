// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {
  'Button e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    console.log(browser.url)

    browser
      .url(devServer)
      .waitForElementVisible('#root', 5000)
      .assert.containsText('button', 'Hello Button!')
      // .assert.buttonClick('button', 1)
      .end();
  }
}