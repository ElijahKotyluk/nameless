/* Nameless constructor: */

var Nameless

var Nameless = {
  createElement: require('./createElement')
}

if (typeof window !== 'undefined') {
  window.nameless = nameless;
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = nameless;
}
