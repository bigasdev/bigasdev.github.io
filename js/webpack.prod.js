const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: '_bundle.js',
    path: path.resolve(__dirname),
  },
};