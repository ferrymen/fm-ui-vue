// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = function (selector, expected) {
  this.message = 'Testing if element <' + selector + '>'
  this.expected = expected

  this.pass = function (val) {
    return val === this.expected
  }
  this.value = function (res) {
    return res.value
  }
  this.command = function (cb) {
    const self = this
    return this.api.execute(function (selector2Button) {
      return document.querySelectorAll(selector2Button).length
    }, [selector], function (res) {
      cb.call(self, res)
    })
  }
}