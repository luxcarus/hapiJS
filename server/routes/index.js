const gate = require('./gate')
const static = require('./static')
module.exports = {
  index: gate.index,
  signin: gate.signin,
  static: static.static
}