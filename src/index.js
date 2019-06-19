/* Nameless constructor: */

var Nameless

var Nameless = {
  createElement: require('./createElement')
}

if (typeof window !== 'undefined') {
  window.nameless = Nameless;
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Nameless;
}
