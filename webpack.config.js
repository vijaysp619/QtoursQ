const path = require('path');

module.exports = {
    mode: 'development',
  entry: {
    index: path.resolve(__dirname, './public/js/index.js')
 },
 output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.js'
 }

};

