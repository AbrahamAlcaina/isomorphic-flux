// try to improve the performance.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('react/dist/react.min.js');
} else {
  module.exports = require('react/dist/react.js');
}
