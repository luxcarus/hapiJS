const test = require('./test')
const gate = require('./gate')
const static = require('./static')
// const sales = require('./sales')
module.exports = {
  test: test.index,
  index: gate.index,
  signin: gate.signin,
  static: static.static
  // sales: sales.enter
}