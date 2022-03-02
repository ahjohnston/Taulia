const path = require('path');
var SRC = path.join(__dirname, '/client/src')
var DIST = path.join(__dirname, '/client/dist')

module.exports = {
  mode: 'development',
  entry: `${SRC}/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${DIST}`,
  }
};